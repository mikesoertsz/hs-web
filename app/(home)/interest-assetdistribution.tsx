import { Separator } from "@/components/ui/separator";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { TitleBlock } from "@/components/ui/titleblock";
import { IoIosCheckmark } from "react-icons/io";
import { InterestWhichYachts } from "./interest-whichyachts";

type Props = {};

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
      <InnerWrap className="flex flex-col py-12 bg-white border rounded-xl border-slate-200">
        <TitleBlock
          preheading={strategy.header.preheader}
          heading={strategy.header.heading}
          subheading={strategy.header.subheading}
          body={strategy.header.body}
          theme="light"
          orientation="center"
        />
        <ul className="grid items-start w-full grid-cols-1 gap-4 px-8 mt-4 md:grid-cols-3">
          {data.map((item, index) => (
            <li
              key={index}
              className="relative flex flex-col items-start justify-start w-full p-8 py-4 border rounded-lg md:mt-0 md:border-0"
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
