import React from "react";

const SchoolSchedule = () => {
  const schedule = [
    { id: 1, day: "Senin", subjects: ["RPL", "Bahasa Inggris", "Bahasa Indonesia"] },
    { id: 2, day: "Selasa", subjects: ["Matematika", "PJOK", "PKN", "RPL (Basis Data)"] },
    { id: 3, day: "Rabu", subjects: ["BK (Public Speaking)", "Bahasa Jepang", "Bahasa Inggris", "Matematika", "Bahasa Indonesia"] },
    { id: 4, day: "Kamis", subjects: ["Agama", "RPL", "RPL"] },
    { id: 5, day: "Jumat", subjects: ["RPL", "RPL", "RPL"] },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-blue-100 shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">Hari</th>
              <th className="px-4 py-2">Mata Pelajaran</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map(entry => (
              <tr key={entry.id} className="hover:bg-blue-200">
                <td className="border px-4 py-2">{entry.day}</td>
                <td className="border px-4 py-2">{entry.subjects.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolSchedule;
