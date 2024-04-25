import { AxiosError } from "axios";
import { apiClient } from "utils/api-utils";
import { API_URLS } from "./api-urls";
import { UserInfo } from "./types/user";
import { APIResponseType } from "./types/response";

export interface Credential {
  email: string;
  password: string;
}

export interface RegInfo {
  email: string;
  username: string;
  password: string;
}

class AuthService {
  async login(credential: Credential): Promise<APIResponseType<UserInfo>> {
    try {
      const response: any = await apiClient.create(API_URLS.LOGIN, credential);
      return response as APIResponseType<UserInfo>;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.code === "401") {
        return {
          success: false,
          code: 401,
          msg: "Unauthorized",
        } as APIResponseType;
      }

      return {
        success: false,
        code: axiosError.code,
        msg: axiosError.message,
      } as APIResponseType;
    }
  }

  async register(
    data: RegInfo
  ): Promise<APIResponseType<UserInfo> | AxiosError> {
    try {
      const response: any = await apiClient.create(API_URLS.REGISTER, data);
      return response as APIResponseType<UserInfo>;
    } catch (error) {
      return error as AxiosError;
    }
  }
}

const authService = new AuthService();

export default authService;
