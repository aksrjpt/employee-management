import { configureStore } from "@reduxjs/toolkit";
import { employeesApi } from "../services/employeesApi";
import { usersApi } from "../services/usersApi";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [employeesApi.reducerPath]: employeesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeesApi.middleware, usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
