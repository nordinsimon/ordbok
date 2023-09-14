import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

import AllContexts from "../context/AllContexts";

const custumRender = () => {
  return render(
    <AllContexts>
      <SearchBar />
    </AllContexts>
  );
};

test("Check if there is a SearchBar", () => {
  custumRender();
  const searchBar = screen.getByRole("textbox");
  expect(searchBar).toBeInTheDocument();
});

test("Check if there is a button to search", () => {
  custumRender();
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("Check if text dissapears when clicked button", () => {
  custumRender();
  const searchBar = screen.getByRole("textbox");
  const button = screen.getByRole("button");

  fireEvent.change(searchBar, { target: { value: "test" } });
  fireEvent.click(button);

  expect(searchBar).toHaveValue("");
});
