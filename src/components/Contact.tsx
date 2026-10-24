import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { CONTACT_CONTENT, CLINIC_INFO, getWhatsAppUrl } from "../data/content";
import FadeUp from "./FadeUp";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B2A4A] to-[#143C66] rounded-3xl overflow-hidden text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Contact Details Column */}
            <FadeUp delay={0} distance={24} className="lg:col-span-6 p-7 sm:p-12 lg:p-14 space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#85F6E6]">
                  {CONTACT_CONTENT.eyebrow}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mt-1 text-white">
                  {CONTACT_CONTENT.title}
                </h2>
                <p className="text-slate-200 text-sm sm:text-base mt-2 font-normal leading-relaxed">
                  {CONTACT_CONTENT.subtitle}
                </p>
              </div>

              {/* Rows with Icons */}
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-slate-200">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#85F6E6]">
                    <MapPin className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">Dirección</h3>
                    <p className="text-slate-200 text-sm sm:text-base leading-snug">
                      {CLINIC_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#85F6E6]">
                    <Phone className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">Líneas de Atención</h3>
                    <p className="text-slate-200 text-sm sm:text-base leading-snug">
                      <a href={`tel:${CLINIC_INFO.phonePrimaryTel}`} className="hover:text-white transition-colors">
                        {CLINIC_INFO.phonePrimaryDisplay}
                      </a>{" "}
                      •{" "}
                      <a href={`tel:${CLINIC_INFO.phoneSecondaryTel}`} className="hover:text-white transition-colors">
                        {CLINIC_INFO.phoneSecondaryDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#85F6E6]">
                    <Clock className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">Horarios de Atención</h3>
                    <p className="text-slate-200 text-sm sm:text-base leading-snug">
                      {CLINIC_INFO.schedule.weekdays}
                      <br />
                      {CLINIC_INFO.schedule.saturday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(CONTACT_CONTENT.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full min-h-[50px] px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-md active:scale-98 transition-all hover:scale-[1.01]"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.16-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.61 0-3.11-.45-4.4-1.23l-.31-.19-3.06.78.82-2.98-.2-.33A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  <span>{CONTACT_CONTENT.whatsappButtonText}</span>
                </a>
              </div>
            </FadeUp>

            {/* Map Section */}
            <FadeUp delay={150} distance={24} className="lg:col-span-6 bg-slate-100 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
              {/* Google Maps Embed or High-Fidelity SVG Street Map */}
              <div className="w-full h-[300px] sm:h-[350px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative bg-[#EBF2F0]">
                {/* Embed iframe for real interactive maps */}
                <iframe
                  title="Ubicación de Dentalmás en Encarnación"
                  src={CLINIC_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-800 shadow-xs pointer-events-none">
                  {CONTACT_CONTENT.mapBadge}
                </div>
              </div>

              {/* Map Action Row */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs font-semibold text-slate-700 flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] mr-2 shrink-0 animate-pulse" />
                  <span>Juan León Mallorquín y 25 de Mayo • Encarnación</span>
                </div>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0B2A4A] hover:bg-[#2BA89A] transition-all shadow-xs self-start sm:self-auto"
                >
                  <span>{CONTACT_CONTENT.mapButton}</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2]" />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
