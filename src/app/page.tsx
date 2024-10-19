// app/page.tsx
import '@/style/styles.css';
import Image from 'next/image';
import Link from 'next/link';

const AnimatedText = ({ text }: { text: string }) => {
  const letters = text.split('');

  return (
    <div className="flex overflow-hidden text-2xl md:text-3xl lg:text-5xl">
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`animate-fadeIn`}
          style={{ animationDelay: `${index * 0.1}s` }}
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
          <AnimatedText text="ムハマド・ギファル・ファウジ" />
          <AnimatedText text="Muhammad Ghifari Fauzi" />
        </div>

        {/* Riwayat Pendidikan */}
        <div data-aos="fade-up">
          <h2 className="text-center mt-6 text-3xl font-semibold">Education</h2>
        </div>

        <ul className="timeline timeline-item-left timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {/* Riwayat Pendidikan di sini */}
        </ul>

        {/* Keterampilan */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="flex flex-wrap justify-center mt-4">
            {[
              { name: "JavaScript", img: "/images/javascript.png" },
              { name: "TypeScript", img: "/images/typescript.png" },
              { name: "React", img: "/images/react.png" },
              { name: "Next.js", img: "/images/nextjs.png" },
              { name: "Node.js", img: "/images/nodejs.png" },
              { name: "Tailwind CSS", img: "/images/tailwindcss.png" }
            ].map(({ name, img }) => (
              <div className="relative group m-2" key={name}>
                <span className="bg-slate-600 text-white py-2 px-4 rounded-lg">{name}</span>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-16 opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 ">
                  <Image src={img} alt={name} width={100} height={100} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
