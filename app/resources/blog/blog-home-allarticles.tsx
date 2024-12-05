import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { paths } from "@/routes/paths";
import { getArticlePaginationByPageAction } from "@/server/actions/articles";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  searchParams: { [key: string]: string | undefined };
};

export default async function BlogHomeAllArticles({ searchParams }: Props) {
  const currentPage = parseInt((searchParams.page as string) || "1");
  const postsPerPage = parseInt((searchParams.pageSize as string) || "10");

  const { articles, totalArticles } = await getArticlePaginationByPageAction(
    currentPage,
    postsPerPage
  );

  return (
    <Wrapper className="py-[5dvh]">
      <InnerWrap className="max-w-4xl">
        <div className="flex items-center justify-between w-full py-3 pl-2">
          <h2 className="mb-2 tracking-widest font-medium text-xs uppercase w-full text-left">
            All ARTICLES {totalArticles}
          </h2>
          {/* <Input
            type="text"
            placeholder="Search or filter articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-white h-8"
          /> */}
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
              {articles.map((article, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-slate-100 group cursor-pointer"
                >
                  <TableCell className="">
                    <Link href={paths.blog.slug(article.slug)} className="pl-4">
                      {article.title}
                    </Link>
                  </TableCell>
                  <TableCell className="text-xs">
                    {article.categories?.[0]}
                  </TableCell>
                  <TableCell className="text-xs">{article.author}</TableCell>
                  <TableCell className="text-xs">{article.date}</TableCell>
                  <TableCell className="text-xs">{article.views}</TableCell>
                  <TableCell>
                    <Link
                      href={paths.blog.slug(article.slug)}
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
          <PaginationWithLinks
            page={currentPage}
            pageSize={postsPerPage}
            totalCount={totalArticles}
          />
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
