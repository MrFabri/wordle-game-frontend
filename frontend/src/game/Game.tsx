import "./game.scss";
import { useState, useEffect } from "react";
import Settings from "@game/parts/settings/Settings";
import Gameboard from "@game/parts/board/Gameboard";
import Winner from "@game/parts/winner/Winner";
import ISettings from "@interfaces/settings.interface";
import IFeedback from "@/interfaces/feedback.interface";
import newGame from "@services/newGame";

function Game(): JSX.Element {
  const [gameId, setGameId] = useState<string>("");
  const [settings, setSettings] = useState<ISettings>({
    wordLength: 5,
    uniqueLetters: false,
  });
  const [settingState, setSettingState] = useState<boolean>(false);
  const [gameWinned, setGameWinned] = useState<boolean>(false);
  const [tries, setTries] = useState<number>(0);
  const [timerState, setTimer] = useState(true);
  const [feedback, setFeedback] = useState<IFeedback>([]);
  const [word, setWord] = useState<string>("");

  // Reset game
  const resetGame = (): void => {
    setTries(0);
    setFeedback([]);
    setGameWinned(false);
    setTimer(true);
  };

  // Function that updates the settings
  const handleSettings = (settings: ISettings): void => {
    setSettings(settings);
  };

  // New game
  useEffect(() => {
    (async () => {
      let data = await newGame(settings);
      setGameId(data.id);
    })();
  }, [settings, gameWinned]);

  // Functions for toggling the settings
  const toggleSettings = (): void => setSettingState(!settingState);

  return (
    <div className="game">
      <span
        className={settingState ? "close-icon" : "settings-icon"}
        onClick={() => toggleSettings()}
      ></span>

      {settingState ? (
        <Settings
          settings={settings}
          setSettings={handleSettings}
          toggleSettings={toggleSettings}
          resetGame={resetGame}
        />
      ) : (
        <Gameboard
          settings={settings}
          gameId={gameId}
          gameWinned={gameWinned}
          setGameWinned={setGameWinned}
          tries={tries}
          setTries={setTries}
          timer={{ shouldRun: timerState, handle: setTimer }}
          feedback={{ value: feedback, set: setFeedback }}
          setWord={setWord}
        />
      )}

      {gameWinned && <Winner resetGame={resetGame} tries={tries} word={word} />}
    </div>
  );
}

export default Game;
