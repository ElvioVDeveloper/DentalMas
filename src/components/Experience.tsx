import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { EXPERIENCE_CONTENT } from "../data/content";
import FadeUp from "./FadeUp";

interface ExperienceProps {
  onOpenFacilitiesModal?: () => void;
}

export default function Experience({ onOpenFacilitiesModal }: ExperienceProps) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const testimonials = EXPERIENCE_CONTENT.testimonials;

  // Autoplay functionality with pause on hover and prefers-reduced-motion check
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <section id="experiencia" className="py-16 lg:py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Column Composite Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Box 1: Modern Care Statement (4 columns) */}
          <FadeUp delay={0} distance={30} className="lg:col-span-4 h-full">
            <div className="rounded-3xl p-7 sm:p-8 lg:p-9 bg-gradient-to-br from-[#EEF7F5] via-white to-[#E8F4F2]/70 border border-teal-100 flex flex-col justify-between shadow-xs h-full">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#2BA89A] tracking-wider uppercase">
                  {EXPERIENCE_CONTENT.eyebrow}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2A4A] leading-tight">
                  Atención moderna.
                  <br />
                  Trato humano.
                </h2>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
                  {EXPERIENCE_CONTENT.description}
                </p>
              </div>
              <div className="pt-6 sm:pt-8">
                <button
                  type="button"
                  onClick={onOpenFacilitiesModal}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B2A4A] hover:bg-[#2BA89A] text-white text-xs font-bold transition-all shadow-sm active:scale-98"
                >
                  <span>{EXPERIENCE_CONTENT.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </button>
              </div>
            </div>
          </FadeUp>

          {/* Box 2: Center Clinic Atmosphere Photography (5 columns) */}
          <FadeUp delay={150} distance={30} className="lg:col-span-5 h-full">
            <div className="rounded-3xl overflow-hidden shadow-xs relative group min-h-[300px] sm:min-h-[340px] h-full">
              <img
                src={EXPERIENCE_CONTENT.clinicImage}
                alt="Recepción luminosa y consultorio de vanguardia en Dentalmás Encarnación"
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/80 via-transparent to-transparent flex items-end p-6 sm:p-7">
                <div className="text-white">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#2BA89A] text-white text-[10px] uppercase font-bold tracking-wider mb-1.5 shadow-xs">
                    {EXPERIENCE_CONTENT.badgeTitle}
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-100">
                    {EXPERIENCE_CONTENT.badgeSubtitle}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Box 3: Testimonial Card with Carousel Controls (3 columns) */}
          <FadeUp delay={300} distance={30} className="lg:col-span-3 h-full">
            <div
              className="rounded-3xl p-6 sm:p-7 lg:p-8 bg-white border border-slate-100 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow h-full"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div>
                {/* Decorative Quote Mark in #2BA89A */}
                <div className="text-[#2BA89A] mb-2">
                  <svg className="w-8 h-8 fill-current opacity-90" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.322 1.558-4.148 3.992-4.148 5.617.472-.259 1.05-.398 1.696-.398 2.016 0 3.529 1.513 3.529 3.529 0 2.146-1.636 3.753-3.753 3.753-1.043 0-1.996-.46-2.664-1.381zm11.383 0C14.936 16.227 14.383 15 14.383 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.322 1.558-4.148 3.992-4.148 5.617.472-.259 1.05-.398 1.696-.398 2.016 0 3.529 1.513 3.529 3.529 0 2.146-1.636 3.753-3.753 3.753-1.043 0-1.996-.46-2.664-1.381z" />
                  </svg>
                </div>

                {/* Star Rating (5 golden stars) */}
                <div className="flex text-amber-400 gap-1 my-2">
                  {[...Array(currentTestimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-800 text-sm sm:text-[15px] leading-relaxed font-medium italic min-h-[96px]">
                  {currentTestimonial.text}
                </p>

                {/* Author / Signature */}
                <div className="pt-3">
                  <p className="text-[15px] font-bold text-[#0B2A4A]">
                    — {currentTestimonial.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    {currentTestimonial.treatment}
                  </p>
                </div>
              </div>

              {/* Carousel Navigation Controls */}
              <div className="flex items-center justify-between pt-5 sm:pt-6 border-t border-slate-100 mt-4">
                <div className="flex gap-1.5 items-center">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentTestimonialIndex(idx)}
                      aria-label={`Ver testimonio ${idx + 1}`}
                      className={`transition-all ${
                        idx === currentTestimonialIndex
                          ? "w-5 h-1.5 rounded-full bg-[#2BA89A]"
                          : "w-1.5 h-1.5 rounded-full bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Testimonio anterior"
                    className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:border-[#0B2A4A] hover:text-[#0B2A4A] transition-colors active:scale-95"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 stroke-[2]" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Siguiente testimonio"
                    className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:border-[#0B2A4A] hover:text-[#0B2A4A] transition-colors active:scale-95"
                  >
                    <ChevronRight className="w-3.5 h-3.5 stroke-[2]" />
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
