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
          <Link to="/information">Information</Link>
          <a href="/highscore">Highscore</a>
        </menu>
      </div>
    </nav>
  );
}

export default Nav;
