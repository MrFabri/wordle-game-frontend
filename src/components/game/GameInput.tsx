import { useState } from "react";

interface Props {
  onSubmit: (input: string) => void;
  inputLenght: number;
}

function GameInput({ onSubmit, inputLenght }: Props) {
  const [text, setText] = useState("");

  return (
    <form
      className="gameinput"
      onSubmit={(e) => {
        e.preventDefault();
        if (text.length === inputLenght) {
          onSubmit(text);
        } else {
          alert(`Ordet måste ha ${inputLenght} bokstäver!`);
        }
        setText("");
      }}
    >
      <input
        autoFocus
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Enter</button>
    </form>
  );
}

export default GameInput;
