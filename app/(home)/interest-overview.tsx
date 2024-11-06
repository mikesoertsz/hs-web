import { InnerWrap, Wrapper } from "@/lib/atoms";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
