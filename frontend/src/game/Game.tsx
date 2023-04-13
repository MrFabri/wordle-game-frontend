import "./game.scss";
import { useState, useEffect } from "react";
import Settings from "@game/parts/settings/Settings";
import Gameboard from "@game/parts/board/Gameboard";
import Winner from "@game/parts/winner/Winner";
import ISettings from "@interfaces/settings.interface";
import newGame from "@services/newGame";

function Game(): JSX.Element {
  const [gameId, setGameId] = useState<string>("");
  const [settings, setSettings] = useState<ISettings>({
    wordLength: 5,
    uniqueLetters: false,
  });
  const [settingState, setSettingState] = useState<boolean>(false);
  const [gameWinned, setGameWinned] = useState<boolean>(false);

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
  }, [settings]);

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
        />
      ) : (
        <Gameboard
          settings={settings}
          gameId={gameId}
          setGameWinned={setGameWinned}
        />
      )}

      {gameWinned && <Winner />}
    </div>
  );
}

export default Game;
