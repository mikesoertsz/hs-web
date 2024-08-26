"use client";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HeaderWrapLeft, InnerWrap, Wrapper } from "@/lib/atoms";

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
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Heading, SubHeading } from "@/lib/atoms";
import { TitleBlock } from "@/components/ui/titleblock";
import { BarChart } from "@mui/x-charts/BarChart";
import { MarketChart } from "./marketchart";
import { MdSafetyCheck } from "react-icons/md";
import { TbReceiptTax, TbSailboat } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import InterestMarketChart from "./interest-market-chart";

type Props = {};

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
      <InnerWrap className="items-start justify-start w-full border border-slate-200 rounded-xl">
        <Tabs defaultValue="overview" className="w-full min-h-[20vh]">
          <div className="flex w-full p-1 bg-slate-100">
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
              <ul className="grid w-full grid-cols-1 gap-4 pt-6 md:grid-cols-2">
                {overview.overview.map((item, index) => (
                  <li key={index} className="p-4 border rounded-lg bg-slate-50">
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
              <ul className="grid w-full grid-cols-1 gap-4 pt-4 md:grid-cols-1">
                {overview.premise.content.map((item, index) => (
                  <li key={index} className="p-4 border rounded-lg bg-slate-50">
                    <h3 className="pb-2 font-medium text-black">
                      {item.question}
                    </h3>
                    <ul className="text-gray-700 text-md">
                      {item.bullets.map((bullet, index) => (
                        <li key={index} className="ml-4 list-disc text-md">
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
              <ul className="grid w-full grid-cols-1 gap-4 pt-4 md:grid-cols-1">
                {overview.essentials.content.map((item, index) => (
                  <li key={index} className="p-4 border rounded-lg bg-slate-50">
                    <h3 className="pb-2 font-medium text-black">
                      {item.question}
                    </h3>
                    <ul className="text-gray-700 text-md">
                      {item.bullets.map((bullet, index) => (
                        <li key={index} className="ml-4 list-disc text-md">
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

export function InterestPremise({}: Props) {
  const premise = {
    header: {
      preheader: "",
      heading: "",
      subheading: "Premise",
      body: "What am I investing in?",
    },
    content: [
      {
        title: "Details",
        question: "What am I investing in?",
        bullets: [
          "HelmShare's Alternative Income Fund is a product offered to investors with a guaranteed 8% yield primarily from cashflows of the year-round operation of a fleet of charter yachts.",
          "HelmShare permits solely accredited investors to make investments after they have evaluated their investment goals and risk appetite, and have procured independent counsel from professionals and specialists when required.",
          "HelmShare primarily generates income through charter yachts & real estate purchased with your capital. Real estate and alternative assets add diversification while hedging against yacht depreciation.",
          "Each SPV controls a fleet of 3-5 yachts operating in popular markets (i.e. Seychelles).",
        ],
      },
    ],
  };

  return (
    <Wrapper className="p-0 bg-white " id="premise">
      <InnerWrap className="grid w-full grid-cols-1 p-0 md:grid-cols-5">
        <div className="col-span-5 p-12">
          <TitleBlock
            subheading={premise.header.subheading}
            body={premise.header.body}
            theme="light"
            orientation="left"
          />
          <ul className="flex flex-col items-start justify-start gap-2 pb-8 pl-5 mt-3 list-disc">
            {premise.content[0].bullets.map((bullet, index) => (
              <li key={index} className="ml-4 text-gray-700 list-disc text-md">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative z-10 hidden col-span-2 overflow-hidden aspect-square">
          <Image
            src="/img/hero/hero11.jpg"
            alt="Yacht at anchor"
            fill
            className="absolute inset-0 right-0 z-10"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

export function InterestStrategy({}: Props) {
  const strategy = {
    header: {
      preheader: "",
      heading: "",
      subheading: "Strategy",
      body: "What is the value proposition?",
    },
    content: [
      {
        details: [
          "Luxury yacht charters provide a demand-inelastic, stable cash flow.",
          "Investments backed by tangible assets mitigate bond market volatility.",
          "A closed-fund structure ensures a predictable yield on capital.",
          "Real estate diversification hedges against yacht depreciation.",
          "Charters and diversified assets offer guaranteed returns.",
          "Global operations across a diverse yacht portfolio.",
          "Stability through a 10% cap on leveraged investments.",
          "Tangible assets yield secure, competitive returns.",
          "Partnerships with leading charter companies ensure reliable revenue streams.",
          "Focus on eco-friendly yachts aligns with growing market demand.",
          "Expansion into emerging markets to capture growth opportunities.",
        ],
      },
    ],
    grid: [
      {
        title: "Cashflow",
        subheading: "Guaranteed Stable Charter Income",
        tooltip: "Consistent, predictable cash flow from charters.",
        icon: <MdAttachMoney size={30} />,
      },
      {
        title: "Illiquid Assets",
        subheading: "Secure Asset-Backed Investments",
        tooltip: "Investments in physical yachts ensure asset-backed security.",
        icon: <TbSailboat size={30} />,
      },
      {
        title: "Tax Optimized",
        subheading: "Maximized Returns via Tax Efficiency",
        tooltip: "Structured for tax efficiency to maximize returns.",
        icon: <TbReceiptTax size={30} />,
      },
      {
        title: "Low-Risk Profile",
        subheading: "Guaranteed Yield with Low Risk",
        tooltip: "Focused on low-risk assets for guaranteed yield.",
        icon: <AiOutlineSafety size={30} />,
      },
    ],
  };
  return (
    <Wrapper className="pt-8 bg-white border-t border-gray-200" id="strategy">
      <InnerWrap className="grid w-full grid-cols-1 md:grid-cols-5">
        <div className="flex flex-col col-span-3 p-12">
          <TitleBlock
            subheading={strategy.header.subheading}
            body={strategy.header.body}
            theme="light"
            orientation="left"
          />
          <ul className="flex flex-col items-start justify-start gap-2 pb-8 pl-5 mt-3 list-disc">
            {strategy.content[0].details.map((detail, index) => (
              <li key={index} className="ml-4 text-sm text-gray-700 list-disc">
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full h-full col-span-2 pb-8">
          <fieldset className="w-full px-5 py-4 border rounded-lg">
            <legend className="px-1 -ml-1 text-sm font-medium text-brand-n4">
              Strategy
            </legend>
            <ul className="grid w-full h-full grid-cols-2 gap-4 p-3">
              {strategy.grid.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center justify-center w-full h-full p-4 text-center border rounded-lg group bg-slate-50"
                >
                  <div className="flex items-center justify-center w-12 h-12 p-3 bg-gray-200 rounded-full">
                    {item.icon}
                  </div>
                  <div className="flex flex-col px-6 mt-3">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="pt-1 text-xs text-gray-700 transition duration-200 ease-in-out transform">
                      {item.subheading}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

export function InterestMarket({}: Props) {
  const strategy = {
    header: {
      preheader: "",
      heading: "Charter Market Overview",
      subheading: "Charter Market Overview",
      body: "The charter industry has shown remarkable growth and resilience over the past decade, with a steady CAGR of 5.4% from 2018 to 2023. Looking ahead, the industry is projected to continue its robust expansion, with an impressive forecasted CAGR as markets rebound & recover from recent turmiol.",
      description:
        "The charter industry has shown remarkable growth and resilience over the past decade, with a steady CAGR of 5.4% from 2018 to 2023. Looking ahead, the industry is projected to continue its robust expansion, with an impressive forecasted CAGR as markets rebound & recover from recent turmiol.",
    },
    content: [
      {
        details: [
          "2018-2023 CAGR: 5.4%, market growth from USD 6.5B to USD 8.5B.",
          "2024-2032 forecast: 12.2% CAGR, reaching USD 19.78B by 2032.",
          "Motor Yachts dominate; Sailing Yachts gain on eco-friendly appeal.",
          "Europe leads; Asia-Pacific fastest growing due to rising incomes, policy support.",
          "Growth drivers: High-net-worth individuals, tech advancements, eco-friendly yachts.",
          "Challenges: High operational costs, luxury spending's economic sensitivity.",
          "Opportunities: Expansion in Asia, Latin America; yacht design innovations.",
        ],
      },
    ],
  };
  return (
    <Wrapper className="p-8 bg-white border-t border-gray-200" id="market">
      <InnerWrap className="grid w-full grid-cols-1 md:grid-cols-5">
        <div className="flex flex-col col-span-3 p-12">
          <TitleBlock
            subheading={strategy.header.subheading}
            body={strategy.header.body}
            theme="light"
            orientation="left"
          />
          <ul className="flex flex-col items-start justify-start gap-2 pb-8 pl-5 mt-3 list-disc">
            {strategy.content[0].details.map((detail, index) => (
              <li key={index} className="ml-4 text-sm text-gray-700 list-disc">
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex col-span-2 p-12">
          {/* <MarketChart /> */}
          <InterestMarketChart />
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
    <Wrapper className="bg-white py-[10vh]" id="whyhelmshare">
      <InnerWrap>
        <TitleBlock
          heading="Why invest in a charter fleet?"
          theme="light"
          orientation="center"
        />
        <div className="grid w-full grid-cols-1 gap-4 pt-8 mt-12 md:grid-cols-3">
          <ul className="flex flex-col items-center justify-center w-full gap-4">
            {benefits.slice(0, 3).map((item, index) => (
              <li
                key={index}
                className="flex items-start justify-center w-full gap-4 p-4 pr-6 border-slate-200 rounded-xl"
              >
                <div className="flex items-center justify-center w-10 h-full">
                  {item.icon}
                </div>
                <h3 className="flex w-full text-sm text-left">{item.title}</h3>
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
                className="flex items-start justify-center w-full gap-4 p-4 pr-6 border-slate-200 rounded-xl"
              >
                <div className="flex items-center justify-center w-10 h-full">
                  {item.icon}
                </div>
                <h3 className="flex w-full text-sm text-left">{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

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

export function InterestCorporateStructure({}: Props) {
  const leads = [
    "https://www.heritage.ch/en/fund-representation-swiss-paying-agent",
  ];
  const corporatestructure = {
    header: {
      icon: "", // Placeholder for actual icon path
      image: "", // Placeholder for actual image path
      preheading: "Understanding Our Foundation",
      heading: "Corporate & Tax Structure",
      subheading:
        "Diligently structured to ease tax and administrative burdens.",
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
        <div className="flex flex-col w-full p-8 bg-white border rounded-2xl border-slate-200">
          <TitleBlock
            heading={corporatestructure.header.heading}
            subheading={corporatestructure.header.subheading}
            theme="light"
            orientation="center"
          />
          <Table>
            <TableCaption>
              <Badge variant="secondary">
                <sup>*</sup>currently in progress.
              </Badge>
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
                  className="transition duration-200 ease-in-out hover:bg-slate-50 text-xs md:text-sm"
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

  const howitworks = {
    header: {
      preheading: "Interested in investing?",
      heading: "How It Works",
      subheading: "What to expect in our fund subscription process.",
    },
    timeline: [
      {
        date: "Step 1",
        title: "Consultation",
        description:
          "Schedule an initial consultation with our fund manager to discuss your investment goal, investor qualification and risk tolerance, subscription process, payout process and principle return at fund maturity.",
      },
      {
        date: "Step 2",
        title: "Qualification",
        description:
          "Register your interest in the fund and submit docs to validate Accredited Investor status according to RegD 506(c) guidelines (usually a 10minute process). You will be contacted by our fund manager when the official fundraise begins.",
      },
      {
        date: "Step 3",
        title: "Subscription",
        description:
          "Complete the subscription process by signing the investment agreement and transferring funds to secure your position in the investment.",
      },
      {
        date: "Step 4",
        title: "Fund Payouts",
        description:
          "Receive quarterly payouts from the fund's cashflow-generating activities, such as chartering yachts and real estate rentals.",
      },
      {
        date: "Step 5",
        title: "Quarterly Reports",
        description:
          "Review quarterly reports detailing the fund's performance, asset management strategies, and market analysis. Reports contain up to the minute sales data from asset performance.",
      },
      {
        date: "CLOSE",
        title: "Principle Payback",
        description:
          "At the end of the 6-year investment term, receive a 100% payback of your principal investment amount as outlined in the fund's terms.",
      },
    ],
  };

  return (
    <Wrapper className="py-[5vh] bg-slate-100" id="howitworks">
      <InnerWrap className="grid grid-cols-1 p-8 bg-white border rounded-xl border-slate-200 md:grid-cols-2">
        <div className="flex h-full p-4">
          <TitleBlock
            preheading={howitworks.header.preheading}
            heading={howitworks.header.heading}
            subheading={howitworks.header.subheading}
            theme="light"
            orientation="left"
          />
        </div>
        <div className="flex items-center justify-center mt-4 md:basis-1/2 md:mt-0">
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
                        <div className="w-12 pl-1 text-xs font-medium text-gray-600 uppercase dark:text-gray-400">
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
      </InnerWrap>
    </Wrapper>
  );
}

export function InterestAssetDistribution({}: Props) {
  const strategy = {
    header: {
      preheader: "fund strategy",
      heading: "Capital Distribution",
      subheading: "",
      body: "HelmShare primarily generates income through charter yachts & real estate purchased with your capital. Real estate and alternative assets add diversification while hedging against yacht depreciation.",
    },
  };
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
        "A portion of the portfolio is allocated to real estate development projects in Portugal for cashflow and capital gains.",
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
    <Wrapper className="py-[5vh]" id="distribution">
      <InnerWrap className="flex flex-col py-12 bg-white border rounded-xl border-slate-300">
        <TitleBlock
          preheading={strategy.header.preheader}
          heading={strategy.header.heading}
          subheading={strategy.header.subheading}
          body={strategy.header.body}
          theme="light"
          orientation="center"
        />
        <ul className="grid items-start w-full grid-cols-1 gap-4 px-8 md:grid-cols-3 mt-4">
          {data.map((item, index) => (
            <li
              key={index}
              className="relative flex flex-col items-start justify-start w-full p-8 py-4  md:mt-0 border rounded-lg md:border-0"
            >
              <div className="flex flex-col items-start justify-start text-left grow">
                {item.icon}
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <Separator className="my-4" />
              <div className="flex items-start justify-start gap-4 text-black">
                <h3 className="text-2xl font-semibold text-black">
                  {item.statvalue}
                </h3>
                <Separator orientation="vertical" />
                <div className="flex flex-col items-start justify-start text-left">
                  <p className="pb-1 text-xs text-gray-600">
                    <span className="pr-1 font-semibold">Why:</span>
                    {item.statlabel}
                  </p>
                  <ul>
                    {item.reasons.map((reason, index) => (
                      <li
                        key={index}
                        className="flex items-start justify-start gap-1 text-xs text-gray-600"
                      >
                        <IoIosCheckmark size={15} className="text-green-600" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <InterestWhichYachts />
      </InnerWrap>
    </Wrapper>
  );
}

export function InterestWhichYachts({}: Props) {
  const yachts = {
    header: {
      preheader: "Fleet Overview",
      heading: "Which yachts?",
      subheading:
        "HelmShare fleets are comprised of 40-60ft sailing catamarans from only the best production brands. These are chosen for their popularity, flexibility, quality, and low depreciation.",
    },
    list: [
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
    ],
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-12 px-8 md:px-0">
        <div className="flex items-center justify-center w-full">
          <TitleBlock
            heading={yachts.header.heading}
            subheading={yachts.header.subheading}
            theme="light"
            orientation="center"
          />
        </div>
        <ul className="items-center justify-center hidden gap-8 mt-12 md:flex">
          {yachts.list.map((yacht, index) => (
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
              <p className="mt-3 text-sm font-semibold">{yacht.brand}</p>
              <p className="pt-1 text-xs font-normal">{yacht.model}</p>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-xs text-gray-400 text-center">
          As of{" "}
          {new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toLocaleDateString(
            "en-GB",
            {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }
          )}
          . Percentages are rough indicators and may deviate slightly according
          to fund activities.
        </p>
      </div>
    </>
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
      <InnerWrap className="relative px-12 bg-white border rounded-xl border-slate-300">
        <ul className="absolute flex items-center justify-center gap-3 text-xs font-medium border rounded-md right-3 top-3 bg-slate-100 border-slate-300">
          <li className="p-2 bg-slate-200">
            <HiOutlineArrowLeftCircle size={18} />
          </li>
          <li className="">Structure</li>
          <li className="">Fees</li>
          <li className="">Leadership</li>
          <li className="">Advisors</li>
          <li className="">Partners</li>
          <li className="p-2 bg-slate-200">
            <HiOutlineArrowRightCircle size={18} />
          </li>
        </ul>
        <div className="flex mt-16">structure</div>
        <div className="flex items-center justify-between w-full p-4">
          {homepage.interest.behindtheinvestment.feestructure.feeschedule.map(
            (fee, index) => (
              <motion.div
                key={index}
                className="flex-col items-center justify-center gap-1 p-2 text-center"
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
                        <RiQuestionLine className="w-4 h-4 pl-1" />
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

        <InterestFundLeadership />
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
      <div className="grid items-center justify-center w-full grid-cols-1 gap-12 m-12 md:grid-cols-2">
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
                className="flex flex-col items-start justify-start w-full overflow-hidden border rounded-xl border-slate-200"
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
                  <p className="pt-1 text-xs text-left text-gray-500">
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
      <InnerWrap className="p-8 border border-slate-200 rounded-xl">
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
                  className="flex flex-col items-start justify-start w-full overflow-hidden border rounded-xl border-slate-200"
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
                    <p className="pt-1 text-xs text-left text-gray-500">
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
