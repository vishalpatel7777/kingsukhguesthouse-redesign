import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f7f4f0] px-6 py-4 shadow-sm">
      <div className="max-w-[1420px] mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="font-logo text-center leading-tight cursor-pointer"
        >
          <div className="text-3xl tracking-wide text-[#006d5b] leading-none">
            KING&nbsp;SUKH
          </div>
          <div className="text-sm tracking-widest text-[#006d5b] mt-0.5">
            Guest&nbsp;&nbsp;House
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-10 font-nav text-base text-[#333333]">
          <a href="#about" className="hover:text-teal-700">
            About
          </a>
          <a href="#rooms" className="hover:text-teal-700">
            Rooms
          </a>
          <a href="#services" className="hover:text-teal-700">
            Services
          </a>
          <a href="#contact" className="hover:text-teal-700">
            Contact
          </a>
          <a href="https://wa.link/at5ion">
            <button className="bg-[#2d5c52] hover:bg-[#1f3f38] text-white px-5 py-3 rounded-md text-sm transition">
              BOOK&nbsp; NOW
            </button>
          </a>
        </div>

        <div className="md:hidden text-2xl text-[#2d5c52] cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#f7f4f0] px-6 pt-4 pb-6 space-y-4 font-nav text-base text-[#333333]">
          <a href="#about" className="block hover:text-teal-700" onClick={toggleMenu}>
            About
          </a>
          <a href="#rooms" className="block hover:text-teal-700" onClick={toggleMenu}>
            Rooms
          </a>
          <a href="#services" className="block hover:text-teal-700" onClick={toggleMenu}>
            Services
          </a>
          <a href="#contact" className="block hover:text-teal-700" onClick={toggleMenu}>
            Contact
          </a>
          <a href="https://wa.link/at5ion" onClick={toggleMenu}>
            <button className="bg-[#2d5c52] hover:bg-[#1f3f38] text-white px-5 py-3 rounded-md text-sm transition w-full">
              BOOK&nbsp; NOW
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;