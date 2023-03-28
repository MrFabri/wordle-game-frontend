import GameInput from "./GameInput";
import GameFeedback from "./GameFeedback";
import getFeedback from "../../services/feedback";
import { useState } from "react";

interface Props {
  word: {
    length: number;
    value: string;
  };
  winner: (winner: boolean) => void;
}

function Gameboard({ word, winner }: Props) {
  type feedbacks = { letter: string; result: string }[][];

  const [feedbacks, setFeedbacks] = useState<feedbacks>([]);

  const submit = (input: string): void => {
    if (input === word.value) {
      winner(true);
    } else {
      const data = getFeedback(word.value, input);
      console.log(data);
      setFeedbacks([...feedbacks, data]);
    }
  };

  return (
    <>
      <h1>Gameboard</h1>
      <p>Guess the mystic word 👀</p>
      {feedbacks.map((feedback, index) => {
        return <GameFeedback feedback={feedback} key={index} />;
      })}
      <br />
      <GameInput onSubmit={submit} inputChars={word.length} />
    </>
  );
}

export default Gameboard;
