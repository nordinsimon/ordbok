import "./Phonetics.css";
import { Phonetics } from "../../types";

/**
 * Component that renders the phonetics of the word
 * and returning a button to play the audio if
 * there is any audio to play
 */
const PhoneticsComponent = ({ text, audio }: Phonetics) => {
  const playAudio = () => {
    const play = new Audio(audio);
    play.play();
  };

  if (text === "" || audio === "") return;

  return (
    <div className="Phonetics">
      <p>Sound: {text}</p>
      <button onClick={playAudio}>Play</button>
    </div>
  );
};

export default PhoneticsComponent;
