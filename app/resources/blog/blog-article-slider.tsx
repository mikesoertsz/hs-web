"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/app/lib/articles";

interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
}

const ArticleCard = ({
  title,
  description,
  image,
  date,
  slug,
}: ArticleCardProps) => {
  const imagePath = image.startsWith("http")
    ? image
    : image.startsWith("/")
    ? image
    : ``;

  return (
    <Card className="article-card">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={imagePath}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <p className="text-sm font-medium mb-3">{date}</p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-xs"
            asChild
          >
            <Link href={`/resources/blog/${slug}`}>Read More</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

interface PopularArticlesProps {
  articles: Article[];
}

const PopularArticles = ({ articles }: PopularArticlesProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 3;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentArticles = articles.slice(
    currentPage * articlesPerPage,
    (currentPage + 1) * articlesPerPage
  );

  return (
    <section className="py-16 relative">
      <div className="container mx-auto mb-8 px-2">
        <div className="flex items-center justify-between">
          <h3 className="tracking-widest font-medium text-xs uppercase w-full text-left ml-1">
            Popular Articles
          </h3>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevPage}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextPage}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex transition-transform duration-300 ease-in-out gap-6">
            {currentArticles.map((article) => (
              <div
                key={article.slug}
                className="flex-none w-full md:w-[calc(33.333%-16px)]"
              >
                <ArticleCard
                  title={article.title}
                  description={article.description}
                  image={article.image}
                  date={article.date}
                  slug={article.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularArticles;
