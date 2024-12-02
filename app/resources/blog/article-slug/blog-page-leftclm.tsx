import React from "react";
import { ArrowLeft } from "lucide-react";

type Props = {
  items?: string[];
};

const defaultItems = [
  "Use case 1: Find prospects' LinkedIn profiles to better target ad campaigns",
  "Use case 2: Scrape local business websites to target niche industries in ad campaigns",
  "Use case 3: Auto-generate personalized landing pages for all prospects",
  "Use case 4: Automatically find local business addresses to improve direct mail campaigns",
  "Clay’s impact on Verkada’s growth workflows",
];

export default function BlogPageLeftClm({ items = defaultItems }: Props) {
  return (
    <div className="flex-none w-1/4 h-full p-12">
      <div className="flex items-center mb-4">
        <ArrowLeft className="mr-2" />
        <span>All articles</span>
      </div>
      <div className="text-sm mt-12">
        <h2 className="mb-2 tracking-widest font-medium text-xs uppercase">
          INDEX
        </h2>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="hover:underline py-4 border-t border-gray-100 text-xs tracking-wide leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
