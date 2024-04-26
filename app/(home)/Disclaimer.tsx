"use client";
import { Button } from "@/components/ui/button";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { useState } from "react";

type Props = {};

export default function Disclaimer({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const disclaimers = [
    {
      id: 1,
      text: "Important: HelmShare permits solely accredited investors to make investments after they have evaluated their investment goals and risk appetite, and have procured independent counsel from professionals and specialists when required.",
    },
    {
      id: 2,
      text: "Past performance is no guarantee of future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. All securities involve risk and may result in significant losses.",
    },
    {
      id: 3,
      text: "Represents an net annualized return, using an internal rate of return (IRR) methodology, with respect to the matured investments, utilizing the effective dates and amounts of subscriptions and distributions to and from the investments, net of management fees and all other expenses charged to the investments.",
    },
    {
      id: 4,
      text: "Annual interest, Annualized Return or Target Returns represents a projected annual target rate of interest or annualized target return, and not returns or interest actually obtained by fund investors. Term represents the estimated term of the investment; the term of the fund is generally at the discretion of the fund's manager, and may exceed the estimated term by a significant amount of time. Unless otherwise specified on the fund's offering page, target interest or returns are based on an analysis performed by HelmShare of the potential inflows and outflows related to the transactions in which the strategy or fund has engaged and/or is anticipated to engage in over the estimated term of the fund. There is no guarantee that targeted interest or returns will be realized or achieved or that an investment will be successful. Actual performance may deviate from these expectations materially, including due to market or economic factors, portfolio management decisions, modelling error, or other reasons.",
    },
    {
      id: 5,
      text: "Reflects the annualized distribution rate that is calculated by taking the most recent quarterly distribution approved by the Fund's Board of Directors and dividing it by prior quarter-end NAV and annualizing it. The Fund's distribution may exceed its earnings. Therefore, a portion of the Fund's distribution may be a return of the money you originally invested and represent a return of capital to you for tax purposes.",
    },
    {
      id: 6,
      text: "Investors should carefully consider the investment objectives, risks, charges and expenses of the HelmShare Alternative Income Fund before investing. The prospectus for the HelmShare Alternative Income Fund contains this and other information about the Fund and can be obtained by emailing investments@HelmShare.com or by referring to HelmShare.yachts/prospectus. The prospectus should be read carefully before investing in the Fund. Investments in the Fund are not bank deposits (and thus not insured by the FDIC or by any other federal governmental agency) and are not guaranteed by HelmShare or any other party.",
    },
    {
      id: 7,
      text: "This tool is for informational purposes only. You should not construe any information provided here as investment advice or a recommendation, endorsement or solicitation to buy any securities offered on HelmShare. HelmShare is not a fiduciary by virtue of any person's use of or access to this tool. The information provided here is of a general nature and does not address the circumstances of any particular individual or entity. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of this information before making any decisions based on such information.",
    },
    {
      id: 8,
      text: "No communication by HelmShare Inc. or any of its affiliates (collectively, “HelmShare™”), through this website or any other medium, should be construed or is intended to be a recommendation to purchase, sell or hold any security or otherwise to be investment, tax, financial, accounting, legal, regulatory or compliance advice, except for specific investment advice that may be provided by HelmShare Management, LLC pursuant to a written advisory agreement between such entity and the recipient. Nothing on this website is intended as an offer to extend credit, an offer to purchase or sell securities or a solicitation of any securities transaction.",
    },
    {
      id: 9,
      text: "Any financial projections or returns shown on the website are estimated predictions of performance only, are hypothetical, are not based on actual investment results and are not guarantees of future results. Estimated projections do not represent or guarantee the actual results of any transaction, and no representation is made that any transaction will, or is likely to, achieve results or profits similar to those shown. In addition, other financial metrics and calculations shown on the website (including amounts of principal and interest repaid) have not been independently verified or audited and may differ from the actual financial metrics and calculations for any investment, which are contained in the investors’ portfolios. Any investment information contained herein has been secured from sources that HelmShare believes are reliable, but we make no representations or warranties as to the accuracy of such information and accept no liability therefore.",
    },
    {
      id: 10,
      text: "Private placement investments are NOT bank deposits (and thus NOT insured by the FDIC or by any other federal governmental agency), are NOT guaranteed by HelmShare or any other party, and MAY lose value. Neither the Securities and Exchange Commission nor any federal or state securities commission or regulatory authority has recommended or approved any investment or the accuracy or completeness of any of the information or materials provided by or through the website. Investors must be able to afford the loss of their entire investment.",
    },
    {
      id: 11,
      text: "Investments in private placements are speculative and involve a high degree of risk and those investors who cannot afford to lose their entire investment should not invest. Additionally, investors may receive illiquid and/or restricted securities that may be subject to holding period requirements and/or liquidity concerns. Investments in private placements are highly illiquid and those investors who cannot hold an investment for the long term (at least 5-7 years) should not invest.",
    },
    {
      id: 12,
      text: "Alternative investments should only be part of your overall investment portfolio. Further, the alternative investment portion of your portfolio should include a balanced portfolio of different alternative investments.",
    },
    {
      id: 13,
      text: "Articles or information from third-party media outside of this domain may discuss HelmShare or relate to information contained herein, but HelmShare does not approve and is not responsible for such content. Hyperlinks to third-party sites, or reproduction of third-party articles, do not constitute an approval or endorsement by HelmShare of the linked or reproduced content.",
    },
    {
      id: 14,
      text: "Investing in securities (the Securities) listed on HelmShare™ pose risks, including but not limited to credit risk, interest rate risk, and the risk of losing some or all of the money you invest. Before investing you should: (1) conduct your own investigation and analysis; (2) carefully consider the investment and all related charges, expenses, uncertainties and risks, including all uncertainties and risks described in offering materials; and (3) consult with your own investment, tax, financial and legal advisors. Such Securities are only suitable for accredited investors who understand and are willing and able to accept the high risks associated with private investments.",
    },
    {
      id: 15,
      text: "Investing in private placements requires long-term commitments, the ability to afford to lose the entire investment, and low liquidity needs. This website provides preliminary and general information about the Securities and is intended for initial reference purposes only. It does not summarize or compile all the applicable information. This website does not constitute an offer to sell or buy any securities. No offer or sale of any Securities will occur without the delivery of confidential offering materials and related documents. This information contained herein is qualified by and subject to more detailed information in the applicable offering materials. HelmShare™ is not registered as a broker-dealer. HelmShare™ does not make any representation or warranty to any prospective investor regarding the legality of an investment in any HelmShare Securities.",
    },
    {
      id: 17,
      text: "Investors should carefully consider the investment objectives, risks, charges and expenses of the HelmShare Fund before investing. The prospectus for the HelmShare Fund contains this and other information about the Fund and can be obtained by emailing diligence@helmshare.yachts or by referring to www.helmshare.yachts/diligence The prospectus should be read carefully before investing in the Fund.",
    },
    {
      id: 18,
      text: "Investments in the Fund are not bank deposits (and thus not insured by the FDIC or by any other federal governmental agency) and are not guaranteed by HelmShare or any other party.",
    },
    {
      id: 19,
      text: "The securities described in the prospectus are not offered for sale in the United States of America. No subscription for the sale of Fund shares will be accepted from any person residing or located in the USA.",
    },
    {
      id: 20,
      text: "An investment in the Fund is not suitable for investors that require short-term liquidity.",
    },
    {
      id: 21,
      text: "The Fund's shares have no history of public trading, are not publicly traded, and you should not expect to be able to sell your shares regardless of how the Fund performs.",
    },
    {
      id: 22,
      text: "The Fund's shares are currently not listed on any securities exchange and there is no expectation that a secondary market for the Fund's shares will develop in the future.",
    },
    {
      id: 23,
      text: "Pursuant to its Share Repurchase Program, the Fund intends to periodically repurchase shares from the Fund's investors, subject to the discretion of the Fund's Board of Directors, Board of Trustees or Management Committee.",
    },
  ];

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Wrapper className="min-h-[30vh] py-[5vh]">
      <InnerWrap className="flex items-start justify-start w-full p-8 text-xs text-left bg-white border shadow-sm rounded-xl border-slate-200">
        <p className="text-sm font-medium">Disclaimers</p>
        <ol className="gap-3 mt-4 list-decimal columns-1 sm:columns-2">
          {disclaimers.slice(0, 5).map((disclaimer) => (
            <li key={disclaimer.id} className="pt-2 ml-4">
              {disclaimer.text}
            </li>
          ))}
          {isOpen &&
            disclaimers.slice(5).map((disclaimer) => (
              <li key={disclaimer.id} className="pt-2 ml-4">
                {disclaimer.text}
              </li>
            ))}
        </ol>
        <Button
          onClick={toggleOpen}
          className="w-full mt-8"
          variant="secondary"
        >
          {isOpen ? "View less" : "View all"}
        </Button>
      </InnerWrap>
    </Wrapper>
  );
}
