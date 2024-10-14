import React from "react";
import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ButtonComponent from "../src/components/ButtonComponent";

//button
describe("button", () => {
  it("should  display btn", () => {
    render(<ButtonComponent label={"Submit"} />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
});
