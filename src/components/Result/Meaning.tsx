import { Meanings } from "../../types";

import "./Meaning.css";

interface MeaningProps {
  meanings: Meanings;
  length: number;
  meaningState: number;
  setMeaningState: React.Dispatch<React.SetStateAction<number>>;
}

const Meaning: React.FC<MeaningProps> = ({
  meanings,
  length,
  meaningState,
  setMeaningState,
}) => {
  const { partOfSpeech, definitions, synonyms, antpnyms } = meanings;

  const Definitions = () => {
    if (definitions !== undefined) {
      return (
        <>
          <h4>Definitions:</h4>
          <ul>
            {definitions.map((def, index) => (
              <li key={index}>{def.definition}</li>
            ))}
          </ul>
        </>
      );
    }
  };

  const Synonyms = () => {
    if (synonyms !== undefined && synonyms.length > 0) {
      return (
        <>
          <h4>Synonyms: </h4>
          <ul className="SynonymsList">
            {synonyms.map((syn, index) => (
              <li key={index}>{syn}</li>
            ))}
          </ul>
        </>
      );
    }
  };

  const Antonyms = () => {
    if (antpnyms !== undefined) {
      return (
        <>
          <h4>Antonyms: </h4>
          <ul className="AntonymsList">
            {antpnyms.map((ant, index) => (
              <li key={index}>{ant}</li>
            ))}
          </ul>
        </>
      );
    }
  };

  const ChangeMeaning = () => {
    const onClick = () => {
      if (meaningState < length - 1) {
        setMeaningState(meaningState + 1);
      } else {
        setMeaningState(0);
      }
    };

    if (length > 1) {
      return (
        <div className="ChangeMeaning">
          <button onClick={onClick}>Next</button>
        </div>
      );
    }
  };

  return (
    <div className="MeaningBox">
      <div className="TitleBox">
        <h2 className="Title">{partOfSpeech}</h2>
        <ChangeMeaning />
      </div>
      <Definitions />
      <Synonyms />
      <Antonyms />
    </div>
  );
};

export default Meaning;
