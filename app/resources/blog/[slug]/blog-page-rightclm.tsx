"use client";

import { Article } from "@/lib/types";
import { paths } from "@/routes/paths";
import { Link } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LinkedinShareButton, TwitterShareButton } from "react-share";

type Props = {
  article: Article;
};

export default function BlogPageRightClm({ article }: Props) {
  return (
    <div className="flex-none w-1/4 h-full p-12 bg-gray-50 sticky top-14">
      <h2 className="mb-2 tracking-widest font-medium text-xs uppercase">
        SHARE ARTICLE
      </h2>
      <ul className="gap-4 flex w-full flex-col">
        <li className="flex items-center space-x-2 group w-full">
          <CopyToClipboard
            text={`${paths.base.root}${paths.blog.slug(article.slug)}`}
          >
            <span className="flex items-center space-x-2 group-hover:bg-gray-100 rounded-md p-2">
              <Link size={17} />
              <span>Copy link</span>
            </span>
          </CopyToClipboard>
        </li>

        <li className="flex items-center space-x-2 group w-full">
          <LinkedinShareButton
            url={`${paths.base.root}${paths.blog.slug(article.slug)}`}
            title={article.title}
          >
            <span className="flex items-center space-x-2 group-hover:bg-gray-100 rounded-md p-2">
              <FaLinkedinIn size={16} />
              <span>Post on LinkedIn</span>
            </span>
          </LinkedinShareButton>
        </li>

        <li className="flex items-center space-x-2 group w-full">
          <TwitterShareButton
            url={`${paths.base.root}${paths.blog.slug(article.slug)}`}
            title={article.title}
          >
            <span className="flex items-center space-x-2 group-hover:bg-gray-100 rounded-md p-2">
              <FaXTwitter size={16} />
              <span>Post on X</span>
            </span>
          </TwitterShareButton>
        </li>
      </ul>
    </div>
  );
}
