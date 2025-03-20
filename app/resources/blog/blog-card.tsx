import { Article } from "@/app/lib/articles";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  article: Article;
}

export default function BlogCard({ article }: BlogCardProps) {
  return (
    <Link href={`/resources/blog/${article.slug}`} className="group">
      <Card className="overflow-hidden">
        <div className="aspect-[4/3] relative">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2">{article.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{article.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{article.date}</span>
            {article.readingTime && <span>{article.readingTime}</span>}
          </div>
        </div>
      </Card>
    </Link>
  );
}
