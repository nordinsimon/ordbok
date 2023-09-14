import "./Phonetics.css";
import { Phonetics } from "../../types";

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
