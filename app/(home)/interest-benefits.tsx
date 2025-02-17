import { TitleBlock } from "@/components/ui/titleblock";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import Image from "next/image";
import {
  ShieldCheck,
  Clock,
  PiggyBank,
  Shield,
  PieChart,
  Vault,
} from "lucide-react";

type Props = {};

export function InterestBenefits({}: Props) {
  const benefits = [
    {
      icon: <PiggyBank size={22} />,
      title: (
        <span>
          <strong>Guaranteed Yield</strong>: Receive guaranteed return from your
          investment.
        </span>
      ),
    },
    {
      icon: <Shield size={22} />,
      title: (
        <span>
          <strong>Low Risk</strong>: Funds are invested into cashflowing, hard
          assets with real tangible value.
        </span>
      ),
    },
    {
      icon: <Vault size={22} />,
      title: (
        <span>
          <strong>Asset Backed</strong>: Invest in tangible assets that offer
          cashflow and real securitization.
        </span>
      ),
    },
    {
      icon: <Clock size={22} />,
      title: (
        <span>
          <strong>Quarterly Payouts</strong>: Enjoy consistent returns with
          regular quarterly distributions to your bank account.
        </span>
      ),
    },
    {
      icon: <ShieldCheck size={22} />,
      title: (
        <span>
          <strong>Transparent</strong>: Track the performance of your assets in
          real-time with complete transparency.
        </span>
      ),
    },
    {
      icon: <PieChart size={22} />,
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
