import { Link } from "react-router-dom";
import "./navbar.css";
import CartButtons from "../CartButtons/CartButtons";
import { links } from "../../utils/constants";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h1 className="shop-name">E-shopper</h1>
          </Link>
          <button type="button" className="nav-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <CartButtons />
      </div>
    </nav>
  );
}
