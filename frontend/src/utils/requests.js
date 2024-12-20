import axios from "axios";

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

axios.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (error) => {
    if (error && error.response) {
      if (error.response.status === 401) {
        raiseAlerts("Unauthorised User Token");
        localStorage.removeItem("accessToken");
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }
      return Promise.reject(error.response);
    }
    return Promise.reject(error);
  }
);

const getDefaultHeaders = () => {
  return {
    "Content-Type": "application/json",
    // "ngrok-skip-browser-warning": true,
  };
};

const getAuthHeaders = () => {
  return {
    Authorization: `Bearer ${getAccessToken()}`,
    ...getDefaultHeaders(),
  };
};

const reqPost = async (url, data = {}, headers = false) => {
  try {
    if (!headers) headers = getAuthHeaders();
    const response = await axios.post(url, data, { headers });
    return response
    } catch (error) {
    return false;
  }
};

const reqAnonPost = async (url, data = {}, headers = false) => {
  try {
    if (!headers) headers = getDefaultHeaders();
    const response = await axios.post(url, data, { headers });
    return response;
  } catch (error) {
    return false;
  }
};

const reqGet = async (url, params = {}, headers = false) => {
  try {
    if (!headers) headers = getAuthHeaders();
    const response = await axios.get(url, { params, headers });
    return response;
  } catch (error) {
    return error;
  }
};

const reqAnonGet = async (url, params = {}, headers = false) => {
  try {
    if (!headers) headers = getDefaultHeaders();
    const response = await axios.get(url, { params, headers });
    return response.data;
  } catch (error) {
    return false;
  }
};

export {
  reqPost,
  reqGet,
  reqAnonPost,
  reqAnonGet,
};
