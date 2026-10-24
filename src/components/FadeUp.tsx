import { ReactNode, ElementType } from "react";
import { useFadeUp } from "../hooks/useFadeUp";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  distance?: number; // in pixels (default 30)
  threshold?: number;
  as?: ElementType;
}

export default function FadeUp({
  children,
  className = "",
  delay = 0,
  duration = 700,
  distance = 32,
  threshold = 0.15,
  as: Component = "div",
}: FadeUpProps) {
  const { ref, isVisible } = useFadeUp<HTMLDivElement>({ threshold });

  return (
    <Component
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transform: isVisible ? "translate3d(0, 0, 0)" : `translate3d(0, ${distance}px, 0)`,
      }}
      className={`transition-[opacity,transform] ease-out will-change-transform ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </Component>
  );
}
