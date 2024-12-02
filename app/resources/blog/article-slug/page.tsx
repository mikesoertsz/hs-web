import React from "react";
import BlogPageLeftClm from "./blog-page-leftclm";
import BlogPageRightClm from "./blog-page-rightclm";
import BlogMain from "./blog-main";
import BlogRelatedArticles from "./blog-related-articles";

type Props = {};

export default function BlogHome({}: Props) {
  return (
    <main className="flex flex-col items-center justify-center mx-auto bg-white">
      <div className="flex w-full fillscreen text-sm">
        <BlogPageLeftClm />
        <BlogMain />
        <BlogPageRightClm />
      </div>
      <BlogRelatedArticles />
    </main>
  );
}
