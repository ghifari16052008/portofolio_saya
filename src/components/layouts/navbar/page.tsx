// components/layouts/navbar/page.tsx
"use client";
import React, { useState, useEffect } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-black");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background based on scroll position
      if (window.scrollY > 50) {
        setBgColor("bg-white text-black"); // Change to white with black text
      } else {
        setBgColor("bg-black text-white"); // Change back to black with white text
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${bgColor} fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 transition-colors duration-300`}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Ghifa Portfolio</a>
      </div>
      <div className="flex items-center">
        <button title="Menu" onClick={toggleMenu} className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 bottom-0 w-3/4 sm:w-1/2 md:w-1/4 bg-gradient-to-r from-gray-800 to-black text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <div className="flex flex-col h-full p-4">
          <ul className="flex flex-col items-start justify-center space-y-2">
            <h2 className="font-semibold mb-2 text-lg">Menu</h2>
            <li>
              <a href="/about" onClick={closeMenu} className="block text-md hover:bg-gray-700 p-1 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu} className="block text-md hover:bg-gray-700 p-1 transition-colors">
                My Gallery
              </a>
            </li>
            <li>
              <a href="/tasks" onClick={closeMenu} className="block text-md hover:bg-gray-700 p-1 transition-colors">
                My Productive
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={closeMenu} className="block text-md hover:bg-gray-700 p-1 transition-colors">
                Gallery
              </a>
            </li>
          </ul>
          <div className="mt-auto">
            <h3 className="font-semibold">Kontak Saya</h3>
            <p>Email: fauzighifari5@gmail.com</p>
            <p>No. Telepon: 085878739862</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
