import { AxiosError } from "axios";
import { Total } from "types/ui-types";
import { apiClient } from "utils/api-utils";
import { API_URLS } from "./api-urls";
import { APIService } from "./api.service";
import { Document, DocumentType } from "./types/document.types";
import { APIResponseType } from "./types/response.types";
import { GeneralLedgerAccountType } from "./types/general.ledger.account.types";

class DocumentService extends APIService<Document> {
  async gets({
    deleted = false,
    doc_type,
    doc_types,
    approved,
    general_ledger_account_id,
    general_ledger_account_types,
  }: {
    deleted?: boolean;
    doc_type?: DocumentType;
    doc_types?: Array<DocumentType>;
    approved?: boolean;
    general_ledger_account_id?: string;
    general_ledger_account_types?: Array<GeneralLedgerAccountType>;
  } = {}): Promise<APIResponseType<Document[]>> {
    try {
      const data = await apiClient.get(API_URLS.DOCUMENT_GETS, {
        ...(deleted ? { deleted } : {}),
        ...(doc_type ? { doc_type } : {}),
        ...(doc_types ? { doc_types } : {}),
        ...(approved ? { approved } : {}),
        ...(general_ledger_account_id ? { general_ledger_account_id } : {}),
        ...(general_ledger_account_types ? { general_ledger_account_types } : {}),
      });
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

  async getCounts(): Promise<APIResponseType<Total>> {
    try {
      const data = await apiClient.get(API_URLS.DOCUMENT_GET_COUNTS);
      return data as APIResponseType<Total>;
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

  async restore({ id }: { id?: string }): Promise<APIResponseType<Document>> {
    try {
      const ret = await apiClient.put(`${API_URLS.DOCUMENT_RESTORE}/${id}`);
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

  async deleteForever({
    id = "",
  }: {
    id?: string;
  }): Promise<APIResponseType<boolean>> {
    try {
      const ret = await apiClient.delete(
        `${API_URLS.DOCUMENT_DELETE_FOREVER}/${id}`
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
export default new DocumentService();
