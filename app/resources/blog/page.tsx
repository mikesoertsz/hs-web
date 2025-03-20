import { Metadata } from "next";
import { getAllArticles } from "@/app/lib/articles";
import BlogHero from "./blog-hero";
import BlogHomePopular from "./blog-home-popular";
import BlogArticleSlider from "./blog-article-slider";
import BlogHomeAllArticles from "./blog-home-allarticles";
import BlogRelatedArticles from "./blog-related-articles";

export const metadata: Metadata = {
  title: "Blog | HelmShare Yachts",
  description: "Read the latest articles about yachting and yacht investments.",
};

export default async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <div className="container mx-auto px-4 py-8">
      <BlogHero />
      {/* <BlogHomePopular articles={articles} /> */}
      <BlogArticleSlider articles={articles} />
      <BlogHomeAllArticles articles={articles} />
    </div>
  );
}
