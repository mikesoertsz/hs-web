import { footer } from "@/public/content/en";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "./(shared)/Footer";
import Nav from "./(shared)/Nav";
import "./globals.css";
import { Drawer } from "@/components/ui/drawer";
import GoogleAnalytics from "@/components/Analytics";
import localFont from "next/font/local";
import { title } from "@/lib/fonts";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
// const title = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-title",
// });
// const title = localFont({
//   src: "../public/font/glastone.woff2",
//   variable: "--font-title",
//   weight: "400",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "HelmShare.yachts | Private market alternative asset fund.",
  description: "Invest in alternative assets with guaranteed 8% yield.",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-G4BPMB4NGH" />
      <body
        className={`${body.className} ${title.variable} relative scroll-smooth z-0 antialiased`}
      >
        <Drawer>
          <div className="fillscreen">
            <Nav />
            {children}
            <Footer content={footer} />
          </div>
        </Drawer>
      </body>
    </html>
  );
}
