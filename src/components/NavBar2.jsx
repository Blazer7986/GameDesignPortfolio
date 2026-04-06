import SubNavBar from "./SubNavBar.jsx";
import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <header className="navbar bg-purple-200">
      <div className="inner">
        <a className="logo">Vianey Rivera </a>

        <SubNavBar />

        <nav className="desktop gap-2">
          <a
            href="/images/personal/GameDesignResume.pdf"
            target="_blank"
            className="contact-btn group"
          >
            <div className="inner">
              <span>Resume</span>
            </div>
          </a>
          <Link to="/contact" className="contact-btn group">
            <div className="inner">
              <span>Contact</span>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar2;
