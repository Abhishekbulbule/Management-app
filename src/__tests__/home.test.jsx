import React from "react";
import { it, expect, describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Card from "../components/Card";
import Boxes from "../components/Boxes";
import Button from "../components/Button";

// describe("homepage buttons", () => {
//   it("should navigate to page on clicking any buttons", () => {
//     const navigate = vi.mocked(useNavigate)(); // Get the mocked function
//     render(
//       <MemoryRouter>
//         <Boxes link="/add" name="Add" />
//       </MemoryRouter>
//     );

//     const button = screen.getByRole("button", { name: /add/ }); // Use button name
//     expect(button).toBeInTheDocument();

//     fireEvent.click(button);
//     expect(navigate).toHaveBeenCalledWith("/add"); // Correct way to check for arguments
//   });
// });

// Card
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

//button
describe("button", () => {
  it("should  display btn", () => {
    render(<Button title={"Submit"} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
