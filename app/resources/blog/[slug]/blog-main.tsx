import { fArticle } from "@/lib/format-time";
import { Article } from "@/lib/types";
import Image from "next/image";

type BlogMainProps = {
  article: Article;
};

export default function BlogMain({ article }: BlogMainProps) {
  const {
    title,
    description,
    author,
    author_image,
    date,
    image,
    reading_time,
  } = article;

  return (
    <div className="grow h-full border-l border-r border-gray-200 p-8 fillscreen">
      <div className="flex flex-col w-full items-start justify-start">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>

        <h2 className="text-xl text-gray-600 mb-6">{description}</h2>

        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Image
            src={author_image}
            alt={author}
            className="w-8 h-8 rounded-full mr-2"
            width={32}
            height={32}
          />

          <span className="font-medium text-gray-900 mr-2">{author}</span>
          {reading_time && (
            <>
              <span className="text-gray-400 mr-2">·</span>
              <span className="text-gray-500 mr-2">
                {reading_time} min read
              </span>
            </>
          )}
          <span className="text-gray-400 mr-2">·</span>
          <span className="text-gray-500">{fArticle(date)}</span>
        </div>
      </div>

      <Image
        src={image}
        alt="Blog visual"
        className="w-full h-auto mb-8"
        width={700}
        height={475}
      />

      <div className="prose">{article.content}</div>
    </div>
  );
}
