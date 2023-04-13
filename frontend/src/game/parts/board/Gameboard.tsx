import { useState } from "react";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";

import GameInput from "./GameInput";
import GameFeedback from "./GameFeedback";

import ISettings from "@interfaces/settings.interface";
import IFeedback from "@interfaces/feedback.interface";
import compareWords from "@services/compareWords";

interface Props {
  settings: ISettings;
  gameId: string;
  setGameWinned: (bool: boolean) => void;
}

function Gameboard({ settings, gameId, setGameWinned }: Props) {
  const [feedbacks, setFeedbacks] = useState<IFeedback>([]);
  const [tries, setTries] = useState<string[]>([]);

  const submit = async (input: string): Promise<void> => {
    const data = await compareWords({ id: gameId, guess: input });
    setTries(data.guesses);

    if (data.correct) {
      setGameWinned(true);
      setTimer(false);
      setFeedbacks([...feedbacks, data.feedback]);
    } else {
      setFeedbacks([...feedbacks, data.feedback]);
    }
  };

  const [timerShouldRun, setTimer] = useState(true);

  let gameInfo;
  if (tries.length > 0) {
    gameInfo = (
      <div className="attempts-n-timer">
        <div className="attempts">
          {tries.length} {tries.length === 1 ? "attempt" : "attempts"}
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
        {gameInfo}
      </div>

      {feedbacks.map((feedback, index) => {
        return <GameFeedback feedback={feedback} key={index} />;
      })}
      <br />
      <GameInput onSubmit={submit} wordLength={settings.wordLength} />
    </>
  );
}

export default Gameboard;
