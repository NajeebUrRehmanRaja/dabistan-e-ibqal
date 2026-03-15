// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Download } from "lucide-react";

// interface Book {
//   title: string;
//   titleUrdu: string;
//   logo: string;
//   pdfPath: string;
//   gradient: string;
//   category: string;
//   description: string;
// }

// const books: Book[] = [
//   {
//     title: "Bang-e-Dara",
//     titleUrdu: "بانگ درا",
//     logo: "/books-logo/bang-e-dara.png",
//     pdfPath: "/document/Books PDF/Bang e Dara.pdf",
//     gradient: "from-pink-900 to-rose-700",
//     category: "Urdu Poetry",
//     description:
//       "Published in 1924, Bang e Dara is the collection of Iqbal's initial poetry of Iqbal.",
//   },
//   {
//     title: "Bal-e-Jibril",
//     titleUrdu: "بال جبریل",
//     logo: "/books-logo/baal-e-jibril.png",
//     pdfPath: "/document/Books PDF/Bal e Jabril.pdf",
//     gradient: "from-purple-900 to-indigo-800",
//     category: "Urdu Poetry",
//     description:
//       "Published in 1934, Baal e Jibreel consists of Iqbal's Urdu poems.",
//   },
//   {
//     title: "Zarb-e-Kaleem",
//     titleUrdu: "ضرب کلیم",
//     logo: "/books-logo/zarb-e-kaleem.png",
//     pdfPath: "/document/Books PDF/Zarb e Kalim.pdf",
//     gradient: "from-blue-900 to-cyan-800",
//     category: "Urdu Poetry",
//     description:
//       "Published in 1935, Zarb e Kaleem is the declaration of war against the odds of Time.",
//   },
//   {
//     title: "Armughan-e-Hijaz",
//     titleUrdu: "ارمغان حجاز",
//     logo: "/books-logo/armughan-e-hijaz.png",
//     pdfPath: "/document/Books PDF/Armghan e  Hijaz Urdu.pdf",
//     gradient: "from-emerald-900 to-teal-700",
//     category: "Urdu & Persian Poetry",
//     description:
//       "Published in 1938, Armughan e Hijaz is the Final Collection of Iqbal's Urdu and Persian Poetry.",
//   },
//   {
//     title: "Asrar-e-Khudi",
//     titleUrdu: "اسرار خودی",
//     logo: "/books-logo/asrar-e-khudi.png",
//     pdfPath: "/document/Books PDF/Asrar e Khudi .Sharah-E.pdf",
//     gradient: "from-amber-900 to-orange-700",
//     category: "Persian Poetry",
//     description:
//       "Published in 1915, the Primary Book for understanding Khudi at Individual level.",
//   },
//   {
//     title: "Rumuz-e-Bekhudi",
//     titleUrdu: "رموز بیخودی",
//     logo: "/books-logo/rumoz-e-bekhudi.png",
//     pdfPath: "/document/Books PDF/Ramooz E Bekhudi (urdu translation) by Allama Iqbal.pdf",
//     gradient: "from-red-900 to-pink-700",
//     category: "Persian Poetry",
//     description:
//       "Published in 1918, the Secondary Book for understanding Khudi at Community level.",
//   },
//   {
//     title: "Payam-e-Mashriq",
//     titleUrdu: "پیام مشرق",
//     logo: "/books-logo/payam-e-mashriq.png",
//     pdfPath: "/document/Books PDF/Payam-e-Mashriq - Allama Iqbal.pdf",
//     gradient: "from-violet-900 to-purple-700",
//     category: "Persian Poetry",
//     description:
//       "Published in 1923, the collection of Persian Poems written in response to German National Poet Johann Wolfgang von Goethe.",
//   },
//   {
//     title: "Zabur-e-Ajam",
//     titleUrdu: "زبور عجم",
//     logo: "/books-logo/zabur-e-ajam.png",
//     pdfPath: "/document/Books PDF/zabure ajam.pdf",
//     gradient: "from-indigo-900 to-blue-700",
//     category: "Persian Poetry",
//     description:
//       "Published in 1927, the Persian Collection of God's praises by Iqbal.",
//   },
//   {
//     title: "Javid Nama",
//     titleUrdu: "جاوید نامہ",
//     logo: "/books-logo/javid-nama.png",
//     pdfPath: "/document/Books PDF/Javed Nama.pdf",
//     gradient: "from-cyan-900 to-teal-700",
//     category: "Persian Poetry",
//     description:
//       "Published in 1932, the epic Persian poem of Iqbal explaining the meaning of Ascension.",
//   },
//   {
//     title: "Pas Che Bayad Kard",
//     titleUrdu: "پس چہ باید کرد",
//     logo: "/books-logo/pashchy-baidkard.png",
//     pdfPath: "/document/Books PDF/pas che bayad kard.pdf",
//     gradient: "from-lime-900 to-yellow-700",
//     category: "Persian Poetry",
//     description:
//       "Published in 1936, Iqbal's Guidance for Eastern Nations.",
//   },
//   {
//     title: "Kulyat-e-Iqbal",
//     titleUrdu: "کلیات اقبال",
//     logo: "/books-logo/kulyat-e-iqbal.png",
//     pdfPath: "/document/Books PDF/kuliyate iqbal.pdf",
//     gradient: "from-teal-900 to-emerald-700",
//     category: "Complete Works",
//     description:
//       "The complete collection of Allama Iqbal's Urdu and Persian poetry in a single volume.",
//   },
//   {
//     title: "Reconstruction of Religious Thought",
//     titleUrdu: "تجدید فکریات اسلام",
//     logo: "/books-logo/tajdeed-e-fikriyat-e-islam.png",
//     pdfPath: "/document/Books PDF/reconstruction thought.pdf",
//     gradient: "from-yellow-900 to-amber-700",
//     category: "English Books",
//     description:
//       "Published in 1934, The Collection of Iqbal's Seven Lectures on Religion.",
//   },
//   {
//     title: "Ilm-ul-Iqtisad",
//     titleUrdu: "علم الاقتصاد",
//     logo: "/books-logo/ilm-al-iqtasad.png",
//     pdfPath: "/document/Books PDF/ilmuliqtisad.pdf",
//     gradient: "from-green-900 to-lime-700",
//     category: "Urdu Books",
//     description:
//       "Published in 1903, the first ever written book on Economics in Urdu.",
//   },
// ];

