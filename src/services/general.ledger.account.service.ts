import { AxiosError } from "axios";
import { apiClient } from "utils/api-utils";
import { API_URLS } from "./api-urls";
import { APIService } from "./api.service";
import {
  GeneralLedgerAccount,
  GeneralLedgerAccountDocumentTotal,
} from "./types/general.ledger.account.types";
import { APIResponseType } from "./types/response.types";

class GeneralLedgerAccountService extends APIService<GeneralLedgerAccount> {
  async gets(): Promise<APIResponseType<GeneralLedgerAccount[]>> {
    try {
      const data = await apiClient.get(API_URLS.GENERAL_LEDGER_ACCOUNT_GETS);
      return data as APIResponseType<GeneralLedgerAccount[]>;
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
  }): Promise<APIResponseType<GeneralLedgerAccount>> {
    try {
      const data = await apiClient.get(
        `${API_URLS.GENERAL_LEDGER_ACCOUNT_GET}/${id}`
      );
      return data as APIResponseType<GeneralLedgerAccount>;
    } catch (error) {
      const axiosError = error as AxiosError<APIResponseType>;
      return {
        success: false,
        code: axiosError.response?.status,
        msg: axiosError.response?.data?.msg ?? "Network Connection Problem",
      } as APIResponseType;
    }
  }

  async totalProfitLoss(): Promise<
    APIResponseType<GeneralLedgerAccountDocumentTotal>
  > {
    try {
      const data = await apiClient.get(
        `${API_URLS.GENERAL_LEDGER_ACCOUNT_TOTAL_PROFIT_LOSS}`
      );
      return data as APIResponseType<GeneralLedgerAccountDocumentTotal>;
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
    data?: GeneralLedgerAccount;
  }): Promise<APIResponseType<GeneralLedgerAccount>> {
    try {
      const ret =
        data?.id === "new" || !data?.id
          ? await apiClient.post(API_URLS.GENERAL_LEDGER_ACCOUNT_CREATE, data)
          : await apiClient.put(
              `${API_URLS.GENERAL_LEDGER_ACCOUNT_UPDATE}/${data?.id}`,
              data
            );
      return ret as APIResponseType<GeneralLedgerAccount>;
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
        `${API_URLS.GENERAL_LEDGER_ACCOUNT_DELETE}/${id}`
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
export default new GeneralLedgerAccountService();
