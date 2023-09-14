import "./ResultBox.css";

import { useActiveWord } from "../../context/useContext";

import Result from "./Result";

/**
 * Check if there is an active word
 * and returning information that there is no word
 * or that the word is not found.
 * If there is an active word,
 * then render the <Result /> component
 */
const ActiveWordBox = () => {
  const { activeWord } = useActiveWord();

  if (activeWord === undefined)
    return (
      <div className="ResultBox">
        <h1>Search for a word</h1>
      </div>
    );
  else if (activeWord === null)
    return (
      <div className="ResultBox">
        <h1>Word not found</h1>
      </div>
    );
  else {
    return <Result activeWord={activeWord[0]} />;
  }
};

export default ActiveWordBox;
