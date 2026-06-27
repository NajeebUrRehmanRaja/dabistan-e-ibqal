"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, BookOpen, ChevronDown } from "lucide-react";
import { nastaleeq } from "../font";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BookOfIqbal {
  title: string;
  titleUrdu: string;
  logo: string;
  pdfPath: string;
  gradient: string;
  category: string;
  description: string;
}

interface BookOnIqbal {
  title: string;
  author: string;
  category: string;
  gradient: string;
  pdfPath?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const booksOf: BookOfIqbal[] = [
  {
    title: "Ilm-ul-Iqtisad",
    titleUrdu: "علم الاقتصاد",
    logo: "/books-logo/ilm-al-iqtasad.png",
    pdfPath: "/document/Books PDF/ilmuliqtisad.pdf",
    gradient: "from-green-900 to-lime-700",
    category: "Urdu Books",
    description: "Published in 1903, the first ever written book on Economics in Urdu.",
  },
  {
    title: "Bang-e-Dara",
    titleUrdu: "بانگ درا",
    logo: "/books-logo/bang-e-dara.png",
    pdfPath: "/document/Books PDF/Bang e Dara.pdf",
    gradient: "from-pink-900 to-rose-700",
    category: "Urdu Poetry",
    description: "Published in 1924, Bang e Dara is the collection of Iqbal's initial poetry of Iqbal.",
  },
  {
    title: "Bal-e-Jibril",
    titleUrdu: "بال جبریل",
    logo: "/books-logo/baal-e-jibril.png",
    pdfPath: "/document/Books PDF/Bal e Jabril.pdf",
    gradient: "from-purple-900 to-indigo-800",
    category: "Urdu Poetry",
    description: "Published in 1934, Baal e Jibreel consists of Iqbal's Urdu poems.",
  },
  {
    title: "Zarb-e-Kaleem",
    titleUrdu: "ضرب کلیم",
    logo: "/books-logo/zarb-e-kaleem.png",
    pdfPath: "/document/Books PDF/Zarb e Kalim.pdf",
    gradient: "from-blue-900 to-cyan-800",
    category: "Urdu Poetry",
    description: "Published in 1935, Zarb e Kaleem is the declaration of war against the odds of Time.",
  },
  {
    title: "Asrar-e-Khudi",
    titleUrdu: "اسرار خودی",
    logo: "/books-logo/asrar-e-khudi.png",
    pdfPath: "/document/Books PDF/Asrar e Khudi .Sharah-E.pdf",
    gradient: "from-amber-900 to-orange-700",
    category: "Persian Poetry",
    description: "Published in 1915, the Primary Book for understanding Khudi at Individual level.",
  },
  {
    title: "Rumuz-e-Bekhudi",
    titleUrdu: "رموز بیخودی",
    logo: "/books-logo/rumoz-e-bekhudi.png",
    pdfPath: "/document/Books PDF/Ramooz E Bekhudi (urdu translation) by Allama Iqbal.pdf",
    gradient: "from-red-900 to-pink-700",
    category: "Persian Poetry",
    description: "Published in 1918, the Secondary Book for understanding Khudi at Community level.",
  },
  {
    title: "Payam-e-Mashriq",
    titleUrdu: "پیام مشرق",
    logo: "/books-logo/payam-e-mashriq.png",
    pdfPath: "/document/Books PDF/Payam-e-Mashriq - Allama Iqbal.pdf",
    gradient: "from-violet-900 to-purple-700",
    category: "Persian Poetry",
    description: "Published in 1923, the collection of Persian Poems written in response to German National Poet Johann Wolfgang von Goethe.",
  },
  {
    title: "Zabur-e-Ajam",
    titleUrdu: "زبور عجم",
    logo: "/books-logo/zabur-e-ajam.png",
    pdfPath: "/document/Books PDF/zabure ajam.pdf",
    gradient: "from-indigo-900 to-blue-700",
    category: "Persian Poetry",
    description: "Published in 1927, the Persian Collection of God's praises by Iqbal.",
  },
  {
    title: "Javid Nama",
    titleUrdu: "جاوید نامہ",
    logo: "/books-logo/javid-nama.png",
    pdfPath: "/document/Books PDF/Javed Nama.pdf",
    gradient: "from-cyan-900 to-teal-700",
    category: "Persian Poetry",
    description: "Published in 1932, the epic Persian poem of Iqbal explaining the meaning of Ascension.",
  },
  {
    title: "Pas Che Bayad Kard",
    titleUrdu: "پس چہ باید کرد",
    logo: "/books-logo/pashchy-baidkard.png",
    pdfPath: "/document/Books PDF/pas che bayad kard.pdf",
    gradient: "from-lime-900 to-yellow-700",
    category: "Persian Poetry",
    description: "Published in 1936, Iqbal's Guidance for Eastern Nations.",
  },
  {
    title: "Armughan-e-Hijaz",
    titleUrdu: "ارمغان حجاز",
    logo: "/books-logo/armughan-e-hijaz.png",
    pdfPath: "/document/Books PDF/Armghan e  Hijaz Urdu.pdf",
    gradient: "from-emerald-900 to-teal-700",
    category: "Urdu & Persian Poetry",
    description: "Published in 1938, Armughan e Hijaz is the Final Collection of Iqbal's Urdu and Persian Poetry.",
  },
  {
    title: "Kulyat-e-Iqbal",
    titleUrdu: "کلیات اقبال",
    logo: "/books-logo/kulyat-e-iqbal.png",
    pdfPath: "/document/Books PDF/kuliyate iqbal.pdf",
    gradient: "from-teal-900 to-emerald-700",
    category: "Complete Works",
    description: "The complete collection of Allama Iqbal's Urdu and Persian poetry in a single volume.",
  },
  {
    title: "Reconstruction of Religious Thought",
    titleUrdu: "تجدید فکریات اسلام",
    logo: "/books-logo/tajdeed-e-fikriyat-e-islam.png",
    pdfPath: "/document/Books PDF/reconstruction thought.pdf",
    gradient: "from-yellow-900 to-amber-700",
    category: "English Books",
    description: "Published in 1934, The Collection of Iqbal's Seven Lectures on Religion.",
  },
  {
    title: "Stary Reflections",
    titleUrdu: "منتشر خیالات",
    logo: "/books-logo/Stray Reflections.png",
    pdfPath: "/document/Books PDF/Stray Reflection.pdf",
    gradient: "from-yellow-900 to-amber-700",
    category: "English Books",
    description: "Published in 1961, Iqbal's personal diary where he penned down his thoughts till 1910.",
  },
];

const booksOn: BookOnIqbal[] = [
  { title: "Iqbal, Poet and Thinker", author: "Mustansir Mir", category: "Introduction of Iqbal", gradient: "from-pink-900 to-rose-700", pdfPath: "/document/Books on Iqbal PDF/Iqbal Poet and Thinker by Mustansir Mir.pdf" },
  { title: "Tulip of the Desert", author: "Mustansir Mir", category: "Introduction to Iqbal's poetry", gradient: "from-purple-900 to-indigo-800" },
  { title: "Thoughts of Iqbal", author: "Brig(r) Taimoor Afzal Khan", category: "Themes of Iqbal - English", gradient: "from-blue-900 to-cyan-800", pdfPath: "/document/Books on Iqbal PDF/Thoughts of Iqbal by Brig (R) Taimur Afzal Khan.pdf" },
  { title: "Philosophy of Iqbal", author: "Dr. Atiya Syed", category: "Philosophy", gradient: "from-emerald-900 to-teal-700", },
  { title: "The Philosophy of Iqbal", author: "Dr. Rafi uddin", category: "Philosophy", gradient: "from-amber-900 to-orange-700", pdfPath: "/document/Books on Iqbal PDF/The philosophy of IqbalL by Dr. Mohammad Rafi-ud-Din.pdf" },
  { title: "Afkaar-e-Iqbal", author: "Dr. Javid Iqbal", category: "Themes of Iqbal - Urdu", gradient: "from-red-900 to-pink-700", pdfPath: "/document/Books on Iqbal PDF/Afkar e Iqbal by Dr. Javed Iqbal.pdf" },
  { title: "Zinda Rood", author: "Dr. Javid Iqbal", category: "Biography of Iqbal", gradient: "from-violet-900 to-purple-700", pdfPath: "/document/Books on Iqbal PDF/Zinda Rood by Dr Javed Iqbal.pdf" },
  { title: "Iqbal Kay Hazoor", author: "Mustansir Mir", category: "Philosophy", gradient: "from-indigo-900 to-blue-700", pdfPath: "/document/Books on Iqbal PDF/iqbal ke hzoor by sayed nazeer niyazi.pdf" },
  { title: "Iqbal's Educational Philosophy", author: "K. G. Sayedain", category: "Philosophy", gradient: "from-cyan-900 to-teal-700", pdfPath: "/document/Books on Iqbal PDF/Iqbal's Educational Philosophy.pdf" },
  { title: "Mulla Aur Iqbal", author: "Dr. Khalifa Abdul Hakeem", category: "Religious Theme", gradient: "from-teal-900 to-emerald-700", pdfPath: "/document/Books on Iqbal PDF/Iqbal Aur Mulla by Dr. Khalifa Abdul Hakeem.pdf" },
  { title: "Iqbal Nayi Tashkeel", author: "Aziz Ahmad", category: "Themes of Iqbal", gradient: "from-green-900 to-lime-700", pdfPath: "/document/Books on Iqbal PDF/Iqbal Nai Tashkeel by Aziz Ahmad.pdf" },
  { title: "Metaphysics of Iqbal", author: "Dr. Ishrat Hasan Enver", category: "Themes of Iqbal", gradient: "from-lime-900 to-yellow-700", pdfPath: "/document/Books on Iqbal PDF/Metaphysics Of Iqbal by Dr. Ishrat Hasan Enver.pdf" },
  { title: "Fikr-e-Iqbal", author: "Dr. Khalifa Abdul Hakeem", category: "Themes of Iqbal", gradient: "from-yellow-900 to-amber-700", pdfPath: "/document/Books on Iqbal PDF/Fikr e Iqbal Khalifa Abdul Hakeem 1964.pdf" },
  { title: "Iqbal Ka Siyasi Karnama", author: "Muhammad Ahmad Khan", category: "Politics", gradient: "from-rose-900 to-pink-700", pdfPath: "/document/Books on Iqbal PDF/Iqbal ka Siasi Karnama 1977 by Muhammad Ahmed Khan.pdf" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function handleDownload(pdfPath: string, fileName: string) {
  try {
    const response = await fetch(pdfPath);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.pdf`;
    link.setAttribute("type", "application/pdf");
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 100);
  } catch {
    // If fetch/blob fails, attempt a simple download or open in the same window
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `${fileName}.pdf`;
    link.target = "_self";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// ─── Shared Components ────────────────────────────────────────────────────────

function CategoryCard({ title, books, accent }: { title: string; books: BookOfIqbal[]; accent: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const openDropdown = () => setIsOpen(true);
  // const closeDropdown = () => setIsOpen(true);

  return (
    <div
      className={`group relative bg-gradient-to-br ${accent} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mb-6 border border-white/10`}
      onMouseEnter={openDropdown}
    // onMouseLeave={closeDropdown}
    >
      <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-white opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      <div
        className="px-6 py-5 flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        <h3 className="text-white font-bold text-xl tracking-wide">{title}</h3>
        <div className="flex items-center gap-3">
          <span className="text-white/70 text-sm font-medium bg-white/10 px-3 py-1 rounded-full">
            {books.length} Books
          </span>
          <ChevronDown
            className={`text-white/70 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
            size={20}
          />
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out pb-2 ${isOpen ? 'max-h-[500px] md:max-h-[800px] opacity-100 pb-6 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="px-4 flex flex-col gap-3">
          {books.map((book) => (
            <div key={book.title} className="flex items-center gap-4 px-3 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all group/book" onClick={(e) => {
              e.stopPropagation();
              handleDownload(book.pdfPath, book.title);
            }}>
              <div className="relative sm:w-20 sm:h-20 w-16 h-16 flex-shrink-0">
                <Image src={book.logo} alt={book.title} fill className="object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm sm:py-0.5 py-1 font-bold leading-tight">{book.title}</p>
                <p className={`text-white text-md sm:py-1 py-0.5 ${nastaleeq.className}`}>{book.titleUrdu}</p>
                <p className="text-white text-xs sm:py-1 py-0.5">{book.description}</p>
              </div>
              <button
                className="p-2 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors"
                title="Download PDF"
              >
                <Download size={16} className="cursor-pointer" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Combined Component ──────────────────────────────────────────────────

export default function BooksSection() {
  const categories = [
    {
      title: "Urdu Books",
      accent: "from-pink-900 via-rose-800 to-rose-700",
      books: booksOf.filter(b => b.category.includes("Urdu") || b.category === "Complete Works")
    },
    {
      title: "Persian Books",
      accent: "from-purple-900 via-indigo-800 to-indigo-700",
      books: booksOf.filter(b => b.category.includes("Persian") || b.category === "Complete Works")
    },
    {
      title: "English Books",
      accent: "from-emerald-900 via-teal-800 to-teal-700",
      books: booksOf.filter(b => b.category === "English Books")
    }
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden bg-white">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-900/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ══ LEFT: Books OF Iqbal ══ */}
          <div className="flex-1 min-w-0">
            <div className="mb-10 space-y-3">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Books of Iqbal
              </h2>
              <div className="h-1.5 w-24 bg-pink-900 rounded-full" />
              <p className="text-slate-600 text-lg max-w-md font-medium">
                The original masterpieces of Allama Iqbal, now organized for easy access.
              </p>
            </div>

            <div className="flex flex-col">
              {categories.map((cat) => (
                <CategoryCard key={cat.title} {...cat} />
              ))}
            </div>
          </div>

          {/* ══ RIGHT: Books ON Iqbal ══ */}
          <div className="flex-1 min-w-0">
            <div className="mb-10 space-y-3">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight transition-all">
                Books on Iqbal
              </h2>
              <div className="h-1.5 w-24 bg-indigo-900 rounded-full" />
              <p className="text-slate-600 text-lg max-w-md font-medium">
                Literature exploring the depth and impact of Iqbal's thought.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {booksOn.map((book, index) => (
                <div
                  key={index}
                  className={`group relative p-4 rounded-xl bg-gradient-to-br ${book.gradient} text-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[140px] border border-white/5 flex flex-col`}
                >
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-16 h-16 bg-white opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10 flex flex-col h-full flex-1">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <BookOpen size={16} className="text-white" />
                      </div>
                      <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest text-right leading-tight max-w-[60%]">
                        {book.category}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold tracking-wide leading-snug flex-1 flex items-end">
                      {book.title}
                    </h3>

                    <h4 className="text-xs mt-2 flex-1 flex items-end">
                      {book.author}
                    </h4>

                    <div className="mt-4 pt-3 border-t border-white/20 w-full flex items-center justify-between">
                      <div className="w-6 h-1 bg-white/50 group-hover:w-12 transition-all duration-300" />
                      {book.pdfPath && (
                        <button
                          onClick={() => handleDownload(book.pdfPath!, book.title)}
                          className="p-1.5 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors"
                          title="Download PDF"
                        >
                          <Download size={13} className="cursor-pointer" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
