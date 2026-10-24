import { useState, useMemo, useEffect, useRef } from "react";
import { X, Search, ArrowRight, MessageCircle } from "lucide-react";
import { SERVICES_CONTENT, SPECIALISTS_CONTENT, getWhatsAppUrl } from "../data/content";

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickSearchModal({ isOpen, onClose }: QuickSearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement | null;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        inputRef.current?.focus();
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
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return {
        services: SERVICES_CONTENT.services.slice(0, 3),
        doctors: SPECIALISTS_CONTENT.doctors.slice(0, 2),
      };
    }

    const term = searchTerm.toLowerCase();

    const services = SERVICES_CONTENT.services.filter(
      (s) =>
        s.title.toLowerCase().includes(term) ||
        s.description.toLowerCase().includes(term)
    );

    const doctors = SPECIALISTS_CONTENT.doctors.filter(
      (d) =>
        d.name.toLowerCase().includes(term) ||
        d.specialty.toLowerCase().includes(term)
    );

    return { services, doctors };
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            id="search-modal-title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar especialidad, síntoma o doctor (ej. implantes, brackets, dolor)..."
            className="flex-1 text-sm sm:text-base outline-none placeholder:text-slate-400 text-slate-800 bg-transparent"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-bold text-slate-500 hover:text-slate-800 px-2 py-1 rounded-lg bg-slate-100"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="p-5 overflow-y-auto space-y-6">
          {/* Services Section */}
          <div>
            <h4 className="text-xs font-bold text-[#2BA89A] uppercase tracking-wider mb-3">
              Especialidades Odontológicas ({searchResults.services.length})
            </h4>
            {searchResults.services.length === 0 ? (
              <p className="text-xs text-slate-400 italic">No se encontraron especialidades.</p>
            ) : (
              <div className="space-y-2">
                {searchResults.services.map((service) => (
                  <div
                    key={service.id}
                    className="p-3 rounded-2xl bg-slate-50 hover:bg-[#EEF7F5] border border-slate-100 transition-colors flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <h5 className="text-sm font-bold text-[#0B2A4A] group-hover:text-[#2BA89A] transition-colors">
                        {service.title}
                      </h5>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {service.description}
                      </p>
                    </div>
                    <a
                      href={getWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2 rounded-xl bg-white group-hover:bg-[#25D366] text-[#2BA89A] group-hover:text-white transition-all shadow-xs"
                      title="Consultar por WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Specialists Section */}
          <div>
            <h4 className="text-xs font-bold text-[#2BA89A] uppercase tracking-wider mb-3">
              Cuerpo Médico ({searchResults.doctors.length})
            </h4>
            {searchResults.doctors.length === 0 ? (
              <p className="text-xs text-slate-400 italic">No se encontraron profesionales.</p>
            ) : (
              <div className="space-y-2">
                {searchResults.doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className="p-3 rounded-2xl bg-slate-50 hover:bg-[#EEF7F5] border border-slate-100 transition-colors flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        loading="lazy"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover object-top border border-teal-200"
                      />
                      <div>
                        <h5 className="text-sm font-bold text-[#0B2A4A]">
                          {doctor.name}
                        </h5>
                        <p className="text-xs text-[#2BA89A] font-semibold">
                          {doctor.specialty}
                        </p>
                      </div>
                    </div>
                    <a
                      href={getWhatsAppUrl(doctor.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-xs hover:bg-[#20bd5a] transition-colors"
                    >
                      <span>Agendar</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500">
          ¿Tienes dudas urgentes?{" "}
          <a
            href={getWhatsAppUrl("Hola Dentalmás, tengo una consulta general.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2BA89A] font-bold hover:underline"
          >
            Chatea directamente con recepción
          </a>
        </div>
      </div>
    </div>
  );
}
