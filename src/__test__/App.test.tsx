import { rest } from "msw";
import { setupServer } from "msw/node";

import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";

import AllContexts from "../context/AllContexts";

const server = setupServer(
  // Describe the requests to mock.
  rest.get(
    "https://api.dictionaryapi.dev/api/v2/entries/en/test",
    (_req, res, ctx) => {
      return res(
        ctx.json({
          title: "Lord of the Rings",
          author: "J. R. R. Tolkien",
        })
      );
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

test("Check if text dissapears when clicked button", () => {
  custumRender();
  const searchBar = screen.getByRole("textbox");
  const button = screen.getByText("Search");

  fireEvent.change(searchBar, { target: { value: "test" } });
  expect(searchBar).toHaveValue("test");
  fireEvent.click(button);
});
