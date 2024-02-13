import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "./(shared)/Nav";
import Footer from "./(shared)/Footer";
import { footer } from "@/public/content/en";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const title = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "investment.yachts | Guaranteed 8% yield: alternative asset fund.",
  description: "Invest in alternative assets with guaranteed 8% yield.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${body.className} ${title.variable} relative`}>
          <div className="fillscreen">
            <Nav />
            {children}
            <Footer content={footer} />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
