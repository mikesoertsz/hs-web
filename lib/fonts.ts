import localFont from "next/font/local";

export const title2 = localFont({
  src: [
    {
      path: "../public/font/Megafield-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Megafield-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/font/Megafield-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/font/Megafield-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
  ],
  display: "swap",
  variable: "--font-title",
});

export const title = localFont({
  src: "../public/font/luxury.woff2",
  variable: "--font-title",
  display: "swap",
});
