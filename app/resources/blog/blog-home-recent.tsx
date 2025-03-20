import { useEffect, useState } from "react";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import Image from "next/image";
import Link from "next/link";

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
}

const images = [
  "/img/hero/hero3.jpg",
  "/img/hero/hero4.jpg",
  "/img/hero/hero2.jpg",
  "/img/hero/hero7.jpg",
];

export default function BlogHomeRecent() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await fetch("/api/articles");
        const data = await response.json();
        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    fetchArticles();
  }, []);

  return (
    <Wrapper className="py-[8dvh] bg-slate-100">
      <InnerWrap className="max-w-4xl">
        <h2 className="mb-2 tracking-widest font-medium text-xs uppercase w-full text-left">
          Recent ARTICLES
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 w-full">
          {articles.map((article, index) => (
            <li
              key={article.slug}
              className="flex flex-col p-6 w-full h-[450px] hover:-translate-y-0.5 grow bg-white group hover:shadow-md transition duration-200 ease-in-out transform hover:z-20 z-10 border border-gray-200"
            >
              <Link
                href={`/blog/${article.slug}`}
                className="flex flex-col justify-start h-full"
              >
                <div className="flex w-full h-1/3 overflow-hidden relative rounded-md">
                  <Image
                    src={images[index % images.length]}
                    alt={article.title}
                    fill
                    className="absolute inset-0 aspect-square group-hover:scale-105 transition duration-200 ease-in-out z-10"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-gray-700 bg-amber-100 rounded-full rounded-l-none px-3 py-1 absolute top-2 left-0 z-20 border border-amber-200">
                    General
                  </span>
                </div>
                <div className="flex flex-col items-start justify-between h-2/3">
                  <div className="pt-4">
                    <h3 className="text-3xl font-light mt-6 tracking-tighter line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{article.description}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">{article.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
