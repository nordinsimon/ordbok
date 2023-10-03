import { useState, useEffect, useRef } from "react";
import { useActiveWord } from "../context/useContext";

import "./SearchBar.css";

/**
 *
 * @returns the search bar component to App
 */
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { setActiveWord } = useActiveWord();

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  const fetchWord = async (word: string) => {
    if (word === "" || word === " ") {
      setActiveWord(false);
      setSearchTerm("");
      return;
    }

    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (res.status === 404) {
      setActiveWord(null);
      setSearchTerm("");
      return;
    } else {
      const data = await res.json();
      setActiveWord(data);
      setSearchTerm("");
    }
  };

  const handleSearch = () => {
    fetchWord(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="SearchBarBox">
      <input
        type="text"
        placeholder="Search"
        ref={inputRef}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        onKeyDown={handleKeyPress}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
