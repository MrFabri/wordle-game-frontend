import { IWordFeedback } from "@/interfaces/feedback.interface";

interface Props {
  wordFeedback: IWordFeedback;
}

function GameFeedback({ wordFeedback }: Props) {
  return (
    <>
      <div className="feedback-container">
        {wordFeedback.map((obj, index) => {
          return (
            <div
              key={index}
              className={`feedback ${
                obj.result === "misplaced" ? "misplaced" : ""
              } ${obj.result === "correct" ? "correct" : ""} ${
                obj.result === "incorrect" ? "incorrect" : ""
              }`}
            >
              <p>{obj.letter.toLocaleUpperCase()}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GameFeedback;
