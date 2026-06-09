import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ProfileImage from "../assets/image.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
   
        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <img
            src={ProfileImage}
            alt="logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          <h1 className="font-semibold text-lg">
            RamPortfolio<span className="text-gray-500">.info</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li className="text-orange-500 cursor-pointer">HOME</li>
          <li className="hover:text-orange-500 cursor-pointer">FEATURES</li>
          <li className="hover:text-orange-500 cursor-pointer">PORTFOLIO</li>
          <li className="hover:text-orange-500 cursor-pointer">RESUME</li>
          <li className="hover:text-orange-500 cursor-pointer uppercase">HOBBIES</li>
          <li className="hover:text-orange-500 cursor-pointer">BLOG</li>
          <li className="hover:text-orange-500 cursor-pointer">CONTACT</li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition">
          Download CV
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-xl cursor-pointer" onClick={() => setOpen(true)}>
          <FaBars />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4 text-xl cursor-pointer" onClick={() => setOpen(false)}>
          <FaTimes />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 px-6 text-sm font-medium">
          <li className="text-orange-500 cursor-pointer">HOME</li>
          <li className="hover:text-orange-500 cursor-pointer">FEATURES</li>
          <li className="hover:text-orange-500 cursor-pointer">PORTFOLIO</li>
          <li className="hover:text-orange-500 cursor-pointer">RESUME</li>
          <li className="hover:text-orange-500 cursor-pointer uppercase">HOBBIES</li>
          <li className="hover:text-orange-500 cursor-pointer">BLOG</li>
          <li className="hover:text-orange-500 cursor-pointer">CONTACT</li>
        </ul>

        {/* Button */}
        <div className="px-6 mt-6">
          <button className="w-full bg-orange-500 text-white py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition">
            Download CV
          </button>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;