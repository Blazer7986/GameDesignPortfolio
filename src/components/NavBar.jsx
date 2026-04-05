import { navLinks } from "../constants/index.js";

const NavBar = () => {
  return (
    <header className="navbar bg-purple-200">
      <div className="inner">
        <a className="logo">Vianey | LFS</a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="desktop gap-2">
          <a href="/resume.pdf" className="contact-btn group">
            <div className="inner">
              <span>Resume</span>
            </div>
          </a>
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact</span>
            </div>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
