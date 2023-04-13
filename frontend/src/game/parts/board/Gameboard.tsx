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
  gameWinned: boolean;
  setGameWinned: (bool: boolean) => void;
  tries: number;
  setTries: (tries: number) => void;
  timer: {
    shouldRun: boolean;
    handle: (bool: boolean) => void;
  };
  feedback: {
    value: IFeedback;
    set: (feedback: IFeedback) => void;
  };
  setWord: (word: string) => void;
}

function Gameboard({
  settings,
  gameId,
  gameWinned,
  setGameWinned,
  tries,
  setTries,
  timer,
  feedback,
  setWord,
}: Props) {
  const submit = async (input: string): Promise<void> => {
    const data = await compareWords({ id: gameId, guess: input });
    setTries(data.guesses.length);

    if (data.correct) {
      setGameWinned(true);
      timer.handle(false);
      feedback.set([...feedback.value, data.feedback]);
      setWord(data.word);
    } else {
      feedback.set([...feedback.value, data.feedback]);
    }
  };

  let gameInfo;
  if (tries > 0) {
    gameInfo = (
      <div className="attempts-n-timer">
        <div className="attempts">
          {tries} {tries === 1 ? "attempt" : "attempts"}
        </div>

        <div>
          <div className="timer-icon"></div>
          <Timer
            active={timer.shouldRun}
            duration={null}
            // onTimeUpdate={console.log}
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

      {feedback.value.map((wordFeed, index) => {
        return <GameFeedback wordFeedback={wordFeed} key={index} />;
      })}
      <br />
      {!gameWinned && (
        <GameInput onSubmit={submit} wordLength={settings.wordLength} />
      )}
    </>
  );
}

export default Gameboard;
