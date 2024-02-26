"use client";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { homepage } from "@/public/content/en";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GiSailboat } from "react-icons/gi";
import {
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";
import { IoIosCheckmark } from "react-icons/io";
import { PiClockClockwise, PiPiggyBank, PiShieldLight } from "react-icons/pi";
import { RiQuestionLine } from "react-icons/ri";
import { SimplyDonut, SimplyLegend } from "react-simply-donut";
import { TiChartPieOutline } from "react-icons/ti";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoBoatOutline } from "react-icons/io5";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { PiSignature } from "react-icons/pi";
import { RiRefund2Fill } from "react-icons/ri";
import { LuFileSignature } from "react-icons/lu";
import { PiChatsTeardrop } from "react-icons/pi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

export default function Overview({}: Props) {
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
          Investors are guaranteed to receive their principal back in full at
          the end of the term, independent of the fund&apos;s performance.
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
  return (
    <Wrapper className="py-[5vh] bg-white" id="overview">
      <InnerWrap className="border border-slate-200 p-8 rounded-xl items-start justify-start w-full">
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent
            value="overview"
            className="grid grid-cols-1 md:grid-cols-2 w-full"
          >
            <div className="flex flex-col items-start justify-start mt-4">
              <h1 className="text-2xl font-medium">Overview</h1>
              <h4 className="pt-2 text-lg">
                In light of inflationary pressures, looming recession risks, and
                global tensions, the conventional portfolio allocation of 60%
                equities and 40% fixed income may no longer suffice for
                achieving long-term investment objectives.
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
          </TabsContent>
          <TabsContent
            value="password"
            className="grid grid-cols-1 md:grid-cols-2 w-full"
          >
            Change your password here.
          </TabsContent>
        </Tabs>
      </InnerWrap>
    </Wrapper>
  );
}

export function HowGuaranteed({}: Props) {
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

export function IncomeDistribution({}: Props) {
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
              fund asset allocation
            </p>
            <h1 className="text-4xl font-medium font-title tracking-tight my-3">
              Income from tangible assets
            </h1>
            <h4 className="max-w-prose">
              The Fund primarily generates income through charter yachts
              purchased with your capital. Real estate and a alternative assets
              add diversification and depreciation hedges into the portfolio,
              guaranteeing income and capital appreciation.
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
        <p className="text-xs text-gray-400">
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

export function BehindTheInvestment({}: Props) {
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

export function FundLeadership({}: Props) {
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

export function RiskProfile({}: Props) {
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

export function Benefits({}: Props) {
  const benefits = [
    {
      icon: <PiPiggyBank size={25} />,
      title: (
        <span>
          <strong>Guaranteed Income</strong>: Receive guaranteed income from
          your investments.
        </span>
      ),
    },
    {
      icon: <PiShieldLight size={25} />,
      title: (
        <span>
          <strong>Low Risk</strong>: Benefit from investment opportunities that
          prioritize security and stability.
        </span>
      ),
    },
    {
      icon: <IoBoatOutline size={25} />,
      title: (
        <span>
          <strong>Asset Backed</strong>: Invest in tangible assets that offer
          cashflow and real book securitization.
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
          <strong>Diversification</strong>: Spread your investments across a
          variety of asset classes to reduce risk and enhance potential returns.
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

export function HowItWorks({}: Props) {
  const timelineEvents = [
    {
      date: "Step 1",
      items: [
        {
          title: "Consultation",
          description:
            "Schedule an initial consultation with our fund manager to discuss your investment goals and risk tolerance, subscription process, payout process and principle return at fund maturity.",
          icon: <PiChatsTeardrop size={22} />,
          person: {
            avatar: "/img/mike.jpg",
            name: "Mike Soertsz",
          },
        },
      ],
    },
    {
      date: "Step 2",
      items: [
        {
          title: "Pre-Subscription",
          description:
            "Register your interest in the fund if you qualify as an Accredited Investor. You will be contacted by our fund manager when the official fundraise begins.",
          icon: <LuFileSignature size={22} />,
          person: {
            avatar: "/img/mike.jpg",
            name: "Mike Soertsz",
          },
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
          person: {
            avatar: "/img/mike.jpg",
            name: "Mike Soertsz",
          },
        },
      ],
    },
    {
      date: "Step 4",
      items: [
        {
          title: "Fund Payouts",
          description:
            "Receive regular payouts from the fund's income-generating activities, such as chartering yachts and real estate development.",
          icon: <RiMoneyEuroCircleLine size={22} />,
          person: {
            avatar: "/img/mike.jpg",
            name: "Mike Soertsz",
          },
        },
      ],
    },
    {
      date: "Step 5",
      items: [
        {
          title: "Quarterly Reports",
          description:
            "Review quarterly reports detailing the fund's performance, asset management strategies, and market analysis.",
          icon: <TbReportAnalytics size={22} />,
          person: {
            avatar: "/img/mike.jpg",
            name: "Mike Soertsz",
          },
        },
      ],
    },
    {
      date: "Step 6",
      items: [
        {
          title: "Principle Payback",
          description:
            "At the end of the investment term, receive a 100% payback of your principal investment amount as outlined in the fund's terms.",
          icon: <RiRefund2Fill size={25} />,
          person: {
            avatar: "/img/mike.jpg",
            name: "Mike Soertsz",
          },
        },
      ],
    },
  ];

  return (
    <Wrapper className="py-[5vh] bg-white" id="how-it-works">
      <InnerWrap className=" p-8 rounded-xl border border-slate-200 bg-white">
        <div className="grid items-center justify-center w-full grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start h-full">
            <h4 className="mb-3 text-sm tracking-wide text-brand-p1">
              Interested in investing?
            </h4>
            <h3 className="text-4xl font-title">How It Works</h3>
            <p className="text-md mt-4 pr-12">
              HelmShare, managed by seasoned experts, invests in luxury yachts
              and real estate, earning through charters and development.
            </p>
          </div>
          <div className="flex items-center justify-center">
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
