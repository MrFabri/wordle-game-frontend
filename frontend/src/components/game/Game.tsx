import { useState } from "react";
import Settings from "./Settings";
import Gameboard from "./Gameboard";
import "./game.scss";
import Winner from "./Winner";

function Game() {
  const [win, setWin] = useState<boolean>(false);
  const [wordLengt, setWordLengt] = useState<number>(5);
  const [settingState, setSettingState] = useState<boolean>(false);
  const [tries, setTries] = useState<number>(0);

  const incrementTries = (): void => setTries(tries + 1);
  const resetTries = (): void => setTries(0);
  const toggleSettings = (): void => setSettingState(!settingState);
  const getWord = (lengt: number): string => {
    return "cykla";
  };

  // const resetGame = (): void => {
  //   setWin(false);
  //   resetTries();
  // }

  const correctWord = getWord(wordLengt);

  let gameOrSettings;
  if (settingState) {
    gameOrSettings = (
      <Settings
        word={{
          lengt: wordLengt,
          setLengt: setWordLengt,
        }}
        settings={{
          toggle: toggleSettings,
        }}
      />
    );
  } else {
    gameOrSettings = (
      <Gameboard
        word={{
          length: wordLengt,
          value: correctWord,
          tries,
        }}
        incrementTries={incrementTries}
        win={win}
        setWin={setWin}
      />
    );
  }

  return (
    <div className="game">
      <span
        className={settingState ? "close-icon" : "settings-icon"}
        onClick={() => toggleSettings()}
      ></span>
      {/***** Shows the game or settings ****/}
      {gameOrSettings}
      {/**** Shows the winner component if the user wins ****/}
      {win && <Winner />}
    </div>
  );
}

export default Game;
