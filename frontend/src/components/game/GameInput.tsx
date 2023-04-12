import { useState } from "react";

interface Props {
  onSubmit: (input: string) => Promise<void>;
  wordLength: number;
}

function GameInput({ onSubmit, wordLength }: Props) {
  const [text, setText] = useState("");

  return (
    <form
      className="gameinput"
      onSubmit={(e) => {
        e.preventDefault();
        if (text.length === wordLength) {
          onSubmit(text);
        } else {
          alert(`Ordet måste ha ${wordLength} bokstäver!`);
        }
        setText("");
      }}
    >
      <input
        autoComplete="off"
        autoFocus
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Max ${wordLength} characters`}
      />
      <button>Enter</button>
    </form>
  );
}

export default GameInput;
