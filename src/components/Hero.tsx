import { ArrowRight, Play, ShieldCheck, Users, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { HERO_CONTENT, getWhatsAppUrl } from "../data/content";

interface HeroProps {
  onOpenFacilitiesModal?: () => void;
}

// Framer Motion animation variants for a smooth, high-end arrival
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      delay: 0.28,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const bgImageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.025 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero({ onOpenFacilitiesModal }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden min-h-[760px] xl:min-h-screen flex items-center pt-24 lg:pt-28 pb-[88px]"
    >
      {/* 1. Full-bleed background image with subtle Framer Motion arrival fade-in */}
      <motion.div
        variants={bgImageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <img
          src={HERO_CONTENT.bgImage}
          alt="Paciente sonriendo en clínica dental moderna Dentalmás en Encarnación"
          fetchPriority="high"
          width={2400}
          height={1600}
          style={{ objectPosition: "right center" }}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* 2. Full-bleed white gradient overlay (95% at 0%, 85% at 45%, 0% at 75%) without dark vignettes */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden sm:block"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 45%, rgba(255, 255, 255, 0) 75%)",
        }}
      />
      {/* Mobile white gradient ensuring contrast over patient photo */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-10 sm:hidden"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.88) 55%, rgba(255, 255, 255, 0.2) 100%)",
        }}
      />

      {/* 3. Content container: max-w-[1200px] mx-auto with 24px lateral padding and 88px bottom padding */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">
          {/* Left Column: Value Proposition with staggered fade-in */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            {/* Eyebrow Badge - Texto a 12px mínimo */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-teal-200/80 shadow-xs text-[12px] font-bold tracking-wider text-[#2BA89A] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#2BA89A] animate-pulse" />
                <span>{HERO_CONTENT.eyebrow}</span>
              </div>
            </motion.div>

            {/* Main Title: Fluid typography clamped between 36px and 52px in desktop */}
            <motion.h1
              variants={itemVariants}
              className="font-extrabold text-[#0B2A4A] tracking-tight leading-[1.15]"
              style={{ fontSize: "clamp(36px, 4vw, 52px)" }}
            >
              <span className="block">{HERO_CONTENT.titlePart1}</span>
              <span className="block">{HERO_CONTENT.titlePart2}</span>
              <span className="block mt-1">
                <span className="curved-underline text-[#2BA89A]">
                  {HERO_CONTENT.titleHighlight}
                </span>
              </span>
            </motion.h1>

            {/* Subheading: max-width 480px, WCAG AA compliant */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed"
              style={{ maxWidth: "480px" }}
            >
              {HERO_CONTENT.subtitle}
            </motion.p>

            {/* Primary & Secondary Action Buttons (stack on mobile with 12px gap, 52px height) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1"
            >
              <a
                href={getWhatsAppUrl(HERO_CONTENT.floatingCard.prefilledMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[52px] px-7 py-3.5 rounded-full text-base font-semibold text-white bg-[#0B2A4A] hover:bg-[#143C66] active:scale-98 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>{HERO_CONTENT.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 ml-2 stroke-[2.2]" />
              </a>

              <button
                type="button"
                onClick={onOpenFacilitiesModal}
                className="inline-flex items-center justify-center min-h-[52px] px-6 py-3.5 rounded-full text-base font-semibold text-[#0B2A4A] bg-white border border-slate-200/80 hover:border-[#2BA89A] hover:text-[#2BA89A] active:scale-98 transition-all shadow-xs"
              >
                <Play className="w-4 h-4 mr-2 text-[#2BA89A] fill-[#2BA89A]/15" />
                <span>{HERO_CONTENT.ctaSecondary}</span>
              </button>
            </motion.div>

            {/* Trust Badges: In a single row on lg: (1024px+) with flex-nowrap and gap-3, 2 rows on mobile. Texto mínimo 12px */}
            <motion.div variants={itemVariants} className="pt-2 sm:pt-3">
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 w-full">
                {/* Badge 1 */}
                <div className="w-auto shrink-0 flex items-center gap-2.5 p-2 sm:p-2.5 rounded-2xl bg-white/95 shadow-xs border border-teal-100/60 backdrop-blur-xs">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#EEF7F5] text-[#2BA89A] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2]" />
                  </div>
                  <div className="pr-1">
                    <h3 className="text-[12px] font-bold text-[#0B2A4A] uppercase tracking-wider whitespace-nowrap">
                      Atención de calidad
                    </h3>
                    <p className="text-[12px] text-slate-500 font-medium whitespace-nowrap">
                      Garantizada
                    </p>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="w-auto shrink-0 flex items-center gap-2.5 p-2 sm:p-2.5 rounded-2xl bg-white/95 shadow-xs border border-teal-100/60 backdrop-blur-xs">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#EEF7F5] text-[#2BA89A] flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2]" />
                  </div>
                  <div className="pr-1">
                    <h3 className="text-[12px] font-bold text-[#0B2A4A] uppercase tracking-wider whitespace-nowrap">
                      Todas las edades
                    </h3>
                    <p className="text-[12px] text-slate-500 font-medium whitespace-nowrap">
                      Niños & adultos
                    </p>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="w-auto shrink-0 flex items-center gap-2.5 p-2 sm:p-2.5 rounded-2xl bg-white/95 shadow-xs border border-teal-100/60 backdrop-blur-xs">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#EEF7F5] text-[#2BA89A] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2]" />
                  </div>
                  <div className="pr-1">
                    <h3 className="text-[12px] font-bold text-[#0B2A4A] uppercase tracking-wider whitespace-nowrap">
                      Tecnología moderna
                    </h3>
                    <p className="text-[12px] text-slate-500 font-medium whitespace-nowrap">
                      Alta precisión
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Desktop Floating Reservation Card (340px width, aligned to bottom right, leaving face clear above) */}
          <div
            className="hidden lg:flex lg:col-span-5 justify-end self-end"
            style={{ alignSelf: "flex-end" }}
            id="reservar"
          >
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="w-[340px] max-w-[340px] self-end"
            >
              <div className="bg-white/90 backdrop-blur-md border border-white/80 rounded-3xl p-6 xl:p-7 shadow-xl w-[340px] max-w-[340px] text-center flex flex-col items-center transition-all hover:shadow-2xl">
                {/* 56px mint circle with green WhatsApp icon */}
                <div className="w-14 h-14 rounded-full bg-[#EEF7F5] flex items-center justify-center mb-3.5 text-[#25D366] shadow-xs">
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.16-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.61 0-3.11-.45-4.4-1.23l-.31-.19-3.06.78.82-2.98-.2-.33A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>

                {/* Title in #0B2A4A, 22px bold */}
                <h2 className="text-[22px] font-bold text-[#0B2A4A] leading-tight mb-2">
                  {HERO_CONTENT.floatingCard.title}
                </h2>

                {/* Text, 14px font */}
                <p className="text-slate-600 text-[14px] leading-relaxed mb-5 font-normal">
                  {HERO_CONTENT.floatingCard.subtitle}
                </p>

                {/* Full width green WhatsApp button */}
                <a
                  href={getWhatsAppUrl(HERO_CONTENT.floatingCard.prefilledMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[15px] flex items-center justify-center gap-2 shadow-md shadow-emerald-900/10 transition-all cursor-pointer mb-3 hover:scale-[1.02]"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.16-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.61 0-3.11-.45-4.4-1.23l-.31-.19-3.06.78.82-2.98-.2-.33A7.95 7.95 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  <span>{HERO_CONTENT.floatingCard.buttonText}</span>
                </a>

                {/* Note */}
                <p className="text-[12.5px] text-slate-500 font-medium">
                  {HERO_CONTENT.floatingCard.badgeText}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
