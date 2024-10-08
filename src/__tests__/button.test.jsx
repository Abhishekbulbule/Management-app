import React from "react";
import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Button from "../components/Button";

//button
describe("button", () => {
  it("should  display btn", () => {
    render(<Button label={"Submit"} />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
});
