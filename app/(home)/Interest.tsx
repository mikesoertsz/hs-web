"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { HeaderWrapLeft, InnerWrap, Wrapper } from "@/lib/atoms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { homepage } from "@/public/content/en";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";
import { IoIosCheckmark } from "react-icons/io";
import { IoBoatOutline } from "react-icons/io5";
import { LuFileSignature } from "react-icons/lu";
import {
  PiChatsTeardrop,
  PiClockClockwise,
  PiPiggyBank,
  PiShieldLight,
  PiSignature,
} from "react-icons/pi";
import {
  RiMoneyEuroCircleLine,
  RiQuestionLine,
  RiRefund2Fill,
} from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { TiChartPieOutline } from "react-icons/ti";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Heading, PreHeading, SubHeading } from "@/lib/atoms";

type Props = {};
type QuestionName =
  | "income"
  | "assets"
  | "entity"
  | "license"
  | "noteligible"
  | "score";

const FormSchema = z.object({
  income: z.boolean(),
  assets: z.boolean(),
  entity: z.boolean(),
  license: z.boolean(),
  noteligible: z.boolean(),
  score: z.number(),
});

export default function InterestOverview({}: Props) {
  const overview = {
    overview: [
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
            Investors are guaranteed to receive their principal back in full at
            the end of the term, independent of the fund&apos;s performance.
          </>
        ),
      },
      {
        title: "Tangible Assets",
        description: (
          <>
            The fund invests in cashflowing, hard assets with real tangible book
            value which act as collateral for the investment.
          </>
        ),
      },
      {
        title: "Treasury Bond Substitute",
        description: (
          <>
            The fund is designed to be a substitute for treasury bonds, with a
            higher yield and lower volatility given the bond price projections
            over the coming 24 months.
          </>
        ),
      },
    ],
    premise: {
      header: {
        preheader: "",
        heading: "Alternative Income Fund",
        subheading:
          "HelmShare's Alternative Income Fund is a product offered to investors with a guaranteed 8% yield from a fleet of charter yachts.",
      },
      content: [
        {
          title: "Details",
          question: "What am I investing in?",
          bullets: [
            "HelmShare's Alternative Income Fund is a product offered to investors with a guaranteed 8% yield primarily from a fleet of charter yachts.",
            "HelmShare permits solely accredited investors to make investments after they have evaluated their investment goals and risk appetite, and have procured independent counsel from professionals and specialists when required.",
            "HelmShare primarily generates income through charter yachts & real estate purchased with your capital. Real estate and alternative assets add diversification while hedging against yacht depreciation.",
            "The fund leverages asset equity to acquire high-yield, liquid bond assets through reputable partner funds.",
            "Investors will be able to track the performance of their assets in real-time with complete transparency.",
          ],
        },
        {
          title: "Strategy",
          question: "What is the value proposition?",
          bullets: [
            "The Alternative Income Fund was designed to provide a secure, stable-yield income stream over a 6 year term.",
            "The fund offers a unique opportunity to invest in a diversified fleet of charter yachts, with a focus on the lucrative and growing Seychelles market.",
          ],
        },
        {
          title: "Behind the Investment",
          question: "What is the fund's history and performance?",
          bullets: [
            "The flagship fund of the company is designed with a conservative risk appetite and a meticulously structured investment strategy.",
            "Risk associated with inexperience is mitigated by leveraging the expertise of a seasoned advisory board.",
            "Thorough due diligence in corporate and tax structuring has been conducted to ensure the fund's stability and compliance.",
            "The investor base is limited to seasoned accredited investors to maintain a high level of financial acumen and risk awareness within the investment community.",
            "The company collaborates with a leading charter partner, boasting a fleet of over 320+ yachts, further reducing the risk associated with the investment strategy.",
          ],
        },
        {
          title: "Market",
          question:
            "What are some of the reasons why you should consider the investment?",
          bullets: [
            "In this inflationary environment, optimizing cash returns is an important consideration for investors so that this portion of their portfolio does not drag down total portfolio returns.",
            "Investing in tangible assets that offer cashflow and real securitization can potentially de-risk your portfolio during high levels of uncertainty and public equity drawdowns.",
            "The Alternative Income Fund potentially offers a solution for investors who are looking to help de-risk their portfolio, but are not prepared to simply hold cash in traditional money market funds or CDs.",
          ],
        },
      ],
    },
    essentials: {
      header: {
        preheader: "",
        heading: "Essentials",
        subheading: "",
      },
      content: [
        {
          title: "Capital Structure",
          question: "What is the capital structure?",
          bullets: [],
        },
        {
          title: "Cashflow",
          question: "How do I get paid?",
          bullets: [],
        },
        {
          title: "Eligibility",
          question: "Who can invest?",
          bullets: ["Eligible investors must be Accredited Investors."],
        },
      ],
    },
    market: {},
    cashflow: {},
    Access: {},
  };
  return (
    <Wrapper className="py-[5vh] bg-white" id="overview">
      <InnerWrap className="border border-slate-200 rounded-xl items-start justify-start w-full">
        <Tabs defaultValue="overview" className="w-full min-h-[20vh]">
          <div className="bg-slate-100 flex w-full p-1">
            <TabsList className="">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="premise">Premise</TabsTrigger>
              <TabsTrigger value="essentials">Essentials</TabsTrigger>
              <TabsTrigger value="market">Market</TabsTrigger>
              <TabsTrigger value="cashflow">Cashflow</TabsTrigger>
              <TabsTrigger value="access">Access</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="overview" className="p-12" defaultChecked>
            <div className="flex flex-col">
              <h1 className="text-2xl font-medium">Overview</h1>
              <h4 className="pt-2 text-md max-w-prose balanced">
                In light of inflationary pressures, looming recession risks, and
                global tensions, the conventional portfolio allocation of 60%
                equities and 40% fixed income may no longer suffice for
                achieving long-term investment objectives.
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pt-6">
                {overview.overview.map((item, index) => (
                  <li
                    key={index}
                    className=" border rounded-lg p-4 bg-slate-50"
                  >
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-black">
                        {item.title}:{" "}
                      </span>
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="premise" className="p-12">
            <div className="flex flex-col">
              <h1 className="text-2xl font-medium">Premise</h1>
              <h4 className="text-md max-w-prose balanced">
                {overview.premise.header.subheading}
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full pt-4">
                {overview.premise.content.map((item, index) => (
                  <li
                    key={index}
                    className=" border rounded-lg p-4 bg-slate-50"
                  >
                    <h3 className="font-medium text-black pb-2">
                      {item.question}
                    </h3>
                    <ul className="text-md text-gray-700">
                      {item.bullets.map((bullet, index) => (
                        <li key={index} className="list-disc ml-4 text-md">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="essentials" className="p-12">
            <div className="flex flex-col">
              <h1 className="text-2xl font-medium">Essentials</h1>
              <h4 className="text-md max-w-prose balanced">
                {overview.essentials.header.subheading}
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full pt-4">
                {overview.essentials.content.map((item, index) => (
                  <li
                    key={index}
                    className=" border rounded-lg p-4 bg-slate-50"
                  >
                    <h3 className="font-medium text-black pb-2">
                      {item.question}
                    </h3>
                    <ul className="text-md text-gray-700">
                      {item.bullets.map((bullet, index) => (
                        <li key={index} className="list-disc ml-4 text-md">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </InnerWrap>
    </Wrapper>
  );
}

export function InterestHowGuaranteed({}: Props) {
  return (
    <Wrapper className="py-4 bg-gray-900 text-gray-200">
      <InnerWrap>
        <div className="flex gap-2 items-center justify-center">
          <h2 className="text-sm">How is the 8% income guaranteed?</h2>
          <div className="flex rounded-full p-2 bg-black items-center justify-center">
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

export function InterestIncomeDistribution({}: Props) {
  const yachts = [
    {
      brand: "Fountaine Pajot",
      model: "Tanna 47",
      imageurl: "/img/yachts/tanna47.png",
      stats: [],
    },
    {
      brand: "Lagoon",
      model: "Lagoon 46",
      imageurl: "/img/yachts/lagoon46.png",
      stats: [],
    },
    {
      brand: "Bali",
      model: "Bali 4.6",
      imageurl: "/img/yachts/bali46.png",
      stats: [],
    },
  ];
  const data = [
    {
      value: 70,
      name: "Luxury Charter Yachts",
      description:
        "We've partnered with world-renown chartering companies that operate year-round charter yachts for profit.",
      icon: "", // Placeholder for icon path or component
      statlabel: "Income Generation",
      statvalue: "70%",
      strategy: "cashflow",
      reasons: [
        "Growing sector",
        "Stable, predictable income",
        "Market demand inelascicity",
      ],
    },
    {
      value: 20,
      name: "Real Estate",
      description:
        "A portion of the portfolio is allocated to real estate development projects in Portugal for cashflow and gapital gains.",
      icon: "", // Placeholder for icon path or component
      statlabel: "Captal Appreciation",
      statvalue: "20%",
      strategy: "capital gains",
      reasons: [
        "Yacht depreciation offset",
        "Predictable yield",
        "Tried and true",
      ],
    },
    {
      value: 10,
      name: "Alternative Assets",
      description: (
        <span>
          The fund leverages asset equity to acquire high-yield, liquid bond
          assets through reputable{" "}
          <a href="#disclaimer3">
            partner funds<sup>1</sup>
          </a>
          .
        </span>
      ),
      icon: "", // Placeholder for icon path or component
      statlabel: "Diversification",
      statvalue: "10%",
      strategy: "liquid alternative bonds",
      reasons: ["Liquid", "High yield", "Asset diversification"],
    },
  ];
  return (
    <Wrapper className="py-[5vh]" id="opportunity">
      <InnerWrap className="py-12 border rounded-xl border-slate-300 bg-white">
        <div className="flex flex-col items-center justify-center w-full gap-12">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="uppercase text-[11px] tracking-[0.2em] font-medium text-brand-p1">
              fund asset strategy
            </p>
            <h1 className="text-4xl font-medium font-title tracking-tight my-3">
              Stable income from tangible assets
            </h1>
            <h4 className="max-w-prose">
              HelmShare primarily generates income through charter yachts & real
              estate purchased with your capital. Real estate and a alternative
              assets add diversification while hedging against yacht
              depreciation.
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 w-full gap-4 items-start h-[120px] px-12">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="relative flex flex-col items-start justify-start w-full h-full p-8"
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
                    <div className="flex flex-col items-start justify-start text-left">
                      <p className="text-xs text-gray-600 pb-1">
                        <span className="font-semibold pr-1">Why:</span>
                        {item.statlabel}
                      </p>
                      <ul>
                        {item.reasons.map((reason, index) => (
                          <li
                            key={index}
                            className="text-xs text-gray-500 flex items-start justify-start gap-1"
                          >
                            <IoIosCheckmark
                              size={15}
                              className="text-green-600"
                            />
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center max-w-2xl py-12 mt-12">
            {/* <div style={{ width: 250 }}>
              <SimplyDonut
                data={data}
                size="md"
                inset={{ color: "#fff", size: 20 }}
              />
            </div>
            <div style={{ width: 250 }}>
              <h3>Legend</h3>
              <SimplyLegend data={data} />
            </div> */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="font-title text-4xl tracking-tight py-4">
            Which yachts?
          </h3>
          <h4 className="balanced max-w-2xl text-center">
            Helmshare fleets are comprised of 40-60ft sailing catamarans from
            only the best production brands. These are chosen for their
            popularity, flexibility, quality, and low depreciation.
          </h4>
          <ul className="md:flex items-center justify-center gap-8 mt-12 hidden">
            {yachts.map((yacht, index) => (
              <li
                className="flex flex-col items-center justify-center"
                key={index}
              >
                <div className="flex relative h-[300px] w-[300px]">
                  <Image
                    src={yacht.imageurl}
                    alt={yacht.model}
                    fill
                    className="absolute inset-0"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="text-sm font-semibold mt-3">{yacht.brand}</p>
                <p className="text-xs font-normal pt-1">{yacht.model}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="relative rounded-lg overflow-clip my-12 flex w-full">
          <div className="flex w-full min-h-[400px] relative z-10 ">
            <Image
              src="/img/hero/hero20.jpg"
              alt="image"
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0 p-12"
            />
          </div>
        </div> */}
        <p className="text-xs text-gray-400 mt-12">
          As of{" "}
          {new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toLocaleDateString(
            "en-GB",
            { day: "2-digit", month: "2-digit", year: "numeric" }
          )}
          . Percentages are based on total investment activities and subject to
          change.
        </p>
      </InnerWrap>
    </Wrapper>
  );
}

export function InterestBehindTheInvestment({}: Props) {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);
  const totalPercentage =
    homepage.interest.behindtheinvestment.feestructure.feeschedule.reduce(
      (total, fee) => total + fee.percentage,
      0
    );

  return (
    <Wrapper className="pb-[5vh] " id="structure">
      <InnerWrap className="border rounded-xl border-slate-300 px-12 relative bg-white">
        <ul className="flex items-center justify-center absolute right-3 top-3 text-xs font-medium gap-3 bg-slate-100 rounded-md border-slate-300 border">
          <li className="bg-slate-200 p-2">
            <HiOutlineArrowLeftCircle size={18} />
          </li>
          <li className="">Structure</li>
          <li className="">Fees</li>
          <li className="">Leadership</li>
          <li className="">Advisors</li>
          <li className="">Partners</li>
          <li className="bg-slate-200 p-2">
            <HiOutlineArrowRightCircle size={18} />
          </li>
        </ul>
        <div className="flex mt-16">structure</div>
        <div className="flex justify-between items-center p-4 w-full">
          {homepage.interest.behindtheinvestment.feestructure.feeschedule.map(
            (fee, index) => (
              <motion.div
                key={index}
                className="text-center p-2 flex-col items-center justify-center gap-1"
                whileHover={{ scale: 1.1 }}
                tabIndex={0} // for accessibility
              >
                <span className="text-sm font-bold">
                  {fee.percentage}
                  {fee.percentage > 0 ? "%" : ""}
                </span>
                <div className="flex items-center justify-center">
                  <h2 className="text-xs font-medium">{fee.title}</h2>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <RiQuestionLine className="pl-1 w-4 h-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-[250px]">{fee.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.div>
            )
          )}
        </div>

        <FundLeadership />
      </InnerWrap>
    </Wrapper>
  );
}

export function InterestFundLeadership({}: Props) {
  const leadership = [
    {
      name: "Mike Soertsz",
      image: "/img/mike.jpg",
      details: "Principle Fund Manager",
      location: "Porto, Portugal",
    },
  ];

  return (
    <>
      <Separator />
      <div className="grid items-center justify-center w-full grid-cols-1 gap-12 md:grid-cols-2 m-12">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl font-medium">Fund Leadership</h1>
          <p>
            Investment.yachts is led by Mike Soertsz, a seasoned entrepreneur &
            sailor with a history of building deep tech in the finance and
            banking sectors. Mike has assembled a team of experienced
            professionals in the maritime, investment management, finance, and
            technology sectors to develop this fund.
          </p>
        </div>
        <div className="flex items-center justify-end w-full">
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
    </>
  );
}

export function InterestRiskProfile({}: Props) {
  const leadership = [
    {
      name: "Mike Soertsz",
      image: "/img/mike.jpg",
      details: "Principle Fund Manager",
      location: "Porto, Portugal",
    },
  ];
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

export function InterestBenefits({}: Props) {
  const benefits = [
    {
      icon: <PiPiggyBank size={25} />,
      title: (
        <span>
          <strong>Guaranteed Yield</strong>: Receive guaranteed return from your
          investment.
        </span>
      ),
    },
    {
      icon: <PiShieldLight size={25} />,
      title: (
        <span>
          <strong>Low Risk</strong>: Funds are invested into cashflowing, hard
          assets with real tangible value.
        </span>
      ),
    },
    {
      icon: <IoBoatOutline size={25} />,
      title: (
        <span>
          <strong>Asset Backed</strong>: Invest in tangible assets that offer
          cashflow and real securitization.
        </span>
      ),
    },
    {
      icon: <PiClockClockwise size={25} />,
      title: (
        <span>
          <strong>Quarterly Payouts</strong>: Enjoy consistent returns with
          regular quarterly distributions to your bank account.
        </span>
      ),
    },
    {
      icon: <AiOutlineDashboard size={25} />,
      title: (
        <span>
          <strong>Transparent</strong>: Track the performance of your assets in
          real-time with complete transparency.
        </span>
      ),
    },
    {
      icon: <TiChartPieOutline size={25} />,
      title: (
        <span>
          <strong>Inelastic demand</strong>: Demand for luxury charters has
          proven to be resilient to market trends and even pandemics.
        </span>
      ),
    },
  ];
  return (
    <Wrapper className="bg-white py-[10vh]">
      <InnerWrap>
        <h1 className="text-5xl font-title tracking-tight">
          Why invest in a charter fleet?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full pt-8 gap-4 mt-12">
          <ul className="flex flex-col items-center justify-center w-full gap-4">
            {benefits.slice(0, 3).map((item, index) => (
              <li
                key={index}
                className="flex items-start justify-center gap-4 w-full  border-slate-200 p-4 rounded-xl pr-6"
              >
                <div className="w-10 flex h-full items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="flex text-sm text-left w-full">{item.title}</h3>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center">
            <Image src="/img/tanna47.png" alt="hero" width={300} height={300} />
          </div>
          <ul className="flex flex-col items-center justify-center w-full gap-4">
            {benefits.slice(3, 6).map((item, index) => (
              <li
                key={index}
                className="flex items-start justify-center gap-4 w-full  border-slate-200 p-4 rounded-xl pr-6"
              >
                <div className="w-10 flex h-full items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="flex text-sm text-left w-full">{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

export function InterestHowItWorks({}: Props) {
  const timelineEvents = [
    {
      date: "Step 1",
      items: [
        {
          title: "Consultation",
          description:
            "Schedule an initial consultation with our fund manager to discuss your investment goal, investor qualification and risk tolerance, subscription process, payout process and principle return at fund maturity.",
          icon: <PiChatsTeardrop size={22} />,
        },
      ],
    },
    {
      date: "Step 2",
      items: [
        {
          title: "Qualification",
          description:
            "Register your interest in the fund and submit docs to validate Accredited Investor status according to RegD 506(c) guidelines (usually a 10minute process). You will be contacted by our fund manager when the official fundraise begins.",
          icon: <LuFileSignature size={22} />,
        },
      ],
    },
    {
      date: "Step 3",
      items: [
        {
          title: "Subscription",
          description:
            "Complete the subscription process by signing the investment agreement and transferring funds to secure your position in the investment.",
          icon: <PiSignature size={22} />,
        },
      ],
    },
    {
      date: "Step 4",
      items: [
        {
          title: "Fund Payouts",
          description:
            "Receive quarterly payouts from the fund's cashflow-generating activities, such as chartering yachts and real estate rentals.",
          icon: <RiMoneyEuroCircleLine size={22} />,
        },
      ],
    },
    {
      date: "Step 5",
      items: [
        {
          title: "Quarterly Reports",
          description:
            "Review quarterly reports detailing the fund's performance, asset management strategies, and market analysis. Reports contain up to the minute sales data from asset performance.",
          icon: <TbReportAnalytics size={22} />,
        },
      ],
    },
    {
      date: "CLOSE",
      items: [
        {
          title: "Principle Payback",
          description:
            "At the end of the 6-year investment term, receive a 100% payback of your principal investment amount as outlined in the fund's terms.",
          icon: <RiRefund2Fill size={22} />,
        },
      ],
    },
  ];

  return (
    <Wrapper className="py-[5vh] bg-slate-100" id="how-it-works">
      <InnerWrap className="p-8 rounded-xl border border-slate-200 bg-white">
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 h-full p-8">
          <div className="flex flex-col items-start justify-start h-full md:basis-1/2">
            <h4 className="mb-3 text-sm tracking-wide text-brand-p1">
              Interested in investing?
            </h4>
            <h3 className="text-5xl font-title font-semibold">How It Works</h3>
            <p className="text-md mt-4 pr-12">
              What to expect in our fund subscription process.
            </p>
          </div>
          <div className="flex items-center justify-center md:basis-1/2">
            <div className="flex flex-col">
              {timelineEvents.map((event, index) => (
                <div key={index} className="mb-4">
                  <ul className="flex flex-col items-start justify-start">
                    {event.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-4">
                        <div className="flex items-start justify-start h-full mt-1">
                          <div className="relative z-10">
                            <div className="h-2 w-2 hidden rounded-full bg-gray-800 dark:bg-gray-900 mt-[3px]"></div>
                          </div>
                          <div className="text-xs font-medium uppercase text-gray-600 dark:text-gray-400 pl-1 w-12">
                            {event.date}
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <div className="">{item.icon}</div>
                          <div className="flex flex-col items-start justify-start">
                            {item.title}
                            {item.description && (
                              <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

export function InterestCorporateStructure({}: Props) {
  const leads = [
    "https://www.heritage.ch/en/fund-representation-swiss-paying-agent",
  ];
  const corporatestructure = {
    header: {
      icon: "", // Placeholder for actual icon path
      image: "", // Placeholder for actual image path
      preheading: "Understanding Our Foundation",
      heading: "Corporate Structure",
      subheading: "Explore Our Organizational Framework",
      body: "Learn about the entities that form our corporate structure and how they interconnect to sustain our business operations and growth.",
    },
    entities: [
      {
        title: "General Partner",
        name: "HelmShare LLC",
        country: "Dubai, UAE",
        compliance: ["Dubai Financial Services Authority (DFSA)"],
      },
      {
        title: "Special Purpose Vehicle (SPV)",
        name: "HelmShare Prime LLC",
        country: "Cayman Islands",
        compliance: ["Cayman Islands Monetary Authority (CIMA)"],
      },
      {
        title: "Trust Issuer",
        name: "TBA",
        country: "Dublin, Ireland",
        compliance: ["Central Bank of Ireland"],
      },

      {
        title: "Payment Agent",
        name: "TBA",
        country: "Zurich, Switzerland",
        compliance: ["Swiss Financial Market Supervisory Authority (FINMA)"],
      },
      {
        title: "Counsel - Onshore",
        name: "TBA",
        country: "Dubai, UAE",
        compliance: ["Dubai Legal Affairs Department"],
      },
      {
        title: "Counsel - Offshore",
        name: "TBA",
        country: "Cayman Islands",
        compliance: ["Cayman Islands Legal Practitioners Association (CILPA)"],
      },
      {
        title: "Audit Partner",
        name: "Deloitte",
        country: "Global",
        compliance: [
          "International Standards on Auditing (ISA)",
          "Anti-Money Laundering (AML)",
          "Know Your Customer (KYC)",
        ],
      },
    ],
  };
  return (
    <Wrapper className="my-[10vh]">
      <InnerWrap>
        <div className="flex flex-col p-8 rounded-2xl border-slate-200 border bg-white w-full">
          <h3 className="font-title text-4xl tracking-tight font-medium pb-8 pl-1">
            Corporate structure
          </h3>
          <Table>
            <TableCaption>
              <sup>*</sup>currently in progress.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Entity</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Compliance Standards</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {corporatestructure.entities.map((entity, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-slate-50 transition duration-200 ease-in-out"
                >
                  <TableCell>{entity.title}</TableCell>
                  <TableCell>
                    {entity.name}
                    <sup>*</sup>
                  </TableCell>
                  <TableCell>{entity.country}</TableCell>
                  <TableCell>
                    {entity.compliance.map((item, idx) => (
                      <div key={idx}>{item}</div>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

export function InterestWhoFor({}: Props) {
  const questions: {
    label: string;
    description: string;
    name: QuestionName;
    score: number;
  }[] = [
    {
      label:
        "Do you earn $200K+ yearly, or $300K+ with your spousal equivalent?",
      description: "Indicate your annual income level.",
      name: "income",
      score: 50,
    },
    {
      label: "Do you have $1M+ in assets, excluding your primary residence?",
      description: "Indicate if your asset value exceeds $1 million.",
      name: "assets",
      score: 50,
    },
    {
      label: "Do you own an entity (i.e., family office) with $5M+ in assets?",
      description:
        "Indicate if you own an entity with significant asset value.",
      name: "entity",
      score: 50,
    },
    {
      label:
        "Do you hold a Series 7, 65, or 82 license currently in good standing?",
      description: "Indicate if you have a valid financial license.",
      name: "license",
      score: 50,
    },
    {
      label: "None of the above",
      description: "Select if none of the above options apply to you.",
      name: "noteligible",
      score: 50,
    },
  ];
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const noneSelected = useWatch({
    control: form.control,
    name: "noteligible",
  });

  useEffect(() => {
    if (noneSelected) {
      form.setValue("income", false);
      form.setValue("assets", false);
      form.setValue("entity", false);
      form.setValue("license", false);
    }
  }, [noneSelected, form]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Wrapper className="py-[5vh]">
      <InnerWrap>
        <div className="bg-gray-900 flex w-full items-start justify-center p-12 rounded-xl gap-12">
          <div className="flex flex-col items-start justify-start basis-1/2">
            <h4 className="mb-3 text-sm tracking-wide text-brand-g1">
              Interested in investing?
            </h4>
            <h2 className="text-4xl font-medium text-white font-title">
              See if you qualify.
            </h2>
            <p className="text-md text-white mt-4 mb-4">
              This fund is exclusively for <br /> Accredited Investors
              <sup>?</sup>.
            </p>
            <p className="text-sm font-light text-gray-400 balanced pr-16 leading-relaxed">
              HelmShare is an exclusive fund available only to experienced,
              accredited investors. Each potential investor will undergo a
              standard vetting process through our partner InvestorVerify.com.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg basis-1/2">
            <div className="hidden">Congrats you qualify</div>
            <Form {...form}>
              <form
                className="grid grid-cols-1 gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {questions.map(({ label, description, name }) => {
                  if (name === "score") return null; // Do not render a Switch for 'score'
                  return (
                    <FormField
                      key={name}
                      control={form.control}
                      name={name}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition duration-200 ease-in-out">
                          <div className="space-y-0.5">
                            <FormLabel>{label}</FormLabel>
                            <FormDescription>{description}</FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value === true} // Ensure the value is a boolean
                              onCheckedChange={(checked) => {
                                if (name === "noteligible") {
                                  if (checked) {
                                    form.setValue("income", false);
                                    form.setValue("assets", false);
                                    form.setValue("entity", false);
                                    form.setValue("license", false);
                                  }
                                } else if (noneSelected) {
                                  field.onChange(false);
                                } else {
                                  field.onChange(checked);
                                }
                              }}
                              className="ml-8"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  );
                })}
                <Button variant="outline" type="submit" className="flex w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
