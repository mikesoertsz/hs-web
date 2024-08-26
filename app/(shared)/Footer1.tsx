import { InnerWrap, Wrapper } from "@/lib/atoms";
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

const Description = tw.span`text-xs text-gray-500 dark:text-gray-500 sm:text-center mr-1`;
export default function Footer({ content }: Footer) {
  return (
    <Wrapper className="p-0 px-4 py-3 border border-t-2 border-slate-100">
      <div className="grid w-full grid-cols-1 px-4 text-xs text-gray-500 md:grid-cols-3">
        <div className="flex flex-row items-center justify-center w-full md:justify-start md:items-start group">
          {/* <Image
              src="/img/logo_drifter_icon.svg"
              alt=""
              className="mb-2 img-responsive h-9 w-9"
              width={15}
              height={15}
            /> */}
          <Description>
            {content.text.title} &copy;{new Date().getFullYear()}.
          </Description>
          <p>{content.text.trademark}</p>
        </div>
        <div className="flex items-center justify-center w-full mx-auto ">
          <ul className="flex flex-row items-center justify-center gap-1 my-2 md:my-0">
            {content.links?.map((link, index) => (
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
        <div className="flex items-center justify-center md:justify-end">
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
