"use client";

import { Article } from "@/app/lib/articles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

interface BlogHomeAllArticlesProps {
  articles: Article[];
}

export default function BlogHomeAllArticles({
  articles,
}: BlogHomeAllArticlesProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract unique tags from all articles
  const allTags = Array.from(
    new Set(articles.flatMap((article) => article.tags || []))
  );

  console.log("Articles:", articles);
  console.log("All Tags:", allTags);

  // Sort articles by date (most recent first)
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter articles based on search query and selected tag
  const filteredArticles = sortedArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag ? article.tags?.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  // Pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h3 className="tracking-widest font-medium text-xs uppercase w-full text-left ml-1">
            All Articles
          </h3>
          <div className="relative w-64">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-bahama-blue-400 w-4 h-4" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 border-bahama-blue-200 focus:border-bahama-blue-500"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6 border border-bahama-blue-200 p-4 rounded-lg bg-white text-xs">
          <span className="text-bahama-blue-900 font-medium mr-2">
            Filter by tag:
          </span>
          {allTags.length > 0 ? (
            allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-3 py-1 text-sm rounded-full transition-all ${
                  selectedTag === tag
                    ? "bg-bahama-blue-500 text-white"
                    : "bg-bahama-blue-50 text-bahama-blue-700 hover:bg-bahama-blue-100"
                }`}
              >
                {tag}
              </button>
            ))
          ) : (
            <span className="text-bahama-blue-500">No tags available</span>
          )}
        </div>

        {/* Table */}
        <div className="border border-bahama-blue-200 bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Reading Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentArticles.map((article) => (
                <TableRow key={article.slug}>
                  <TableCell>
                    <div className="w-12 h-12 relative rounded overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/resources/blog/${article.slug}`}
                      className="font-medium text-bahama-blue-900 hover:text-bahama-blue-700"
                    >
                      {article.title}
                    </Link>
                  </TableCell>
                  <TableCell className="text-bahama-blue-600 max-w-md truncate">
                    {article.description}
                  </TableCell>
                  <TableCell className="text-bahama-blue-500">
                    {new Date(article.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-bahama-blue-500">
                    {article.readingTime}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-sm text-bahama-blue-600">
          <div>
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredArticles.length)} of{" "}
            {filteredArticles.length} articles
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded hover:bg-bahama-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded ${
                  currentPage === page
                    ? "bg-bahama-blue-500 text-white"
                    : "hover:bg-bahama-blue-50"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded hover:bg-bahama-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
