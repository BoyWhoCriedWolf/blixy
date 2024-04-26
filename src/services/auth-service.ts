import { AxiosError } from "axios";
import { apiClient } from "utils/api-utils";
import { API_URLS } from "./api-urls";
import { APIResponseType } from "./types/response";
import { AuthUser } from "./types/user";

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
  async login(credential: Credential): Promise<APIResponseType<AuthUser>> {
    try {
      const response: any = await apiClient.create(API_URLS.LOGIN, credential);
      return response as APIResponseType<AuthUser>;
    } catch (error) {
      const axiosError = error as AxiosError<APIResponseType>;

      if (axiosError.response?.status === 401) {
        return {
          success: false,
          code: 401,
          msg: "Unauthorized",
        } as APIResponseType;
      }

      return {
        success: false,
        code: axiosError.response?.status,
        msg: axiosError.response?.data?.msg,
      } as APIResponseType;
    }
  }

  async register(
    data: RegInfo
  ): Promise<APIResponseType<AuthUser> | AxiosError> {
    try {
      const response: any = await apiClient.create(API_URLS.REGISTER, data);
      return response as APIResponseType<AuthUser>;
    } catch (error) {
      const axiosError = error as AxiosError<APIResponseType>;
      return {
        success: false,
        code: axiosError.response?.status,
        msg: axiosError.response?.data?.msg,
      } as APIResponseType;
    }
  }
}

const authService = new AuthService();

export default authService;
