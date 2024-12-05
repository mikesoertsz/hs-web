import { paths } from "@/routes/paths";
import { getArticleBySlugAction } from "@/server/actions/articles";
import { notFound } from "next/navigation";
import BlogMain from "./blog-main";
import BlogPageLeftClm from "./blog-page-leftclm";
import BlogPageRightClm from "./blog-page-rightclm";
import BlogRelatedArticles from "./blog-related-articles";

interface BlogParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogParams) {
  const article = await getArticleBySlugAction(params.slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: paths.blog.slug(article.slug),
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function Blog({ params }: BlogParams) {
  const article = await getArticleBySlugAction(params.slug);

  if (!article) {
    return notFound();
  }

  return (
    <main className="flex flex-col items-center justify-center mx-auto bg-white">
      <div className="flex w-full fillscreen text-sm relative">
        <BlogPageLeftClm headings={article.headings} />
        <BlogMain article={article} />
        <BlogPageRightClm article={article} />
      </div>
      <BlogRelatedArticles articles={article.related_posts} />
    </main>
  );
}
