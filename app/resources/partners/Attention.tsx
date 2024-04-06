import { Heading } from "@/app/(shared)/Titles";
import { InnerWrap, Wrapper, SubHeading, PreHeading } from "@/lib/atoms";
import React from "react";

type Props = {};

export default function AttentionHero({}: Props) {
  const hero = {};
  return (
    <Wrapper className="bg-brand-n4">
      <InnerWrap>
        <div className="flex text-white text-center p-10 lg:p-20 flex-col items-center justify-center">
          <PreHeading>Affiliate Partner Program</PreHeading>
          <Heading>
            Unlock New Earnings: Partner with Our Yacht Investment Fund
          </Heading>
          <SubHeading>
            Leverage your connections, earn with every successful referral
          </SubHeading>
          <a
            href="#join-our-network"
            className="inline-block bg-white text-blue-500 font-bold rounded-lg px-6 py-3 transition duration-300 ease-in-out hover:bg-gray-100"
          >
            Become an Affiliate Partner
          </a>
        </div>
      </InnerWrap>
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
