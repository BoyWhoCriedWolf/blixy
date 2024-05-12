import { AxiosError } from "axios";
import { Tax } from "services/types/tax.types";
import { apiClient } from "utils/api-utils";
import { API_URLS } from "./api-urls";
import { APIService } from "./api.service";
import { APIResponseType } from "./types/response.types";

class TaxService extends APIService<Tax> {
  async gets(): Promise<APIResponseType<Tax[]>> {
    try {
      const data = await apiClient.get(API_URLS.TAX_GETS);
      return data as APIResponseType<Tax[]>;
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

  async get({ id = "" }: { id: string }): Promise<APIResponseType<Tax>> {
    try {
      const data = await apiClient.get(`${API_URLS.TAX_GET}/${id}`);
      return data as APIResponseType<Tax>;
    } catch (error) {
      const axiosError = error as AxiosError<APIResponseType>;
      return {
        success: false,
        code: axiosError.response?.status,
        msg: axiosError.response?.data?.msg ?? "Network Connection Problem",
      } as APIResponseType;
    }
  }

  async save({ data }: { data?: Tax }): Promise<APIResponseType<Tax>> {
    try {
      const ret =
        data?.id === "new" || !data?.id
          ? await apiClient.post(API_URLS.TAX_CREATE, data)
          : await apiClient.put(`${API_URLS.TAX_UPDATE}/${data?.id}`, data);
      return ret as APIResponseType<Tax>;
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
      const ret = await apiClient.delete(`${API_URLS.TAX_DELETE}/${id}`);
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
export default new TaxService();
