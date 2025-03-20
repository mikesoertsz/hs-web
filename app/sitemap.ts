import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "public/content/articles");

// Define a type for sitemap entries
interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency:
    | "monthly"
    | "yearly"
    | "weekly"
    | "always"
    | "hourly"
    | "daily"
    | "never";
  priority: number;
}

function getArticleUrls(): SitemapEntry[] {
  const files = fs.readdirSync(articlesDirectory);
  return files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    return {
      url: `https://www.helmshare.yachts/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: "https://www.helmshare.yachts/",
      lastModified: new Date(),
      changeFrequency: "yearly" as "yearly",
      priority: 1,
    },
    {
      url: "https://www.helmshare.yachts/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.helmshare.yachts/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.helmshare.yachts/affiliates",
      lastModified: new Date(),
      changeFrequency: "weekly" as "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.helmshare.yachts/legal",
      lastModified: new Date(),
      changeFrequency: "weekly" as "weekly",
      priority: 0.5,
    },
    {
      url: "https://www.helmshare.yachts/resources",
      lastModified: new Date(),
      changeFrequency: "weekly" as "weekly",
      priority: 0.5,
    },
  ];

  const articleUrls: MetadataRoute.Sitemap = getArticleUrls().map((entry) => ({
    ...entry,
    changeFrequency: entry.changeFrequency as "monthly",
  }));

  return [...staticUrls, ...articleUrls];
}
