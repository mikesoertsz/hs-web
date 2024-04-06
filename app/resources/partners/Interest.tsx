import { Wrapper, InnerWrap } from "@/lib/atoms";
import React from "react";

type Props = {};

export default function InterestBenefits({}: Props) {
  const benefits = {
    header: "Why Partner with Us",
    grid: [
      {
        preheader: "Earnings",
        title: "Earn Attractive Referral Fees for Every Lead",
        description: "Maximize your earnings with competitive referral fees for each lead you introduce to us.",
      },
      {
        preheader: "Network",
        title: "Expand Your Network in the Luxury Yacht Community",
        description: "Gain exclusive access and connect with key players in the luxury yacht market.",
      },
      {
        preheader: "Trust",
        title: "Partner with a Trusted Yacht Investment Leader",
        description: "Leverage our reputation and expertise in yacht investments to enhance your own business offerings.",
      },
    ],
  };
  return (
    <Wrapper>
      <InnerWrap>Interest</InnerWrap>
    </Wrapper>
  );
}

export function InterestHowItWorks() {
  return (
    <Wrapper>
      <InnerWrap>Interest</InnerWrap>
    </Wrapper>
  );
}

export function InterestAboutUs() {
  return (
    <Wrapper>
      <InnerWrap>Interest</InnerWrap>
    </Wrapper>
  );
}
