import { MDXComponents } from "mdx/types";
import * as ArticleComponents from "../components/blog/article-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Default HTML elements
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-gray-700">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-bahama-blue-500 pl-4 italic my-4 text-gray-700">
        {children}
      </blockquote>
    ),
    // Custom article components
    ...ArticleComponents,
    // Override any custom components passed in
    ...components,
  };
}
