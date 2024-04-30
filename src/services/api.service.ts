import { APIResponseType } from "./types/response.types";

export class APIService<T = any> {
  async gets(p?: any): Promise<APIResponseType<T[]>> {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        msg: "Not Defined (development)",
      });
    });
  }

  async get({ id = "" }: { id?: string }): Promise<APIResponseType<T>> {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        msg: "Not Defined (development)",
      });
    });
  }

  async save({
    data,
  }: {
    data?: T;
  }): Promise<APIResponseType<string | boolean>> {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        msg: "Not Defined (development)",
      });
    });
  }

  async saves({
    data = [],
  }: {
    data?: Array<T>;
  }): Promise<APIResponseType<Array<string | boolean>>> {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        msg: "Not Defined (development)",
      });
    });
  }

  async delete({ id = "" }: { id?: string }): Promise<APIResponseType<null>> {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        msg: "Not Defined (development)",
      });
    });
  }

  async deletes({
    ids = [],
  }: {
    ids?: Array<string>;
  }): Promise<APIResponseType<null>> {
    return new Promise((resolve, reject) => {
      resolve({
        success: false,
        msg: "Not Defined (development)",
      });
    });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new APIService();
