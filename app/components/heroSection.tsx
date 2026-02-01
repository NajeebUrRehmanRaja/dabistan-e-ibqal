"use client";
// import Image from "next/image";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
// import {  useEffect, useState } from "react";
import Carousel from "./ui/Carousel";
import CoreValues from "../../app/components/coreValues";
import Speakers from "../../app/components/speakers";
import WeeklySessions from "../../app/components/weeklySessions";
// const lines = [
//   "کی محمد سے وفا تو نے تو ہم تیرے ہیں",
//   "یہ جہاں چیز ہے کیا، لوح و قلم تیرے ہیں",
//   "عقل و دل و نگاہ کا مرشد اولیں ہے عشق",
//   "عشق نہ ہو تو شرع و دیں بت کدۂ تصورات",
//   "خیرہ نہ کر سکا مجھے جلوہ دانش فرنگ",
//   "سرمہ ہے میری آنکھ کا خاک مدینہ و نجف",
//   "اپنے من میں ڈوب کر پا جا سراغ زندگی",
//   "تو اگر میرا نہیں بنتا نہ بن، اپنا تو بن",
//   "جوانوں کو سوز جگر بخش دے",
//   "مرا عشق، میری نظر بخش دے",
// ];

export default function HeroSection() {
//   const [lineIndex, setLineIndex] = useState(0);

  // Change line every 3.5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLineIndex((prev) => (prev + 1) % lines.length);
//     }, 3500); // 3.5 seconds per line

//     return () => clearTimeout(timer);
//   }, [lineIndex]);

  return (
    <ErrorBoundary>
      {/* <div className="relative w-full h-[500px]"> */}
      <div>
        {/* Hero Image */}
        {/* <Image
          src="/banner_bg.jpg"
          alt="Dabistan-e-Iqbal"
          fill
          className="object-cover"
        /> */}

        {/* Optional dark overlay for readability */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        {/* Animated Poetry Line */}
        {/* <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold text-center px-4"> */}
          {/* <p className="animate-fadeIn">{lines[lineIndex]}</p> */}
        {/* </div> */}
        <Carousel/>
        <CoreValues/>
        <WeeklySessions/>
        <Speakers/>
      </div>
    </ErrorBoundary>
  );
}
