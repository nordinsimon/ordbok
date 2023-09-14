import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ActiveWordBox from "./components/Result/ResultBox";
import FavouritesBox from "./components/FavouritesBox";
/**
 * Main component of the app.
 */
function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <FavouritesBox />
        <div>
          <SearchBar />
          <ActiveWordBox />
        </div>
      </div>
    </div>
  );
}

export default App;
