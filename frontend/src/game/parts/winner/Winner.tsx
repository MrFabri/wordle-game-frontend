function Winner() {
  return (
    <div className="winner">
      <div className="winner-content">
        <h1>Congratulations!</h1>
        <p>You won the game</p>
        <br />
        <p>Save your scores:</p>
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

        <div className="buttonCont">
          <button>Start new game</button>
        </div>
      </div>
    </div>
  );
}

export default Winner;
