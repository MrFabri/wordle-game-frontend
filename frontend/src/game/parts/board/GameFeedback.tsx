interface Props {
  feedback: { letter: string; result: string }[];
}

function GameFeedback({ feedback }: Props) {
  return (
    <>
      <div className="feedback-container">
        {feedback.map((obj, index) => {
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
