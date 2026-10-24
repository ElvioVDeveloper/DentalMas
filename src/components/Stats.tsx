import { useEffect, useRef, useState } from "react";
import { Smile, Star, Clock, CheckCircle2 } from "lucide-react";
import { STATS_CONTENT, StatItem } from "../data/content";
import FadeUp from "./FadeUp";

function StatIcon({ type }: { type: StatItem["icon"] }) {
  switch (type) {
    case "Smile":
      return <Smile className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />;
    case "Star":
      return <Star className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />;
    case "Clock":
      return <Clock className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />;
    case "CheckBadge":
      return <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8]" />;
  }
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    patients: 0,
    rating: 0,
    experience: 0,
    specialties: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches;

          if (prefersReducedMotion) {
            setCounts({
              patients: 8500,
              rating: 4.9,
              experience: 12,
              specialties: 10,
            });
            return;
          }

          // Count-up animation over 1500ms
          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              patients: Math.floor(easeProgress * 8500),
              rating: parseFloat((easeProgress * 4.9).toFixed(1)),
              experience: Math.floor(easeProgress * 12),
              specialties: Math.floor(easeProgress * 10),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                patients: 8500,
                rating: 4.9,
                experience: 12,
                specialties: 10,
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const formatStatValue = (stat: StatItem) => {
    if (!hasAnimated) return stat.displayValue;

    if (stat.id === "patients") {
      return `${counts.patients.toLocaleString("es-PY")}+`;
    }
    if (stat.id === "rating") {
      return `${counts.rating.toFixed(1)} / 5`;
    }
    if (stat.id === "experience") {
      return `${counts.experience}+ Años`;
    }
    if (stat.id === "specialties") {
      return `${counts.specialties}+`;
    }
    return stat.displayValue;
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-14 bg-[#EEF7F5] border-y border-slate-100/80 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive grid: 2x2 in mobile, 4 columns in desktop with dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {STATS_CONTENT.map((stat, idx) => (
            <FadeUp
              key={stat.id}
              delay={idx * 75}
              distance={20}
              className={`flex items-center gap-3 sm:gap-4 p-2 sm:p-0 ${
                idx > 1 ? "pt-4 sm:pt-0" : ""
              } ${idx > 0 ? "sm:pl-8" : ""}`}
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 p-2.5 sm:p-3 rounded-2xl bg-white flex items-center justify-center text-[#2BA89A] shadow-xs shrink-0">
                <StatIcon type={stat.icon} />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2A4A] tracking-tight block">
                  {formatStatValue(stat)}
                </span>
                <span className="text-xs sm:text-[15px] text-slate-700 font-semibold block mt-0.5 leading-snug">
                  {stat.label}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
