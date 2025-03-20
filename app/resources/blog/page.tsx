import { Metadata } from "next";
import { getAllArticles } from "@/app/lib/articles";
import { Suspense } from "react";
import BlogCard from "./blog-card";

export const metadata: Metadata = {
  title: "Blog | HelmShare Yachts",
  description:
    "Read our latest articles about yacht investment and charter opportunities.",
};

export default async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="flex flex-col items-center justify-center mx-auto bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </main>
    </Suspense>
  );
}
