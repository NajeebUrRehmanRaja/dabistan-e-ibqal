"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../../public/Dabistan-e-Iqbal-logo.svg";
import ErrorBoundary from "@/app/ErrorBoundary/ErrorBoundary";

// --- Navigation Data Configuration ---
const navItems = [
  {
    label: "Dabistan",
    children: [
      "Vision Statement",
      "Mission Statement",
      "Objectives",
      "Introduction",
      "History",
    ],
  },
  {
    label: "Allama Iqbal",
    children: ["Biography", "Poetry", "FAQs"],
  },
  {
    label: "Jinnah",
    href: "#", // No children, direct link
  },
  {
    label: "Pakistan",
    children: [
      "Ideology Of Pakistan (Eng)",
      "Ideology Of Pakistan (Urdu)",
      "Muslim History In Subcontinent",
    ],
  },
  {
    label: "Lectures",
    children: [
      "Dr. Javaid Iqbal",
      "Ahmed Javaid",
      "Mian Iqbal Salahuddin",
      "Dr. Atiya Syed",
      "Brig(R) Taimur Afzal Khan",
      "Brig(R) Waheed Uz Zaman",
      "Dr. Iqbal Chawla",
      "Dr. Hassan Raza Iqbali",
      "Maj Gen (R) Qasim Qureshi",
    ],
  },
  {
    label: "Multimedia",
    children: ["Art Work", "Digital Art Work", "Videos", "Iqbal Pictures"],
  },
  {
    label: "About",
    children: [
      "About Us",
      "Patron Chief",
      "President's Message",
      "Gallery",
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest("nav")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <ErrorBoundary>
      <nav className="bg-gradient-to-r from-[#0A0626] via-[#2E1A72] to-[#BFA7FF] shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Image
                src={logo}
                alt="Dabistan-e-Iqbal Logo"
                width={60}
                height={60}
                className="w-14 h-14 sm:w-[60px] sm:h-[60px] cursor-pointer hover:opacity-90 transition-opacity"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <ul className="flex items-center gap-6">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                    // onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children ? (
                      <button
                        className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-200 ${
                          activeDropdown === item.label
                            ? "text-pink-300"
                            : "text-white/90 hover:text-white"
                        }`}
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="text-[15px] font-medium text-white/90 hover:text-white transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    )}

                    {/* Desktop Dropdown Menu */}
                    {item.children && activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl overflow-hidden animate-fadeIn origin-top-left">
                         <div className="py-2">
                          {item.children.map((child, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors border-l-2 border-transparent hover:border-pink-600"
                            >
                              {child}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <button className="px-6 py-2.5 bg-pink-600 text-white text-sm font-semibold rounded-full shadow-lg hover:bg-pink-700 hover:shadow-pink-900/30 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                Register
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Mobile Drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#2E1A72] border-t border-white/10 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/5 last:border-0">
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label
                        )
                      }
                      className="w-full flex items-center justify-between py-3 text-white text-base font-medium hover:text-pink-300 transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileExpanded === item.label ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="bg-[#24145a] rounded-lg mb-2">
                        {item.children.map((child, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="block px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {child}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block py-3 text-white text-base font-medium hover:text-pink-300 transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-6 pb-2">
              <button className="w-full py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md active:scale-95 transition-transform">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </ErrorBoundary>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
