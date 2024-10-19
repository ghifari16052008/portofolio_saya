import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-6xl">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-1/4 bg-gray-200 p-4">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-2">
            <li className="text-blue-500 hover:underline"><a href="#projects">Projects</a></li>
            <li className="text-blue-500 hover:underline"><a href="#blog">Blog</a></li>
            <li className="text-blue-500 hover:underline"><a href="#contact">Contact</a></li>
          </ul>
          <h2 className="text-xl font-semibold mt-4">Social Media</h2>
          <ul className="mt-2">
            <li className="text-blue-500 hover:underline"><a href="https://twitter.com/yourprofile">Twitter</a></li>
            <li className="text-blue-500 hover:underline"><a href="https://github.com/ghifari16052008">GitHub</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/016/891/253/small_2x/alone-boy-sad-silhouette-of-very-sad-man-free-vector.jpg" // Ganti dengan URL gambar profil Anda
            alt="Profile"
            className="rounded-full mx-auto w-32 mb-4"
          />
          <p className="text-gray-700 text-center">
            Hi! I'm [Muhammad Ghifari Fauzi], a passionate developer with a love for creating
            intuitive and dynamic user experiences. I enjoy working with
            JavaScript, React, and building projects that make a difference.
          </p>
          <h2 className="text-xl font-semibold mt-4">My Skills:</h2>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Tailwind CSS</li>
            <li>Next.js</li>
          </ul>
          <h2 className="text-xl font-semibold mt-4">Contact Me:</h2>
          <p className="text-gray-600 mt-2">Email: fauzighifari5@gmail.com</p>
          <p className="text-gray-600">LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500">yourprofile</a></p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
