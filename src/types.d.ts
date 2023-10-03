export type ContextInterface = {
  children: JSX.Element;
};

export type Favourites = Word[];

export type ActiveWord = null | undefined | false | Word[];

export type Word = {
  word: string;
  phonetic: string;
  phonetics: Phonetics[];
  meanings: Meanings[];
  sourceUrls: string[];
};

export type Phonetics = {
  text: string;
  audio: string;
};

export type Meanings = {
  partOfSpeech: string;
  definitions: Definitions[];
  synonyms: string[];
  antpnyms: string[];
};

export type Definitions = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: string;
};
