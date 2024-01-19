import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center pt-4 bg-danger">
      <h1 className="main-heading">Javier Rodriguez</h1>
      <nav>
        <ul className="no-bullet d-flex fs-4 gap-4 pt-2 link-underline link-underline-opacity-0">
          <Link to="/" className="link-dark">
            Home
          </Link>
          <Link to="/projects" className="link-dark">
            Projects
          </Link>
          <Link to="/contact" className="link-dark">
            Contact Me
          </Link>
        </ul>
      </nav>
    </header>
  );
}
