import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import Specialists from "./components/Specialists";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloatingBar from "./components/WhatsAppFloatingBar";
import FacilitiesModal from "./components/FacilitiesModal";
import QuickSearchModal from "./components/QuickSearchModal";

export default function App() {
  const [facilitiesModalOpen, setFacilitiesModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FBFA] text-slate-800 flex flex-col selection:bg-[#2BA89A] selection:text-white pb-20 sm:pb-0">
      {/* 1. Header (Sticky) */}
      <Header onOpenSearch={() => setSearchModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services / Especialidades */}
        <Services />

        {/* 4. Experience / Nosotros & Testimonios */}
        <Experience onOpenFacilitiesModal={() => setFacilitiesModalOpen(true)} />

        {/* 5. Statistics Bar */}
        <Stats />

        {/* 6. Specialists / Cuerpo Médico */}
        <Specialists />

        {/* 7. Contact & Location with Google Maps */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Floating WhatsApp Mobile Bar */}
      <WhatsAppFloatingBar />

      {/* 10. Interactive Modals */}
      <FacilitiesModal
        isOpen={facilitiesModalOpen}
        onClose={() => setFacilitiesModalOpen(false)}
      />

      <QuickSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </div>
  );
}
