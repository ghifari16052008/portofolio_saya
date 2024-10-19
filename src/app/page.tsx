// app/page.tsx
import '@/style/styles.css';

// import Navbar from "@/components/layouts/navbar/page";

const AnimatedText = ({ text }: { text: string }) => {
  const letters = text.split('');

  return (
    <div className="flex overflow-hidden text-2xl md:text-3xl lg:text-5xl">
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`animate-fadeIn`} // Kelas untuk animasi
          style={{ animationDelay: `${index * 0.1}s` }} // Menambahkan delay untuk setiap huruf
        >
          {letter}
        </span>
      ))}
    </div>
  );
};



export default function Home() {
  return (
    <>
    
      <div className="bg-slate-500 text-white min-h-screen">
       
        <div className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
          {/* <img
            alt="..."
            src="/images/ghifariOne.png"
            data-aos="fade-up"
            className="w-48 md:w-48 lg:w-64 mb-4" // Tambahkan ukuran yang berbeda untuk berbagai layar
          /> */}
          <AnimatedText text="ムハマド・ギファル・ファウジ" />
          <AnimatedText text="Muhammad Ghifari Fauzi" />
          
        </div>
        {/* Riwayat Pendidikan */}
        <div data-aos="fade-up">
        <h2 className="text-center mt-6 text-3xl font-semibold" >Education</h2>
        </div>
        
        <ul className="timeline timeline-item-left timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <hr className="border-white" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2014-2020</time>
              <div className="text-lg font-black">SDN Rejosari</div>
            </div>
            <hr className="border-white" />
          </li>
          <li>
            <hr className="border-white" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">2020-2023</time>
              <div className="text-lg font-black">SMP Negeri 18 Purworejo</div>
            </div>
            <hr className="border-white" />
          </li>
          <li>
            <hr className="border-white" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2023-2026</time>
              <div className="text-lg font-black">SMK Nurul Islam</div>
            </div>
          </li>
        </ul>
        {/* <Card children="baju" /> */}
      </div>
    </>
  );
}
