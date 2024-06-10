import { AxiosError } from "axios";
import { apiClient } from "utils/api-utils";
import { API_URLS } from "./api-urls";
import { APIService } from "./api.service";
import { Administration } from "./types/administration.types";
import { APIResponseType } from "./types/response.types";

class AdministrationsService extends APIService<Administration> {
  async gets(): Promise<APIResponseType<Administration[]>> {
    try {
      const data = await apiClient.get(API_URLS.ADMINISTRATION_GETS);
      return data as APIResponseType<Administration[]>;
    } catch (error) {
      const axiosError = error as AxiosError<APIResponseType>;
      return {
        success: false,
        code: axiosError.response?.status,
        msg: axiosError.response?.data?.msg ?? "Network Connection Problem",
        data: [],
      } as APIResponseType;
    }
  }

  async get({
    id = "",
  }: {
    id: string;
  }): Promise<APIResponseType<Administration>> {
    try {
      const data = await apiClient.get(`${API_URLS.ADMINISTRATION_GET}/${id}`);
      return data as APIResponseType<Administration>;
    } catch (error) {
      const axiosError = error as AxiosError<APIResponseType>;
      return {
        success: false,
        code: axiosError.response?.status,
        msg: axiosError.response?.data?.msg ?? "Network Connection Problem",
      } as APIResponseType;
    }
  }

  async save({
    data,
  }: {
    data?: Administration;
  }): Promise<APIResponseType<Administration>> {
    try {
      const ret =
        data?.id === "new" || !data?.id
          ? await apiClient.post(API_URLS.ADMINISTRATION_CREATE, data)
          : await apiClient.put(
              `${API_URLS.ADMINISTRATION_UPDATE}/${data?.id}`,
              data
            );
      return ret as APIResponseType<Administration>;
    } catch (error) {
      const axiosError = error as AxiosError<APIResponseType>;
      return {
        success: false,
        code: axiosError.response?.status,
        msg: axiosError.response?.data?.msg ?? "Network Connection Problem",
      } as APIResponseType;
    }
  }

  async delete({
    id = "",
  }: {
    id?: string;
  }): Promise<APIResponseType<boolean>> {
    try {
      const ret = await apiClient.delete(
        `${API_URLS.ADMINISTRATION_DELETE}/${id}`
      );
      return ret as APIResponseType<boolean>;
    } catch (error) {
      const axiosError = error as AxiosError<APIResponseType>;
      return {
        success: false,
        code: axiosError.response?.status,
        msg: axiosError.response?.data?.msg ?? "Network Connection Problem",
      } as APIResponseType;
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AdministrationsService();
