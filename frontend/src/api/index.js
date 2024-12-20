import { appConfig } from "../config";
import {
  reqAnonPost,
  reqGet,
} from "../utils/requests";

const apiBaseUrl = `${appConfig.baseApiUrl}`;

const apiCalls = {
  login: async (data) => await reqAnonPost(`${apiBaseUrl}/login/`, data),
  getMFDetails: async (params) => await reqGet(`${apiBaseUrl}/get-mf/`, params),
};

export default apiCalls;
