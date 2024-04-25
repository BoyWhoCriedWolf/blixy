import { AxiosError } from "axios";
import { apiClient } from "utils/api-utils";
import { API_URLS } from "./api-urls";
import { UserInfo } from "./types/user";

export interface Credential {
  email: string;
  password: string;
}

class AuthService {
  async login(credential: Credential): Promise<UserInfo | AxiosError> {
    try {
      const response: any = await apiClient.create(API_URLS.LOGIN, credential);
      return {
        email: credential.email,
        access: response?.access ?? "",
        refresh: response?.refresh ?? "",
      } as UserInfo;
    } catch (error) {
      return error as AxiosError;
    }
  }
}

const authService = new AuthService();

export default authService;
