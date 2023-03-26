import { useState } from "react";

interface Props {
  onSubmit: (input: string) => void;
}

function GameInput({ onSubmit }: Props) {
  const [text, setText] = useState("");

  return (
    <form
      className="gameinput"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text);
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
