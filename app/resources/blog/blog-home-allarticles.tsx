"use client";

import { useState } from "react";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

type Article = {
  author: string;
  title: string;
  description: string;
  date: string;
  views: number;
  comments: number;
  image: string;
  category: string;
};

const articles: Article[] = [
  {
    author: "John Doe",
    title: "The Rise of Fractional Yacht Ownership",
    description:
      "Exploring the benefits and growth of fractional yacht ownership.",
    date: "Oct 15",
    views: 1200,
    comments: 45,
    image: "/img/hero/hero2.jpg",
    category: "Ownership",
  },
  {
    author: "Jane Smith",
    title: "How the Yacht Industry is Evolving",
    description:
      "A look into the latest trends and changes in the yacht industry.",
    date: "Nov 10",
    views: 950,
    comments: 30,
    image: "/img/hero/hero1.jpg",
    category: "Industry",
  },
  {
    author: "Alice Johnson",
    title: "Investing in Yachts: What You Need to Know",
    description: "Key insights for potential investors in the yacht market.",
    date: "Sep 25",
    views: 800,
    comments: 20,
    image: "/img/hero/hero5.jpg",
    category: "Investment",
  },
  {
    author: "Bob Brown",
    title: "The Future of Yacht Ownership",
    description:
      "Predictions and expectations for the future of yacht ownership.",
    date: "Dec 5",
    views: 1100,
    comments: 50,
    image: "/img/hero/hero8.jpg",
    category: "Future",
  },
];

export default function BlogHomeAllArticles() {
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
                  <TableCell className="text-xs">{article.category}</TableCell>
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
