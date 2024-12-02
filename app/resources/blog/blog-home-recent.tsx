import { InnerWrap, Wrapper } from "@/lib/atoms";
import Image from "next/image";
import Link from "next/link";

type Article = {
  author: string;
  title: string;
  description: string;
  date: string;
  views: number;
  comments: number;
  image: string;
  category: string;
};

const recentArticles: Article[] = [
  {
    author: "Emily White",
    title: "Navigating the New Yacht Regulations",
    description:
      "An overview of the latest regulations affecting yacht owners.",
    date: "Dec 20",
    views: 500,
    comments: 10,
    image: "/img/hero/hero3.jpg",
    category: "Regulations",
  },
  {
    author: "Michael Green",
    title: "Sustainable Yachting Practices for Chartering",
    description: "How to make your yachting experience more eco-friendly.",
    date: "Dec 18",
    views: 450,
    comments: 15,
    image: "/img/hero/hero4.jpg",
    category: "Sustainability",
  },
  {
    author: "Sarah Blue",
    title: "Top Destinations for Yacht Charters",
    description: "Explore the best destinations for your next yacht charter.",
    date: "Dec 15",
    views: 600,
    comments: 25,
    image: "/img/hero/hero2.jpg",
    category: "Travel",
  },
  {
    author: "David Black",
    title: "Yacht Maintenance Tips for Chartering",
    description: "Essential maintenance tips to keep your yacht in top shape.",
    date: "Dec 10",
    views: 700,
    comments: 30,
    image: "/img/hero/hero7.jpg",
    category: "Maintenance",
  },
];

export default function BlogHomeRecent() {
  return (
    <Wrapper className="py-[8dvh] bg-slate-100">
      <InnerWrap className="max-w-4xl">
        <h2 className="mb-2 tracking-widest font-medium text-xs uppercase w-full text-left">
          Recent ARTICLES
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 w-full">
          {recentArticles.map((article, index) => (
            <li
              key={index}
              className="flex flex-col p-6 w-full h-[450px] hover:-translate-y-0.5 grow bg-white group hover:shadow-md transition duration-200 ease-in-out transform hover:z-20 z-10 border border-gray-200"
            >
              <Link href="#" className="flex flex-col justify-start h-full">
                <div className="flex w-full h-1/3 overflow-hidden relative rounded-md">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="absolute inset-0 aspect-square group-hover:scale-105 transition duration-200 ease-in-out z-10"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-gray-700 bg-amber-100 rounded-full rounded-l-none px-3 py-1 absolute top-2 left-0 z-20 border border-amber-200">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-col items-start justify-between h-2/3">
                  <div className="pt-4">
                    <h3 className="text-3xl font-light mt-6 tracking-tighter line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{article.description}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    {article.date} · {article.views} views
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
