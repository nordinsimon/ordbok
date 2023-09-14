import "./ResultBox.css";

import { useActiveWord } from "../../context/useContext";

import Result from "./Result";

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
