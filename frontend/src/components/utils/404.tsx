import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>Page Not Found</h2>
      <p>404 Error, try again later later ⏳</p>
      <Link to={"/"}>Go home</Link>
    </div>
  );
}

export default NotFound;
