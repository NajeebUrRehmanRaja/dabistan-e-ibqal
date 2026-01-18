"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/Dabistan-e-Iqbal-logo.svg";
import Arrow from "./ui/Arrows";
import Dropdown from "./ui/Dropdown";
import ErrorBoundary from "@/app/ErrorBoundary/ErrorBoundary";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDabistanOpen, setIsDabistanOpen] = useState(false);
  const [isIqbalOpen, setIsIqbalOpen] = useState(false);
  const [isPakistanOpen, setIsPakistanOpen] = useState(false);
  const [isLecturesOpen, setIsLecturesOpen] = useState(false);
  const [isMultimediaOpen, setIsMultimediaOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const dabistanRef = useRef<HTMLLIElement>(null);
  const iqbalRef = useRef<HTMLLIElement>(null);
  const pakistanRef = useRef<HTMLLIElement>(null);
  const lecturesRef = useRef<HTMLLIElement>(null);
  const multimediaRef = useRef<HTMLLIElement>(null);
  const aboutRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dabistanRef.current && !dabistanRef.current.contains(e.target as Node)) {
        setIsDabistanOpen(false);
      }
      if (iqbalRef.current && !iqbalRef.current.contains(e.target as Node)) {
        setIsIqbalOpen(false);
      }
      if (pakistanRef.current && !pakistanRef.current.contains(e.target as Node)) {
        setIsPakistanOpen(false);
      }
      if (lecturesRef.current && !lecturesRef.current.contains(e.target as Node)) {
        setIsLecturesOpen(false);
      }
      if (multimediaRef.current && !multimediaRef.current.contains(e.target as Node)) {
        setIsMultimediaOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setIsAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ErrorBoundary>
        <nav className="bg-pink-700 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Image src={logo} alt="Logo" width={60} height={60} className="w-12 h-12 sm:w-[60px] sm:h-[60px] cursor-pointer" />

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <ul className="hidden lg:flex items-center text-white font-medium font-sans gap-6">
            {/* Dabistan Dropdown */}
          <li ref={dabistanRef} className="relative">
            <button
              onClick={() => {
                setIsDabistanOpen(!isDabistanOpen);
              }}
              className="flex items-center gap-1 hover:text-gray-200 cursor-pointer hover:text-gray-500"
            >
              Dabistan
              <Arrow open={isDabistanOpen} />
            </button>

            {isDabistanOpen && (
              <Dropdown>
                <li className="px-4 py-2 mt-2 hover:bg-gray-300 cursor-pointer border-b-1">Vision Statement</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer border-b-1">Mission Statement</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer border-b-1">Objectives</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer border-b-1">Introduction</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">History</li>
              </Dropdown>
            )}
          </li>

          {/* Allama Iqbal Dropdown */}
          <li ref={iqbalRef} className="relative">
            <button
              onClick={() => {
                setIsIqbalOpen(!isIqbalOpen);
              }}
              className="flex items-center gap-1 hover:text-gray-200 cursor-pointer"
            >
              Allama Iqbal
              <Arrow open={isIqbalOpen} />
            </button>

            {isIqbalOpen && (
              <Dropdown>
                <li className="px-4 py-2 mt-2 hover:bg-gray-300 cursor-pointer border-b-1">Biography</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer border-b-1">Poetry</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">FAQs</li>
              </Dropdown>
            )}
          </li>

          {/* Jinnah Dropdown */}
          <li className="cursor-pointer">Jinnah</li>

          {/* Pakistan Dropdown */}
          <li ref={pakistanRef} className="relative">
            <button
              onClick={() => {
                setIsPakistanOpen(!isPakistanOpen);
              }}
              className="flex items-center gap-1 hover:text-gray-200 cursor-pointer hover:text-gray-500"
            >
              Pakistan
              <Arrow open={isPakistanOpen} />
            </button>
            {isPakistanOpen && (
              <Dropdown>
                <li className="px-4 py-2 mt-2 hover:bg-gray-300 cursor-pointer border-b-1">Ideology Of Pakistan (Eng)</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer border-b-1">Ideology Of Pakistan (Urdu)</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Muslim History In Subcontinent</li>
              </Dropdown>
            )}
          </li>

          {/* Lectures Dropdown */}
          <li
            ref={lecturesRef}
            className="relative"
          >
            <button
              onClick={() => {
                setIsLecturesOpen(!isLecturesOpen);
              }}
              className="flex items-center gap-1 hover:text-gray-200 cursor-pointer hover:text-gray-500"
            >
              Lectures
              <Arrow open={isLecturesOpen} />
            </button>
            {isLecturesOpen && (
              <Dropdown>
                <li className="px-4 py-2 mt-2 hover:bg-gray-300 border-b-1 cursor-pointer">Dr. Javaid Iqbal</li>
                <li className="px-4 py-2 hover:bg-gray-300 border-b-1 cursor-pointer">Ahmed Javaid</li>
                <li className="px-4 py-2 hover:bg-gray-300 border-b-1 cursor-pointer">Mian Iqbal Salahuddin</li>
                <li className="px-4 py-2 hover:bg-gray-300 border-b-1 cursor-pointer">Dr. Atiya Syed</li>
                <li className="px-4 py-2 hover:bg-gray-300 border-b-1 cursor-pointer">Brig(R) Taimur Afzal Khan</li>
                <li className="px-4 py-2 hover:bg-gray-300 border-b-1 cursor-pointer">Brig(R) Waheed Uz Zaman</li>
                <li className="px-4 py-2 hover:bg-gray-300 border-b-1 cursor-pointer">Dr. Iqbal Chawla</li>
                <li className="px-4 py-2 hover:bg-gray-300 border-b-1 cursor-pointer">Dr. Hassan Raza Iqbali</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Maj Gen (R) Qasim Qureshi</li>
              </Dropdown>
            )}
          </li>

          {/* Multimedia Dropdown */}
          <li
            ref={multimediaRef}
            className="relative"
          >
            <button
              onClick={() => {
                setIsMultimediaOpen(!isMultimediaOpen);
              }}
              className="flex items-center gap-1 hover:text-gray-200 cursor-pointer hover:text-gray-500"
            >
              Multimedia
              <Arrow open={isMultimediaOpen} />
            </button>
            {isMultimediaOpen && (
              <Dropdown>
                <li className="px-4 py-2 mt-2 hover:bg-gray-300 cursor-pointer border-b-1">Art Work</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer border-b-1">Digital Art Work</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer border-b-1">Videos</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Iqbal Pictures</li>
              </Dropdown>
            )}
          </li>

          {/* About Dropdown */}
          <li
            ref={aboutRef}
            className="relative"
          >
            <button
              onClick={() => {
                setIsAboutOpen(!isAboutOpen);
              }}
              className="flex items-center gap-1 hover:text-gray-200 cursor-pointer hover:text-gray-500"
            >
              About
              <Arrow open={isAboutOpen} />
            </button>
            {isAboutOpen && (
              <Dropdown>
                <li className="px-4 py-2 mt-2 hover:bg-gray-300 cursor-pointer border-b-1">About Us</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer border-b-1">Patron Chief</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer border-b-1">President's Message</li>
                <li className="px-4 py-2 hover:bg-gray-300 cursor-pointer">Gallery</li>
              </Dropdown>
            )}
          </li>
        </ul>

        <button className="hidden lg:block px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
          Register
        </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-pink-700 border-t border-pink-600">
          <ul className="flex flex-col text-white font-medium font-sans">
            <li className="border-b border-pink-600">
              <button
                onClick={() => setIsDabistanOpen(!isDabistanOpen)}
                className="w-full flex items-center justify-between px-6 py-3 hover:bg-pink-600"
              >
                <span>Dabistan</span>
                <Arrow open={isDabistanOpen} />
              </button>
              {isDabistanOpen && (
                <ul className="bg-pink-600">
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">Vision Statement</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">Mission Statement</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">Objectives</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">Introduction</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer">History</li>
                </ul>
              )}
            </li>

            <li className="border-b border-pink-600">
              <button
                onClick={() => setIsIqbalOpen(!isIqbalOpen)}
                className="w-full flex items-center justify-between px-6 py-3 hover:bg-pink-600"
              >
                <span>Allama Iqbal</span>
                <Arrow open={isIqbalOpen} />
              </button>
              {isIqbalOpen && (
                <ul className="bg-pink-600">
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">Biography</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">Poetry</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer">FAQs</li>
                </ul>
              )}
            </li>

            <li className="border-b border-pink-600">
              <button className="w-full text-left px-6 py-3 hover:bg-pink-600">Jinnah</button>
            </li>

            <li className="border-b border-pink-600">
              <button
                onClick={() => setIsPakistanOpen(!isPakistanOpen)}
                className="w-full flex items-center justify-between px-6 py-3 hover:bg-pink-600"
              >
                <span>Pakistan</span>
                <Arrow open={isPakistanOpen} />
              </button>
              {isPakistanOpen && (
                <ul className="bg-pink-600">
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">Ideology Of Pakistan (Eng)</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">Ideology Of Pakistan (Urdu)</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer">Muslim History In Subcontinent</li>
                </ul>
              )}
            </li>

            <li className="border-b border-pink-600">
              <button
                onClick={() => setIsLecturesOpen(!isLecturesOpen)}
                className="w-full flex items-center justify-between px-6 py-3 hover:bg-pink-600"
              >
                <span>Lectures</span>
                <Arrow open={isLecturesOpen} />
              </button>
              {isLecturesOpen && (
                <ul className="bg-pink-600">
                  <li className="px-8 py-2 hover:bg-pink-500 border-b border-pink-500 cursor-pointer">Dr. Javaid Iqbal</li>
                  <li className="px-8 py-2 hover:bg-pink-500 border-b border-pink-500 cursor-pointer">Ahmed Javaid</li>
                  <li className="px-8 py-2 hover:bg-pink-500 border-b border-pink-500 cursor-pointer">Mian Iqbal Salahuddin</li>
                  <li className="px-8 py-2 hover:bg-pink-500 border-b border-pink-500 cursor-pointer">Dr. Atiya Syed</li>
                  <li className="px-8 py-2 hover:bg-pink-500 border-b border-pink-500 cursor-pointer">Brig(R) Taimur Afzal Khan</li>
                  <li className="px-8 py-2 hover:bg-pink-500 border-b border-pink-500 cursor-pointer">Brig(R) Waheed Uz Zaman</li>
                  <li className="px-8 py-2 hover:bg-pink-500 border-b border-pink-500 cursor-pointer">Dr. Iqbal Chawla</li>
                  <li className="px-8 py-2 hover:bg-pink-500 border-b border-pink-500 cursor-pointer">Dr. Hassan Raza Iqbali</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer">Maj Gen (R) Qasim Qureshi</li>
                </ul>
              )}
            </li>

            <li className="border-b border-pink-600">
              <button
                onClick={() => setIsMultimediaOpen(!isMultimediaOpen)}
                className="w-full flex items-center justify-between px-6 py-3 hover:bg-pink-600"
              >
                <span>Multimedia</span>
                <Arrow open={isMultimediaOpen} />
              </button>
              {isMultimediaOpen && (
                <ul className="bg-pink-600">
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">Art Work</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">Digital Art Work</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">Videos</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer">Iqbal Pictures</li>
                </ul>
              )}
            </li>

            <li className="border-b border-pink-600">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="w-full flex items-center justify-between px-6 py-3 hover:bg-pink-600"
              >
                <span>About</span>
                <Arrow open={isAboutOpen} />
              </button>
              {isAboutOpen && (
                <ul className="bg-pink-600">
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">About Us</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">Patron Chief</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer border-b border-pink-500">President's Message</li>
                  <li className="px-8 py-2 hover:bg-pink-500 cursor-pointer">Gallery</li>
                </ul>
              )}
            </li>

            <li className="px-6 py-4">
              <button className="w-full px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                Register
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
    </ErrorBoundary>
  );
}
