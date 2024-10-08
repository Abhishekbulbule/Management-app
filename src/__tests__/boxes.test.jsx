import React from "react";
import { it, expect, describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Boxes from "../components/Boxes";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

// Card
describe("Boxes", () => {
  it("should contain buttons as provided in props and navigate on click", () => {
    render(
      <Router>
        <Boxes link="/add" name="add" />
      </Router>
    );
    const button = screen.getByText("add");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(window.location.pathname).toBe("/add");
  });
});
