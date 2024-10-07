import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  employees: [],
  loading: false,
  error: null,
};

export const getEmployees = createAsyncThunk("./getEmployees", async () => {
  const employeesData = localStorage.getItem("Employees");
  if (!employeesData || []) {
    const response = await axios.get("/EmployeeData.json");
    localStorage.setItem("Employees", JSON.stringify(response.data));
    return response.data;
  } else {
    return JSON.parse(employeesData);
  }
});

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      let existingEmployees = JSON.parse(
        localStorage.getItem("Employees") || []
      );
      const updatedEmployees = [...existingEmployees, action.payload];
      localStorage.setItem("Employees", JSON.stringify(updatedEmployees));
      state.employees = updatedEmployees;
    },
    deleteEmployee: (state, action) => {
      const index = action.payload;
      let existingEmployees = JSON.parse(
        localStorage.getItem("Employees") || []
      );
      const updatedEmployees = existingEmployees.filter((_, i) => i !== index);
      localStorage.setItem("Employees", JSON.stringify(updatedEmployees));
      state.employees = updatedEmployees;
    },
    updateEmployee: (state, action) => {
      const { updatedEmployee, index } = action.payload;
      let existingEmployees = JSON.parse(
        localStorage.getItem("Employees") || []
      );
      existingEmployees[index] = updatedEmployee;
      localStorage.setItem("Employees", JSON.stringify(existingEmployees));
      state.employees = existingEmployees;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { updateEmployee, addEmployee, deleteEmployee } =
  EmployeeSlice.actions;

export default EmployeeSlice.reducer;
