import { InnerWrap, Wrapper } from "@/lib/atoms";
import React from "react";

type Props = {};

export default function DetailsBar({}: Props) {
  return (
    <Wrapper className="py-8">
      <InnerWrap>
        <ul className="grid w-full grid-cols-2 gap-8 md:grid-cols-5">
          {details.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-start justify-start w-full"
            >
              <p className="text-[9px] uppercase font-semibold tracking-[0.3em] text-slate-600">
                {item.pretitle}
              </p>
              <div className="mt-2 text-xl font-semibold">{item.title}</div>
              <div className="pt-1 text-xs text-left">{item.description}</div>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}

const details = [
  {
    pretitle: "risk",
    title: "Low Risk",
    description: "Investment only into tangible, cashflowing assets.",
    icon: "",
    value: "",
  },
  {
    pretitle: "Yield",
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
  {
    pretitle: "annualized YOC",
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
];

export function DetailsBlock() {
  return (
    <Wrapper className="py-8 bg-white">
      <InnerWrap></InnerWrap>
    </Wrapper>
  );
}

const detailsblock = {
  returns: {},
  fees: {},
  risk: {},
  term: {},
  structure: {},
};
