import reactToText from "react-to-text";
import { HeadingData } from "./types";

export const headingToId = (heading: string | React.ReactNode) => {
  const headingText = reactToText(heading);
  return headingText
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/_/g, "")
    .replace(/\s+/g, "-");
};

export function extractMdxHeadings(mdxContent: string): Array<HeadingData> {
  const headings: Array<HeadingData> = [];

  const headingMatcher = /^(#+)\s(.+)$/gm;

  let match = headingMatcher.exec(mdxContent);
  while (match !== null) {
    const level = match[1].length;
    const title = match[2].trim();

    if (level === 2 || level === 3) {
      const id = headingToId(title);

      headings.push({ title, level, id });
    }
    match = headingMatcher.exec(mdxContent);
  }

  return headings;
}
