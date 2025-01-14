import React from "react";
import { HeaderWrapLeft, InnerWrap, Wrapper } from "@/lib/atoms";

type Props = {};

export default function SeedDetails({}: Props) {
  const seeddetails = {
    title: "Seed Round Investment Opportunity",
    description:
      "We are offering a seed round investment for each of our SPVs in HelmShare as a debt note to a single Angel Investor. This is a unique opportunity to be part of a transformative journey in the alternative asset market.",
    tnc: [
      "The minimum investment amount for our seed round is €100,000.",
      "You will receive your principal investment back along with an 18% interest payment upon reaching our fund milestone of €5 million.",
      "We are committed to a repayment period ranging from a minimum of 6 months to a maximum of 18 months.",
      "While all investments carry some level of risk, we are dedicated to meeting repayment terms promptly and ensuring the security of your investment.",
    ],
    useoffunds:
      "The funds will be used for legal setup, marketing campaigns, and sales infrastructure to ensure the success of our fund.",
    method: {
      title: "Standard Loan",
      description:
        "A traditional loan where the principal amount is repaid with interest within the specified period or as soon as the fundraising milestone is reached.",
    },
    terms: [
      {
        label: "Round Size",
        value: "€100,000",
      },
      {
        label: "Return",
        value: "18%",
      },
      {
        label: "Payback Period",
        value: "24 months",
      },
      {
        label: "Fund Goal",
        value: "€5M",
      },
    ],
  };

  return (
    <Wrapper className="py-[5vh] bg-gray-100">
      <InnerWrap className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white border rounded-xl border-slate-300 overflow-hidden">
          <div className="flex flex-col justify-center aspect-video px-24 py-24">
            <h2 className="text-xl font-semibold tracking-tight mb-4">
              {seeddetails.title}
            </h2>
            <p className="text-sm">{seeddetails.description}</p>
            <h3 className="text-md text-brand-g1 font-medium tracking-tight mt-4 mb-1">
              Use of funds
            </h3>
            <p className="text-sm">{seeddetails.useoffunds}</p>
            <h3 className="text-md text-brand-g1 font-medium tracking-tight mt-4 mb-1">
              Method
            </h3>
            <p className="text-sm">
              {seeddetails.method.description}
            </p>
          </div>
          <div className="flex flex-col justify-center bg-slate-50 p-12">
            <ul className="border border-slate-200 p-8 bg-white">
              {seeddetails.terms.map((term, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center mb-4"
                >
                  <span className="text-md">{term.label}</span>
                  <span className="text-2xl font-bold">{term.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
