import { useState } from "react";

interface Props {
  onSave: (input: number) => void;
  inputValue: number;
  settings: {
    settingState: boolean;
    setSettingState: (number: boolean) => void;
  };
}

function Settings({ onSave, inputValue, settings }: Props) {
  const [number, setNumber] = useState(0);

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <label htmlFor="number">Number of letters</label>
      <input
        name="number"
        type="number"
        min="4"
        max="11"
        autoFocus
        placeholder={inputValue.toString()}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          if (!number || number > 11 || number < 4) {
            return;
          }
          onSave(number);
          settings.setSettingState(!settings.settingState);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Settings;
