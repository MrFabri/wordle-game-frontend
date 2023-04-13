import { useState } from "react";
import highscore from "@services/addToHighscore";

interface Props {
  resetGame: () => void;
  tries: number;
  word: string;
  gameId: string;
}

function Winner({ resetGame, tries, word, gameId }: Props) {
  const [name, setName] = useState<string>("");
  const [highscoreSaved, setHighscoreSaved] = useState<boolean>(false);

  const submit = async () => {
    if (name.length < 2) return alert("Please type your name");
    try {
      await highscore({ id: gameId, name });
      setHighscoreSaved(true);
    } catch (e) {
      console.log(e);
      return alert("An error occurred, try again!");
    }
  };

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

        {!highscoreSaved && (
          <>
            <p className="highscoreLabel">Upload your scores 📊📈📉</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
            >
              <input
                autoComplete="off"
                type="text"
                placeholder="Your name goes here"
                autoFocus
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <button>Submit</button>
            </form>
          </>
        )}

        {highscoreSaved && (
          <div className="highscoreSaved">
            <p>Your game has been saved succesfully ✅</p>
            <p>
              Visit <a href="/highscore">highscore</a>
            </p>
            <br />
            <br />
          </div>
        )}

        {/* Start new game */}
        <div className="buttonCont">
          <button onClick={resetGame}>Start new game</button>
        </div>
      </div>
    </div>
  );
}

export default Winner;
