import { InnerWrap, Wrapper } from "@/lib/atoms";
import React from "react";

type Props = {};

export default function Disclaimer({}: Props) {
  return (
    <Wrapper className="min-h-[30vh] py-[5vh]">
      <InnerWrap className="text-xs flex items-start w-full justify-start text-left">
        <p>Disclaimers</p>
        <div className=" items-start justify-start gap-2 flex-col text-xs">
          <p>
            Investors should carefully consider the investment objectives,
            risks, charges and expenses of the Investment.Yachts
            Fund before investing.
          </p>
          <p>
            The prospectus for the Investment.Yachts Fund contains
            this and other information about the Fund and can be obtained by
            emailing diligence@investment.yachts or by referring to
            Investment.Yachtsalternativeincomefund.com. The prospectus should be read
            carefully before investing in the Fund.
          </p>
          <p>
            Investments in the Fund are not bank deposits (and thus not insured
            by the FDIC or by any other federal governmental agency) and are not
            guaranteed by Investment.Yachts or any other party.
          </p>
          <p>
            The securities described in the prospectus are not offered for sale
            in the states of Nebraska or North Dakota or to persons residing or
            located in such states. No subscription for the sale of Fund shares
            will be accepted from any person residing or located in Nebraska or
            North Dakota.
          </p>
          <p>
            An investment in the Fund is not suitable for investors that require
            short-term liquidity.
          </p>
          <p>
            The Fund&apos;s shares have no history of public trading, are not
            publicly traded, and you should not expect to be able to sell your
            shares regardless of how the Fund performs.
          </p>
          <p>
            The Fund&apos;s shares are currently not listed on any securities
            exchange and there is no expectation that a secondary market for the
            Fund&apos;s shares will develop in the future.
          </p>
          <p>
            Pursuant to its Share Repurchase Program, the Fund intends to
            periodically repurchase shares from the Fund&apos;s investors,
            subject to the discretion of the Fund&apos;s Board of Directors, but
            only a limited number of shares will be eligible for repurchase by
            the Fund.
          </p>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
