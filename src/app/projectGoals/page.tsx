import React from "react";
import { FaCheckCircle, FaShieldAlt, FaRocket, FaUsers, FaChartLine } from "react-icons/fa";

const ProjectGoals = () => {
  const goals = [
    {
      title: "Antarmuka yang Ramah Pengguna",
      description: "Membuat antarmuka yang intuitif untuk navigasi yang lancar.",
      details: "Merancang tata letak yang mudah dinavigasi dengan menu yang jelas dan bagian yang terdefinisi dengan baik.",
      icon: <FaRocket className="text-blue-500 w-8 h-8 mb-2" />
    },
    {
      title: "Pembaruan Real-Time",
      description: "Mengimplementasikan pembaruan data real-time untuk menjaga pengguna tetap terinformasi.",
      details: "Menggunakan soket web untuk memperbarui antarmuka pengguna secara dinamis.",
      icon: <FaChartLine className="text-green-500 w-8 h-8 mb-2" />
    },
    {
      title: "Keamanan yang Ditingkatkan",
      description: "Meningkatkan langkah-langkah keamanan untuk melindungi data pengguna.",
      details: "Menggabungkan enkripsi, mekanisme login yang aman, dan teknik validasi data.",
      icon: <FaShieldAlt className="text-red-500 w-8 h-8 mb-2" />
    },
    {
      title: "Optimisasi Kinerja",
      description: "Mengoptimalkan kinerja untuk waktu muat yang lebih cepat dan responsivitas.",
      details: "Mengimplementasikan pemuatan malas dan strategi caching yang efisien.",
      icon: <FaCheckCircle className="text-yellow-500 w-8 h-8 mb-2" />
    },
    {
      title: "Keterlibatan Komunitas",
      description: "Mendorong keterlibatan komunitas melalui fitur interaktif.",
      details: "Memperkenalkan fitur seperti komentar, forum, dan sistem umpan balik pengguna.",
      icon: <FaUsers className="text-purple-500 w-8 h-8 mb-2" />
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-6 bg-gray-50 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Tujuan Proyek</h2>
        <p className="text-gray-700 text-center mb-6">
          Proyek kami bertujuan untuk mencapai tujuan berikut yang akan meningkatkan pengalaman pengguna dan mendorong keterlibatan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map((goal, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <div className="flex items-center">
                {goal.icon}
                <h3 className="text-xl font-semibold text-gray-800">{goal.title}</h3>
              </div>
              <p className="text-gray-600 mb-2">{goal.description}</p>
              <p className="text-gray-500">{goal.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGoals;
