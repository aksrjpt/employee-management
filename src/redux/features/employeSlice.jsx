import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getEmployees = createAsyncThunk("Employees", async () => {
  return fetch("http://localhost:5004/Employees").then((res) => res.json());
});

const employeSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getEmployees]: (state, actions) => {
      state.loading = true;
    },
    [getEmployees.fulfilled]: (state, actions) => {
      state.loading = false;
      state.employees = actions.payload;
    },
    [getEmployees.rejected]: (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
    },
  },
});

export default employeSlice.reducer;
