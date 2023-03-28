import { useState } from "react";

interface Props {
  onSubmit: (input: string) => void;
  inputChars: number;
}

function GameInput({ onSubmit, inputChars }: Props) {
  const [text, setText] = useState("");

  return (
    <form
      className="gameinput"
      onSubmit={(e) => {
        e.preventDefault();
        if (text.length === inputChars) {
          onSubmit(text);
        } else {
          alert(`Ordet måste ha ${inputChars} bokstäver!`);
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
        placeholder={`Max ${inputChars} characters`}
      />
      <button>Enter</button>
    </form>
  );
}

export default GameInput;
