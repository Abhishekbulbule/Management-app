import React, { act } from "react";
import { it, expect, describe, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer, {
  deleteEmployee,
  getEmployees,
} from "../src/redux_app/Employee/employee";
import { Provider } from "react-redux";
import ViewEmployeesPage from "../src/ViewEmployeesPage";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
vi.mock("../src/redux_app/Employee/employee", { spy: true });
vi.mock(import("axios"), { spy: true });

const initialState = {
  employee: {
    employees: [],
  },
};

//USING THE GET FN TO POPULATE STATE EMPLOYEES
axios.get.mockResolvedValue({
  data: [
    {
      name: "John",
      age: "30",
      gender: "Male",
      email: "john@gmail.com",
      salary: "34632",
    },
    {
      name: "Johnny",
      age: "40",
      gender: "Male",
      email: "johnny@gmail.com",
      salary: "34632",
    },
  ],
});
const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
  preloadedState: initialState,
});

describe("ViewEmployees", () => {
  it("should display loading", async () => {
    await act(() => {
      render(
        <Provider store={store}>
          <Router>
            <ViewEmployeesPage />
          </Router>
        </Provider>
      );
    });
    // expect(screen.getByText("Loading!!!")).toBeInTheDocument();
  });
  it("should display header and table and buttons", async () => {
    await act(() => {
      render(
        <Provider store={store}>
          <Router>
            <ViewEmployeesPage />
          </Router>
        </Provider>
      );
    });
    await waitFor(() => {
      expect(getEmployees).toHaveBeenCalled();
      expect(screen.getByText(/View Employee Details/i));
    });

    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
    // expect(screen.getAllByRole("row").length).toBeGreaterThan(1);
    expect(screen.getByText("John")).toBeInTheDocument();
    const deleteButton = screen.getByTestId("delete0");
    expect(deleteButton).toBeInTheDocument();
    const editButton = screen.getByTestId("edit0");
    expect(editButton).toBeInTheDocument();
  });
  it("should display table and onclicking the delete button it should delete", async () => {
    await act(() => {
      render(
        <Provider store={store}>
          <Router>
            <ViewEmployeesPage />
          </Router>
        </Provider>
      );
    });
    await waitFor(() => {
      expect(getEmployees).toHaveBeenCalled();
      expect(screen.getByText(/View Employee Details/i));
      expect(screen.getByRole("table")).toBeInTheDocument();
      // expect(screen.getAllByRole("row").length).toBeGreaterThanOrEqual(2);
    });
    const deleteButton = screen.getByTestId(/delete0/i);
    const editButton = screen.getByTestId(/edit0/i);
    expect(editButton).toBeInTheDocument();
    await act(() => {
      fireEvent.click(deleteButton);
    });
    expect(deleteEmployee).toHaveBeenCalledOnce();
  });
  it("should display table and onclicking the edit button it should navigate to update page", async () => {
    render(
      <Provider store={store}>
        <Router>
          <ViewEmployeesPage />
        </Router>
      </Provider>
    );
    await waitFor(() => {
      expect(getEmployees).toHaveBeenCalled();
      expect(screen.getByText(/View Employee Details/i));
      expect(screen.getByRole("table")).toBeInTheDocument();
      // expect(screen.getAllByRole("row").length).toBeGreaterThanOrEqual(2);
    });
    const editButton = screen.getByTestId(/edit0/i);
    await act(() => {
      fireEvent.click(editButton);
    });
    expect(window.location.pathname).toBe("/update/0");
  });
});
