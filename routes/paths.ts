export const ROOTS = {
  BASE:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_BASE_URL,
  BLOG: "/resources/blog",
};

export const paths = {
  base: {
    root: ROOTS.BASE,
  },
  blog: {
    root: ROOTS.BLOG,
    slug: (slug: string) => `${ROOTS.BLOG}/${slug}`,
  },
};
