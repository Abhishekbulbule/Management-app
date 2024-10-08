import React from "react";
import { it, expect, describe, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import AddEmployeePage from "../AddEmployeePage";
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer, { addEmployee } from "../redux_app/Employee/employee";
import { Provider } from "react-redux";
import ViewEmployeesPage from "../ViewEmployeesPage";
import { Route, MemoryRouter as Router, Routes } from "react-router-dom";

vi.mock("../redux_app/Employee/employee", { spy: true });

const initialState = {
  employee: {
    employees: [
      {
        name: "abhi",
        age: "30",
        gender: "male",
        email: "abhi22@gmail.com",
        salary: "50000",
      },
    ],
  },
};
const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
  preloadedState: initialState,
});

const tempData = {
  name: "Abhi",
  age: "21",
  email: "abhi@gmail.com",
  gender: "Male",
  salary: "39999",
};

describe("ViewEmployees", () => {
  it("should display loading", async () => {
    render(
      <Provider store={store}>
        <Router>
          <ViewEmployeesPage />
        </Router>
      </Provider>
    );
    expect(screen.getByText("Loading!!!")).toBeInTheDocument();
  });
  it("should display header and table", async () => {
    render(
      <Provider store={store}>
        <Router>
          <ViewEmployeesPage />
        </Router>
      </Provider>
    );
    // expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
