import { InnerWrap, Wrapper } from "@/lib/atoms";
import { fArticle } from "@/lib/format-time";
import { paths } from "@/routes/paths";
import { getRelatedArticlesAction } from "@/server/actions/articles";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  articles?: string[];
};

export default async function BlogRelatedArticles({ articles }: Props) {
  const relatedArticles = await getRelatedArticlesAction(articles);

  return (
    <Wrapper className="p-8 border-t border-gray-300 bg-gradient-to-t from-white to-slate-100">
      <InnerWrap className="max-w-4xl">
        <div className="flex w-full items-center justify-between py-6">
          <h2 className="mb-2 tracking-widest font-medium text-xs uppercase">
            related ARTICLEs
          </h2>
          <div className="flex items-center justify-center gap-1 h-11">
            <button className="border border-gray-300 p-1 rounded-sm h-11 bg-white hover:bg-black transition duration-100 ease-in-out hover:text-white">
              <ChevronLeft className="cursor-pointer" />
            </button>
            <button className="border border-gray-300 p-1 rounded-sm h-11 bg-white hover:bg-black transition duration-100 ease-in-out hover:text-white">
              <ChevronRight className="cursor-pointer" />
            </button>
          </div>
        </div>

        {relatedArticles && (
          <ul className="flex bg-gray-200 gap-[1px] border h-[500px] border-gray-200 z-0">
            {relatedArticles.map((article, index) => (
              <li
                key={index}
                className="flex flex-col p-6 w-[400px] hover:-translate-y-0.5 grow bg-white group hover:shadow-lg transition duration-200 ease-in-out transform hover:z-20 z-10"
              >
                <Link
                  href={paths.blog.slug(article.slug)}
                  className="flex flex-col justify-start h-full"
                >
                  <div className="flex w-full h-[400px] overflow-hidden relative rounded-md ">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="absolute inset-0 aspect-square group-hover:scale-105 transition duration-200 ease-in-out"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between h-full">
                    <div className="pt-4">
                      {article.categories?.[0] && (
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-500 bg-amber-100 rounded-full rounded-l-none px-3 py-1">
                          {article.categories?.[0]}
                        </span>
                      )}
                      <h3 className="text-2xl mt-6">{article.title}</h3>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {fArticle(article.date)}
                      {article.reading_time && (
                        <>
                          <span className="text-gray-400 mr-2">·</span>
                          <span className="text-gray-500">
                            {article.reading_time} min read
                          </span>
                        </>
                      )}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </InnerWrap>
    </Wrapper>
  );
}
