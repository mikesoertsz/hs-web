"use client";

import { Card } from "@/components/ui/card";
import { Article } from "@/app/lib/articles";
import Image from "next/image";
import Link from "next/link";

interface BlogHomePopularProps {
  articles: Article[];
}

export default function BlogHomePopular({ articles }: BlogHomePopularProps) {
  // Take the first 3 articles as popular articles
  const popularArticles = articles.slice(0, 3);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Popular Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/blog/${article.slug}`}
              className="group"
            >
              <Card className="overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {article.description}
                  </p>
                  <p className="text-sm text-gray-500">{article.date}</p>
                  {article.readingTime && (
                    <p className="text-sm text-gray-400">
                      {article.readingTime}
                    </p>
                  )}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
