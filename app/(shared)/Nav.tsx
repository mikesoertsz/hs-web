"use client";
import { NavigationMenuDemo } from "./nav-dropdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi2";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className="w-full flex justify-between items-center py-2 sticky top-0 left-0 right-0 h-12 overflow-hidden bg-white z-20">
      <div className=" relative flex items-center px-6">
        <Image
          src="/img/helmshare_favicon.svg"
          alt="hero"
          width={80}
          height={80}
          className="absolute inset-0 w-full h-full flex z-20 p-2"
        />
        <h1>helmshare.yachts</h1>
        <div className="hidden md:hidden gap-9 text-xs font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 ml-12">
          <a href="#" className="">
            Invest
          </a>
          <a href="/how-it-works" className="">
            How It Works
          </a>
          <Link
            href="#"
            className="group hidden md:flex text-gray-700 hover:text-gray-900 duration-100 transition ease-in-out text-xs font-medium mr-3 items-center justify-center gap-1"
          >
            About
            <HiChevronDown className="group-hover:text-black inline-block ml-1" />
          </Link>
        </div>
      </div>
      <div className="gap-2 items-center justify-center md:flex">
        <Link
          href="#"
          className="hidden md:hidden text-gray-700 hover:text-gray-900 duration-100 transition ease-in-out text-xs font-medium mr-3 items-center justify-center gap-1"
        >
          Resources
          <HiChevronDown className="inline-block ml-1" />
        </Link>
        <Link
          href="/affiliates"
          className="md:flex text-gray-700 hover:text-blue-400 duration-200 transition ease-in-out text-xs font-medium mr-3 items-center justify-center gap-1 hover:underline"
        >
          Affiliates
        </Link>
        <Link
          href="#"
          className="hidden md:hidden text-gray-700 hover:text-gray-900 duration-100 transition ease-in-out text-xs font-medium mr-3"
        >
          Help Center
        </Link>
        <Button variant="outline" className="text-xs">
          Login
        </Button>
        <Button variant="secondary" className="text-xs mr-2">
          Signup
        </Button>
      </div>
    </nav>
  );
}
