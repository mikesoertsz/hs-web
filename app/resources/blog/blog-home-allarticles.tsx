"use client";

import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { Article } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface BlogHomeAllArticlesProps {
  articles: Article[];
}

export default function BlogHomeAllArticles({
  articles,
}: BlogHomeAllArticlesProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const articlesPerPage = 10;
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Wrapper className="py-[5dvh]">
      <InnerWrap className="max-w-4xl">
        <div className="flex items-center justify-between w-full py-3 pl-2">
          <h2 className="mb-2 tracking-widest font-medium text-xs uppercase w-full text-left">
            All ARTICLES {filteredArticles.length}
          </h2>
          <Input
            type="text"
            placeholder="Search or filter articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white h-8"
          />
        </div>
        <div className="border border-slate-200 rounded-md w-full flex bg-white">
          <Table>
            <TableHeader>
              <TableRow className="">
                <TableHead className="pl-6">Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Read</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedArticles.map((article, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-slate-100 group cursor-pointer"
                >
                  <TableCell className="">
                    <Link href="#" className="pl-4">
                      {article.title}
                    </Link>
                  </TableCell>
                  <TableCell className="text-xs">
                    {article.categories[0]}
                  </TableCell>
                  <TableCell className="text-xs">{article.author}</TableCell>
                  <TableCell className="text-xs">{article.date}</TableCell>
                  <TableCell className="text-xs">{article.views}</TableCell>
                  <TableCell>
                    <Link
                      href="#"
                      className="flex items-center hover:text-blue-500"
                    >
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition transform duration-200 ease-in-out"
                      />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-center w-full bg-slate-100 border border-slate-200 rounded-md mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
