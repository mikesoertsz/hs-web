import { HeadingData } from "@/lib/types";
import { paths } from "@/routes/paths";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  headings?: HeadingData[];
};

export default function BlogPageLeftClm({ headings }: Props) {
  return (
    <div className="flex-none w-1/4 h-full p-12 sticky top-14">
      <Link href={paths.blog.root}>
        <span className="flex items-center mb-4 cursor-pointer">
          <ArrowLeft className="mr-2" />
          <span>All articles</span>
        </span>
      </Link>

      <div className="text-sm mt-12">
        <h2 className="mb-2 tracking-widest font-medium text-xs uppercase">
          INDEX
        </h2>
        <ul className="space-y-2">
          {headings?.map((heading) => {
            if (heading.level !== 2) {
              return null;
            }

            return (
              <Link href={`#${heading.id}`} key={heading.id}>
                <li
                  key={heading.title}
                  className="hover:underline py-4 border-t border-gray-100 text-xs tracking-wide leading-relaxed"
                >
                  {heading.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
