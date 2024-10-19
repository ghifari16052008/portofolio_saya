// import React from 'react';
// import '../../../style/styles.css';

// interface VideoTextMaskProps {
//   text: string;
//   videoSrc: string;
// }

// const VideoTextMask: React.FC<VideoTextMaskProps> = ({ text, videoSrc }) => {
//   return (
//     <div className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
//       {/* Gambar */}
//       <img
//         alt="..."
//         src="/images/ghifariOne.png"
//         data-aos="fade-up"
//         className="w-48 md:w-48 lg:w-64 mb-4" // Tambahkan ukuran yang berbeda untuk berbagai layar
//       />
      
//       {/* Video Background */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src={videoSrc}
//         autoPlay
//         muted
//         loop
//       />

//       {/* Masked Text */}
//       <h1
//         className="text-3xl md:text-5xl lg:text-7xl font-bold relative video-text-mask animate-move bg-clip-text text-center"
//         style={{
//           backgroundImage: `url(${videoSrc})`,
//           WebkitBackgroundClip: 'text',
//           color: 'transparent',
//         }}
//       >
//         {text}
//       </h1>
//     </div>
//   );
// };

// export default VideoTextMask;
