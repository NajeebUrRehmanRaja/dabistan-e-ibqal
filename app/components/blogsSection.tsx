"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Calendar, User, ArrowRight } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  excerpt: string | null;
  featured_image_url: string | null;
  created_at: string;
  author_id: string;
}

// Supabase client initialize
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<(Blog & { author?: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const { data: blogsData, error: fetchError } = await supabase
          .from("blogs")
          .select("id, title, excerpt, featured_image_url, created_at, author_id")
          .order("created_at", { ascending: false })
          .limit(3);

        if (fetchError) {
          throw fetchError;
        }

        if (blogsData && blogsData.length > 0) {
          const authorIds = blogsData.map((b) => b.author_id).filter(Boolean);
          if (authorIds.length > 0) {
            const { data: profilesData, error: profileError } = await supabase
              .from("profiles")
              .select("id, user_id, display_name")
              .or(`id.in.(${authorIds.join(",")}),user_id.in.(${authorIds.join(",")})`);

            if (!profileError && profilesData) {
              const authorMap: Record<string, string> = {};
              profilesData.forEach((p) => {
                if (p.id) authorMap[p.id] = p.display_name;
                if (p.user_id) authorMap[p.user_id] = p.display_name;
              });

              const blogsWithAuthor = blogsData.map((b) => ({
                ...b,
                author: b.author_id ? (authorMap[b.author_id] || "ADMIN") : "ADMIN",
              }));
              setBlogs(blogsWithAuthor);
            } else {
              setBlogs(blogsData.map((b) => ({ ...b, author: "ADMIN" })));
            }
          } else {
            setBlogs(blogsData.map((b) => ({ ...b, author: "ADMIN" })));
          }
        } else {
          setBlogs([]);
        }
      } catch (err: any) {
        console.error("Supabase fetch error:", err);
        setError(err.message || "Failed to load latest blogs.");
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="py-12 px-5 bg-gray-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header Placeholder */}
          <div className="text-center mb-10 space-y-3">
            <div className="h-9 w-48 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-lg mx-auto" />
            <div className="h-1 w-20 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-full mx-auto" />
            <div className="h-5 w-64 bg-zinc-100 dark:bg-zinc-900 animate-pulse rounded mx-auto" />
          </div>
          {/* Grid Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl shadow-lg overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 animate-pulse flex flex-col"
              >
                <div className="h-48 bg-zinc-200 dark:bg-zinc-800" />
                <div className="p-5 flex-grow space-y-3">
                  <div className="flex gap-4 pt-1">
                    <div className="h-3 w-16 bg-zinc-200 dark:bg-zinc-850 rounded" />
                    <div className="h-3 w-24 bg-zinc-200 dark:bg-zinc-850 rounded" />
                  </div>
                  <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded mt-2" />
                  <div className="h-4 bg-zinc-100 dark:bg-zinc-900 rounded" />
                  <div className="h-4 bg-zinc-100 dark:bg-zinc-900 rounded" />
                  <div className="h-4 w-3/4 bg-zinc-100 dark:bg-zinc-900 rounded" />
                  <div className="pt-3 border-t border-gray-100 mt-4">
                    <div className="h-4 w-20 bg-zinc-200 dark:bg-zinc-850 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 px-5 text-center bg-gray-50 dark:bg-zinc-950">
        <p className="text-red-500 py-8">Failed to load latest blogs.</p>
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section className="py-12 px-5 text-center bg-gray-50 dark:bg-zinc-950">
        <p className="text-gray-500 py-8">No blogs found.</p>
      </section>
    );
  }

  return (
    <section className="py-12 px-5 bg-gray-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-pink-900 dark:text-pink-500 tracking-tight">
            Latest Insights
          </h1>
          <div className="h-1 w-20 bg-pink-900 dark:bg-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-zinc-400 text-base pt-2 max-w-2xl mx-auto">
            Explore articles and reflections on Iqbal's philosophy, poetry, and timeless wisdom
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white dark:bg-zinc-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Blog Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-zinc-800">
                {blog.featured_image_url ? (
                  <img
                    src={blog.featured_image_url}
                    alt={blog.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <span className="text-zinc-400">No Image</span>
                  </div>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Blog Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Meta Information */}
                <div className="flex items-center gap-4 mb-3 text-xs text-gray-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <User size={14} className="text-pink-900 dark:text-pink-500" />
                    {blog.author || "User"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-pink-900 dark:text-pink-500" />
                    {new Date(blog.created_at).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800 dark:text-zinc-100 mb-3 group-hover:text-pink-900 dark:group-hover:text-pink-500 transition-colors leading-tight line-clamp-2">
                  {blog.title}
                </h2>

                {/* Excerpt */}
                {blog.excerpt && (
                  <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mb-4 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>
                )}

                {/* Read More Link */}
                <div className="pt-3 border-t border-gray-100 dark:border-zinc-800 mt-auto">
                  <a
                    href={`https://dabistan-e-iqbal-blogs-site.web.app/blogs/${blog.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-pink-900 dark:text-pink-500 group-hover:gap-3 transition-all duration-300 cursor-pointer"
                  >
                    Read More
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="https://dabistan-e-iqbal-blogs-site.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-pink-900 text-white font-bold rounded-xl shadow-lg hover:bg-pink-850 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            View All Articles
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
