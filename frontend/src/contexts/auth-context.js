import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import jwt_decode from "jwt-decode";
import {
  getCachedAccessToken,
  setCachedAccessToken,
} from "../utils/cache";
import { useNavigate } from "react-router";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
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
    const isValid = isTokenValid(cachedAccessToken);
    if (isValid) {
      setAccessToken(cachedAccessToken);
      setIsAuthenticated(true);
    }
  }, []);

  const setIncomingAuthData = (data) => {
    const accessToken = data.access;
    if (accessToken) {
      setAccessToken(accessToken);
      setIsAuthenticated(true);
      setCachedAccessToken(accessToken);
      navigate('/')
    } else {
      console.error("Failed to get tokens and user from auth response data");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isInitialized,
        accessToken,
        setIncomingAuthData,
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
