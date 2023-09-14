import { useActiveWord, useFavourites } from "../context/useContext";
import { Word } from "../types";

import "./FavouritesBox.css";

const FavouritesBox = () => {
  const { favourites, setFavourites } = useFavourites();
  const { setActiveWord } = useActiveWord();

  if (
    favourites === undefined ||
    favourites === null ||
    favourites.length === 0
  ) {
    return (
      <div className="FavouritesBox">
        <h1>Favourites</h1>
        <p>No favourites yet</p>
      </div>
    );
  }

  const handleFavouriteToActiveWord = (favourite: Word) => {
    const prepFavorite = [favourite];
    setActiveWord(prepFavorite);
  };

  const deleteAllFavourites = () => {
    setFavourites([]);
  };

  return (
    <div className="FavouritesBox">
      <h1>Favourites</h1>
      {favourites.map((favourite) => (
        <div key={favourite.word}>
          <button
            className={"FavouriteButton"}
            onClick={() => handleFavouriteToActiveWord(favourite)}
          >
            {favourite.word}
          </button>
        </div>
      ))}
      <button className="DeleteButton" onClick={deleteAllFavourites}>
        Delete all
      </button>
    </div>
  );
};

export default FavouritesBox;
