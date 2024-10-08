import React from "react";
import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Card from "../components/Card";

describe("card", () => {
  it("should contain image and h2 tag with text value", () => {
    render(<Card title={"Logo"} />);
    const image = screen.getByRole("img");
    const heading = screen.getByRole("heading");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Logo");
  });
});
