import React from "react";
import { InnerWrap, Wrapper } from "@/lib/atoms";

type Props = {};

export default function CTATop({}: Props) {
  return (
    <Wrapper>
      <InnerWrap className="flex flex-row">
        <div className="w-1/2">{/* Content can be added here */}</div>
        <div className="flex items-center justify-center w-1/2">
          <button className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700">
            Click Me
          </button>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

export function MakeYourMove({}: Props) {
  return (
    <Wrapper>
      <InnerWrap className="flex flex-row">
        <div className="w-1/2">
          <h1>Make your move</h1>
          <ul>
            <li>Guaranteed Returns</li>
            <li>Quarterly payouts</li>
            <li>Priciple Payback</li>
            <li>No hidden fees</li>
          </ul>
          <button className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-700">
            Click Me
          </button>
        </div>
        <div className="flex items-center justify-center w-1/2"></div>
      </InnerWrap>
    </Wrapper>
  );
}