// // ─── Book Popup (mirrors SpeakerPopup pattern) ───────────────────────────────

// const BookPopup = ({
//   book,
//   isOpen,
//   onClose,
// }: {
//   book: Book;
//   isOpen: boolean;
//   onClose: (e: React.MouseEvent) => void;
// }) => (
//   <>
//     {/* Backdrop – mobile only */}
//     {isOpen && (
//       <div
//         className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm md:hidden transition-opacity"
//         onClick={onClose}
//       />
//     )}

//     <div
//       className={`
//         ${isOpen ? "opacity-100 visible scale-100 translate-y-0" : "opacity-0 invisible scale-95 translate-y-2"}
//         md:group-hover:opacity-100 md:group-hover:visible md:group-hover:scale-100 md:group-hover:translate-y-0
//         fixed md:absolute
//         top-1/2 md:top-auto md:bottom-40 md:mb-2
//         left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-y-0
//         w-[85vw] max-w-xs md:w-64
//         bg-white rounded-2xl shadow-2xl p-5
//         transition-all duration-300 z-[70] md:z-50
//         pointer-events-auto
//         border border-gray-100
//       `}
//     >
//       {/* Close button – mobile only */}
//       <button
//         onClick={onClose}
//         className="md:hidden absolute top-3 right-3 p-1 text-gray-400 hover:text-gray-900 transition-colors"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       </button>

//       <div className="flex flex-col gap-3 items-center text-center">
//         {/* Book logo */}
//         <div className="relative w-16 h-16 flex-shrink-0">
//           <Image src={book.logo} alt={book.title} fill className="object-contain" />
//         </div>

