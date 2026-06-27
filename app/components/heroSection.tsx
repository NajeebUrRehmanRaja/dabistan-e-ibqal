"use client";

import dynamic from "next/dynamic";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Carousel from "./ui/Carousel";
import LazySection from "./ui/LazySection";
import {
  CoreValuesSkeleton,
  WeeklySessionsSkeleton,
  SpeakersSkeleton,
  BlogsSkeleton,
  BooksSkeleton,
} from "./ui/skeletons";

// ─── Eagerly loaded (above the fold) ─────────────────────────────────────────
// Carousel is always the first thing users see — no lazy loading needed.

// ─── Code-split + lazy loaded (below the fold) ───────────────────────────────
// next/dynamic splits these into separate JS chunks that are only downloaded
// when the IntersectionObserver signals the section is approaching the viewport.

const CoreValues = dynamic(() => import("./coreValues"), {
  loading: () => <CoreValuesSkeleton />,
  ssr: false,
});

const WeeklySessions = dynamic(() => import("./weeklySessions"), {
  loading: () => <WeeklySessionsSkeleton />,
  ssr: false,
});

const Speakers = dynamic(() => import("./speakers"), {
  loading: () => <SpeakersSkeleton />,
  ssr: false,
});

const BlogsSection = dynamic(() => import("./blogsSection"), {
  loading: () => <BlogsSkeleton />,
  ssr: false,
});

const BooksSection = dynamic(() => import("./booksSection"), {
  loading: () => <BooksSkeleton />,
  ssr: false,
});

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <ErrorBoundary>
      <div>
        {/* ── Above the fold — always rendered immediately ── */}
        <Carousel />

        {/* ── Below the fold — mounted only when scrolled near ── */}

        {/* rootMargin="300px" means rendering starts 300 px before the element
            enters the visible viewport — enough time for the chunk to arrive. */}

        <LazySection rootMargin="300px" fallback={<CoreValuesSkeleton />}>
          <CoreValues />
        </LazySection>

        <LazySection rootMargin="300px" fallback={<WeeklySessionsSkeleton />}>
          <WeeklySessions />
        </LazySection>

        <LazySection rootMargin="300px" fallback={<SpeakersSkeleton />}>
          <Speakers />
        </LazySection>

        <LazySection rootMargin="300px" fallback={<BlogsSkeleton />}>
          <BlogsSection />
        </LazySection>

        <LazySection rootMargin="300px" fallback={<BooksSkeleton />}>
          <BooksSection />
        </LazySection>
      </div>
    </ErrorBoundary>
  );
}
