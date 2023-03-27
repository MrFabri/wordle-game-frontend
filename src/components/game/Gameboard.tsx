import GameInput from "./GameInput";

interface Props {
  inputLenght: number;
}

function Gameboard({ inputLenght }: Props) {
  const submit = (input: string): void => console.log(input);

  return (
    <>
      <h1>Gameboard</h1>
      <p>Guess the mystic word 👀</p>
      <GameInput onSubmit={submit} inputLenght={inputLenght} />
    </>
  );
}

export default Gameboard;
