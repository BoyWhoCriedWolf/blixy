import axios, { AxiosRequestConfig } from "axios";
import { AuthUser } from "services/types/user.types";
import { setAuthIsExpired } from "store/slices/auth-slice";
import { API_BASE_URL } from "../services/api-urls";
import store from "store";
// import { api } from "../config";

axios.defaults.baseURL = API_BASE_URL;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// content type
const authUser: any = sessionStorage.getItem("authUser");
const token = JSON.parse(authUser) ? JSON.parse(authUser).access_token : null;
if (token) axios.defaults.headers.common["Authorization"] = "Bearer " + token;

// intercepting to capture errors
axios.interceptors.response.use(
  function (response: any) {
    return response.data ? response.data : response;
  },
  function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    switch (error?.response?.status) {
      // case 500:
      //   break;
      case 401:
        console.log("Expired");
        store.dispatch(setAuthIsExpired(true));
        break;
      // case 404:
      //   break;
    }
    return Promise.reject(error);
  }
);

/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (user: AuthUser) => {
  sessionStorage.setItem("authUser", JSON.stringify(user));
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + user.access_token;
};

class APIClient {
  /**
   * Fetches data from given url
   */

  //  get = (url, params) => {
  //   return axios.get(url, params);
  // };
  get = (url: any, params?: any) => {
    let response;
  
    if (params) {
      const queryParams = new URLSearchParams();
  
      for (const key in params) {
        if (Array.isArray(params[key])) {
          params[key].forEach((value: any) => {
            queryParams.append(key + '[]', value);
          });
        } else {
          queryParams.append(key, params[key]);
        }
      }
  
      const queryString = queryParams.toString();
      response = axios.get(`${url}?${queryString}`);
    } else {
      response = axios.get(`${url}`);
    }
  
    return response;
  };
  /**
   * post given data to url
   */
  post = (url: string, data: any, config?: AxiosRequestConfig<any>) => {
    return axios.post(url, data, config);
  };
  /**
   * Updates data
   */
  update = (url: any, data: any) => {
    return axios.patch(url, data);
  };

  put = (url: any, data?: any) => {
    return axios.put(url, data);
  };
  /**
   * Delete
   */
  delete = (url: any, config?: any) => {
    return axios.delete(url, { ...(config ?? {}) });
  };
}
const getLoggedinUser = () => {
  const user = sessionStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

const apiClient = new APIClient();

export { APIClient, apiClient, getLoggedinUser, setAuthorization };
