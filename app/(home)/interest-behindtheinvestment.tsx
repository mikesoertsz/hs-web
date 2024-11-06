"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InnerWrap, Wrapper } from "@/lib/atoms";

import { homepage } from "@/public/content/en";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";
import { RiQuestionLine } from "react-icons/ri";
import { InterestFundLeadership } from "./interest-leadership";

type Props = {};

export function InterestBehindTheInvestment({}: Props) {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const totalPercentage =
    homepage.interest.behindtheinvestment.feestructure.feeschedule.reduce(
      (total, fee) => total + fee.percentage,
      0
    );

  return (
    <Wrapper className="pb-[5vh] " id="structure">
      <InnerWrap className="relative px-12 bg-white border rounded-xl border-slate-300">
        <ul className="absolute flex items-center justify-center gap-3 text-xs font-medium border rounded-md right-3 top-3 bg-slate-100 border-slate-300">
          <li className="p-2 bg-slate-200">
            <HiOutlineArrowLeftCircle size={18} />
          </li>
          <li className="">Structure</li>
          <li className="">Fees</li>
          <li className="">Leadership</li>
          <li className="">Advisors</li>
          <li className="">Partners</li>
          <li className="p-2 bg-slate-200">
            <HiOutlineArrowRightCircle size={18} />
          </li>
        </ul>
        <div className="flex mt-16">structure</div>
        <div className="flex items-center justify-between w-full p-4">
          {homepage.interest.behindtheinvestment.feestructure.feeschedule.map(
            (fee, index) => (
              <motion.div
                key={index}
                className="flex-col items-center justify-center gap-1 p-2 text-center"
                whileHover={{ scale: 1.1 }}
                tabIndex={0} // for accessibility
              >
                <span className="text-sm font-bold">
                  {fee.percentage}
                  {fee.percentage > 0 ? "%" : ""}
                </span>
                <div className="flex items-center justify-center">
                  <h2 className="text-xs font-medium">{fee.title}</h2>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <RiQuestionLine className="w-4 h-4 pl-1" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-[250px]">{fee.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.div>
            )
          )}
        </div>

        <InterestFundLeadership />
      </InnerWrap>
    </Wrapper>
  );
}
