import "./Header.css";

import { FaSun } from "react-icons/fa";

// Function used to switch between light and dark theme
function editColorTheme() {
  const root = document.documentElement;
  const currentColor = root.style.getPropertyValue("--color-text");

  if (currentColor !== "#ffffffde") {
    root.style.setProperty("--color-text", "#ffffffde");
    root.style.setProperty("--color-background", "#242424");
    root.style.setProperty("--color-button", "#1a1a1a");
  } else {
    root.style.setProperty("--color-text", "#242424");
    root.style.setProperty("--color-background", "#ffffffde");
    root.style.setProperty("--color-button", "#ffffffde");
  }
}

// Header component and button to switch between light and dark theme
const Header = () => {
  return (
    <div className="HeaderBox">
      <h1>English Dictionary</h1>
      <button className="IconButton" onClick={editColorTheme}>
        <FaSun className="Icon"></FaSun>
      </button>
    </div>
  );
};

export default Header;
