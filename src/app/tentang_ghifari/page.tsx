import React from "react";
import Image from 'next/image';
const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 bg-opacity-90">
      <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg p-4">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-1/4 bg-gray-300 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Quick Links</h2>
          <ul className="mt-6">
            <li className="text-blue-600 hover:underline hover:text-blue-800 transition duration-200 ease-in-out">
              <a href="#projects" className="">Projects</a>
            </li>
            <li className="text-blue-600 hover:underline hover:text-blue-800 transition duration-200 ease-in-out">
              <a href="#blog">Blog</a>
            </li>
            <li className="text-blue-600 hover:underline hover:text-blue-800 transition duration-200 ease-in-out">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">Social Media</h2>
          <ul className="mt-2">
            <li className="text-blue-600 hover:underline hover:text-blue-800 transition duration-200 ease-in-out">
              <a href="https://twitter.com/yourprofile">Twitter</a>
            </li>
            <li className="text-blue-600 hover:underline hover:text-blue-800 transition duration-200 ease-in-out">
              <a href="https://github.com/ghifari16052008">GitHub</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-auto border border-gray-200">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">About Me</h1>
           <div className="rounded-full overflow-hidden w-32 h-32 mx-auto border border-gray-300 shadow-md">
          <Image
            src="/images/gambar.jpg" // Ganti dengan URL gambar
            alt="External Image"
            width={500}
            height={300}
          />
          </div>
          <p className="text-gray-700 text-center">
            Hi! I&apos;m [Muhammad Ghifari Fauzi], a passionate developer with a love for creating
            intuitive and dynamic user experiences. language programing with
            JavaScript, React, and building projects that make a difference.
          </p>
          <h2 className="text-xl font-semibold mt-4 text-gray-800">My Skills:</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>Next.js</li>
          </ul>
          <h2 className="text-xl font-semibold mt-4 text-gray-800">Contact Me:</h2>
          <p className="text-gray-600 mt-2">Email: fauzighifari5@gmail.com</p>
          <p className="text-gray-600">
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">
              yourprofile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
