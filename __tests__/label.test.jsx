import React from "react";
import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Label from "../src/components/Label";

describe("Label", () => {
  it("should display label text", () => {
    render(<Label labelText={"Logo"} />);
    const label = screen.getByText("Logo");
    expect(label).toBeInTheDocument();
  });
});
