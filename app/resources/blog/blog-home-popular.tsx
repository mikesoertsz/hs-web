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

const articles: Article[] = [
  {
    author: "John Doe",
    title: "The Rise of Fractional Yacht Ownership",
    description:
      "Exploring the benefits and growth of fractional yacht ownership.",
    date: "Oct 15",
    views: 1200,
    comments: 45,
    image: "/img/hero/hero2.jpg",
    category: "Ownership",
  },
  {
    author: "Jane Smith",
    title: "How the Yacht Industry is Evolving",
    description:
      "A look into the latest trends and changes in the yacht industry.",
    date: "Nov 10",
    views: 950,
    comments: 30,
    image: "/img/hero/hero1.jpg",
    category: "Industry",
  },
  {
    author: "Alice Johnson",
    title: "Investing in Yachts: What You Need to Know",
    description: "Key insights for potential investors in the yacht market.",
    date: "Sep 25",
    views: 800,
    comments: 20,
    image: "/img/hero/hero5.jpg",
    category: "Investment",
  },
  {
    author: "Bob Brown",
    title: "The Future of Yacht Ownership",
    description:
      "Predictions and expectations for the future of yacht ownership.",
    date: "Dec 5",
    views: 1100,
    comments: 50,
    image: "/img/hero/hero8.jpg",
    category: "Future",
  },
];

export default function BlogHomePopular() {
  return (
    <Wrapper className="py-[5dvh]">
      <InnerWrap className="max-w-4xl">
        <h2 className="mb-2 tracking-widest font-medium text-xs uppercase w-full text-left">
          Popular ARTICLEs
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 w-full">
          {articles.map((article, index) => (
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
