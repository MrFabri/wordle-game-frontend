import GameInput from "./GameInput";
import GameFeedback from "./GameFeedback";
import getFeedback from "../../helpers/feedback";
import { useState } from "react";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";

interface Props {
  word: {
    length: number;
    value: string;
    tries: number;
  };
  setWin: (winner: boolean) => void;
  win: boolean;
  incrementTries: () => void;
}

function Gameboard({ word, setWin, win, incrementTries }: Props) {
  type feedbacks = { letter: string; result: string }[][];

  const [feedbacks, setFeedbacks] = useState<feedbacks>([]);

  const submit = (input: string): void => {
    if (input === word.value) {
      setWin(true);
      incrementTries();
      setTimer(false);
    } else {
      const data = getFeedback(word.value, input);
      console.log(data);
      incrementTries();
      setFeedbacks([...feedbacks, data]);
    }
  };

  const [timerShouldRun, setTimer] = useState(true);

  let attemptsAndTimer;
  if (word.tries > 0) {
    attemptsAndTimer = (
      <div className="attempts-n-timer">
        <div className="attempts">
          {word.tries} {word.tries === 1 ? "attempt" : "attempts"}
        </div>

        <div>
          <div className="timer-icon"></div>
          <Timer
            active={timerShouldRun}
            duration={null}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Timecode />
          </Timer>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>Gameboard</h1>

      <div className="gameText">
        <p>Guess the mystic word 👀</p>
        {attemptsAndTimer}
      </div>

      {feedbacks.map((feedback, index) => {
        return <GameFeedback feedback={feedback} key={index} />;
      })}
      <br />
      {!win && <GameInput onSubmit={submit} inputChars={word.length} />}
      {win && <br></br>}
    </>
  );
}

export default Gameboard;
