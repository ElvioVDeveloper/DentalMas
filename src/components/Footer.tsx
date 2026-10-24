import { Instagram, Facebook, MessageCircle } from "lucide-react";
import { CLINIC_INFO, FOOTER_CONTENT } from "../data/content";
import FadeUp from "./FadeUp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith("#")) {
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
    }
  };

  return (
    <footer className="bg-[#0B2A4A] text-slate-300 text-sm border-t border-slate-800 pt-16 pb-12 sm:pb-8">
      <FadeUp distance={24} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Information */}
          <div className="md:col-span-5 space-y-4">
            {/* Logo completo dentro de una cápsula blanca */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-xs">
              <img
                src="/images/logo.png"
                alt="Dentalmás - Clínica Odontológica Integral"
                width={260}
                height={76}
                loading="lazy"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <p className="text-[15px] text-slate-300 max-w-sm leading-relaxed">
              {FOOTER_CONTENT.description}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2.5 text-[15px]">
              {FOOTER_CONTENT.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (!link.isExternal) {
                        e.preventDefault();
                        handleSmoothScroll(link.href);
                      }
                    }}
                    className={`transition-colors ${
                      link.isExternal
                        ? "text-[#85F6E6] hover:text-white font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Recognition */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {FOOTER_CONTENT.socialsHeading}
            </h4>
            <p className="text-[15px] text-slate-300 leading-relaxed">
              {FOOTER_CONTENT.socialsSubtext}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href={CLINIC_INFO.socials.instagram}
                aria-label="Instagram de Dentalmás"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#2BA89A] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Facebook */}
              <a
                href={CLINIC_INFO.socials.facebook}
                aria-label="Facebook de Dentalmás"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#2BA89A] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 fill-current" />
              </a>

              {/* WhatsApp */}
              <a
                href={CLINIC_INFO.socials.whatsapp}
                aria-label="WhatsApp directo de Dentalmás"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#25D366] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>
            © {currentYear} {CLINIC_INFO.name} {CLINIC_INFO.tagline}. {CLINIC_INFO.city}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a href="#inicio" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <span>•</span>
            <a href="#inicio" className="hover:text-white transition-colors">
              Términos del Servicio
            </a>
            <span>•</span>
            <span className="text-slate-300">{FOOTER_CONTENT.legalNotice}</span>
          </div>
        </div>
      </FadeUp>
    </footer>
  );
}
