import { Metadata } from "next";
import {
  getArticleBySlug,
  getRelatedArticles,
  getAllArticles,
} from "@/app/lib/articles";
import { notFound } from "next/navigation";
import BlogRelatedArticles from "../blog-related-articles";
import { components } from "../mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${article.title} | HelmShare Yachts`,
    description:
      article.description || "Read more about yachts and related topics.",
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

// Generate static params for all articles
export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(params.slug);

  return (
    <main className="flex flex-col items-center justify-center mx-auto bg-white">
      <article className="prose prose-lg mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <div className="mb-8 text-gray-600">
          <time>{article.date}</time>
          {article.readingTime && (
            <span className="ml-4">{article.readingTime}</span>
          )}
        </div>
        {article.image && (
          <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="prose-img:rounded-lg prose-a:text-blue-600">
          <MDXRemote source={article.content} components={components as any} />
        </div>
      </article>
      <div className="w-full max-w-7xl mx-auto">
        <BlogRelatedArticles articles={relatedArticles} />
      </div>
    </main>
  );
}
