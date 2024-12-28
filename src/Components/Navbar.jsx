import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { CiMenuFries } from "react-icons/ci";
import { MdShowChart } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="navbar">
      <div className="logo">
        <MdShowChart className="logo-icon" />
      </div>
      <nav>
        <ul className={`${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/stocks">STOCKS</NavLink>
          </li>
          <li>
            <NavLink to="/news">NEWS</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
          </li>
          <li className="res-profile">
            <NavLink to="/profile">Create Profile</NavLink>
          </li>
        </ul>
        <div className="profile">
          <NavLink to="/profile">Create Profile</NavLink>
        </div>
      </nav>
      <div onClick={toggleMenu} className="menu">
        {isOpen ? (
          <CgClose className="menu-icon" />
        ) : (
          <CiMenuFries className="menu-icon" />
        )}
      </div>
    </header>
  );
}
