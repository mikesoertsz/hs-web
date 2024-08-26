import { Inter, Petrona } from "next/font/google";
import localFont from "next/font/local";

export const title = localFont({
  src: "../public/font/luxury.woff2",
  variable: "--font-title",
  display: "swap",
});

export const newsreader = Petrona({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const body = Inter({ subsets: ["latin"], variable: "--font-body" });
