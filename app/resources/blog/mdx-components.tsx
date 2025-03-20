import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import {
  StatusIcon,
  NetworkIcon,
  EventIcon,
  CheckIcon,
} from "./components/icons";

// Dynamically import interactive components
const MarketChart = dynamic(() => import("./components/MarketChart"), {
  ssr: false,
});
const ROICalculator = dynamic(() => import("./components/ROICalculator"), {
  ssr: false,
});
const RiskMatrix = dynamic(() => import("./components/RiskMatrix"), {
  ssr: false,
});

interface ArticleHeroProps {
  title: string;
  image: string;
  author: string;
  date: string;
}

export const components = {
  ArticleHero: ({ title, image, author, date }: ArticleHeroProps) => (
    <div className="relative w-full aspect-[16/9] mb-8">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-lg"
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white rounded-b-lg">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <div className="flex items-center gap-4">
          <span>{author}</span>
          <span>•</span>
          <time>{date}</time>
        </div>
      </div>
    </div>
  ),
  Intro: ({ children }: { children: React.ReactNode }) => (
    <div className="text-xl text-gray-600 mb-8">{children}</div>
  ),
  ArticleSection: ({ children }: { children: React.ReactNode }) => (
    <section className="mb-12">{children}</section>
  ),
  SectionTitle: ({ number, text }: { number: string; text: string }) => (
    <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
      <span className="text-brand-g1">{number}</span>
      {text}
    </h2>
  ),
  KeyPoints: ({ children }: { children: React.ReactNode }) => (
    <div className="grid grid-cols-2 gap-4 my-6">{children}</div>
  ),
  KeyPoint: ({ children }: { children: React.ReactNode }) => (
    <div className="p-4 bg-gray-50 rounded-lg">{children}</div>
  ),
  InfoBox: ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="p-6 bg-gray-50 rounded-lg my-6">
      <h4 className="font-semibold mb-4">{title}</h4>
      {children}
    </div>
  ),
  ValueFactors: ({ children }: { children: React.ReactNode }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">{children}</div>
  ),
  Factor: ({
    icon,
    children,
  }: {
    icon: React.ReactNode;
    children: React.ReactNode;
  }) => (
    <div className="p-4 bg-gray-50 rounded-lg text-center">
      <div className="mb-2">{icon}</div>
      {children}
    </div>
  ),
  CalloutBox: ({
    type,
    children,
  }: {
    type: string;
    children: React.ReactNode;
  }) => (
    <div
      className={`p-6 rounded-lg my-6 ${
        type === "important" ? "bg-yellow-50" : "bg-gray-50"
      }`}
    >
      {children}
    </div>
  ),
  TaxBenefits: ({ children }: { children: React.ReactNode }) => (
    <div className="grid grid-cols-2 gap-4 my-6">{children}</div>
  ),
  Benefit: ({ children }: { children: React.ReactNode }) => (
    <div className="p-4 bg-gray-50 rounded-lg">{children}</div>
  ),
  LifestyleBenefits: ({ children }: { children: React.ReactNode }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">{children}</div>
  ),
  Conclusion: ({ children }: { children: React.ReactNode }) => (
    <div className="p-6 bg-gray-50 rounded-lg my-8">{children}</div>
  ),
  CallToAction: ({ children }: { children: React.ReactNode }) => (
    <div className="text-center p-8 bg-gray-900 text-white rounded-lg my-8">
      {children}
    </div>
  ),
  Button: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href}>
      <Button className="mt-4">{children}</Button>
    </Link>
  ),
  // Interactive components
  MarketChart,
  ROICalculator,
  RiskMatrix,
  // Icons
  StatusIcon,
  NetworkIcon,
  EventIcon,
  CheckIcon,
  // Basic HTML elements
  h1: (props: any) => <h1 className="text-4xl font-bold mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold mb-4" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold mb-3" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-semibold mb-2" {...props} />,
  p: (props: any) => <p className="mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4" {...props} />,
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-4" {...props} />
  ),
  li: (props: any) => <li className="mb-2" {...props} />,
  a: (props: any) => <a className="text-blue-600 hover:underline" {...props} />,
};
