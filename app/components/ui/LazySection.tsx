"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  /** Pixel margin before the element enters the viewport (default: "200px") */
  rootMargin?: string;
  /** One-shot: keep rendered once visible (default: true) */
  keepMounted?: boolean;
  /** Optional class on the sentinel wrapper */
  className?: string;
  /** Fallback shown while the section hasn't entered the viewport yet */
  fallback?: ReactNode;
}

/**
 * LazySectionWrapper
 * ------------------
 * Uses IntersectionObserver to defer rendering of children until the element
 * is about to scroll into the viewport.  Once visible (and keepMounted=true)
 * the children stay mounted so they are never torn down on scroll-back.
 */
export default function LazySection({
  children,
  rootMargin = "200px",
  keepMounted = true,
  className,
  fallback = null,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver isn't available (old browsers / SSR), show immediately
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (keepMounted) {
            // No need to keep observing once rendered
            observer.disconnect();
          }
        } else if (!keepMounted) {
          setIsVisible(false);
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, keepMounted]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
}
