import Image from "next/image";
import React from "react";

type BlogMainProps = {
  title?: string;
  subtitle?: string;
  author?: string;
  date?: string;
  imageUrl?: string;
};

const defaultBlogMainProps = {
  title: "The Benefits of Fractional Yacht Ownership: A Comprehensive Guide",
  subtitle:
    "Discover how fractional yacht ownership can make luxury yachting more accessible and affordable.",
  author: "Mike Soertsz",
  date: "Oct 15, 2024",
  imageUrl: "/img/hero/hero1.jpg",
};

export default function BlogMain({
  title = defaultBlogMainProps.title,
  subtitle = defaultBlogMainProps.subtitle,
  author = defaultBlogMainProps.author,
  date = defaultBlogMainProps.date,
  imageUrl = defaultBlogMainProps.imageUrl,
}: BlogMainProps) {
  return (
    <div className="grow h-full border-l border-r border-gray-200 p-8 fillscreen">
      <div className="flex flex-col w-full items-start justify-start">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <h2 className="text-xl text-gray-600 mb-6">{subtitle}</h2>
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Image
            src="/img/team/profilepic_purple.png"
            alt={author}
            className="w-8 h-8 rounded-full mr-2"
            width={32}
            height={32}
          />
          <span className="font-medium text-gray-900 mr-2">{author}</span>
          <span className="text-gray-400 mr-2">·</span>
          <span className="text-gray-500 mr-2">8 min read</span>
          <span className="text-gray-400 mr-2">·</span>
          <span className="text-gray-500">{date}</span>
        </div>
      </div>
      <Image
        src={imageUrl}
        alt="Blog visual"
        className="w-full h-auto mb-8"
        width={700}
        height={475}
      />
      <div className="max-w-prose">Rest of the blog content here.</div>
    </div>
  );
}
