import { useState } from "react";
import ISettings from "@interfaces/settings.interface";

interface Props {
  settings: ISettings;
  setSettings: (settings: ISettings) => void;
  toggleSettings: () => void;
  resetGame: () => void;
}

function Settings({ settings, setSettings, toggleSettings, resetGame }: Props) {
  const [number, setNumber] = useState(settings.wordLength);
  const [bool, setBool] = useState(settings.uniqueLetters);

  const toggleBool = () => setBool(!bool);

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <label htmlFor="number">Number of letters</label>
      <input
        name="number"
        autoComplete="off"
        type="number"
        min="4"
        max="11"
        autoFocus
        placeholder={settings.wordLength.toString()}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />

      <br />

      <label htmlFor="">Unique Letters</label>
      <div className="field">
        <label className="switch" htmlFor="flag_translation">
          <input
            type="checkbox"
            id="flag_translation"
            name="flag_translation"
            checked={bool}
            onChange={toggleBool}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <br />

      <button
        onClick={() => {
          if (!number || number > 11 || number < 4) {
            return;
          }
          setSettings({
            wordLength: number,
            uniqueLetters: bool,
          });
          resetGame();
          toggleSettings();
        }}
      >
        Save
      </button>
      <br />
    </div>
  );
}

export default Settings;
