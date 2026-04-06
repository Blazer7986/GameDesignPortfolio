import { subNavLinks } from "../constants/index.js";
import { Link } from "react-router-dom";

const SubNavBar = () => {
  return (
    <nav className="desktop">
      <ul>
        {subNavLinks.map(({ link, name }) => (
          <li key={name} className="group">
            <Link to={link}>
              <span>{name}</span>
              <span className="underline"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubNavBar;
