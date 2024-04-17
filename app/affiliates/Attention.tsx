import {
  InnerWrap,
  Wrapper,
  SubHeading,
  PreHeading,
  Heading,
} from "@/lib/atoms";
import Image from "next/image";
import React from "react";

type Props = {};

export default function AttentionHero({}: Props) {
  const hero = {
    header: {
      preheading: "Affiliate Partner Program",
      heading: "Unlock New Earnings: Partner with Our Yacht Investment Fund",
      subheading:
        "Leverage your connections, earn with every successful referral",
      cta1: {
        text: "Become an Affiliate Partner",
        href: "#join-our-network",
      },
    },
  };
  return (
    <Wrapper className="py-[10vh] min-h-[60vh] relative">
      <InnerWrap className="items-start justify-end">
        <div className="relative z-20 flex text-white text-left flex-col items-start justify-end">
          <PreHeading className="text-sky-300">
            {hero.header.preheading}
          </PreHeading>
          <Heading>{hero.header.heading}</Heading>
          <SubHeading>{hero.header.subheading}</SubHeading>
          <a
            href={hero.header.cta1.href}
            className="inline-block bg-white text-blue-500 font-bold rounded-lg px-6 py-3 transition duration-300 ease-in-out hover:bg-gray-100"
          >
            {hero.header.cta1.text}
          </a>
        </div>
      </InnerWrap>
      <div className="absolute inset-0 bg-sky-50">
        <Image
          src="/img/hero/captain.webp"
          alt=""
          fill
          className="absolute inset-0 z-10"
          style={{ objectFit: "cover" }}
        />
      </div>
    </Wrapper>
  );
}

export function AttentionStinger() {
  const stinger = {
    preheader: "Leverage your network into passive income",
    header: "Earn up to €2000* with every successful referral",
    disclaimer: "*Terms and conditions apply.",
  };
  return (
    <>
      <Wrapper>
        <InnerWrap>
          <div className="text-center p-10 lg:p-20 flex flex-col items-center justify-center">
            <p className="text-lg text-gray-500">{stinger.preheader}</p>
            <Heading>{stinger.header}</Heading>
            <p className="text-gray-500">{stinger.disclaimer}</p>
          </div>
        </InnerWrap>
      </Wrapper>
    </>
  );
}

export function AttentionQualifier() {
  const qualifier = {
    checklist: [
      "Experience in the yachting industry.",
      "Your network includes yacht owners, operators, brokers, or crew.",
      "Willingness to leverage network for commission through referrals.",
    ],
  };
  return (
    <Wrapper className="bg-blue-900 text-white py-10 lg:py-20">
      <InnerWrap className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Are You the Right Fit?</h2>
            <p className="text-lg">
              Are you experienced in the yachting industry with a network that
              includes yacht owners, crew, operators or brokers?
              <br /> We&apos;re looking for partners like you.
            </p>
            <p className="text-lg">
              Leverage your connections and earn through our commission program
              for every successful referral.
            </p>
            <a
              href="#join-our-network"
              className="inline-block bg-white text-blue-900 font-bold rounded-lg px-6 py-3 transition duration-300 ease-in-out hover:bg-gray-100 mt-4"
            >
              Join Our Network
            </a>
          </div>
          <div className="flex justify-center items-center">
            {/* Placeholder for an image */}
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
