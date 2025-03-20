import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET() {
  try {
    const articlesDirectory = path.join(
      process.cwd(),
      "public/content/articles"
    );
    const files = fs.readdirSync(articlesDirectory);

    const articles = files
      .filter((filename) => filename.endsWith(".mdx"))
      .map((filename) => {
        const filePath = path.join(articlesDirectory, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);
        return {
          slug: filename.replace(/\.mdx$/, ""),
          title: data.title || "Untitled",
          description: data.description || "",
          date: data.date || "Unknown",
          author: data.author || "Anonymous",
          image: data.image,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error loading articles:", error);
    return NextResponse.json(
      { error: "Failed to load articles" },
      { status: 500 }
    );
  }
}
