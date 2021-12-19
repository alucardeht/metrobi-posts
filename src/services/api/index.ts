import axios, { Method, AxiosRequestConfig } from "axios";

export interface IFetchApi extends AxiosRequestConfig {
  url: string;
  method: Method;
}

let baseURL = "https://jsonplaceholder.typicode.com";

const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    Origin: baseURL,
    "Content-Type": "application/json",
  },
});

export const fetchApi = async <T = any>(
  data: IFetchApi
): Promise<T | undefined> => {
  const info = { ...data };

  let { url } = info;

  try {
    const response = await api({
      method: info.method,
      url,
      data: info.data,
      headers: {
        ...(data.headers || {}),
      },
    });

    return response.data;
  } catch (error: any) {
    console.log(error?.response?.data);

    if (error) throw error;
  }
};
