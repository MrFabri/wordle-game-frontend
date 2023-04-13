interface Props {
  resetGame: () => void;
  tries: number;
  word: string;
}

function Winner({ resetGame, tries, word }: Props) {
  return (
    <div className="winner">
      <div className="winner-content">
        <div className="congrats">
          <h1>🎉 Congratulations! 🎉</h1>
          <p>
            The word was "{word}" and you guessed it in {tries}{" "}
            {tries > 1 ? "tries" : "try"}
          </p>
        </div>
        <br />
        {/* Highscore form */}
        <p className="highscoreLabel">Upload your scores 📊📈📉</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            autoComplete="off"
            type="text"
            placeholder="Your name goes here"
            autoFocus
          />
          <button>Submit</button>
        </form>

        {/* Start new game */}
        <div className="buttonCont">
          <button onClick={resetGame}>Start new game</button>
        </div>
      </div>
    </div>
  );
}

export default Winner;
