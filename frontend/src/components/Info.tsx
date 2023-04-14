function Info() {
  return (
    <div className="info">
      <br />
      <h2 style={{ fontSize: "1.6rem" }}>Information</h2>
      <p>This is a very cool game to spend some time :D</p>

      <hr />

      <h2>Game</h2>
      <p>The game will randomly chooses a word with the default settings.</p>
      <p>
        You have to guess the mysterious world, the game will provide feedback
        to help you guess the word.
      </p>
      <p>
        When you guess the word right, you will have the option to upload your
        scores to the{" "}
        <a
          href="/highscore"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          highscore
        </a>{" "}
        list.
      </p>

      <hr />

      <h2>Settings</h2>
      <ul>
        <li>
          <b>Word length</b>
          <p>Choose how many letters the word should have</p>
        </li>

        <li>
          <b>Unique letters</b>
          <p>
            Here you can choose whether the word should contain repeated letters
          </p>
        </li>
      </ul>

      <hr />

      <h2>Website</h2>

      <p>The whole website and server has been developed using TypeScript</p>
      <br />
      <ul>
        <li>
          <b>Frontend</b>
          <p>React app created using vite as a project generator and bundler</p>
          <p>The app contains 2 pages: the game and an Information page</p>
        </li>
        <br />
        <li>
          <b>Backend</b>
          <p>Powered by Express</p>
          <p>Uses ejs as engine template and mongodb for the database</p>
          <p>/api/* routes are used for powering the game api</p>
          <p>
            /highscore/ is a SSR page which is rendered with EJS template engine
          </p>
        </li>
      </ul>
      <br />
      <br />
    </div>
  );
}

export default Info;
