import { rest } from "msw";
import { setupServer } from "msw/node";

import { beforeAll, afterAll } from "vitest";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

import AllContexts from "./context/AllContexts";

import exWord_hi from "./__test__/exampleWords/exWord_hi.json";

const hi_word = exWord_hi[0].word;

/**
 * Setting up the server for "hi"
 */
const server = setupServer(
  rest.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${hi_word}`,
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

test("check that the word is added to favourites and deleted", async () => {
  custumRender();
  const user = userEvent.setup();
  const searchBar = screen.getByRole("textbox");
  const button = screen.getByText("Search");
  expect(screen.getByText("No favourites yet")).toBeInTheDocument();

  await user.type(searchBar, hi_word);
  await user.click(button);
  const favButton = screen.getByText("Save as a favourite");
  await user.click(favButton);
  expect(screen.queryByText("No favourites yet")).not.toBeInTheDocument();

  const favoriteWord = screen.getByRole("button", { name: hi_word });
  expect(favoriteWord).toBeInTheDocument();

  const deleteButton = screen.getByText("Delete from favourites");
  await user.click(deleteButton);
  expect(screen.getByText("No favourites yet")).toBeInTheDocument();
});

test("check that it is possible to delete word with deletAll button", async () => {
  custumRender();
  const user = userEvent.setup();
  const searchBar = screen.getByRole("textbox");
  const button = screen.getByText("Search");

  await user.type(searchBar, hi_word);
  await user.click(button);
  const favButton = screen.getByText("Save as a favourite");
  await user.click(favButton);
  const favoriteWord = screen.getByRole("button", { name: hi_word });
  expect(favoriteWord).toBeInTheDocument();

  const deleteAllButton = screen.getByText("Delete all");
  await user.click(deleteAllButton);
  expect(screen.getByText("No favourites yet")).toBeInTheDocument();
});
