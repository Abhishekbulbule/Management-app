import React from "react";
import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import CardComponent from "../src/components/CardComponent";

describe("card", () => {
  it("should contain image and h2 tag with text value", () => {
    render(<CardComponent title={"Logo"} src={"abcd"} />);
    const image = screen.getByRole("img");
    const heading = screen.getByText("Logo");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
    expect(heading).toBeInTheDocument();
  });
});
