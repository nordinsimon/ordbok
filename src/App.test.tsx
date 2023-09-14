import { rest } from "msw";
import { setupServer } from "msw/node";

import { beforeAll, afterAll } from "vitest";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

import AllContexts from "./context/AllContexts";

import exWord_hi from "./__test__/exampleWords/exWord_hi.json";
import { s } from "vitest/dist/reporters-cb94c88b.js";

const hi_word = exWord_hi[0].word;
const hi_phonetic = exWord_hi[0].phonetic;
const sorceUrls = exWord_hi[0].sourceUrls;

const server = setupServer(
  // Describe the requests to mock.
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

test("Check if text dissapears when clicked button", async () => {
  custumRender();
  const user = userEvent.setup();
  const searchBar = screen.getByRole("textbox");
  const button = screen.getByText("Search");

  await user.type(searchBar, hi_word);
  expect(searchBar).toHaveValue("hi");
  await user.click(button);
  expect(searchBar).toHaveValue("");
});

test("Check if text dissapears when clicked enter", async () => {
  custumRender();
  const user = userEvent.setup();
  const searchBar = screen.getByRole("textbox");

  await user.type(searchBar, hi_word);
  expect(searchBar).toHaveValue("hi");

  await user.type(searchBar, "{enter}");
  expect(searchBar).toHaveValue("");
});

test("Check that the word is displayed when searched", async () => {
  custumRender();
  const user = userEvent.setup();
  const searchBar = screen.getByRole("textbox");
  const button = screen.getByText("Search");

  await user.type(searchBar, hi_word);
  await user.click(button);

  expect(screen.getByText(hi_word)).toBeInTheDocument();
  expect(screen.getByText(`Phonetic: ${hi_phonetic}`)).toBeInTheDocument();
  expect(screen.getByText("Definitions:")).toBeInTheDocument();
  expect(screen.getByText("Synonyms:")).toBeInTheDocument();
  expect(screen.getByText("More information (Wiki)")).toBeInTheDocument();
});

test("check that it is possible to change part of speech", async () => {
  custumRender();
  const user = userEvent.setup();
  const searchBar = screen.getByRole("textbox");
  const button = screen.getByText("Search");

  await user.type(searchBar, hi_word);
  await user.click(button);
  expect(screen.getByText("noun")).toBeInTheDocument();

  const nextButton = screen.getByText("Next");
  await user.click(nextButton);
  expect(screen.getByText("interjection")).toBeInTheDocument();
});
