import { useActiveWord, useFavourites } from "../context/useContext";
import { Word } from "../types";

import "./FavouritesBox.css";

/**
 * This box shows all the favourites words
 * and returns an empty box if there are no favourites,
 * in the bottom of the box you can delete all favourites.
 */
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

  /**
   * This function sets the active word to the favourite word
   */
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
