"use client";
import React from "react";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { PieChart } from "react-minimal-pie-chart";
import { SimplyDonut, SimplyLegend } from "react-simply-donut";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

type Props = {};

export default function Overview({}: Props) {
  return (
    <Wrapper className="py-[5vh] bg-white" id="overview">
      <InnerWrap className="border border-slate-200 p-8 rounded-xl">
        <div className="grid items-center justify-center w-full grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-2xl font-medium">Overview</h1>
            <h4 className="pt-2 text-lg">
              In light of inflationary pressures, looming recession risks, and
              global tensions, the conventional portfolio allocation of 60%
              equities and 40% fixed income may no longer suffice for achieving
              long-term investment objectives.
            </h4>
            <ul className="flex flex-col gap-4 pl-3 mt-4 text-md">
              {overview.map((item, index) => (
                <li key={index} className="">
                  <p>
                    <span className="font-semibold">{item.title}: </span>
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className=""></div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

const overview = [
  {
    title: "Stable Income",
    description: (
      <>
        Seeks to generate quarterly income at a rate above inflation and
        traditional fixed income.
      </>
    ),
  },
  {
    title: "Principal Return",
    description: (
      <>
        Investors are guaranteed to receive their principal back in full at the
        end of the term, independent of the fund&apos;s performance.
      </>
    ),
  },
  {
    title: "Diversified Portfolio",
    description: (
      <>
        Each portfolio includes three different income notes tied to three
        different stocks, allowing investors to diversify their risk.
      </>
    ),
  },
  {
    title: "Diligent Investment Approach",
    description: (
      <>
        Income structured notes are purchased based on a transparent process
        that requires each underlying stock to meet certain criteria, which is
        expected to minimize the likelihood of any significant price decline.
      </>
    ),
  },
];

export function IncomeDistribution({}: Props) {
  return (
    <Wrapper className="py-[5vh] bg-white">
      <InnerWrap className="py-12 border rounded-xl border-slate-200">
        <div className="flex flex-col items-center justify-center w-full gap-12">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="uppercase text-[11px] tracking-[0.2em] font-medium text-brand-p1">
              fund asset allocation
            </p>
            <h1 className="text-4xl font-medium font-title tracking-tight my-3">
              Income from tangible assets
            </h1>
            <h4 className="max-w-prose">
              The Fund primarily generates income through charter yachts,
              alongside real estate and a diversified portfolio of alternative,
              liquid asset investments, aiming for regular income and capital
              appreciation.
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 items-start h-[120px] px-12">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start justify-start w-full h-full p-8"
                >
                  <div className="flex flex-col items-start justify-start text-left grow">
                    {item.icon}
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex gap-4 items-start justify-start">
                    <h3 className="text-2xl font-semibold text-black">
                      {item.statvalue}
                    </h3>
                    <Separator orientation="vertical" />
                    <p className="text-xs text-gray-400">{item.statlabel}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center max-w-2xl py-12 mt-12">
            <div style={{ width: 250 }}>
              <SimplyDonut
                data={data}
                size="md"
                inset={{ color: "#fff", size: 20 }}
              />
            </div>
            <div style={{ width: 250 }}>
              <h3>Legend</h3>
              <SimplyLegend data={data} />
            </div>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

const data = [
  {
    value: 70,
    name: "Charter Yachts",
    description:
      "We partner with world-renown chartering companies that operate year-round charter yachts for profit.",
    icon: "", // Placeholder for icon path or component
    statlabel: "Percentage of Portfolio",
    statvalue: "70%",
    strategy: "cashflow",
  },
  {
    value: 20,
    name: "Real Estate",
    description:
      "A portion of the portfolio is allocated to real estate development projects in Portugal.",
    icon: "", // Placeholder for icon path or component
    statlabel: "Percentage of Portfolio",
    statvalue: "20%",
    strategy: "capital gains",
  },
  {
    value: 10,
    name: "Alternative Assets",
    description: (
      <span>
        The fund leverages equity to acquire high-yield bond assets through
        reputable, performant{" "}
        <a href="#disclaimer3">
          partner funds<sup>1</sup>
        </a>
        .
      </span>
    ),
    icon: "", // Placeholder for icon path or component
    statlabel: "Percentage of Portfolio",
    statvalue: "10%",
    strategy: "liquid alternative bonds",
  },
];

export function BehindTheInvestment({}: Props) {
  return (
    <Wrapper className="py-[5vh] bg-white">
      <InnerWrap className="border border-slate-200 p-8 rounded-xl">
        <div className="grid items-center justify-center w-full grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-2xl font-medium">Behind the investment</h2>
            <h3></h3>
            <p>
              Investment.yachts has formed partnerships with globally
              recognized, leading brands in the yachting industry. Through these
              agreements, access both new yachts and existing yachts in our
              charter partner fleets, we provide our investors a guaranteed net
              yield of 8% of principle invested.
            </p>
            <p>
              Investment.yachts has formed partnerships with globally
              recognized, leading brands in the yachting industry. Through these
              agreements, access both new yachts and existing yachts in our
              charter partner fleets, we provide our investors a guaranteed net
              yield of 8% of principle invested.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <ul className="flex gap-4">
              {leadership.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start justify-start overflow-hidden border rounded-xl border-slate-200"
                >
                  <div className="relative flex w-full aspect-square">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="absolute inset-0"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between w-full p-4">
                    <h3 className="text-xl font-semibold tracking-tight text-black">
                      {item.name}
                    </h3>
                    <p className="pt-1 text-xs text-left text-black">
                      {item.details}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

export function FundLeadership({}: Props) {
  return (
    <Wrapper className="py-[5vh] bg-white">
      <InnerWrap className="border border-slate-200 p-8 rounded-xl">
        <div className="grid items-center justify-center w-full grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-2xl font-medium">Fund Leadership</h1>
            <p>
              Investment.yachts is led by Mike Soertsz, a seasoned entrepreneur
              & sailor with a history of building deep tech in the finance and
              banking sectors. Mike has assembled a team of experienced
              professionals in the maritime, investment management, finance, and
              technology sectors to develop this fund.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <ul className="grid grid-cols-1 gap-4">
              {leadership.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start justify-start overflow-hidden border rounded-xl border-slate-200 w-full"
                >
                  <div className="">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between w-full p-4">
                    <h3 className="text-lg font-medium tracking-tight text-black">
                      {item.name}
                    </h3>
                    <p className="text-sm text-left text-gray-700">
                      {item.details}
                    </p>
                    <p className="text-xs text-left text-gray-500 pt-1">
                      {item.location}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

const leadership = [
  {
    name: "Mike Soertsz",
    image: "/img/mike.jpg",
    details: "Principle Fund Manager",
    location: "Porto, Portugal",
  },
];

export function RiskProfile({}: Props) {
  return (
    <Wrapper className="py-[5vh] bg-white">
      <InnerWrap className="border border-slate-200 p-8 rounded-xl">
        <div className="grid items-center justify-center w-full grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-2xl font-medium">Fund Leadership</h1>
            <p>
              Investment.yachts is led by Mike Soertsz, a seasoned entrepreneur
              & sailor with a history of building deep tech in the finance and
              banking sectors. Mike has assembled a team of experienced
              professionals in the maritime, investment management, finance, and
              technology sectors to develop this fund.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <ul className="grid grid-cols-1 gap-4">
              {leadership.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-start justify-start overflow-hidden border rounded-xl border-slate-200 w-full"
                >
                  <div className="">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between w-full p-4">
                    <h3 className="text-lg font-medium tracking-tight text-black">
                      {item.name}
                    </h3>
                    <p className="text-sm text-left text-gray-700">
                      {item.details}
                    </p>
                    <p className="text-xs text-left text-gray-500 pt-1">
                      {item.location}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
