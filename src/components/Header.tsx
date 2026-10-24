import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Search, PhoneCall } from "lucide-react";
import { CLINIC_INFO, NAV_ITEMS, getWhatsAppUrl } from "../data/content";

interface HeaderProps {
  onOpenSearch?: () => void;
}

export default function Header({ onOpenSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["inicio", "servicios", "experiencia", "especialistas", "contacto"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)] py-2"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100/60 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand: Logo oficial completo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#2BA89A] rounded-xl p-0.5 group"
            aria-label="Dentalmás - Clínica Odontológica"
          >
            <img
              src="/images/logo-dentalmas.jpg"
              alt="Dentalmás, Clínica Odontológica Integral. Tu sonrisa en las mejores manos"
              className="h-10 sm:h-12 w-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-7 lg:gap-8 text-[15px] font-semibold text-slate-700"
          >
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? "text-[#0B2A4A] font-bold"
                      : "text-slate-700 hover:text-[#2BA89A]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2BA89A] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Actions (Search & Reservation CTA) */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            {/* Quick Search */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Buscar en el sitio"
              className="p-2 sm:p-2.5 text-slate-600 hover:text-[#0B2A4A] rounded-full hover:bg-slate-100 transition-colors"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Quick Call on mobile - centralizado */}
            <a
              href={`tel:${CLINIC_INFO.phonePrimaryTel}`}
              aria-label="Llamar a la clínica"
              className="sm:hidden p-2 text-slate-600 hover:text-[#0B2A4A] rounded-full hover:bg-slate-100 transition-colors"
            >
              <PhoneCall className="w-5 h-5 text-[#2BA89A]" />
            </a>

            {/* Desktop CTA Button */}
            <a
              href={getWhatsAppUrl("Hola Dentalmás, deseo reservar un turno odontológico.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#0B2A4A] hover:bg-[#143C66] active:bg-[#0B2A4A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Reservar turno</span>
              <ArrowRight className="w-4 h-4 ml-1.5 stroke-[2]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 rounded-xl text-[#0B2A4A] hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Panel */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 ${isScrolled ? "top-[57px]" : "top-[65px]"} z-40 bg-slate-900/40 backdrop-blur-xs md:hidden animate-fade-in`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-b border-slate-200 px-5 pt-4 pb-7 shadow-xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-3 py-3 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? "bg-[#EEF7F5] text-[#0B2A4A] font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#2BA89A] opacity-70" />
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-slate-100 space-y-3">
              <a
                href={getWhatsAppUrl("Hola Dentalmás, quiero reservar un turno vía WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-12 rounded-full bg-[#25D366] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-transform"
              >
                <span>Reservar turno por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-center text-xs text-slate-500 font-medium">
                {CLINIC_INFO.address}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
