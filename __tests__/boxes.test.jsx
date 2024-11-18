import React from "react";
import { it, expect, describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Boxes from "../src/components/Boxes";
import { BrowserRouter as Router } from "react-router-dom";

const links = [
  {
    name: "Add",
    link: "/add",
  },
  { name: "View", link: "/view" },
];
// Card
describe("Boxes", () => {
  it("should contain buttons as provided in props and navigate on click", () => {
    render(
      <Router>
        <Boxes links={links} />
      </Router>
    );
    links.forEach((link) => {
      const button = screen.getByText(link.name);
      expect(button).toBeInTheDocument();
    });
    const button = screen.getByText(links[0].name);
    fireEvent.click(button);
    expect(window.location.pathname).toBe("/add");
  });
});