//         <div className="space-y-1">
//           <h4 className="font-bold text-gray-900 text-base leading-tight">{book.title}</h4>
//           <p className="text-xs font-medium text-purple-700">{book.category}</p>
//           <p className="text-gray-600 text-xs leading-relaxed pt-1">{book.description}</p>
//         </div>
//       </div>

//       {/* Arrow pointing down toward the card – desktop only */}
//       <div className="hidden md:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-100" />
//     </div>
//   </>
// );

// // ─── Main Component ───────────────────────────────────────────────────────────

// export default function BooksOfIqbal() {
//   const [selectedBook, setSelectedBook] = useState<number | null>(null);


//   const handleDownload = async (pdfPath: string, fileName: string) => {
//     try {
//       console.log("Attempting to download:", pdfPath);
//       const response = await fetch(pdfPath);

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const blob = await response.blob();
//       console.log("Blob created successfully, size:", blob.size);

//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `${fileName}.pdf`;
//       link.setAttribute("type", "application/pdf");
//       document.body.appendChild(link);
//       link.click();

//       setTimeout(() => {
//         document.body.removeChild(link);
//         window.URL.revokeObjectURL(url);
//       }, 100);

//       console.log("Download initiated successfully");
//     } catch (error) {
//       console.error("Download failed:", error);
//       console.log("Attempting fallback: opening in new tab");
//       window.open(pdfPath, "_blank");
//     }
//   };

//   return (
//     <section className="py-5 px-5 relative overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

//       {/* Section Header */}
//       <div className="text-center mb-12 space-y-3">
//         <div className="flex items-center justify-center gap-3 mb-2">
//           <h1 className="text-4xl lg:text-5xl font-extrabold text-black tracking-tight">
//             Books of Iqbal
//           </h1>
//         </div>
//         <div className="h-1 w-24 bg-black/80 mx-auto rounded-full" />
//         <p className="text-black/90 text-lg pt-2 max-w-3xl mx-auto">
//           Explore and download the complete collection of Allama Iqbal&apos;s literary masterpieces
//         </p>
//       </div>

//       <div className="container mx-auto max-w-7xl relative z-10">
//         {/* Books Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//           {books.map((book, index) => (
//             <div
//               key={index}
//               className="group relative flex flex-col"
//             >
//               <div
//                 className="group/btn relative bg-gradient-to-br from-purple-900 via-pink-900 to-rose-800 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//               >
//                 <div className="flex flex-col items-center gap-3">
//                   {/* Book Logo */}
//                   <div className="relative w-20 h-20 flex-shrink-0">
//                     <Image
//                       src={book.logo}
//                       alt={book.title}
//                       fill
//                       className="object-contain group-hover/btn:scale-110 transition-transform duration-300"
//                     />
//                   </div>

//                   {/* Book Title & Category */}
//                   <div className="text-center">
//                     <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
//                       {book.title}
//                     </h3>
//                     <p className="text-xs text-white/70 mb-2">{book.category}</p>
//                   </div>

//                   {/* Download Icon */}
//                   <div className="mt-auto pt-2 border-t border-white/20 w-full flex justify-center">
//                     <Download onClick={() => handleDownload(book.pdfPath, book.title)} size={16} className="text-white/80 group-hover/btn:text-white transition-colors cursor-pointer" />
//                   </div>
//                 </div>
//               </div>

//               {/* Info icon – mobile only: shows description popup, does NOT download */}
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setSelectedBook(selectedBook === index ? null : index);
//                 }}
//                 className="md:hidden absolute top-2 right-2 p-1 bg-white/20 backdrop-blur-md rounded-full shadow-sm z-10"
//                 aria-label={`Info about ${book.title}`}
//               >
//                 <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </button>

//               {/* Hover / click popup */}
//               <BookPopup
//                 book={book}
//                 isOpen={selectedBook === index}
//                 onClose={(e) => {
//                   e.stopPropagation();
//                   setSelectedBook(null);
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }