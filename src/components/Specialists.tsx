import { useRef, useState } from "react";
import { SPECIALISTS_CONTENT, getWhatsAppUrl } from "../data/content";
import FadeUp from "./FadeUp";

export default function Specialists() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const doctors = SPECIALISTS_CONTENT.doctors;

  // Track active slide on mobile horizontal scroll using real card width
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const firstCard = container.children[0] as HTMLElement | undefined;
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth || 275;
    const gap = 20; // gap-5 (20px)
    const cardStep = cardWidth + gap;
    const index = Math.round(container.scrollLeft / cardStep);
    setActiveCardIndex(Math.max(0, Math.min(index, doctors.length - 1)));
  };

  const scrollToDoctor = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cards = scrollContainerRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveCardIndex(index);
    }
  };

  return (
    <section id="especialistas" className="py-16 lg:py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeUp distance={24} className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold text-[#2BA89A] tracking-widest uppercase">
            {SPECIALISTS_CONTENT.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2A4A] tracking-tight mt-1.5">
            {SPECIALISTS_CONTENT.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {SPECIALISTS_CONTENT.subtitle}
          </p>
        </FadeUp>

        {/* Desktop & Tablet: Grid (4 cols desktop, 2 cols tablet)
            Mobile: Horizontal snap scroll with peek preview */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 sm:grid-cols-2 gap-5 sm:gap-7 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-4 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {doctors.map((doctor, idx) => (
            <FadeUp
              key={doctor.id}
              delay={idx * 90}
              distance={30}
              className="snap-center shrink-0 w-[275px] sm:w-auto h-full flex flex-col"
            >
              <div
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="h-60 sm:h-64 overflow-hidden bg-slate-100 relative">
                  <img
                    src={doctor.image}
                    alt={`${doctor.name} - ${doctor.specialty} en Dentalmás`}
                    loading="lazy"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 sm:p-6 pb-2 text-center">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2A4A]">
                    {doctor.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] font-semibold text-[#2BA89A] mt-1">
                    {doctor.specialty}
                  </p>
                  <p className="text-xs text-slate-500 mt-1.5 font-medium">
                    {doctor.regNumber}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <a
                  href={getWhatsAppUrl(doctor.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full min-h-[44px] py-2.5 px-3 text-xs sm:text-[13px] font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 active:scale-98"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.16-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.61 0-3.11-.45-4.4-1.23l-.31-.19-3.06.78.82-2.98-.2-.33A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  <span>Agendar por WhatsApp</span>
                </a>
              </div>
            </div>
            </FadeUp>
          ))}
        </div>

        {/* Mobile carousel indicator dots */}
        <div className="flex justify-center gap-1.5 pt-3 sm:hidden">
          {doctors.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToDoctor(idx)}
              aria-label={`Ver especialista ${idx + 1}`}
              className={`transition-all ${
                idx === activeCardIndex
                  ? "w-6 h-1.5 rounded-full bg-[#2BA89A]"
                  : "w-1.5 h-1.5 rounded-full bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
