import { Link } from "react-router-dom";
import { links } from "../../utils/constants";
import "./sidebar.css";
import CartButtons from "../CartButtons/CartButtons";
import { useMenuContext } from "../../contexts/MenuContext";

export default function Sidebar() {
  const { isMenuOpen, closeMenu } = useMenuContext();
  return (
    <div className="sidebar-container">
      <aside className={`sidebar ${isMenuOpen ? "show-sidebar" : ""}`}>
        <div className="sidebar-header">
          <h1 className="shop-name">E-shopper</h1>
          <button className="close-btn" onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeMenu}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </aside>
    </div>
  );
}
