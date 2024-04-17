import { TitleBlock } from "@/app/(shared)/Titles";
import {
  Wrapper,
  InnerWrap,
  PreHeading,
  Heading,
  SubHeading,
} from "@/lib/atoms";
import Image from "next/image";
import React from "react";

type Props = {};


}

export default function InterestBenefits({}: Props) {
  const benefits = {
    header: "Why Partner with Us",
    grid: [
      {
        preheader: "Earnings",
        title: "Earn Attractive Referral Fees for Every Lead",
        description:
          "Maximize your earnings with competitive referral fees for each lead you introduce to us.",
      },
      {
        preheader: "Network",
        title: "Expand Your Network in the Luxury Yacht Community",
        description:
          "Gain exclusive access and connect with key players in the luxury yacht market.",
      },
      {
        preheader: "Trust",
        title: "Partner with a Trusted Yacht Investment Leader",
        description:
          "Leverage our reputation and expertise in yacht investments to enhance your own business offerings.",
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
  const howitworks = {
    header: {
      preheader: "How It Works",
      title: "Join Our Affiliate Partner Program in 3 Easy Steps",
      subtitle: "",
      body: "",
    },
    steps: [
      {
        title: "Sign Up",
        description:
          "Fill out the form on this page to sign up for our affiliate partner program.",
      },
      {
        title: "Get Approved",
        description:
          "Our team will review your application and get in touch with you to discuss the next steps.",
      },
      {
        title: "Start Earning",
        description:
          "Once approved, you can start earning commission for every successful referral you make.",
      },
    ],
  };
  return (
    <Wrapper>
      <InnerWrap>{/* <TitleBlock {...howitworks.header} /> */}</InnerWrap>
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
