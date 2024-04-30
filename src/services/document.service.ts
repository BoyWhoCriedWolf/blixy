import { AxiosError } from "axios";
import { apiClient } from "utils/api-utils";
import { API_URLS } from "./api-urls";
import { APIService } from "./api.service";
import { Document } from "./types/document.types";
import { APIResponseType } from "./types/response.types";

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

  async get({ id = "" }: { id: string }): Promise<APIResponseType<Document>> {
    try {
      const data = await apiClient.get(API_URLS.DOCUMENT_GET, { id: id });
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

  //   async save({
  //     data,
  //   }: {
  //     data?: Document;
  //   }): Promise<APIResponseType<string | boolean>> {
  //     try {
  //       const { data: res } = await apiClient.post(
  //         data?.id === "new" || !data?.id
  //           ? apiPath.CREATE_AUTHOR
  //           : apiPath.UPDATE_AUTHOR,
  //         {
  //           authors: [data],
  //         }
  //       );
  //       return {
  //         Code: res.Code || APIResponseCode.SUCCESS,
  //         Data: res?.data?.[0] || res?.[0],
  //         Message: res?.message || "Success",
  //       } as APIResponseType<string | boolean>;
  //     } catch (error) {
  //       return {
  //         Code: APIResponseCode.FAILED,
  //         Data: "",
  //         Message: "Network Connection Problem",
  //       };
  //     }
  //   }

  //   async delete({ id = "" }: { id?: string }): Promise<APIResponseType<null>> {
  //     try {
  //       const { data: res } = await axios.delete(apiPath.DELETE_AUTHOR, {
  //         params: { id: id },
  //       });
  //       return res as APIResponseType<null>;
  //     } catch (error) {
  //       return {
  //         Code: APIResponseCode.FAILED,
  //         Message: "Network Connection Problem",
  //       };
  //     }
  //   }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new DocumentService();
