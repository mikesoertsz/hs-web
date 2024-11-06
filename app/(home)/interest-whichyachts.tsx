import { TitleBlock } from "@/components/ui/titleblock";
import Image from "next/image";

type Props = {};

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
      <div className="flex flex-col items-center justify-center px-8 mt-12 md:px-0">
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
        <p className="mt-12 text-xs text-center text-gray-400">
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
