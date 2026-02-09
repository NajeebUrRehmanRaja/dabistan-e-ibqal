import { Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";

const blogs = [
  {
    title: "Here's Why We Celebrate Iqbal Day",
    excerpt: "\"The Poet of the East\"—Dr Allama Iqbal—doesn't require any introduction. However, since November 9 is a national occasion of celebration and commemoration of his legacy, let's learn all about Iqbal Day and its significance in this blog.",
    author: "ADMIN",
    date: "October 8, 2018",
    image: "/banner_bg.jpg",
    category: "Celebration"
  },
  {
    title: "The Secrets of the Self (Khudi)",
    excerpt: "Raise thyself to such a height that before issuing each decree GOD himself may ask His slave: \"What is thy pleasure? It is this doctrine of \"Khudi\" which Iqbal has propounded and explained at length in his famous Mathnawi Asrar-i-Khudi.",
    author: "ADMIN",
    date: "October 8, 2018",
    image: "/banner_bg.jpg",
    category: "Philosophy"
  },
  {
    title: "Allama Muhammad Iqbal a great poet!",
    excerpt: "Among the Persian poets of modern times Iqbal (d. 1938) stands head and shoulders above his contemporaries. A disciple and admirer of Girami, a contemporary scholar and poet of Jullundur.",
    author: "ADMIN",
    date: "October 8, 2018",
    image: "/banner_bg.jpg",
    category: "Biography"
  }
];

export default function BlogsSection() {
  return (
    <section className="py-12 px-5 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-pink-900 tracking-tight">
            Latest Insights
          </h1>
          <div className="h-1 w-20 bg-pink-900 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-base pt-2 max-w-2xl mx-auto">
            Explore articles and reflections on Iqbal's philosophy, poetry, and timeless wisdom
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <article 
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Blog Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-pink-900 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  {blog.category}
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Blog Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Meta Information */}
                <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <User size={14} className="text-pink-900" />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-pink-900" />
                    {blog.date}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-pink-900 transition-colors leading-tight line-clamp-2">
                  {blog.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                <div className="pt-3 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-sm font-bold text-pink-900 group-hover:gap-3 transition-all duration-300 cursor-pointer">
                    Read More
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-pink-900 text-white font-bold rounded-xl shadow-lg hover:bg-pink-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer">
            View All Articles
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
