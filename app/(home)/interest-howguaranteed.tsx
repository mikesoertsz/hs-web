import { InnerWrap, Wrapper } from "@/lib/atoms";
import { useState } from "react";
import { IoBoatOutline } from "react-icons/io5";

type Props = {};

export function InterestHowGuaranteed({}: Props) {
  return (
    <Wrapper className="py-8 text-gray-200 bg-gray-900 md:py-4">
      <InnerWrap>
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
          <h2 className="text-sm">How is the 8% income guaranteed?</h2>
          <div className="flex items-center justify-center p-2 bg-black rounded-full">
            <IoBoatOutline size={24} className="text-white" />
          </div>
          <h2 className="text-sm">
            Through a{" "}
            <span className="font-semibold text-brand-p3">
              binding agreement
            </span>{" "}
            with our chartering partners.
          </h2>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
