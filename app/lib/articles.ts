import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { formatDate } from "./utils";

const articlesDirectory = path.join(process.cwd(), "public/content/articles");

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  readingTime?: string;
  tags?: string[];
  content: string;
}

export const getAllArticles = cache(async (): Promise<Article[]> => {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticles = fileNames
    .filter(
      (fileName) =>
        (fileName.endsWith(".mdx") || fileName.endsWith(".md")) &&
        !fileName.startsWith(".")
    )
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const date = data.date ? formatDate(data.date) : "";

      return {
        slug,
        content,
        title: data.title || slug,
        description: data.description || "",
        date,
        image: data.image || "/images/default-blog.jpg",
        readingTime: data.readingTime || "5 min read",
      };
    })
    .sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return allArticles;
});

export const getArticleBySlug = cache(
  async (slug: string): Promise<Article | null> => {
    try {
      const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        title: data.title || slug,
        description: data.description || "",
        date: data.date ? formatDate(data.date) : "",
        image: data.image || "/images/default-blog.jpg",
        readingTime: data.readingTime || "5 min read",
      };
    } catch (error) {
      return null;
    }
  }
);

export const getRelatedArticles = cache(
  async (currentSlug: string, count: number = 3): Promise<Article[]> => {
    const allArticles = await getAllArticles();
    return allArticles
      .filter((article: Article) => article.slug !== currentSlug)
      .slice(0, count);
  }
);
