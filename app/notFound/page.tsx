'use client';

import { useEffect, useState } from 'react';

export default function NotFound() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="flex justify-center items-center bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-10">
            {/* Main Content */}
            <div className={`text-center px-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {/* Construction Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-6 shadow-lg">
                        <svg
                            className="w-16 h-16 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Under Development
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    We&apos;re working on something special. Check back soon!
                </p>

                {/* Animated Dots */}
                <div className="flex justify-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    );
}