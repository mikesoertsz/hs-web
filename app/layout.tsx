import GoogleAnalytics from "@/components/Analytics";
import { Drawer } from "@/components/ui/drawer";
import { Toaster } from "@/components/ui/sonner";
import { body, newsreader, title } from "@/lib/fonts";
import { footer } from "@/public/content/en";
import type { Metadata } from "next";
import Footer from "./(shared)/Footer1";
import Nav from "./(shared)/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "HelmShare.yachts | Private market alternative asset fund.",
  description: "Invest in alternative assets with guaranteed 8% yield.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
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
    <html lang="en" className="scroll-smooth">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-G4BPMB4NGH" />
      <body
        className={`${newsreader.variable} ${body.className} ${title.variable} relative z-0 subpixel-antialiased`}
      >
        <Drawer>
          <div className="fillscreen">
            <Nav />
            {children}
            <Footer />
          </div>
        </Drawer>
        <Toaster />
      </body>
    </html>
  );
}
