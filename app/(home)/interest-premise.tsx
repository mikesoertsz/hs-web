import { InnerWrap, Wrapper } from "@/lib/atoms";

import { TitleBlock } from "@/components/ui/titleblock";
import Image from "next/image";

type Props = {};

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
