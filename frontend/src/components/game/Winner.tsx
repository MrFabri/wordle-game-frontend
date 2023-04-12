function Winner() {
  return (
    <div className="winner">
      <div className="winner-content">
        <h1>Congratulations!</h1>
        <p>You won the game</p>

        <form>
          <h3>Save your scores</h3>
          <input type="text" />
          <button>Submit</button>
        </form>

        <button>Start new game</button>
      </div>
    </div>
  );
}

export default Winner;
