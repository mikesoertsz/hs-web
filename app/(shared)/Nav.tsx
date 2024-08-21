"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Props = {};

const navigation = [
  {
    title: "How It Works",
    href: "#howitworks",
  },
  {
    title: "Why Helmshare",
    href: "#whyhelmshare",
  },
  {
    title: "Earnings",
    href: "#earnings",
  },
  {
    title: "Resources",
    href: "#",
    subLinks: [
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Disclaimers",
        href: "/disclaimers",
      },
    ],
  },
];

export default function Nav({}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
        <ul className="items-center justify-center md:flex hidden">
          {navigation.map((item, index) =>
            item.subLinks ? (
              <li key={index} className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-gray-700 hover:text-gray-900 duration-100 transition ease-in-out text-xs font-medium"
                >
                  {item.title}
                  <ChevronDown className="ml-1" size={16} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                    {item.subLinks.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subLink.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {subLink.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 duration-100 transition ease-in-out text-xs font-medium"
              >
                {item.title}
              </a>
            )
          )}
        </ul>
        <Button variant="secondary" className="text-xs mr-2 hover:bg-brand2-g3">
          <a href="#register">Register Interest</a>
        </Button>
      </div>
    </nav>
  );
}
