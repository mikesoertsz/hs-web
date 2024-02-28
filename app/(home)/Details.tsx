import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import React from "react";
import CTAButtonsBasic from "../(shared)/CTAButtonsBasic";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Props = {};

export default function DetailsBar({}: Props) {
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
      title: "9.5% projected",
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
          performance bonus of 9.5%-13% at end of term.
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

export function DetailsBlock() {
  const detailsblock = [
    {
      title: "Returns",
      details: [
        {
          label: "Principle protection",
          description: "",
          value: "Full",
          icon: "",
        },
        {
          label: "Guaranteed annual net yield",
          description: "",
          value: "8%",
          icon: "",
        },
        {
          label: "Carried Interest",
          description: "",
          value: "80%",
          icon: "",
        },
        {
          label: "Target annual net yield",
          description: "",
          value: "9.3-13%",
          icon: "",
        },
      ],
    },
    {
      title: "Fees",
      details: [
        {
          label: "Entry Fee",
          description: "",
          value: "None",
          icon: "",
        },
        {
          label: "Annual Management Fee",
          description: "",
          value: "2%",
          icon: "",
        },
        {
          label: "Carried Interest",
          description: "",
          value: "20%",
          icon: "",
        },
        {
          label: "Exit Fee",
          description: "",
          value: "None",
          icon: "",
        },
      ],
    },
    {
      title: "Schedule",
      details: [
        {
          label: "Payment schedule",
          description: "",
          value: "Quarterly",
          icon: "",
        },
        {
          label: "Fund Term",
          description: "",
          value: "6 years",
          icon: "",
        },
      ],
    },
    {
      title: "Structure",
      details: [
        {
          label: "Fund type",
          description: "",
          value: "Closed-ended",
          icon: "",
        },
        {
          label: "Estimated Fund Size",
          description: "",
          value: "$ 5M",
          icon: "",
        },
        {
          label: "Offering Structure",
          description: "",
          value: "SPV",
          icon: "",
        },
        {
          label: "Annual Flat Fee",
          description: "",
          value: "None",
          icon: "",
        },
      ],
    },
  ];
  return (
    <Wrapper className="py-8 bg-slate-100 border-t border-slate-200">
      <InnerWrap>
        <div className="flex flex-col items-center justify-center text-center my-12">
          <p className="uppercase text-[11px] tracking-[0.2em] font-medium text-brand-p1">
            fund details
          </p>
          <h1 className="text-5xl font-medium font-title tracking-tight my-3">
            Investment Specifics
          </h1>
          <h4 className="max-w-prose text-center mt-4">
            Our fund offers a unique opportunity to invest in a diversified
            fleet of charter yachts, with a focus on the lucrative and growing
            Seychelles market. Our investment strategy is designed to provide a
            secure, stable-yield income stream over a 6 year term.
          </h4>
        </div>
        <ul className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 mt-1">
          {detailsblock.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-start justify-start w-full bg-white border border-zinc-300 rounded-lg shadow-sm"
            >
              <p className="text-[10px] uppercase font-semibold tracking-[0.1em] text-slate-600 px-4 py-2">
                {item.title}
              </p>
              <Separator />
              <ul className="p-4 flex w-full flex-col">
                {item.details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex item-center justify-between text-sm w-full mt-1 hover:bg-slate-100 rounded-full px-2 py-1 cursor-pointer"
                  >
                    <p className="text-sm">{detail.label}</p>
                    <p className="text-sm font-normal text-green-700">
                      {detail.value}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col items-center justify-center">
          <h4 className="text-xs">Reasons to invest:</h4>
          <ul className="my-2 gap-2 flex items-center justify-center">
            <li>
              <Badge variant="outline">Income Guarantee</Badge>
            </li>
            <li>
              <Badge variant="outline">Quarterly Payouts</Badge>
            </li>
            <li>
              <Badge variant="outline">Low Risk</Badge>
            </li>
            <li>
              <Badge variant="outline">Performance Bonus</Badge>
            </li>
            <li>
              <Badge variant="outline">Downside Protection</Badge>
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            *Please refer to the offering memorandum for full details.
          </p>
        </div>
        <CTAButtonsBasic />
      </InnerWrap>
    </Wrapper>
  );
}
