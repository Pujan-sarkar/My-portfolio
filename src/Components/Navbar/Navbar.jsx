import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  const handleMenuToggle = () => {
    openMenu(!menu);
    setShowmenu(!showMenu); // Toggles the visibility of the menu icon
  };

  return (
    <nav className="relative z-50">
      {/* Menu Toggle Icon */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="absolute right-10 top-6 text-white cursor-pointer md:hidden"
          onClick={handleMenuToggle}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="absolute right-10 top-6 text-white cursor-pointer md:hidden"
          onClick={handleMenuToggle}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-full h-full bg-gray-900 bg-opacity-90 backdrop-blur-xl p-8 transition-transform duration-300 md:hidden`}
      >
        {/* Close Button */}
        <RiCloseLine
          size={30}
          className="absolute right-8 top-8 text-white cursor-pointer"
          onClick={handleMenuToggle}
        />
        
        {/* Menu Logo */}
        <span className="text-2xl font-bold tracking-wide text-white">
          Portfolio
        </span>
        
        {/* Menu Items */}
        <ul className="mt-12 space-y-6 text-center">
          <li>
            <a href="#About" className="text-white text-lg hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#Experience" className="text-white text-lg hover:text-gray-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#Projects" className="text-white text-lg hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#Footer" className="text-white text-lg hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center px-10 pt-6 md:px-20 text-white">
        <span className="text-xl font-bold tracking-wide">Portfolio</span>
        <ul className="flex space-x-6">
          <a href="#About">
            <li className="text-md transition-all duration-300 p-1">About</li>
          </a>
          <a href="#Experience">
            <li className="text-md transition-all duration-300 p-1">Experience</li>
          </a>
          <a href="#Projects">
            <li className="text-md transition-all duration-300 p-1">Projects</li>
          </a>
          <a href="#Footer">
            <li className="text-md transition-all duration-300 p-1">Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;