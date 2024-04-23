"use client";
import React from "react";
import { InnerWrap, Wrapper, Left, Right, PreHeading } from "@/lib/atoms";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Props = {};
type Painpoint = {
  category: string;
  title: string;
  description: string;
};

export default function AttentionHero() {
  const stats = [
    {
      title: "Annual Yield",
      value: "8%",
      subtitle: "Guaranteed",
    },
    // {
    //   title: "Target Yield",
    //   value: "9.5%",
    //   subtitle: "Projected",
    // },
    {
      title: "Fund Status",
      value: "Pre-Raise",
      subtitle: "Register early interest",
    },
  ];
  return (
    <Wrapper className="relative flex min-h-[50vh] z-20 px-0 mx-0">
      <Left className="bg-brand2-base1">
        <div className="flex flex-col items-start justify-center h-full w-3/4 slide-center">
          <h4 className="mb-3 text-sm tracking-wide text-brand-g1">
            Alternative Income Fund
          </h4>
          <h1 className="text-5xl font-medium text-white drop-shadow-lg font-title leading-tight">
            Earn 8% yield from a fleet of charter yachts.
          </h1>
          <p className="mt-4 hidden text-2xl font-light text-brand-p0 w-3/4">
            Earn from a growing industry, without the high entry costs and risk.
          </p>
          <ul className="flex items-start justify-start w-full gap-6 mt-6">
            {stats.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-start justify-start"
              >
                <p className="text-[9px] uppercase font-semibold tracking-[0.3em] text-brand-g1">
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
          <div className="flex flex-col items-center justify-between gap-2 mt-12">
            <button className="px-12 py-3 transition duration-100 rounded-lg text-black hover:bg-brand2-g4 bg-brand2-g2  relative overflow-hidden">
              <a href="#" className="z-10 relative">
                Register Interest Now
              </a>
            </button>
            <div className="w-[80%] h-2 mb-1 bg-brand2-base2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand2-g3"
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
      </Left>
      <Right>
        <Image
          src="/img/hero/hero2.jpg"
          alt="hero"
          fill
          style={{ objectFit: "cover", objectPosition: "70%" }}
          className="absolute inset-0 w-full h-full flex z-20"
        />
        <div className="mt-1 absolute top-4 left-4 z-30">
          <Image
            src="/img/helmshare_icon_large.svg"
            alt="hero"
            width={80}
            height={80}
            className="absolute inset-0 w-full h-full flex z-20"
          />
        </div>
      </Right>
    </Wrapper>
  );
}

export function AttentionDetailsBar() {
  const details = [
    {
      pretitle: "risk class",
      title: "Low Risk",
      description: "Investment only into tangible, cashflowing assets.",
      icon: "",
      value: "",
    },
    {
      pretitle: "Fixed Yield",
      title: (
        <>
          8% Guaranteed
          <sup>
            <a
              href="#disclaimer-section"
              className="pl-[2px] text-brand-p1 text-xs"
            >
              1
            </a>
          </sup>
        </>
      ),
      description: "Secure 8% returns, paid out regularly.",
      icon: "",
      value: "",
    },
    {
      pretitle: "Performance Yield",
      title: "11.5% projected",
      description: (
        <>
          Projected annualized
          <sup>
            <a
              href="#disclaimer-section"
              className="pl-[2px] text-brand-p1 text-[9px]"
            >
              2
            </a>
          </sup>{" "}
          carried interest paid at end of term.
        </>
      ),
      icon: "",
      value: "",
    },
    {
      pretitle: "ticket size",
      title: "$100,000",
      description: "Investment entry at $100k minimum.",
      icon: "",
      value: "",
    },
    {
      pretitle: "term",
      title: "6 years",
      description: "Standard closed-fund structure with long term stability.",
      icon: "",
      value: "",
    },
  ];
  return (
    <Wrapper className="py-8">
      <InnerWrap>
        <ul className="grid w-full grid-cols-2 gap-8 md:grid-cols-5">
          {details.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-start justify-start w-full"
            >
              <p className="text-[9px] uppercase font-semibold tracking-[0.1em] text-slate-600">
                {item.pretitle}
              </p>
              <div className="mt-1 text-lg font-medium">{item.title}</div>
              <div className="text-xs text-left text-gray-500">
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}

export function AttentionStinger() {
  const stinger = {
    pretitle: "finally",
    title: (
      <>
        <span className="text-brand2-g3">Profit</span> from yacht ownership.{" "}
        <span>Without the pitfalls.</span>
      </>
    ),
  };

  return (
    <Wrapper className="py-[10vh] bg-brand2-base1 px-0 min-h-[400px] text-gray-100">
      <InnerWrap>
        <PreHeading className="text-brand-g1 pb-4">
          {stinger.pretitle}
        </PreHeading>
        <h1 className="text-7xl font-medium font-title tracking-tight my-3 text-center balanced max-w-5xl leading-[1.2]">
          {stinger.title}
        </h1>
      </InnerWrap>
    </Wrapper>
  );
}

export function RiskFactors({}: Props) {
  const painpoints: Painpoint[] = [
    {
      title: "Operational Complexity",
      description:
        "Managing a yacht requires expertise in maritime operations, legal compliance, and guest services.",
      category: "Operational Risk",
    },
    {
      title: "High Maintenance Costs",
      description:
        "Yachts necessitate regular, costly maintenance to ensure safety, functionality, and guest satisfaction.",
      category: "Operational Risk",
    },
    {
      title: "Crew Management",
      description:
        "Hiring, training, and managing a crew is a significant challenge that requires time and resources.",
      category: "Operational Risk",
    },
    {
      title: "Seasonal Fluctuations",
      description:
        "Income can be highly variable due to seasonal demand in the charter industry.",
      category: "Market Risk",
    },
    {
      title: "Market Risks",
      description:
        "Economic downturns and changes in consumer preferences can affect charter income.",
      category: "Market Risk",
    },
    {
      title: "Depreciation",
      description:
        "Yachts are depreciating assets, which can lead to a loss in value over time.",
      category: "Credit Risk",
    },
    {
      title: "Regulatory Hurdles",
      description:
        "Navigating maritime laws and regulations can be complex and varies by region.",
      category: "Legal and Regulatory Risk",
    },
    {
      title: "Insurance and Liability",
      description:
        "Comprehensive insurance is necessary to mitigate risks associated with accidents and liabilities.",
      category: "Operational Risk",
    },
    {
      title: "Marketing and Booking",
      description:
        "Effective marketing strategies are required to maintain high occupancy rates and profitability.",
      category: "Market Risk",
    },
    {
      title: "Docking and Storage",
      description:
        "Securing and paying for docking space and storage during off-seasons can be expensive.",
      category: "Operational Risk",
    },
    {
      title: "Environmental Concerns",
      description:
        "Operating a yacht has an environmental impact that may lead to additional regulations and costs.",
      category: "Environmental Risk",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Ensuring high levels of customer satisfaction is critical but can be difficult to consistently achieve.",
      category: "Operational Risk",
    },
    {
      title: "Capital Intensive",
      description:
        "Initial investment for purchasing a yacht is substantial, with annual capital requirements on average 10% of the principle.",
      category: "Credit Risk",
    },
    {
      title: "Liquidity Risk",
      description:
        "Yachts can be difficult to sell depending on the state, type and model, especially in a saturated or declining market.",
      category: "Liquidity Risk",
    },
    {
      title: "Interest Rate Fluctuations",
      description:
        "Changes in interest rates can affect the cost of capital and yacht financing, influencing market demand and asset valuation.",
      category: "Market Risk",
    },
    {
      title: "Currency Exchange Risk",
      description:
        "Fluctuations in exchange rates can affect cost of dealing with global suppliers and maintainence vendors.",
      category: "Market Risk",
    },
  ];
  const categories = Array.from(
    new Set(painpoints.map((item) => item.category.replace(" Risk", "")))
  );

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
  };

  const filteredPainpoints = selectedCategory
    ? painpoints.filter(
        (item) => item.category.replace(" Risk", "") === selectedCategory
      )
    : painpoints;

  const listItemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1 },
    }),
  };

  return (
    <Wrapper className="py-8 bg-white px-0" id="risks">
      <InnerWrap className="px-0">
        <div className="flex flex-col items-center justify-center text-center">
          <p className="uppercase text-[11px] tracking-[0.2em] font-medium text-brand-p1">
            hassle-free yacht investment
          </p>
          <h1 className="text-4xl font-medium font-title tracking-tight my-3">
            Fractional yachts ownership income. Without the pitfalls.
          </h1>
          <h4 className="max-w-prose">
            Enjoy the financial benefits of the growing yacht chartering
            industry without the concerns of maintenance, crewing, or asset
            depreciation. Our Fund allows you to invest in the lucrative charter
            industry, reaping the rewards while we manage the operations, risks
            and complexities.
          </h4>
        </div>

        <div className="w-full mt-12 flex justify-center items-center pt-3">
          <ul className="flex items-center justify-center gap-3 max-w-screen overflow-x-scroll">
            <h4 className="text-xs text-gray-400 font-medium">Risks:</h4>
            {categories.map((category, index) => (
              <li key={index} className="w-full">
                <Button
                  variant={
                    selectedCategory === category ? "secondary" : "outline"
                  }
                  className={`text-xs ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Button>
              </li>
            ))}
            <li className="w-full">
              <Button
                variant={selectedCategory === null ? "secondary" : "outline"}
                className={`text-xs ${
                  selectedCategory === null ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => handleCategoryClick(null)}
              >
                All Risks
              </Button>
            </li>
          </ul>
        </div>
        <AnimatePresence>
          <motion.ul
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 gap-x-10"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredPainpoints.map((item, index) => (
              <motion.li
                key={index}
                className="flex flex-col items-start justify-start w-full"
                variants={listItemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
              >
                <div className="flex flex-col items-start justify-start w-full">
                  <p className="text-[9px] uppercase font-semibold tracking-[0.3em] text-slate-600">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-lg font-medium">{item.title}</h3>
                  <p className="pt-0.5 text-xs text-left">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </InnerWrap>
    </Wrapper>
  );
}
