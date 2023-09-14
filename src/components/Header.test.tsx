import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Check if there is a Header", () => {
  render(<Header />);
  const header = screen.getByText("English Dictionary");
  expect(header).toBeInTheDocument();
});

test("Check if there is a button to switch colour", () => {
  render(<Header />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
