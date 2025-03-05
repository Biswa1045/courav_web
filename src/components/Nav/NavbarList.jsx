import React from "react";
import { Link } from "react-router-dom";

const NavbarList = ({ ulStyles, liStyles, onClick }) => {
  return (
    <ul className={`capitalize ${ulStyles}`}>
      <li className={`nav-item ${liStyles}`} onClick={onClick}>
        <Link to="/" className="block w-full">
          Home
        </Link>
      </li>
      <li className={`nav-item ${liStyles}`} onClick={onClick}>
        <Link to="/contact" className="block w-full">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavbarList;