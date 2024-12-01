import React from "react";
import BlogPageLeftClm from "./blog-page-leftclm";
import BlogPageRightClm from "./blog-page-rightclm";
import BlogMain from "./blog-main";

type Props = {};

export default function BlogHome({}: Props) {
  return (
    <main className="flex flex-col items-center justify-center mx-auto bg-white border-t border-gray-200">
      <div className="flex w-full fillscreen text-sm">
        <BlogPageLeftClm />
        <BlogMain />
        <BlogPageRightClm />
      </div>
    </main>
  );
}
