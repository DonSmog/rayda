/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosError } from "axios";
import useSWR, { SWRResponse } from "swr";

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

export const useFetchData = <T>(): SWRResponse<ApiResponse<T>, AxiosError> => {
  const fetcher = async () => {
    const response = await axios.get<ApiResponse<T>>(
      "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b"
    );
    return response.data;
  };
  const { data, error, isValidating, isLoading, mutate } = useSWR(
    "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b",
    fetcher
  );

  return {
    data,
    isLoading,
    mutate,
    error,
    isValidating,
  };
};
