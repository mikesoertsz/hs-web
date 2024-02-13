"use client";
import React from "react";
import { Wrapper, InnerWrap } from "@/lib/atoms";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  return (
    <Wrapper className="bg-brand-p2 bg-[url('/img/hero/hero2.jpg')] bg-cover bg-right h-[70vh]">
      <InnerWrap className="flex items-center justify-center">
        <div className="grid items-center justify-center w-full grid-cols-2">
          <div className="flex flex-col items-start justify-center h-full">
            <h4 className="mb-3 text-sm tracking-wide text-white">
              Alternative Income Fund
            </h4>
            <h1 className="text-6xl font-medium text-white drop-shadow-lg font-title">
              Earn 8% guaranteed yield from a fleet of charter yachts
            </h1>
            <p className="mt-4 text-2xl font-thin text-white ">
              Earn from a grooming industry without the high entry costs and
              risk.
            </p>
            <ul className="flex items-start justify-start w-full gap-6 mt-6">
              {stats.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start justify-start"
                >
                  <p className="text-[9px] uppercase font-semibold tracking-[0.3em] text-white">
                    {item.title}
                  </p>
                  <h3 className="mt-2 text-2xl font-light text-white">
                    {item.value}
                  </h3>
                  <p className="pt-1 text-xs text-left text-white">
                    {item.subtitle}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center justify-between gap-2 bg-gray-900 mt-8 p-4 bg-opacity-30 rounded-lg">
              <h3 className="text-lg text-white text-left flex w-full items-start justify-start">
                Status
              </h3>
              <button className="px-12 py-3 transition duration-100 rounded-lg text-brand-p2 hover:bg-blue-700 bg-brand-p4 hover:text-white relative overflow-hidden">
                <a href="#" className="z-10 relative">
                  Register Interest Now
                </a>
              </button>
              <div className="w-full h-1 mb-1 bg-white">
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: "15%" }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="mt-1 text-xs text-gray-400">
                Accepting $100,000 - $1,000,000 investments
              </p>
            </div>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

const stats = [
  {
    title: "Annual Yield",
    value: "8%",
    subtitle: "Guaranteed",
  },
  {
    title: "Fund Status",
    value: "Pre-Raise",
    subtitle: "Register early interest",
  },
];
