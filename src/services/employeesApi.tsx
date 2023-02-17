import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Employee } from "../models/employees.model";

export const employeesApi = createApi({
  reducerPath: "employeesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5004/" }),
  tagTypes: ["Employee"],
  endpoints: (builder) => ({
    allEmployees: builder.query<Employee[], void>({
      query: () => "/employees",
      providesTags: ["Employee"],
    }),
    employee: builder.query<Employee, string>({
      query: (id) => `/employees/${id}`,
      providesTags: ["Employee"],
    }),
    createEmployee: builder.mutation<void, Employee>({
      query: (employees) => ({
        url: `/employees`,
        method: "POST",
        body: employees,
      }),
      invalidatesTags: ["Employee"],
    }),
    updateEmployee: builder.mutation<void, Employee>({
      query: ({ id, ...rest }) => ({
        url: `/employees/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Employee"],
    }),
    deleteEmployee: builder.mutation<void, string>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employee"],
    }),
  }),
});

export const {
  useAllEmployeesQuery,
  useEmployeeQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeesApi;
