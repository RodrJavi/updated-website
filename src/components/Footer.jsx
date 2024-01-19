import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="d-flex justify-content-center gap-4 p-3">
      <Link
        to="https://github.com/RodrJavi"
        target="_blank"
        className="text-black">
        <FaGithub size={40} />
      </Link>
      <Link
        to="https://www.instagram.com/the.yung.javi/"
        target="_blank"
        className="text-black">
        <FaInstagram size={40} />
      </Link>
      <Link
        to="https://www.linkedin.com/in/rodriguezjavi/"
        target="_blank"
        className="text-black">
        <FaLinkedin size={40} />
      </Link>
    </footer>
  );
}
