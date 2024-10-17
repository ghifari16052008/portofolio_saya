// app/page.tsx
"use client";
import { useState, useEffect } from "react";

const Progress = () => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    // Interval untuk meningkatkan nilai progress secara bertahap
    const interval = setInterval(() => {
      setProgressValue((prevValue) => {
        if (prevValue >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevValue + 1; // Tambahkan nilai progress setiap interval
      });
    }, 30); // Sesuaikan kecepatan animasi dengan mengubah waktu interval (ms)

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <progress
        className="progress progress-primary w-56"
        value={progressValue}
        max="100"
      ></progress>
      <span className="ml-2">{progressValue}%</span>
    </div>
  );
}

export default Progress;