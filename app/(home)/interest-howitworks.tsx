import { InnerWrap, Wrapper } from "@/lib/atoms";

import { TitleBlock } from "@/components/ui/titleblock";
import { LuFileSignature } from "react-icons/lu";
import { PiChatsTeardrop, PiSignature } from "react-icons/pi";
import { RiMoneyEuroCircleLine, RiRefund2Fill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";

type Props = {};

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
