import "./Result.css";

import { useState } from "react";

import PhoneticsComponent from "./Phonetics";
import Meaning from "./Meaning";

import { Word } from "../../types";

import { useFavourites } from "../../context/useContext";

interface ResultProps {
  activeWord: Word;
}

const Result: React.FC<ResultProps> = ({ activeWord }) => {
  const { word, phonetic, phonetics, meanings, sourceUrls } = activeWord;
  const { favourites, setFavourites } = useFavourites();
  const [meaningState, setMeaningState] = useState(0);

  const addFavourite = () => {
    if (!favourites.includes(activeWord)) {
      setFavourites([...favourites, activeWord]);
    }
  };
  const deleteFavourite = () => {
    const newFavourites = favourites.filter(
      (favourite) => favourite.word !== activeWord.word
    );
    setFavourites(newFavourites);
  };

  const Phonetic = () => {
    if (phonetic !== undefined) {
      return <h3>Phonetic: {phonetic}</h3>;
    }
  };

  const FavouriteButton = () => {
    if (!favourites.includes(activeWord)) {
      return <button onClick={addFavourite}>Save as a favourite</button>;
    } else {
      return <button onClick={deleteFavourite}>Delete from favourites</button>;
    }
  };

  return (
    <div className="ResultBox">
      <h1>{word}</h1>
      <FavouriteButton />
      <Phonetic />
      <div className="PhoneticsBox">
        {phonetics.map((phonetic, index) => (
          <PhoneticsComponent
            key={phonetic.text + index}
            text={phonetic.text}
            audio={phonetic.audio}
          />
        ))}
      </div>
      <div className="MeaningsBox">
        <Meaning
          meanings={meanings[meaningState]}
          length={meanings.length}
          meaningState={meaningState}
          setMeaningState={setMeaningState}
        />
      </div>
      <div className="LinkBox">
        <a href={sourceUrls[0]}>More information (Wiki)</a>
      </div>
    </div>
  );
};

export default Result;
