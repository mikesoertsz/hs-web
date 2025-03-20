import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Check, Star, Users, Calendar } from "lucide-react";

export function ArticleHero({
  title,
  image,
  author,
  date,
}: {
  title: string;
  image: string;
  author: string;
  date: string;
}) {
  return (
    <div className="relative w-full h-[400px] mb-8">
      <Image src={image} alt={title} fill className="object-cover rounded-xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            {author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(date).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Intro({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xl text-gray-700 mb-12 leading-relaxed">
      {children}
    </div>
  );
}

export function ArticleSection({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}

export function SectionTitle({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-3xl font-bold text-bahama-blue-500">{number}</span>
      <h2 className="text-2xl font-semibold text-gray-900">{text}</h2>
    </div>
  );
}

export function KeyPoints({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-4 my-6">{children}</div>;
}

export function KeyPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 p-4 bg-bahama-blue-50 rounded-lg">
      <Star className="w-5 h-5 text-bahama-blue-500" />
      <span className="text-gray-700">{children}</span>
    </div>
  );
}

export function InfoBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-bahama-blue-200 rounded-lg p-6 bg-white">
      <h4 className="font-semibold text-bahama-blue-900 mb-4">{title}</h4>
      {children}
    </div>
  );
}

export function ValueFactors({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{children}</div>
  );
}

export function Factor({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-center p-4 bg-bahama-blue-50 rounded-lg">
      <div className="w-12 h-12 mx-auto mb-2 flex items-center justify-center bg-bahama-blue-100 rounded-full">
        <span className="text-bahama-blue-500">{icon}</span>
      </div>
      <span className="text-sm text-gray-700">{children}</span>
    </div>
  );
}

export function CalloutBox({
  type,
  children,
}: {
  type: "important" | "info";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg border",
        type === "important"
          ? "bg-amber-50 border-amber-200"
          : "bg-blue-50 border-blue-200"
      )}
    >
      {children}
    </div>
  );
}

export function TaxBenefits({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
}

export function Benefit({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
      <Check className="w-4 h-4 text-green-500" />
      <span className="text-sm text-gray-700">{children}</span>
    </div>
  );
}

export function LifestyleBenefits({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{children}</div>
  );
}

export function Conclusion({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-50 rounded-lg p-8 my-12">{children}</div>;
}

export function CallToAction({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-bahama-blue-900 text-white rounded-lg p-8 text-center">
      {children}
    </div>
  );
}
