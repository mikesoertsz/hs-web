import { InnerWrap, Wrapper } from "@/lib/atoms";

import { TitleBlock } from "@/components/ui/titleblock";
import InterestMarketChart from "./interest-market-chart";

type Props = {};

export function InterestMarket({}: Props) {
  const strategy = {
    header: {
      preheader: "",
      heading: "Charter Market Overview",
      subheading: "Charter Market Overview",
      body: "The charter industry has shown remarkable growth and resilience over the past decade, with a steady CAGR of 5.4% from 2018 to 2023. Looking ahead, the industry is projected to continue its robust expansion, with an impressive forecasted CAGR as markets rebound & recover from recent turmoil.",
      description:
        "The charter industry has shown remarkable growth and resilience over the past decade, with a steady CAGR of 5.4% from 2018 to 2023. Looking ahead, the industry is projected to continue its robust expansion, with an impressive forecasted CAGR as markets rebound & recover from recent turmoil.",
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
