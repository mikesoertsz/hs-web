import { InnerWrap, Wrapper } from "@/lib/atoms";
import React from "react";

type Props = {};

export default function EarningsCalculator({}: Props) {
  return (
    <Wrapper className="pt-[10vh]">
      <InnerWrap>
        <div className="flex border rounded-xl border-slate-200 bg-slate-50 min-h-[30vh]">
          <div className="flex items-start justify-center">
            <h1>Earnings Calculator</h1>
            <h4>subheading</h4>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
            </ul>
          </div>
          <div className=""></div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
