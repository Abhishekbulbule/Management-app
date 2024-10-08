import React from "react";
import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Input from "../components/Input";

//input
describe("input", () => {
  it("should  display input field", () => {
    render(
      <Input
        type={"text"}
        placeholder={"Enter Name"}
        name={"name"}
        id={"name"}
      />
    );
    const input = screen.getByPlaceholderText("Enter Name");
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("");
  });
});
