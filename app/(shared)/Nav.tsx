"use client";
import { NavigationMenuDemo } from "./nav-dropdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi2";

type Props = {};

export default function Nav({}: Props) {
  
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
      <div className="gap-9 text-xs font-medium hidden">
        <Link href="#" className="">
          Invest
        </Link>
        <Link href="#howitworks" className="">
          How It Works
        </Link>
        <Link
          href="#"
          className="group md:flex text-gray-700 hover:text-gray-900 duration-100 transition ease-in-out text-xs font-medium mr-3 items-center justify-center gap-1"
        >
          Qualify
          {/* <HiChevronDown className="group-hover:text-black inline-block ml-1" /> */}
        </Link>
      </div>
      <div className="gap-2 items-center justify-center md:flex">
        {/* <Link
          href="#"
          className="hidden md:flex text-gray-700 hover:text-gray-900 duration-100 transition ease-in-out text-xs font-medium mr-3 items-center justify-center gap-1"
        >
          Resources
          <HiChevronDown className="inline-block ml-1" />
        </Link> */}
        {/* <Link
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
        </Button> */}
        <Button variant="secondary" className="text-xs mr-2 hover:bg-brand2-g3">
          <Link href="#register">Register Interest</Link>
        </Button>
      </div>
    </nav>
  );
}
