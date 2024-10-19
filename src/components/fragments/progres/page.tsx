// app/page.tsx
"use client";
import { useState, useEffect } from "react";

const Progress = () => {
  const [progressValues, setProgressValues] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const intervals = progressValues.map((_, index) => {
      const max = [100, 100, 70, 80][index]; // Nilai maksimum untuk setiap progress bar
      const speed = [30, 50, 40, 60][index]; // Kecepatan update untuk setiap progress bar
      
      // Membuat interval untuk setiap progress bar
      return setInterval(() => {
        setProgressValues((prevValues) => {
          const newValue = prevValues[index] + 1;
          // Jika nilai melebihi atau mencapai maksimum, hentikan interval
          if (newValue >= max) {
            clearInterval(intervals[index]);
            return prevValues.map((value, idx) => (idx === index ? max : value));
          }
          // Jika tidak, perbarui nilai progress
          return prevValues.map((value, idx) => (idx === index ? newValue : value));
        });
      }, speed); // Interval berdasarkan kecepatan yang telah ditentukan
    });

    // Membersihkan semua interval saat komponen di-unmount
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="p-4 space-y-4">
      <div>
        <progress
          className="progress progress-primary w-56"
          value={progressValues[0]}
          max="100"
        ></progress>
        <span className="ml-2">{progressValues[0]}%</span>
      </div>
      <div>
        <progress
          className="progress progress-primary w-56"
          value={progressValues[1]}
          max="100"
        ></progress>
        <span className="ml-2">{progressValues[1]}%</span>
      </div>
      <div>
        <progress
          className="progress progress-primary w-56"
          value={Math.floor((progressValues[2] / 70) * 100)} // Menghitung persentase untuk bar ketiga
          max="100"
        ></progress>
        <span className="ml-2">{progressValues[2]}%</span>
      </div>
      <div>
        <progress
          className="progress progress-primary w-56"
          value={Math.floor((progressValues[3] / 80) * 100)} // Menghitung persentase untuk bar keempat
          max="100"
        ></progress>
        <span className="ml-2">{progressValues[3]}%</span>
      </div>
    </div>
  );
};

export default Progress;
