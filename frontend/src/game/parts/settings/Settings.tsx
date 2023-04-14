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
      <label htmlFor="number">
        Number of letters <small>2 - 11</small>
      </label>
      <input
        name="number"
        autoComplete="off"
        type="number"
        min="2"
        max="11"
        autoFocus
        placeholder={settings.wordLength.toString()}
        onChange={(e) => {
          const num = Number(e.target.value);
          setNumber(num);
        }}
      />

      <br />

      <label htmlFor="">
        Unique Letters <small>Yes / No</small>
      </label>
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
          if (!number || isNaN(number) || number > 11 || number < 2) {
            return alert("You must pass a valid number between 2 and 11");
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
