import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, CheckCircle2, MessageCircle } from "lucide-react";
import { CLINIC_FACILITIES, getWhatsAppUrl } from "../data/content";

interface FacilitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FacilitiesModal({ isOpen, onClose }: FacilitiesModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement | null;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Mover foco al abrir
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
        // Devolver foco al botón que lo abrió
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentFacility = CLINIC_FACILITIES[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? CLINIC_FACILITIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CLINIC_FACILITIES.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="facilities-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold text-[#2BA89A] uppercase tracking-wider">
              Instalaciones de Vanguardia
            </span>
            <h3 id="facilities-modal-title" className="text-xl font-bold text-[#0B2A4A]">
              Clínica Dentalmás • Encarnación
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#2BA89A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Image Carousel */}
        <div className="relative h-72 sm:h-96 w-full bg-slate-900 overflow-hidden group">
          <img
            src={currentFacility.image}
            alt={currentFacility.title}
            loading="lazy"
            width={800}
            height={500}
            className="w-full h-full object-cover transition-all duration-300"
          />

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Foto siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Indicator Badge */}
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {currentIndex + 1} / {CLINIC_FACILITIES.length}
          </div>
        </div>

        {/* Facility Details */}
        <div className="p-6 space-y-4 overflow-y-auto">
          <div>
            <h4 className="text-lg font-bold text-[#0B2A4A] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#2BA89A]" />
              <span>{currentFacility.title}</span>
            </h4>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
              {currentFacility.description}
            </p>
          </div>

          {/* Thumbnails row */}
          <div className="flex gap-2 pt-1 overflow-x-auto no-scrollbar">
            {CLINIC_FACILITIES.map((facility, idx) => (
              <button
                key={facility.title}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-16 h-12 rounded-xl overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? "border-[#2BA89A] ring-2 ring-[#2BA89A]/30 scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  loading="lazy"
                  width={64}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getWhatsAppUrl(
                `Hola Dentalmás, me encantaron las instalaciones y quisiera agendar una visita.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar visita a la clínica</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 h-12 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
