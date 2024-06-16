import localFont from "next/font/local";

export const title2 = localFont({
  src: [
    {
      path: "../public/font/Behind-The-Nineties-Rg.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/font/Behind-The-Nineties-Md.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/font/Behind-The-Nineties-Smbd.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/font/Behind-The-Nineties-Bd.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
  variable: "--font-title2",
});

export const title = localFont({
  src: "../public/font/luxury.woff2",
  variable: "--font-title",
  display: "swap",
});
