"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Definisikan tipe untuk props Alert
interface AlertProps {
  message: string;
}

const Footer = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Efek scroll halus
    });
  };

  const handleTwitterClick = () => {
    setShowAlert(true); // Tampilkan alert ketika ikon Twitter diklik
    setTimeout(() => setShowAlert(false), 3000); // Sembunyikan alert setelah 3 detik
  };

  // Komponen Alert dengan props bertipe AlertProps
  const Alert: React.FC<AlertProps> = ({ message }) => {
    return (
      <div role="alert" className="alert flex items-center p-4 fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>{message}</span>
      </div>
    );
  };
  
  return (
    <div>
      {/* Tampilkan Alert jika showAlert true */}
      {showAlert && <Alert message="Twitter isn't ready yet" />}
      
      <footer className="footer bg-base-300 relative text-base-content h-full p-10">
        <nav>
          <h6 className="footer-title">About Me</h6>
          <p className="mb-2">Jl. Bintara Jaya, Kota Bekasi</p> {/* Tambahkan alamat di sini */}
          <a className="link link-hover">About us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a onClick={handleTwitterClick}>
              <Image
                src="/images/twitter.jpg"
                alt="Twitter Icon"
                width={25}
                height={25}
              />
            </a>
            <Link title="Follow us on YouTube" href="https://www.youtube.com/channel/UCaczhpT-zButEvlMfeLWDMA">
              <Image
                src="/images/youtube.jpg"
                alt="YouTube Icon"
                width={25}
                height={25}
              />
            </Link>
            <Link href="https://www.instagram.com/ghifarifauzii_/?next=%2F" title="Instagram">
              <Image
                src="/images/instagram1.png"
                alt="Instagram Icon"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </nav>

        {/* Tombol Scroll ke Atas */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={scrollToTop}
            className="btn btn-slate-500 p-2 rounded-full absolute bottom-4 right-4"
            title="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L3 12h6v8h6v-8h6z" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
