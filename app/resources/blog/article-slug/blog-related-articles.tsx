import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { InnerWrap, Wrapper } from "@/lib/atoms";

type RelatedArticle = {
  title: string;
  date: string;
  imageUrl: string;
  category: string;
  href: string;
  readingTime: string; // Added reading time
};

type RelatedArticlesProps = {
  articles?: RelatedArticle[];
};

const defaultRelatedArticles: RelatedArticle[] = [
  {
    title: "Exploring the World: Top Destinations for Yacht Charters",
    date: "Nov 22, 2024",
    imageUrl: "/img/hero/hero1.jpg",
    category: "Travel Guides",
    href: "/travel-guides/yacht-charter-destinations",
    readingTime: "5 min read", // Added reading time
  },
  {
    title: "The Future of Yachting: Fractional Ownership Explained",
    date: "May 1, 2024",
    imageUrl: "/img/hero/hero1.jpg",
    category: "Industry Insights",
    href: "/industry-insights/fractional-yacht-ownership",
    readingTime: "7 min read", // Added reading time
  },
  {
    title: "Maximizing Your Investment: Owning a Charter Vessel Fractionally",
    date: "Oct 22, 2024",
    imageUrl: "/img/hero/hero1.jpg",
    category: "Investment Strategies",
    href: "/investment-strategies/charter-vessel-ownership",
    readingTime: "6 min read", // Added reading time
  },
];

export default function BlogRelatedArticles({
  articles = defaultRelatedArticles,
}: RelatedArticlesProps) {
  return (
    <Wrapper className="p-8 border-t border-gray-300 bg-gradient-to-t from-white to-slate-100">
      <InnerWrap className="max-w-4xl">
        <div className="flex w-full items-center justify-between py-6">
          <h2 className="mb-2 tracking-widest font-medium text-xs uppercase">
            related ARTICLEs
          </h2>
          <div className="flex items-center justify-center gap-1 h-11">
            <button className="border border-gray-300 p-1 rounded-sm h-11 bg-white hover:bg-black transition duration-100 ease-in-out hover:text-white">
              <ChevronLeft className="cursor-pointer" />
            </button>
            <button className="border border-gray-300 p-1 rounded-sm h-11 bg-white hover:bg-black transition duration-100 ease-in-out hover:text-white">
              <ChevronRight className="cursor-pointer" />
            </button>
          </div>
        </div>
        <ul className="flex bg-gray-200 gap-[1px] border h-[500px] border-gray-200 z-0">
          {articles.map((article, index) => (
            <li
              key={index}
              className="flex flex-col p-6 w-[400px] hover:-translate-y-0.5 grow bg-white group hover:shadow-lg transition duration-200 ease-in-out transform hover:z-20 z-10"
            >
              <Link
                href={article.href}
                className="flex flex-col justify-start h-full"
              >
                <div className="flex w-full h-[400px] overflow-hidden relative rounded-md ">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="absolute inset-0 aspect-square group-hover:scale-105 transition duration-200 ease-in-out"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex flex-col items-start justify-between h-full">
                  <div className="pt-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500 bg-amber-100 rounded-full rounded-l-none px-3 py-1">
                      {article.category}
                    </span>
                    <h3 className="text-2xl mt-6">{article.title}</h3>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {article.date} · {article.readingTime}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
