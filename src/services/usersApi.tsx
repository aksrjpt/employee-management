import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/users.model";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5004/" }),
  endpoints: (builder) => ({
    userData: builder.query<User, void>({
      query: (id) => ({
        url: `/Users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useUserDataQuery } = usersApi;
