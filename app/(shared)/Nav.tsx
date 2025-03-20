"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { useStore } from "@/lib/store"; // Import the store
import Link from "next/link";
import { WordRotate } from "@/components/magicui/word-rotate";

type Props = {};

type NavigationItem = {
  title: string;
  href: string;
};

const navigation: NavigationItem[] = [
  {
    title: "Why Helmshare",
    href: "/#whyhelmshare",
  },
  {
    title: "How It Works",
    href: "/#howitworks",
  },
  {
    title: "Earnings",
    href: "/#earnings",
  },
  {
    title: "Articles",
    href: "/resources/blog",
  },
];

export default function Nav({}: Props) {
  const accredited = useStore((state) => state.accredited); // Get the accredited state

  return (
    <nav className="sticky top-0 left-0 right-0 z-30 flex items-center justify-between w-full py-2 overflow-hidden bg-white h-14 border-b border-gray-200">
      <div className="relative flex items-center justify-between px-3 pl-6">
        <div className="flex w-[400px] py-1">
          <Link href="/">
            <Image
              src="/img/logowide.svg"
              alt="helmshare logo wide version"
              width={170}
              height={70}
              className=""
            />
          </Link>
        </div>
        <div className="hidden text-gray-700 items-center justify-start text-xs px-3">
          Share the{" "}
          <WordRotate
            className="text-gray-900 text-xs ml-1"
            words={["helm", "profits", "fleet", "security"]}
          />
          .
        </div>
      </div>
      <div className="hidden text-xs font-medium gap-9 md:flex"></div>
      <div className="items-center justify-center gap-6 md:flex">
        <ul className="items-center justify-center hidden gap-5 md:flex">
          {navigation.map((item, index) => (
            <li key={index} className="relative">
              <a
                href={item.href}
                className="text-xs font-medium text-gray-700 transition duration-100 ease-in-out hover:text-gray-900"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <Button
          variant="secondary"
          className={`text-xs mr-3 bg-brand2-g3 hover:bg-brand2-g4 ${
            accredited ? "bg-green-300" : ""
          }`}
        >
          <a href="#register">Register Interest</a>
        </Button>
      </div>
    </nav>
  );
}
