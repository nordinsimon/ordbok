import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PhoneticsComponent from "./Phonetics";

import exWord_hi from "../../__test__/exampleWords/exWord_hi.json";

const word = exWord_hi[0].word;
const audio = exWord_hi[0].phonetics[0].audio;

test("Check if there is a phonetic", () => {
  render(<PhoneticsComponent text={word} audio={audio} />);
  const phonetic = screen.getByText(`Sound: ${word}`);
  expect(phonetic).toBeInTheDocument();
});

test("Check if audio is playable", async () => {
  render(<PhoneticsComponent text={word} audio={audio} />);
  const user = userEvent.setup();
  const button = screen.getByText("Play");
  const audioSpy = vi.spyOn(global, "Audio");

  expect(button).toBeInTheDocument();

  await user.click(button);
  expect(audioSpy).toHaveBeenCalled();
});

test("Check that no phonetic is rendered if no text is passed", () => {
  render(<PhoneticsComponent text="" audio={audio} />);
  const phonetic = screen.queryByText("Sound:");
  expect(phonetic).not.toBeInTheDocument();
});

test("Check that no audio button is rendered if no audio is passed", () => {
  render(<PhoneticsComponent text={word} audio="" />);
  const button = screen.queryByText("Play");
  expect(button).not.toBeInTheDocument();
});
