import React, { act } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, expect, it } from "vitest";
import UpdateEmployeePage from "../UpdateEmployeePage";
import employeeReducer, {
  updateEmployee,
} from "../redux_app/Employee/employee";
import { Route, MemoryRouter as Router, Routes } from "react-router-dom";
vi.mock("../redux_app/Employee/employee", { spy: true });
// vi.mock(import("react-router-dom"), { spy: true });
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const initialState = {
  employee: {
    employees: [
      {
        name: "abhi",
        age: "30",
        gender: "Male",
        email: "abhi22@gmail.com",
        salary: "50000",
      },
    ],
  },
};
const tempData = {
  name: "QWERT",
  age: "25",
  email: "abhi22@gmail.com",
  gender: "Male",
  salary: "45000",
};

const mockStore = configureStore({
  reducer: {
    employee: employeeReducer,
  },
  preloadedState: initialState,
});
describe("UpdateEmployee", () => {
  it("should run update function on clicking the button", async () => {
    localStorage.setItem("Employees", JSON.stringify([]));
    await act(() => {
      render(
        <Provider store={mockStore}>
          <Router initialEntries={["/update/0"]}>
            <Routes>
              <Route path="/update/:index" element={<UpdateEmployeePage />} />
            </Routes>
          </Router>
        </Provider>
      );
    });
    expect(screen.getByRole("heading")).toBeInTheDocument();

    const name = screen.getByPlaceholderText(/Enter Name/i);
    expect(name.value).not.toBe("");
    const age = screen.getByPlaceholderText(/Enter age/i);
    expect(age.value).not.toBe("");
    const salary = screen.getByPlaceholderText(/Enter salary/i);
    expect(salary.value).not.toBe("");
    const email = screen.getByPlaceholderText(/Enter email/i);
    expect(email.value).not.toBe("");

    const button = screen.getByRole("button", { type: "submit" });
    expect(button).toBeInTheDocument();
  });

  it("should run update function on clicking the button", async () => {
    localStorage.setItem("Employees", JSON.stringify([]));
    await act(() => {
      render(
        <Provider store={mockStore}>
          <Router initialEntries={["/update/0"]}>
            <Routes>
              <Route path="/update/:index" element={<UpdateEmployeePage />} />
            </Routes>
          </Router>
        </Provider>
      );
    });
    expect(screen.getByRole("heading")).toBeInTheDocument();

    const name = screen.getByPlaceholderText(/Enter Name/i);
    expect(name.value).not.toBe("");
    const age = screen.getByPlaceholderText(/Enter age/i);
    expect(age.value).not.toBe("");
    const salary = screen.getByPlaceholderText(/Enter salary/i);
    expect(salary.value).not.toBe("");
    const email = screen.getByPlaceholderText(/Enter email/i);
    expect(email.value).not.toBe("");

    fireEvent.change(name, { target: { value: tempData.name } });
    fireEvent.change(age, { target: { value: tempData.age } });
    fireEvent.change(email, { target: { value: tempData.email } });
    fireEvent.change(salary, { target: { value: tempData.salary } });

    const button = screen.getByRole("button", { type: "submit" });
    await act(async () => {
      fireEvent.click(button);
    });
    await waitFor(() => {
      expect(updateEmployee).toHaveBeenCalledTimes(1);
      expect(updateEmployee).toHaveBeenCalledWith({
        data: {
          name: "QWERT",
          age: "25",
          email: "abhi22@gmail.com",
          gender: "Male",
          salary: "45000",
        },
        index: "0",
      });
      expect(mockNavigate).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith("/view");
    });
  });
});
