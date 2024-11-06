import { InnerWrap, Wrapper } from "@/lib/atoms";

import { TitleBlock } from "@/components/ui/titleblock";
import { AiOutlineSafety } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { TbReceiptTax, TbSailboat } from "react-icons/tb";

type Props = {};

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
