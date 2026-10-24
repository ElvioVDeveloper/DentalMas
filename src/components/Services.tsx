import { ArrowRight } from "lucide-react";
import { SERVICES_CONTENT, getWhatsAppUrl, ServiceItem } from "../data/content";
import FadeUp from "./FadeUp";

function ServiceIcon({ type }: { type: ServiceItem["icon"] }) {
  switch (type) {
    case "Dentistry":
      return (
        <svg className="w-7 h-7 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <path d="M12 3C8 3 6 5.5 6 9c0 4 1.5 7 3 11 0.7 1.5 2.2 2 3 2s2.3-.5 3-2c1.5-4 3-7 3-11 0-3.5-2-6-6-6Z" />
        </svg>
      );
    case "Orthodontics":
      return (
        <svg className="w-7 h-7 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <rect height="10" rx="3" width="18" x="3" y="7" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <rect fill="currentColor" height="4" width="3" x="6" y="10" />
          <rect fill="currentColor" height="4" width="3" x="15" y="10" />
        </svg>
      );
    case "Implants":
      return (
        <svg className="w-7 h-7 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <path d="M7 4h10v3a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V4Z" />
          <line x1="9" x2="15" y1="11" y2="11" />
          <line x1="10" x2="14" y1="14" y2="14" />
          <line x1="11" x2="13" y1="17" y2="17" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      );
    case "Cosmetics":
      return (
        <svg className="w-7 h-7 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <path d="M12 2l1.5 3.5L17 7l-3.5 1.5L12 12l-1.5-3.5L7 7l3.5-1.5L12 2Z" />
          <path d="M5 16c1.5 2.5 4 4 7 4s5.5-1.5 7-4" />
        </svg>
      );
    case "Pediatric":
      return (
        <svg className="w-7 h-7 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line strokeWidth="3" x1="9" x2="9.01" y1="9" y2="9" />
          <line strokeWidth="3" x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
      );
    case "Emergency":
      return (
        <svg className="w-7 h-7 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-16 lg:py-24 bg-[#EEF7F5] border-y border-slate-100/80 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Action Row */}
        <FadeUp distance={24} className="mb-12 lg:mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#2BA89A] tracking-widest uppercase">
                {SERVICES_CONTENT.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2A4A] tracking-tight mt-1.5">
                {SERVICES_CONTENT.title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                {SERVICES_CONTENT.subtitle}
              </p>
            </div>
            <a
              href={getWhatsAppUrl("Hola Dentalmás, quisiera información sobre todas las especialidades disponibles.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-bold text-[#0B2A4A] hover:text-[#2BA89A] transition-colors group"
            >
              <span>{SERVICES_CONTENT.allServicesLink}</span>
              <ArrowRight className="w-4 h-4 ml-1.5 stroke-[2] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeUp>

        {/* 6 Specialty Cards Grid in 3 columns x 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_CONTENT.services.map((service, idx) => {
            const isEmergency = service.isEmergency;

            return (
              <FadeUp
                key={service.id}
                delay={idx * 80}
                distance={30}
                className="h-full flex flex-col"
              >
                <div
                  className={`group bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between text-center items-center h-full ${
                    isEmergency
                      ? "border-red-100 hover:border-red-300"
                      : "border-teal-100/70 hover:border-teal-300"
                  }`}
                >
                  <div>
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 transition-colors p-3.5 ${
                        isEmergency
                          ? "bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white"
                          : "bg-[#EEF7F5] text-[#2BA89A] group-hover:bg-[#2BA89A] group-hover:text-white"
                      }`}
                    >
                      <ServiceIcon type={service.icon} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B2A4A]">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] leading-relaxed text-slate-600 mt-2.5 sm:mt-3">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 mt-5 sm:mt-6 text-sm font-bold transition-colors group-hover:gap-2 ${
                      isEmergency
                        ? "text-red-600 hover:text-red-700"
                        : "text-[#2BA89A] hover:text-[#0B2A4A]"
                    }`}
                  >
                    <span>{service.linkText}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2]" />
                  </a>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
