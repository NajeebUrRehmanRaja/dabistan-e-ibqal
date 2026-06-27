/**
 * Skeleton loaders shown as placeholders while lazy sections are loading.
 * Each skeleton mirrors the rough height / layout of its real component so
 * the page doesn't jump when content replaces it.
 */

function Shimmer() {
  return (
    <div className="animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 rounded-xl" />
  );
}

/* ── Core Values ──────────────────────────────────────────────────────────── */
export function CoreValuesSkeleton() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-3">
          <div className="h-10 w-48 bg-gray-200 animate-pulse rounded-lg mx-auto" />
          <div className="h-1.5 w-24 bg-gray-200 animate-pulse rounded-full mx-auto" />
          <div className="h-5 w-64 bg-gray-100 animate-pulse rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-48 animate-pulse bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Weekly Sessions ──────────────────────────────────────────────────────── */
export function WeeklySessionsSkeleton() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12 space-y-3">
          <div className="h-10 w-56 bg-gray-200 animate-pulse rounded-lg mx-auto" />
          <div className="h-1.5 w-20 bg-gray-200 animate-pulse rounded-full mx-auto" />
          <div className="h-5 w-72 bg-gray-100 animate-pulse rounded mx-auto" />
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="h-8 w-3/4 bg-gray-200 animate-pulse rounded-lg" />
            <div className="h-20 bg-gray-100 animate-pulse rounded-xl" />
            <div className="h-20 bg-gray-100 animate-pulse rounded-xl" />
            <div className="h-12 w-40 bg-gray-200 animate-pulse rounded-xl" />
          </div>
          <div className="h-[500px] bg-gray-100 animate-pulse rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

/* ── Speakers ─────────────────────────────────────────────────────────────── */
export function SpeakersSkeleton() {
  return (
    <section className="py-20 px-5 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-3">
          <div className="h-10 w-40 bg-gray-200 animate-pulse rounded-lg mx-auto" />
          <div className="h-1.5 w-24 bg-gray-200 animate-pulse rounded-full mx-auto" />
          <div className="h-5 w-72 bg-gray-100 animate-pulse rounded mx-auto" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 px-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[3/4] bg-gray-200 animate-pulse" />
              <div className="p-4 bg-white space-y-2">
                <div className="h-4 bg-gray-200 animate-pulse rounded" />
                <div className="h-3 w-3/4 bg-gray-100 animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Blogs ────────────────────────────────────────────────────────────────── */
export function BlogsSkeleton() {
  return (
    <section className="py-12 px-5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 space-y-3">
          <div className="h-9 w-48 bg-gray-200 animate-pulse rounded-lg mx-auto" />
          <div className="h-1 w-20 bg-gray-200 animate-pulse rounded-full mx-auto" />
          <div className="h-5 w-64 bg-gray-100 animate-pulse rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 animate-pulse" />
              <div className="p-5 space-y-3 bg-white">
                <div className="h-3 w-1/2 bg-gray-100 animate-pulse rounded" />
                <div className="h-5 bg-gray-200 animate-pulse rounded" />
                <div className="h-4 bg-gray-100 animate-pulse rounded" />
                <div className="h-4 w-3/4 bg-gray-100 animate-pulse rounded" />
                <div className="h-4 w-24 bg-gray-200 animate-pulse rounded mt-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Books ────────────────────────────────────────────────────────────────── */
export function BooksSkeleton() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="space-y-6">
            <div className="space-y-3 mb-10">
              <div className="h-9 w-40 bg-gray-200 animate-pulse rounded-lg" />
              <div className="h-1.5 w-24 bg-gray-200 animate-pulse rounded-full" />
              <div className="h-5 w-64 bg-gray-100 animate-pulse rounded" />
            </div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 animate-pulse rounded-2xl" />
            ))}
          </div>
          {/* Right */}
          <div className="space-y-6">
            <div className="space-y-3 mb-10">
              <div className="h-9 w-40 bg-gray-200 animate-pulse rounded-lg" />
              <div className="h-1.5 w-24 bg-gray-200 animate-pulse rounded-full" />
              <div className="h-5 w-64 bg-gray-100 animate-pulse rounded" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-36 bg-gray-200 animate-pulse rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
