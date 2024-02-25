"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type Props = {};

export default function SubNav({}: Props) {
  return (
    <>
      <nav className="sticky top-12 inset-x-0 bottom-0 flex justify-between items-center py-2 px-4 bg-slate-100 w-full z-70">
        <ul className="flex w-full justify-between md:justify-center md:gap-2">
          {submenu.map((item, index) => (
            <li key={index} className="hidden md:block">
              <Button variant="outline">
                <a href={item.link} className="">
                  {item.title}
                </a>
              </Button>
            </li>
          ))}
          <li className="md:hidden">
            <Button variant="outline">
              <a href="#" className="">
                More
              </a>
            </Button>
          </li>
        </ul>
        <DrawerTrigger asChild className="ml-2">
          <Button variant="outline" className="shadow-sm">
            Menu
          </Button>
        </DrawerTrigger>
      </nav>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="mt-3 h-[120px]">test</div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </>
  );
}

const submenu = [
  {
    title: "Details",
    link: "#",
  },
  {
    title: "Overview",
    link: "#overview",
  },
  {
    title: "Opportunity",
    link: "#opportunity",
  },
  {
    title: "Market",
    link: "#",
  },
  {
    title: "Risk",
    link: "#risks",
  },
  {
    title: "Docs",
    link: "#",
  },
  {
    title: "FAQs",
    link: "#faqs",
  },
];
