import { authMiddleware } from "@clerk/nextjs";
// import createMiddleware from "next-intl/middleware";

// const intlMiddleware = createMiddleware({
//   locales: ["en", "zh"],
//   defaultLocale: "en",
// });

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware

export default authMiddleware({
  publicRoutes: ["/", "/contact", "/about", /^\/legal(\/.*)?$/, "/resources"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
