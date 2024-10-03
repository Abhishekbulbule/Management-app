import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

export const getEmployees = createAsyncThunk("./getEmployees", async () => {
  if (!localStorage.getItem("Employees")) {
    const response = await axios.get("/EmployeeData.json");
    console.log("data received ---", response.data);
    localStorage.setItem("Employees", JSON.stringify(response.data));
    return response.data; // Return the fetched data
  } else {
    return JSON.parse(localStorage.getItem("Employees"));
  }
});

export const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      if (!localStorage.getItem("Employees")) {
        getEmployees();
      }
      let existingEmployees = JSON.parse(
        localStorage.getItem("Employees") || []
      );
      const updatedEmployees = [...existingEmployees, action.payload];
      localStorage.setItem("Employees", JSON.stringify(updatedEmployees));
    },
    deleteEmployee: (action) => {
      console.log("delete");
    },
    updateEmployee: (state, action) => {},
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
