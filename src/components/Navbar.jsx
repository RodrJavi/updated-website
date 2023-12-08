import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center pt-4 bg-danger">
      <h1 className="main-heading">Javier Rodriguez</h1>
      <nav>
        <ul className="no-bullet d-flex fs-4 gap-4 pt-2">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </ul>
      </nav>
    </header>
  );
}
