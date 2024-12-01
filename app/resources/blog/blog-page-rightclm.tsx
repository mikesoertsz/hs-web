import React from "react";
import { Link, ArrowUpRight } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type ShareOption = {
  icon: JSX.Element;
  text: string;
  url: string;
};

type Props = {
  shareOptions?: {
    links: ShareOption[];
    button: ShareOption;
  };
};

const defaultShareOptions = {
  links: [
    {
      icon: <Link size={17} />,
      text: "Copy link",
      url: "#",
    },
    {
      icon: <FaLinkedinIn size={16} />,
      text: "Post on LinkedIn",
      url: "https://www.linkedin.com",
    },
    {
      icon: <FaXTwitter size={16} />,
      text: "Post on X",
      url: "https://www.twitter.com",
    },
  ],
  button: {
    icon: <ArrowUpRight size={16} />,
    text: "Talk to Sales",
    url: "#",
  },
};

export default function BlogPageRightClm({
  shareOptions = defaultShareOptions,
}: Props) {
  return (
    <div className="flex-none w-1/4 h-full p-12 bg-gray-50">
      <h2 className="mb-2 tracking-widest font-medium text-xs uppercase">
        SHARE ARTICLE
      </h2>
      <ul className="gap-4 flex w-full flex-col">
        {shareOptions.links.map((option, index) => (
          <li key={index} className="flex items-center space-x-2 group w-full">
            <a
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 group-hover:bg-gray-100 rounded-md p-2"
            >
              {option.icon}
              <span>{option.text}</span>
            </a>
          </li>
        ))}
      </ul>
      <button className="mt-4 flex items-center justify-center w-full p-2 text-white bg-black rounded-md">
        {shareOptions.button.text}
        <ArrowUpRight className="ml-2" />
      </button>
    </div>
  );
}
