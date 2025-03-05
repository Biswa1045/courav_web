import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MobileNavbar from "./MobileNavbar";
import NavbarList from "./NavbarList";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleCloseMenu = () => {
    setNav(false);
  };

  return (
    <header className="h-[20vh]">
      <nav className="container text-white flex justify-between items-center px-4 mx-auto h-24">
        <Link to="/" className="w-full text-3xl font-bold text-primary">
         <img src={logo} alt="logo" width={100} height={100} />
        </Link>
        <NavbarList ulStyles="hidden gap-12 md:flex" liStyles="" />
        <div onClick={handleNav} className="cursor-pointer block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <MobileNavbar 
          nav={nav} 
          screenWidth={screenWidth} 
          handleClose={handleCloseMenu}
        />
      </nav>
    </header>
  );
};

export default Navbar;