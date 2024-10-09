import React, { act } from "react";
import { it, expect, describe, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import UpdateEmployeePage from "../UpdateEmployeePage";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Route, MemoryRouter as Router, Routes } from "react-router-dom";
import employeeReducer, {
  updateEmployee,
} from "../redux_app/Employee/employee";

// using mock and spy to get the actual function from redux
vi.mock("../redux_app/Employee/employee", { spy: true });

const tempData = {
  name: "QWERT",
  age: "25",
  email: "abhi22@gmail.com",
  gender: "Male",
  salary: "45000",
};

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

describe("updateEmployee", () => {
  //not passing any params
  it("should contain a paragraph with loading text", async () => {
    render(
      <Provider store={store}>
        <Router>
          <UpdateEmployeePage />
        </Router>
      </Provider>
    );
    const para = screen.getByText("Loading!!!");
    expect(para).toBeInTheDocument();
  });

  //passing params to check if fetching data
  it("should take a params id and display user details in the form", async () => {
    await act(() => {
      render(
        <Provider store={store}>
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

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    // fireEvent.click(button);
    // console.log(name.value, age.value, email.value, salary.value);
  });

  // passing params and trying to update the data on click of button
  // vi.mock("../redux_app/Employee/employee");
  it("should take a params id and on clicking submit it should update that data", async () => {
    localStorage.setItem("Employees", JSON.stringify([]));
    render(
      <Provider store={store}>
        <Router initialEntries={["/update/0"]}>
          <Routes>
            <Route path="/update/:index" element={<UpdateEmployeePage />} />
          </Routes>
        </Router>
      </Provider>
    );
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

    //checking the updated value
    expect(name.value).toBe("QWERT");

    //commenting the submit button
    const button = screen.getByRole("button", { type: "submit" });
    fireEvent.click(button); //not submitting form

    //manually running updateEmployee is working
    // updateEmployee({ tempData, index: "0" });
    // await waitFor(() => {
    //   expect(updateEmployee).toHaveBeenCalledWith({ tempData, index: "0" });
    //   expect(updateEmployee).toHaveBeenCalledOnce();
    // });
  });
});
