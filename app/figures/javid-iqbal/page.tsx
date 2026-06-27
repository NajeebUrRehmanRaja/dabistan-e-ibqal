"use client";

import Link from "next/link";

const sections = [
    { title: "Biography", href: "/figures/javid-iqbal/biography" },
    { title: "Books", href: "/figures/javid-iqbal/books" },
    { title: "Gallery", href: "/figures/javid-iqbal/gallery" },
    { title: "Quotes", href: "/figures/javid-iqbal/quotes" },
];

export default function JavidIqbalPage() {
    return (
        <section className="py-16 px-5 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-800 relative overflow-hidden min-h-screen">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12 space-y-3">
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
                        Javid Iqbal
                    </h1>
                    <div className="h-1 w-24 bg-white/80 mx-auto rounded-full" />
                    <p className="text-white/90 text-lg pt-2 max-w-3xl mx-auto">
                        Explore the life, works, and legacy of Justice Javid Iqbal, son of Allama Iqbal
                    </p>
                </div>

                {/* Sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sections.map((section, index) => (
                        <Link
                            key={index}
                            href={section.href}
                            className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-white/20 hover:border-white/40"
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                <h3 className="text-xl font-bold text-white">{section.title}</h3>
                                <div className="mt-2 text-white/60 group-hover:text-white/80 transition-colors">
                                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
