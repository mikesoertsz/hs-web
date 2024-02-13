import { InnerWrap, Wrapper } from "@/lib/atoms";
import React from "react";

type Props = {};

export default function Disclaimer({}: Props) {
  return (
    <Wrapper className="min-h-[30vh] py-[5vh]">
      <InnerWrap className="text-xs flex items-start w-full justify-start text-left">
        Disclaimers
      </InnerWrap>
    </Wrapper>
  );
}
