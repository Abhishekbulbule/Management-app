import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "./Employee/employee";
export const store = configureStore({
  reducer: {
    employee: EmployeeReducer,
  },
});
