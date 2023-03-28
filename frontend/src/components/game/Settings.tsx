import { useState } from "react";

interface Props {
  word: {
    lengt: number;
    setLengt: (input: number) => void;
  };
  settings: {
    toggle: () => void;
  };
}

function Settings({ word, settings }: Props) {
  const [number, setNumber] = useState(0);

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
        placeholder={word.lengt.toString()}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          if (!number || number > 11 || number < 4) {
            return;
          }
          word.setLengt(number);
          settings.toggle();
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Settings;
