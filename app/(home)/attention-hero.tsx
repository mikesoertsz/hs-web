"use client";

import HeroSlider from "@/components/hero-slider";
import HeroStatusBar from "@/components/hero-status-bar";
import { WordRotate } from "@/components/magicui/word-rotate";
import { Left, Wrapper } from "@/lib/atoms";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";

export default function AttentionHero() {
  const [fundsRaisedPercentage, setFundsRaisedPercentage] =
    useState<number>(54);
  const [Loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      title: "Annual Yield",
      value: "8%",
      subtitle: "Guaranteed",
    },
    {
      title: "Net Yield",
      value: "11.75%",
      subtitle: "Projected",
    },
    {
      title: "Fund Status",
      value: "Pre-Raise",
      subtitle: "Register early interest",
    },
  ];

  const textContent = {
    pretitle: "Alternative Income Fund",
    mainTitle: "Earn 8% yield from a fleet of charter yachts.",
    description:
      "Earn from a growing industry, without the high entry costs and risk.",
    statusTitle: "2025 status",
    buttonText: "Register Interest Now",
    investmentRange: "Accepting €100,000 - €1,000,000 investments",
  };

  return (
    <Wrapper className="relative flex min-h-[50vh] z-10 mx-auto items-center justify-center py-12">
      <div className="grid w-full grid-cols-1 md:grid-cols-5 rounded-xl overflow-hidden lg:max-w-7xl xl:max-w-7xl">
        <Left className="bg-brand2-base1 min-h-[50dvh] md:col-span-3 aspect-auto py-24 md:py-8">
          <div className="flex flex-col items-start justify-center w-3/4 h-full slide-center">
            <h4 className="mb-3 text-sm tracking-wide text-brand-g1">
              {textContent.pretitle}
            </h4>
            <h1 className="text-6xl font-medium leading-tight text-white drop-shadow-md font-title">
              {textContent.mainTitle}
            </h1>
            <p className="hidden w-3/4 mt-4 text-2xl font-light text-brand-p0">
              {textContent.description}
            </p>
            <ul className="flex items-start justify-start w-full gap-6 mt-6">
              {stats.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start justify-start"
                >
                  <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-brand-g1">
                    {item.title}
                  </p>
                  <h3 className="h-8 mt-2 text-xl font-light text-white">
                    {item.value}
                  </h3>
                  <p className="pt-1 text-xs text-left text-gray-400">
                    {item.subtitle}
                  </p>
                </li>
              ))}
              <li className="md:flex-col items-start justify-start">
                <HeroStatusBar />
              </li>
            </ul>
            <div className="flex flex-col items-center justify-between gap-2 mt-12">
              <button className="relative px-12 py-3 overflow-hidden text-black transition duration-100 rounded-lg hover:bg-brand2-g4 bg-brand2-g2">
                <a href="#register" className="relative z-10">
                  {textContent.buttonText}
                </a>
              </button>

              <p className="mt-1 text-xs text-gray-400">
                {textContent.investmentRange}
              </p>
            </div>
          </div>
        </Left>
        <div className="z-10 min-h-[50dvh] md:flex relative overflow-hidden col-span-2">
          <Image
            src="/img/hero/wheelhero.png"
            alt="hero"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 z-20 bg-blue-950 saturate-75"
          />
          
        </div>
      </div>
    </Wrapper>
  );
}
