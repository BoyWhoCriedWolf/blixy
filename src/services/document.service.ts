import { AxiosError } from "axios";
import { apiClient } from "utils/api-utils";
import { API_URLS } from "./api-urls";
import { APIService } from "./api.service";
import { Document } from "./types/document.types";
import { APIResponseType } from "./types/response.types";
import { Counts } from "types/ui-types";

class DocumentService extends APIService<Document> {
  async gets(): Promise<APIResponseType<Document[]>> {
    try {
      const data = await apiClient.get(API_URLS.DOCUMENT_GETS);
      return data as APIResponseType<Document[]>;
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

  async getCounts(): Promise<APIResponseType<Counts>> {
    try {
      const data = await apiClient.get(API_URLS.DOCUMENT_GET_COUNTS);
      return data as APIResponseType<Counts>;
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

  async upload({
    data,
    onProgress,
  }: {
    data: FormData;
    onProgress: (v: number) => void;
  }): Promise<APIResponseType> {
    try {
      const ret = await apiClient.post(API_URLS.DOCUMENT_UPLOAD, data, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total = 0 } = progressEvent;
          const percentCompleted = total
            ? Math.round((loaded * 100) / total)
            : 0;
          onProgress(percentCompleted);
        },

        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return ret as APIResponseType;
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

  async get({ id = "" }: { id: string }): Promise<APIResponseType<Document>> {
    try {
      const data = await apiClient.get(`${API_URLS.DOCUMENT_GET}/${id}`);
      return data as APIResponseType<Document>;
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
    data?: Document;
  }): Promise<APIResponseType<Document>> {
    try {
      const ret =
        // data?.id === "new" || !data?.id
        //   ? await apiClient.post(API_URLS.DOCUMENT_CREATE, data) :
        await apiClient.put(`${API_URLS.DOCUMENT_UPDATE}/${data?.id}`, data);
      return ret as APIResponseType<Document>;
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
      const ret = await apiClient.delete(`${API_URLS.DOCUMENT_DELETE}/${id}`);
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
export default new DocumentService();
