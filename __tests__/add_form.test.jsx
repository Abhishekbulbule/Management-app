import React from "react";
import { it, expect, describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import AddEmployeePage from "../src/AddEmployeePage";
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer, {
  addEmployee,
} from "../src/redux_app/Employee/employee";
import { Provider } from "react-redux";

vi.mock("../src/redux_app/Employee/employee", { spy: true });
const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

const tempData = {
  name: "Abhi",
  age: "21",
  email: "abhi@gmail.com",
  gender: "Male",
  salary: "39999",
};
describe("addEmployee", () => {
  it("should contain a single header with text", () => {
    render(
      <Provider store={store}>
        <AddEmployeePage />
      </Provider>
    );
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Add Employee Details");
  });

  it("should contain 5 input fields", async () => {
    render(
      <Provider store={store}>
        <AddEmployeePage />
      </Provider>
    );
    const name = screen.getByPlaceholderText(/enter name/i);
    const email = screen.getByPlaceholderText(/enter email/i);
    const age = screen.getByPlaceholderText(/enter age/i);
    const salary = screen.getByPlaceholderText(/enter salary/i);
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(salary).toBeInTheDocument();
    const radioInputs = screen.getAllByRole("radio");
    expect(radioInputs.length >= 2).toBeTruthy();
  });

  it("should save employee data on click of button/form submit", async () => {
    localStorage.setItem("Employees", JSON.stringify([]));
    render(
      <Provider store={store}>
        <AddEmployeePage />
      </Provider>
    );
    const name = screen.getByPlaceholderText(/enter name/i);
    const email = screen.getByPlaceholderText(/enter email/i);
    const age = screen.getByPlaceholderText(/enter age/i);
    const salary = screen.getByPlaceholderText(/enter salary/i);
    const maleRadio = screen.getByDisplayValue("Male");

    //updating input values
    fireEvent.click(maleRadio);
    fireEvent.change(name, { target: { value: tempData.name } });
    fireEvent.change(age, { target: { value: tempData.age } });
    fireEvent.change(email, { target: { value: tempData.email } });
    fireEvent.change(salary, { target: { value: tempData.salary } });

    const button = screen.getByRole("button", { type: "submit" });
    fireEvent.click(button);

    expect(addEmployee).toHaveBeenCalledWith(tempData);
  });
});
