import { Wrapper } from "@/lib/atoms";
import Link from "next/link";
import tw from "tailwind-styled-components";

interface Footer {
  content: {
    text: {
      title?: string;
      subtitle?: string;
      description?: string;
      trademark?: string;
      drifter?: {
        title?: string;
        url: string;
      };
    };
    links: {
      text: string;
      url: string;
    }[];
  };
}

type Props = {
  content: {
    text?: string;
    links?: {
      label?: string;
      href?: string;
    }[];
    copyright?: string;
    vat?: string;
  };
};

export const footer = {
  text: {
    title: "HelmShare",
    subtitle: "",
    description: "",
    trademark: "All rights reserved.",
    drifter: {
      title: "Drifter",
      url: "https://www.drifter.agency",
    },
  },
  links: [
    // {
    //   text: "Jobs",
    //   url: "/jobs",
    // },
    {
      text: "Terms",
      url: "/legal/terms",
    },
    {
      text: "Refunds",
      url: "/legal/refunds",
    },
    {
      text: "Privacy",
      url: "/legal/privacy",
    },
    {
      text: "GDPR",
      url: "/legal/gdpr",
    },
  ],
};

const Description = tw.span`text-xs text-gray-500 dark:text-gray-500 sm:text-center mr-1`;
export default function Footer() {
  return (
    <Wrapper className="border border-t-2 border-slate-100">
      <div className="grid w-full grid-cols-1 px-4 text-xs text-gray-400 md:grid-cols-3 h-[40px] items-center py-4 gap-4 lg:py-0">
        <div className="flex flex-row items-center justify-center w-full md:justify-start md:items-start group">
          <Description>
            {footer.text.title} &copy;{new Date().getFullYear()}.
          </Description>
          <p>{footer.text.trademark}</p>
        </div>
        <div className="items-center justify-center hidden w-full mx-auto md:flex ">
          <ul className="flex flex-row items-center justify-center gap-1 my-2 md:my-0">
            {footer.links?.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="pl-1 no-underline transition duration-100 ease-in-out hover:text-gray-900"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center justify-center hidden md:flex md:justify-end">
          <p>
            A{" "}
            <a
              href="http://www.drifter.agency"
              className="font-semibold text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drifter
            </a>{" "}
            brand.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
