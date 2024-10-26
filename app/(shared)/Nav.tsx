"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { useStore } from "@/lib/store"; // Import the store

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
];

export default function Nav({}: Props) {
  const accredited = useStore((state) => state.accredited); // Get the accredited state

  return (
    <nav className="w-full flex justify-between items-center py-2 sticky top-0 left-0 right-0 h-14 overflow-hidden bg-white z-30">
      <div className="relative flex items-center justify-between px-3 pl-6">
        <div className="flex w-[400px] py-1">
          <Image
            src="/img/logowide.svg"
            alt="helmshare logo wide version"
            width={170}
            height={70}
            className=""
          />
        </div>
      </div>
      <div className="gap-9 text-xs font-medium hidden md:flex"></div>
      <div className="gap-6 items-center justify-center md:flex">
        <ul className="items-center justify-center md:flex hidden gap-5">
          {navigation.map((item, index) => (
            <li key={index} className="relative">
              <a
                href={item.href}
                className="text-gray-700 hover:text-gray-900 duration-100 transition ease-in-out text-xs font-medium"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <Button
          variant="secondary"
          className={`text-xs mr-2 hover:bg-brand2-g3 ${
            accredited ? "bg-green-300" : ""
          }`}
        >
          <a href="#register">Register Interest</a>
        </Button>
      </div>
    </nav>
  );
}
