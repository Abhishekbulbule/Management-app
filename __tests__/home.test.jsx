import React from "react";
import { it, expect, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "../src/Homepage";
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../src/redux_app/Employee/employee";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

describe("Homepage", () => {
  it("should contain 3 buttons", () => {
    render(
      <Provider store={store}>
        <Router>
          <Homepage />
        </Router>
      </Provider>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons.length >= 3).toBeTruthy();
  });
  it("on clicking on any button should navigate to different page", () => {
    render(
      <Provider store={store}>
        <Router>
          <Homepage />
        </Router>
      </Provider>
    );
    //add
    const addbutton = screen.getByText(/Add/i);
    expect(addbutton).toBeInTheDocument();
    fireEvent.click(addbutton);
    expect(window.location.pathname).toBe("/add");
    //view
    const viewButton = screen.getByText("Manage");
    expect(viewButton).toBeInTheDocument();
    fireEvent.click(viewButton);
    expect(window.location.pathname).toBe("/view");
    // //gallery
    const galleryButton = screen.getByText(/gallery/i);
    expect(galleryButton).toBeInTheDocument();
    fireEvent.click(galleryButton);
    expect(window.location.pathname).toBe("/gallery");
  });
});
