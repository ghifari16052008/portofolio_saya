"use client"
import React, { useState } from "react";
import Image from 'next/image';

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Mengubah state menu
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 bg-opacity-90">
      <div className="flex w-full max-w-6xl bg-gray-800 rounded-lg shadow-lg p-4 relative">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-1/4 bg-gray-700 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-200">Quick Links</h2>
          <ul className="mt-6">
            <li className="text-blue-400 hover:underline hover:text-blue-300 transition duration-200 ease-in-out">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-blue-400 hover:underline hover:text-blue-300 transition duration-200 ease-in-out">
              <a href="#blog">Blog</a>
            </li>
            <li className="text-blue-400 hover:underline hover:text-blue-300 transition duration-200 ease-in-out">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-200 mt-4">Social Media</h2>
          <ul className="mt-2">
            <li className="text-blue-400 hover:underline hover:text-blue-300 transition duration-200 ease-in-out">
              <a href="https://twitter.com/yourprofile">Twitter</a>
            </li>
            <li className="text-blue-400 hover:underline hover:text-blue-300 transition duration-200 ease-in-out">
              <a href="https://github.com/ghifari16052008">GitHub</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full mx-auto border border-gray-600">
          <h1 className="text-3xl font-bold text-center mt-6 mb-4 text-gray-200">About Me</h1>
          <div className="rounded-full overflow-hidden w-32 h-32 mx-auto border border-gray-600 shadow-md">
            <Image
              src="/images/gambar.jpg" // Ganti dengan URL gambar
              alt="External Image"
              width={500}
              height={300}
            />
          </div>
          <p className="text-gray-300 text-center">
            Hi! I&apos;m [Muhammad Ghifari Fauzi], a passionate developer with a love for creating
            intuitive and dynamic user experiences. I specialize in
            JavaScript, React, and building projects that make a difference.
          </p>
          <h2 className="text-xl font-semibold mt-4 text-gray-200">My Skills:</h2>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>Next.js</li>
          </ul>
          <h2 className="text-xl font-semibold mt-4 text-gray-200">Contact Me:</h2>
          <p className="text-gray-300 mt-2">Email: fauzighifari5@gmail.com</p>
          <p className="text-gray-300">
           Profile :{" "}
            <a href="#" onClick={toggleMenu} className="text-blue-400 hover:underline">
            get to know me farr
            </a>
          </p>
        </div>
      </div>

      {/* Navbar untuk Profile */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-64 bg-gray-800 shadow-lg h-1/2 p-4 z-50">
          <h2 className="text-xl font-semibold text-gray-200">Profile Menu</h2>
          <ul className="mt-2">
            <li className="text-gray-300 hover:underline">
              <a href="#projects">My Projects</a>
            </li>
            <li className="text-gray-300 hover:underline">
              <a href="#blog">My Blog</a>
            </li>
            <li className="text-gray-300 hover:underline">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
          <button onClick={toggleMenu} className="mt-4 text-red-400">Close</button>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
