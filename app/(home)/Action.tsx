import React, { useState, useEffect, useMemo } from "react";
import { Wrapper, InnerWrap } from "@/lib/atoms";

type Props = {};

// simulator should be a form with inputs for the user to input their details and choose their investment amount in multiples of 100,000 dollars

export default function Simulator({}: Props) {
  return (
    <Wrapper>
      <InnerWrap>
        <h1>Simulator</h1>
      </InnerWrap>
    </Wrapper>
  );
}
