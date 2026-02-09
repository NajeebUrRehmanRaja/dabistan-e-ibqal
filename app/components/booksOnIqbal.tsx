import { BookOpen } from "lucide-react";

const books = [
  {
    title: "Iqbal Aur Aalmi Adab",
    category: "Literary Analysis",
    gradient: "from-pink-900 to-rose-700"
  },
  {
    title: "Iqbal Ka Nizam-e-Fun",
    category: "Artistic Philosophy",
    gradient: "from-purple-900 to-indigo-800"
  },
  {
    title: "Iqbal Shair Aur Falsafi",
    category: "Poetry & Philosophy",
    gradient: "from-blue-900 to-cyan-800"
  },
  {
    title: "Iqbal Ki Urdu Nasar",
    category: "Urdu Prose",
    gradient: "from-emerald-900 to-teal-700"
  },
  {
    title: "Iqbal ki Farsi Shairi",
    category: "Persian Poetry",
    gradient: "from-amber-900 to-orange-700"
  },
  {
    title: "Khutbat-e-Iqbal per Aik Nazar",
    category: "Lectures Analysis",
    gradient: "from-red-900 to-pink-700"
  },
  {
    title: "Fizan-e-Iqbal",
    category: "Spiritual Essence",
    gradient: "from-violet-900 to-purple-700"
  },
  {
    title: "Iqbal Kay Hazoor",
    category: "Biographical",
    gradient: "from-indigo-900 to-blue-700"
  },
  {
    title: "Asfaar-e-Iqbal",
    category: "Travels",
    gradient: "from-cyan-900 to-teal-700"
  },
  {
    title: "Aina Khan-e-Iqbal",
    category: "Reflections",
    gradient: "from-teal-900 to-emerald-700"
  },
  {
    title: "Malfoozat",
    category: "Sayings & Wisdom",
    gradient: "from-green-900 to-lime-700"
  },
  {
    title: "Arooj-e-Iqbal",
    category: "Ascension Period",
    gradient: "from-lime-900 to-yellow-700"
  },
  {
    title: "Iqbal aur Quran",
    category: "Quranic Studies",
    gradient: "from-yellow-900 to-amber-700"
  },
  {
    title: "Zinda Rud",
    category: "Living Stream",
    gradient: "from-orange-900 to-red-700"
  },
  {
    title: "Iqbal Tashkili Doar",
    category: "Formative Era",
    gradient: "from-rose-900 to-pink-700"
  },
  {
    title: "Iqbal Middle Era",
    category: "Middle Period",
    gradient: "from-fuchsia-900 to-purple-700"
  },
  {
    title: "Iqbal Arooj Ka Doar",
    category: "Peak Period",
    gradient: "from-purple-900 to-violet-700"
  },
  {
    title: "Iqbal Ikhtatami Daor",
    category: "Final Period",
    gradient: "from-indigo-900 to-indigo-700"
  }
];

export default function BooksOnIqbal() {
  return (
    <section className="py-12 px-5 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-pink-900 tracking-tight">
            Books on Allama Iqbal
          </h1>
          <div className="h-1 w-20 bg-pink-900 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-base pt-2 max-w-2xl mx-auto">
            Explore comprehensive literature on the life, philosophy, and poetry of Allama Iqbal
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {books.map((book, index) => (
            <div 
              key={index} 
              className={`group relative p-4 rounded-xl bg-gradient-to-br ${book.gradient} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-white opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full min-h-[140px]">
                {/* Book Icon */}
                <div className="mb-3 flex items-center justify-between">
                  <div className="p-1.5 bg-white/20 rounded-lg backdrop-blur-sm">
                    <BookOpen size={18} className="text-white" />
                  </div>
                  <span className="text-[10px] font-medium opacity-70 uppercase tracking-wider">
                    {book.category}
                  </span>
                </div>
                
                {/* Book Title */}
                <h2 className="text-base font-bold tracking-wide leading-snug flex-grow">
                  {book.title}
                </h2>

                {/* Bottom Accent */}
                <div className="mt-4 pt-3 border-t border-white/20">
                  <div className="w-6 h-0.5 bg-white/50 group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
