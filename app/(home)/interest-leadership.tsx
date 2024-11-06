import { Separator } from "@/components/ui/separator";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { FaLinkedinIn } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import Image from "next/image";
import { TitleBlock } from "@/components/ui/titleblock";

type Props = {};

export function InterestFundLeadership({}: Props) {
  const leadership = [
    {
      name: "Mike Soertsz",
      image: "/img/mike.jpg",
      details: "Fund Manager / Principle",
      location: "Portugal",
      role: "principle",
      social: [
        {
          href: "https://www.linkedin.com/in/startupmike/",
          icon: FaLinkedinIn,
        },
        { href: "https://www.mikesoertsz.com/", icon: GoLinkExternal },
      ],
      experience: [
        "More than a 15 years experience in Startups & Tech, including building technology and models for the Banking & Finance sectors.",
        "Over 10 years experience with Venture Capital fundraising & HNWI fundraising.",
        "International compliance and corporate structuring experience.",
        "10+ years experience sailing and chartering yachts.",
      ],
    },
    {
      name: "Jozef Fujka",
      image: "/img/team/jozef.png",
      details: "Investment Manager, INSEAD MBA, Fund Director",
      location: "Slovakia",
      role: "advisor",
      social: [
        {
          href: "https://www.linkedin.com/in/jozeffujka/",
          icon: FaLinkedinIn,
        },
      ],
      experience: [
        "More than a decade experience in Venture Capital and Private Equity.",
        "In excess of USD 150m of Yachting Projects Financed and Managed.",
        "Managed and Financed Real Estate Investment Portfolios worth circa USD 300m.",
        "Deep Yachting industry knowledge and contact book.",
      ],
    },
    {
      name: "Andrey Melnik",
      image: "/img/team/andrew.jpg", // Placeholder for actual image path
      details: "Investor, Business Development, Advisory",
      location: "Germany",
      role: "advisor",
      social: [
        {
          href: "https://www.linkedin.com/in/andrey-melnik-07898166/",
          icon: FaLinkedinIn,
        },
        { href: "https://andrewmelnik.com/", icon: GoLinkExternal },
      ],
      experience: [
        "Over 15 years in corporate banking and venture capital investments.",
        "Years of experience and over $200M in startups development, including real estate and exclusive tourism.",
        "Many years of experience and networking in family offices, private investments, UHNWI.",
        "More than 10 years of project development on touristic islands and in exotic locations (MENA, LatAm, Carib, etc.).",
      ],
    },
  ];

  return (
    <Wrapper>
      <InnerWrap className="flex flex-col w-full p-8 bg-white border rounded-2xl border-slate-200">
        <TitleBlock
          preheading="Fund Advisory Board"
          heading="Meet the Team"
          subheading=""
          body="Our fund is advised by a team of seasoned professionals with extensive experience in maritime, investment management, finance, and technology sectors. This diverse expertise ensures a well-rounded approach to fund management and strategic decision-making."
          theme="light"
          orientation="center"
        />
        <ul className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-5">
          {leadership.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-start justify-between w-full h-full overflow-hidden border rounded-xl border-slate-300 bg-slate-50"
            >
              <div className="relative z-0 flex w-full overflow-hidden aspect-square">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="absolute inset-0 z-10 aspect-3/4"
                />
                {item.role === "advisor" && (
                  <div className="absolute z-30 px-2 py-0.5 text-xs text-black bg-white rounded-full bottom-2 right-2 opacity-60">
                    Advisor
                  </div>
                )}
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
              <ul className="flex w-full h-8 gap-2 px-4 py-2 bg-slate-100">
                {item.social.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition duration-200 ease-in-out rounded-sm hover:bg-gray-400 saturate-0"
                    >
                      <link.icon
                        className={`w-4 h-4 ${
                          link.icon === FaLinkedinIn
                            ? "saturate-0 hover:text-blue-600 hover:saturate-100"
                            : "text-gray-600 hover:text-black"
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </InnerWrap>
    </Wrapper>
  );
}
