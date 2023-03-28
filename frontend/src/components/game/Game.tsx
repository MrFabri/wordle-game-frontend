import { useState } from "react";
import Settings from "./Settings";
import Gameboard from "./Gameboard";
import "./game.scss";
import Winner from "./Winner";

function Game() {
  const [win, setWin] = useState(false);
  const [wordLengt, setWordLengt] = useState(5);
  const [settingState, setSettingState] = useState(false);

  function getWord(lengt: number) {
    return "cykla";
  }

  const correctWord = getWord(wordLengt);
  const toggleSettings = (): void => setSettingState(!settingState);

  return (
    <div className="game">
      <span
        className={settingState ? "close-icon" : "settings-icon"}
        onClick={() => toggleSettings()}
      ></span>
      {/***** Shows the game or settings ****/}
      {settingState ? (
        <Settings
          word={{
            lengt: wordLengt,
            setLengt: setWordLengt,
          }}
          settings={{
            toggle: toggleSettings,
          }}
        />
      ) : (
        <Gameboard
          word={{
            length: wordLengt,
            value: correctWord,
          }}
          winner={setWin}
        />
      )}
      {/**** Shows the winner component if the user wins ****/}
      {win && <Winner />}
    </div>
  );
}

export default Game;
