import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="container">
        <h1 className="logo" onClick={() => navigate("/")}>
          Wordle Game
        </h1>
        <menu>
          <Link to="/info">Info</Link>
          <Link to="/highscore">Highscore</Link>
        </menu>
      </div>
    </nav>
  );
}

export default Nav;
