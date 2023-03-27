import { useState, useEffect } from "react";
import Settings from "./Settings";
import Gameboard from "./Gameboard";
import "./game.scss";

function Game() {
  const [inputLenght, setInputLength] = useState(4);
  const [settingState, setSettingState] = useState(false);

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="game">
      <span
        className={settingState ? "close-icon" : "settings-icon"}
        onClick={() => setSettingState(!settingState)}
      ></span>
      {settingState ? (
        <Settings
          inputValue={inputLenght}
          onSave={setInputLength}
          settings={{ settingState, setSettingState }}
        />
      ) : (
        <Gameboard inputLenght={inputLenght} />
      )}
    </div>
  );
}

export default Game;
