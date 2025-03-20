"use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "./mdx-components";

interface MDXContentProps {
  content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
  return <MDXRemote source={content} components={components} />;
}
