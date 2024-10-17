"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk menutup menu saat item diklik
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar bg-blue-400">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Ghifa Portfolio</a>
      </div>
      <div className="flex-none hidden md:flex">
        {/* Menambahkan menu di navbar */}
        <div className="ml-4 flex space-x-4">
          <a href="#about" className="text-white hover:underline">About</a>
          <a href="#services" className="text-white hover:underline">Services</a>
          <a href="#contact" className="text-white hover:underline">Contact</a>
          <a href="#contact" className="text-white hover:underline">Galery</a>
        </div>
      </div>
      {/* Tombol untuk toggle menu di perangkat mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 top-16 w-48 bg-white border rounded shadow-lg md:hidden">
          <ul className="py-1">
            <li>
              <a href="/galery" onClick={closeMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About</a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Galery</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Productive</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
