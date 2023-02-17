import { configureStore } from "@reduxjs/toolkit";
import EmployeReducer from "./features/employeSlice";

export default configureStore({
    reducer:{
        app: EmployeReducer
    }
})