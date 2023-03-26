import GameInput from "./GameInput";
import "./game.scss";

function Gameboard() {
  const submit = (input: string): void => console.log(input);

  return (
    <div className="gameboard">
      <h1>Gameboard</h1>
      <p>Guess the mystyc word 👀</p>
      <GameInput onSubmit={submit} />
    </div>
  );
}

export default Gameboard;
