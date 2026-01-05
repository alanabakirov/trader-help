import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="header">
      <div className={`header_burger_button ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`header_menu_container ${isOpen ? "active" : ""}`} onClick={closeMenu}>
        <ul className="header_ul" onClick={(e) => e.stopPropagation()}>
            <li className="header_li">
                <NavLink to="/" onClick={closeMenu}>Main</NavLink>
            </li>
            <li className="header_li">
                <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            </li>
            <li className="header_li">
                <NavLink to="/tasks" onClick={closeMenu}>Tasks</NavLink>
            </li>
            <li className="header_li">
                <NavLink to="/stocks" onClick={closeMenu}>Stocks</NavLink>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;