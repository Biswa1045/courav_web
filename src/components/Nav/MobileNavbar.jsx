import React from "react";
import NavbarList from "./NavbarList";
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

const MobileNavbar = ({ nav, screenWidth, handleClose }) => {
  const menuIsShow = !nav || screenWidth > 800 ? "menu-hide" : "menu-show";
  return (
    <div className={`menu ${menuIsShow}`}>
     <Link to="/" className="w-full text-3xl font-bold text-primary">
         <img className="ml-3 mt-2" src={logo} alt="logo" width={100} height={100} />
        </Link>
      <NavbarList
        ulStyles="p-4"
        liStyles="border-b py-3 border-gray-600 after:content-none"
        onClick={handleClose}
      />
    </div>
  );
};

export default MobileNavbar;