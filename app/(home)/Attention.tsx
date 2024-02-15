"use client";
import React from "react";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};
type Painpoint = {
  category: string;
  title: string;
  description: string;
};

export default function Intro({}: Props) {
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
