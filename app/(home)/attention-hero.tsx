"use client";

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
    statusTitle: "2024 status",
    buttonText: "Register Interest Now",
    investmentRange: "Accepting €100,000 - €1,000,000 investments",
  };

  return (
    <Wrapper className="relative flex min-h-[50vh] z-10 mx-auto items-center justify-center py-12">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden xl:max-w-7xl">
        <Left className="bg-brand2-base1 min-h-[50dvh] md:aspect-square aspect-auto py-24 md:py-8">
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
                  <h3 className="h-8 mt-2 text-2xl font-light text-white">
                    {item.value}
                  </h3>
                  <p className="pt-1 text-xs text-left text-gray-400">
                    {item.subtitle}
                  </p>
                </li>
              ))}
              <li className="md:flex-col items-start justify-start">
                <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-brand-g1">
                  {textContent.statusTitle}
                </p>
                <div className="flex h-10 w-[200px] items-center justify-start">
                  <div className="w-[80%] h-4 mt-3 bg-brand2-base2 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-brand2-g3"
                      initial={{ width: 0 }}
                      animate={{ width: `${fundsRaisedPercentage}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  {Loading && (
                    <div className="flex items-center justify-start mt-3 ml-1">
                      <CgSpinner
                        className="text-slate-500 animate-spin"
                        size={18}
                      />
                    </div>
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={!Loading ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <p className="pt-[4px] text-xs text-left text-gray-400">
                    <span className="font-medium text-brand-g1">
                      {fundsRaisedPercentage}%
                    </span>{" "}
                    pre-subscribed
                  </p>
                </motion.div>
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
        <div className="relative z-10 min-h-[50dvh] md:flex">
          <Image
            src="/img/hero/wheelhero.png"
            alt="hero"
            fill
            style={{ objectFit: "cover", objectPosition: "70%" }}
            className="absolute inset-0 z-20 bg-blue-950 saturate-75"
          />
        </div>
      </div>
    </Wrapper>
  );
}
