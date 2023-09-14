import { Meanings } from "../../types";

import "./Meaning.css";

interface MeaningProps {
  meanings: Meanings;
  length: number;
  meaningState: number;
  setMeaningState: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * Component that renders the meaning of the word
 * and returning information about the word
 * based on if there is any information to show
 */
const Meaning: React.FC<MeaningProps> = ({
  meanings,
  length,
  meaningState,
  setMeaningState,
}) => {
  const { partOfSpeech, definitions, synonyms, antpnyms } = meanings;

  /**
   * If the definitions are not undefined,
   * then map through the definitions
   */
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

  /**
   * If the synonyms are not undefined,
   * then map through the synonyms
   */
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

  /**
   * If the antonyms are not undefined,
   * then map through the antonyms
   */
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

  /**
   * If the length of the meanings array is greater than 1,
   * then it shod be possible to change between for
   * example th noun and verb
   */
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
