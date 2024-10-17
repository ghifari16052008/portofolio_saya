// app/page.tsx
import Navbar from "@/components/layouts/navbar/page";

import Button from "@/components/elements/button/page"; // Pastikan path ini sesuai dengan struktur folder Anda
import CoruselPage from "@/components/layouts/corusel/page";
import Card from "@/components/fragments/card/page";

export default function Home() {
  return (
    <>
       <Navbar />
      <div>
       {/* profile */}
       <Card/>
      </div>
    </>
  );
}
