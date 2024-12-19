import { appConfig } from "../config";
import {
  reqAnonPost,
} from "../utils/requests";

const apiBaseUrl = `${appConfig.baseApiUrl}/api/v1`;

const apiCalls = {
  login: async (data) => await reqAnonPost(`${apiBaseUrl}/sign-in/`, data),
  signup: async (data) => await reqAnonPost(`${apiBaseUrl}/sign-up/`, data),
};

export default apiCalls;
