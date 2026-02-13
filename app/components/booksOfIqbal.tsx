"use client";

import Image from "next/image";
import { Download, 
  // BookOpen 

} from "lucide-react";

interface Book {
  title: string;
  titleUrdu: string;
  logo: string;
  pdfPath: string;
  gradient: string;
  category: string;
}

const books: Book[] = [
  {
    title: "Bang-e-Dara",
    titleUrdu: "بانگ درا",
    logo: "/books-logo/bang-e-dara.png",
    pdfPath: "/document/Books PDF/Bang e Dara.pdf",
    gradient: "from-pink-900 to-rose-700",
    category: "Poetry Collection"
  },
  {
    title: "Bal-e-Jibril",
    titleUrdu: "بال جبریل",
    logo: "/books-logo/baal-e-jibril.png",
    pdfPath: "/document/Books PDF/Bal e Jabril.pdf",
    gradient: "from-purple-900 to-indigo-800",
    category: "Poetry Collection"
  },
  {
    title: "Zarb-e-Kaleem",
    titleUrdu: "ضرب کلیم",
    logo: "/books-logo/zarb-e-kaleem.png",
    pdfPath: "/document/Books PDF/Zarb e Kalim.pdf",
    gradient: "from-blue-900 to-cyan-800",
    category: "Poetry Collection"
  },
  {
    title: "Armughan-e-Hijaz",
    titleUrdu: "ارمغان حجاز",
    logo: "/books-logo/armughan-e-hijaz.png",
    pdfPath: "/document/Books PDF/Armghan e  Hijaz Urdu.pdf",
    gradient: "from-emerald-900 to-teal-700",
    category: "Poetry Collection"
  },
  {
    title: "Asrar-e-Khudi",
    titleUrdu: "اسرار خودی",
    logo: "/books-logo/asrar-e-khudi.png",
    pdfPath: "/document/Books PDF/Asrar e Khudi .Sharah-E.pdf",
    gradient: "from-amber-900 to-orange-700",
    category: "Persian Poetry"
  },
  {
    title: "Rumuz-e-Bekhudi",
    titleUrdu: "رموز بیخودی",
    logo: "/books-logo/rumoz-e-bekhudi.png",
    pdfPath: "/document/Books PDF/Ramooz E Bekhudi (urdu translation) by Allama Iqbal.pdf",
    gradient: "from-red-900 to-pink-700",
    category: "Persian Poetry"
  },
  {
    title: "Payam-e-Mashriq",
    titleUrdu: "پیام مشرق",
    logo: "/books-logo/payam-e-mashriq.png",
    pdfPath: "/document/Books PDF/Payam-e-Mashriq - Allama Iqbal.pdf",
    gradient: "from-violet-900 to-purple-700",
    category: "Persian Poetry"
  },
  {
    title: "Zabur-e-Ajam",
    titleUrdu: "زبور عجم",
    logo: "/books-logo/zabur-e-ajam.png",
    pdfPath: "/document/Books PDF/zabure ajam.pdf",
    gradient: "from-indigo-900 to-blue-700",
    category: "Persian Poetry"
  },
  {
    title: "Javid Nama",
    titleUrdu: "جاوید نامہ",
    logo: "/books-logo/javid-nama.png",
    pdfPath: "/document/Books PDF/Javed Nama.pdf",
    gradient: "from-cyan-900 to-teal-700",
    category: "Persian Poetry"
  },
  {
    title: "Kulyat-e-Iqbal",
    titleUrdu: "کلیات اقبال",
    logo: "/books-logo/kulyat-e-iqbal.png",
    pdfPath: "/document/Books PDF/kuliyate iqbal.pdf",
    gradient: "from-teal-900 to-emerald-700",
    category: "Complete Works"
  },
  {
    title: "Ilm-ul-Iqtisad",
    titleUrdu: "علم الاقتصاد",
    logo: "/books-logo/ilm-al-iqtasad.png",
    pdfPath: "/document/Books PDF/ilmuliqtisad.pdf",
    gradient: "from-green-900 to-lime-700",
    category: "Economics"
  },
  {
    title: "Pas Che Bayad Kard",
    titleUrdu: "پس چہ باید کرد",
    logo: "/books-logo/pashchy-baidkard.png",
    pdfPath: "/document/Books PDF/pas che bayad kard.pdf",
    gradient: "from-lime-900 to-yellow-700",
    category: "Persian Prose"
  },
  {
    title: "Reconstruction of Religious Thought",
    titleUrdu: "تجدید فکریات اسلام",
    logo: "/books-logo/tajdeed-e-fikriyat-e-islam.png",
    pdfPath: "/document/Books PDF/reconstruction thought.pdf",
    gradient: "from-yellow-900 to-amber-700",
    category: "Philosophy"
  }
];

export default function BooksOfIqbal() {
  const handleDownload = async (pdfPath: string, fileName: string) => {
    try {
      console.log('Attempting to download:', pdfPath);
      
      const response = await fetch(pdfPath);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      console.log('Blob created successfully, size:', blob.size);
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName}.pdf`;
      link.setAttribute('type', 'application/pdf');
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);
      
      console.log('Download initiated successfully');
    } catch (error) {
      console.error('Download failed:', error);
      console.log('Attempting fallback: opening in new tab');
      // Fallback to direct link - opens PDF in new tab
      window.open(pdfPath, '_blank');
    }
  };

  return (
    <section className="py-16 px-5 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-800 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="flex items-center justify-center gap-3 mb-2">
            {/* <BookOpen className="text-white" size={36} /> */}
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Books of Iqbal
            </h1>
          </div>
          <div className="h-1 w-24 bg-white/80 mx-auto rounded-full"></div>
          <p className="text-white/90 text-lg pt-2 max-w-3xl mx-auto">
            Explore and download the complete collection of Allama Iqbal&apos;s literary masterpieces
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {books.map((book, index) => (
            <button
              key={index}
              onClick={() => handleDownload(book.pdfPath, book.title)}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-white/20 hover:border-white/40 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-3">
                {/* Book Logo */}
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={book.logo}
                    alt={book.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Book Title */}
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-xs text-white/70 mb-2">
                    {book.category}
                  </p>
                </div>

                {/* Download Icon */}
                <div className="mt-auto pt-2 border-t border-white/20 w-full flex justify-center">
                  <Download size={16} className="text-white/80 group-hover:text-white transition-colors" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}