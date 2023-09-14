//FEEEEELLLLLLLSDAS

import { rest } from "msw";
import { setupServer } from "msw/node";

import { beforeAll, afterAll } from "vitest";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

import AllContexts from "../../context/AllContexts";

import exWord_hi from "../../__test__/exampleWords/exWord_hi.json";

const server = setupServer(
  // Describe the requests to mock.
  rest.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/hi",
    (_req, res, ctx) => {
      return res(ctx.json(exWord_hi));
    }
  )
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

const custumRender = () => {
  return render(
    <AllContexts>
      <App />
    </AllContexts>
  );
};

test("Renders the main page", () => {
  custumRender();
  expect(true).toBeTruthy();
});

test("Check if text dissapears when clicked button", async () => {
  custumRender();
  const user = userEvent.setup();
  const searchBar = screen.getByRole("textbox");
  const button = screen.getByText("Search");

  await user.type(searchBar, "hi");
  expect(searchBar).toHaveValue("hi");
  await user.click(button);
  expect(searchBar).toHaveValue("");
});

test("Check if text dissapears when clicked enter", async () => {
  custumRender();
  const user = userEvent.setup();
  const searchBar = screen.getByRole("textbox");

  await user.type(searchBar, "hi");
  expect(searchBar).toHaveValue("hi");
  await user.type(searchBar, "{enter}");
  expect(searchBar).toHaveValue("");
});
