import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import jwt_decode from "jwt-decode";
import {
  getCachedUser,
  getCachedAccessToken,
  getCachedRefreshToken,
  setCachedAccessToken,
  setCachedUser,
  setCachedRefreshToken,
} from "../utils/cache";
import { useNavigate } from "react-router";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [user, setUser] = useState({});
  const navigate = useNavigate()

  const isTokenValid = (token) => {
    try {
      const decodedToken = jwt_decode(token);
      const isTokenExpired = new Date().getTime() > decodedToken.exp * 1000;
      if (isTokenExpired) {
        console.error("Token has expired");
        window.localStorage.clear();
        return false;
      }
      // Token is valid;
      return true;
    } catch (error) {
      console.error("Token verification failed:", error);
      return false;
    }
  };

  useEffect(() => {
    setIsInitialized(true);
    const cachedAccessToken = getCachedAccessToken();
    const cachedRefreshToken = getCachedRefreshToken();
    const cachedUser = getCachedUser();
    const isValid = isTokenValid(cachedAccessToken);
    if (isValid) {
      setUser(cachedUser);
      setAccessToken(cachedAccessToken);
      setRefreshToken(cachedRefreshToken);
      setIsAuthenticated(true);
    }
  }, []);

  const setIncomingAuthData = (data) => {
    const accessToken = data.access;
    const refreshToken = data.refresh;
    const user = data.user;
    if (accessToken && refreshToken && user) {
      setUser(user);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setIsAuthenticated(true);
      setCachedAccessToken(accessToken);
      setCachedRefreshToken(refreshToken);
      setCachedUser(user);
      navigate('/')
    } else {
      console.error("Failed to get tokens and user from auth response data");
    }
  };

  const updateUser = (data) => {
    setUser(data);
    setCachedUser(data);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isInitialized,
        user,
        accessToken,
        refreshToken,
        selectedRole,
        setSelectedRole,
        setIncomingAuthData,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
