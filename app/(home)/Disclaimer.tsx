"use client";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

export default function Disclaimer({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Wrapper className="min-h-[30vh] py-[5vh]">
      <InnerWrap className="text-xs flex items-start w-full justify-start text-left">
        <p className="text-sm font-medium">Disclaimers</p>
        <div className="flex items-start justify-start flex-col text-xs gap-3 mt-4">
          <p>
            <sup className="sups text-[10px] pr-1">Important:</sup>HelmShare
            permits solely accredited investors to make investments after they
            have evaluated their investment goals and risk appetite, and have
            procured independent counsel from professionals and specialists when
            required.
          </p>

          <p>
            <sup className="sups text-[10px] pr-1">1</sup> Past performance is
            no guarantee of future results. Any historical returns, expected
            returns, or probability projections may not reflect actual future
            performance. All securities involve risk and may result in
            significant losses.
          </p>

          <p>
            <sup className="sups text-[10px] pr-1">2</sup> Represents an net
            annualized return, using an internal rate of return (IRR)
            methodology, with respect to the matured investments, utilizing the
            effective dates and amounts of subscriptions and distributions to
            and from the investments, net of management fees and all other
            expenses charged to the investments.
            <a href="#">[read more]</a>
          </p>

          <p>
            <sup className="sups text-[10px] pr-1">3</sup> Annual interest,
            Annualized Return or Target Returns represents a projected annual
            target rate of interest or annualized target return, and not returns
            or interest actually obtained by fund investors. Term represents the
            estimated term of the investment; the term of the fund is generally
            at the discretion of the fund&apos;s manager, and may exceed the
            estimated term by a significant amount of time. Unless otherwise
            specified on the fund&apos;s offering page, target interest or
            returns are based on an analysis performed by Investment.Yachts of
            the potential inflows and outflows related to the transactions in
            which the strategy or fund has engaged and/or is anticipated to
            engage in over the estimated term of the fund. There is no guarantee
            that targeted interest or returns will be realized or achieved or
            that an investment will be successful. Actual performance may
            deviate from these expectations materially, including due to market
            or economic factors, portfolio management decisions, modelling
            error, or other reasons.
          </p>

          <p>
            <sup className="sups text-xs">4</sup> Reflects the annualized
            distribution rate that is calculated by taking the most recent
            quarterly distribution approved by the Fund&apos;s Board of
            Directors and dividing it by prior quarter-end NAV and annualizing
            it. The Fund&apos;s distribution may exceed its earnings. Therefore,
            a portion of the Fund&apos;s distribution may be a return of the
            money you originally invested and represent a return of capital to
            you for tax purposes.
          </p>

          <p>
            <sup className="sups text-[10px] pr-1">5</sup> Represents the sum of
            the interest accrued in the statement period plus the interest paid
            in the statement period.
          </p>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, scaleY: 1, transformOrigin: "top" },
                  collapsed: { opacity: 0, scaleY: 0, transformOrigin: "top" },
                }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="gap-3 flex flex-col items-start justify-center"
              >
                <p>
                  <sup className="sups text-[10px] pr-1">7</sup> Investors
                  should carefully consider the investment objectives, risks,
                  charges and expenses of the Investment.Yachts Alternative
                  Income Fund before investing. The prospectus for the
                  Investment.Yachts Alternative Income Fund contains this and
                  other information about the Fund and can be obtained by
                  emailing investments@Investment.Yachts.com or by referring to
                  helmshare.yachts/prospectus. The prospectus should be read
                  carefully before investing in the Fund. Investments in the
                  Fund are not bank deposits (and thus not insured by the FDIC
                  or by any other federal governmental agency) and are not
                  guaranteed by Investment.Yachts or any other party.
                </p>

                <p>
                  <sup className="sups text-[10px] pr-1">8</sup> This tool is
                  for informational purposes only. You should not construe any
                  information provided here as investment advice or a
                  recommendation, endorsement or solicitation to buy any
                  securities offered on Investment.Yachts. Investment.Yachts is
                  not a fiduciary by virtue of any person&apos;s use of or
                  access to this tool. The information provided here is of a
                  general nature and does not address the circumstances of any
                  particular individual or entity. You alone assume the sole
                  responsibility of evaluating the merits and risks associated
                  with the use of this information before making any decisions
                  based on such information.
                </p>

                <p>
                  <sup className="sups text-[10px] pr-1">9</sup> No
                  communication by Investment.Yachts Inc. or any of its
                  affiliates (collectively, “Investment.Yachts™”), through this
                  website or any other medium, should be construed or is
                  intended to be a recommendation to purchase, sell or hold any
                  security or otherwise to be investment, tax, financial,
                  accounting, legal, regulatory or compliance advice, except for
                  specific investment advice that may be provided by
                  Investment.Yachts Management, LLC pursuant to a written
                  advisory agreement between such entity and the recipient.
                  Nothing on this website is intended as an offer to extend
                  credit, an offer to purchase or sell securities or a
                  solicitation of any securities transaction.
                </p>

                <p>
                  <sup className="sups text-[10px] pr-1">10</sup> Any financial
                  projections or returns shown on the website are estimated
                  predictions of performance only, are hypothetical, are not
                  based on actual investment results and are not guarantees of
                  future results. Estimated projections do not represent or
                  guarantee the actual results of any transaction, and no
                  representation is made that any transaction will, or is likely
                  to, achieve results or profits similar to those shown. In
                  addition, other financial metrics and calculations shown on
                  the website (including amounts of principal and interest
                  repaid) have not been independently verified or audited and
                  may differ from the actual financial metrics and calculations
                  for any investment, which are contained in the investors’
                  portfolios. Any investment information contained herein has
                  been secured from sources that Investment.Yachts believes are
                  reliable, but we make no representations or warranties as to
                  the accuracy of such information and accept no liability
                  therefore.
                </p>

                <p>
                  <sup className="sups text-[10px] pr-1">11</sup> Private
                  placement investments are NOT bank deposits (and thus NOT
                  insured by the FDIC or by any other federal governmental
                  agency), are NOT guaranteed by Investment.Yachts or any other
                  party, and MAY lose value. Neither the Securities and Exchange
                  Commission nor any federal or state securities commission or
                  regulatory authority has recommended or approved any
                  investment or the accuracy or completeness of any of the
                  information or materials provided by or through the website.
                  Investors must be able to afford the loss of their entire
                  investment.
                </p>

                <p>
                  <sup className="sups text-[10px] pr-1">12</sup>
                  Investments in private placements are speculative and involve
                  a high degree of risk and those investors who cannot afford to
                  lose their entire investment should not invest. Additionally,
                  investors may receive illiquid and/or restricted securities
                  that may be subject to holding period requirements and/or
                  liquidity concerns. Investments in private placements are
                  highly illiquid and those investors who cannot hold an
                  investment for the long term (at least 5-7 years) should not
                  invest.
                </p>

                <p>
                  <sup className="sups text-[10px] pr-1">13</sup>
                  Alternative investments should only be part of your overall
                  investment portfolio. Further, the alternative investment
                  portion of your portfolio should include a balanced portfolio
                  of different alternative investments.
                </p>

                <p>
                  <sup className="sups text-[10px] pr-1">14</sup>
                  Articles or information from third-party media outside of this
                  domain may discuss Investment.Yachts or relate to information
                  contained herein, but Investment.Yachts does not approve and
                  is not responsible for such content. Hyperlinks to third-party
                  sites, or reproduction of third-party articles, do not
                  constitute an approval or endorsement by Investment.Yachts of
                  the linked or reproduced content.
                </p>

                <p>
                  <sup className="sups text-[10px] pr-1">15</sup>
                  Investing in securities (the Securities) listed on
                  Investment.Yachts™ pose risks, including but not limited to
                  credit risk, interest rate risk, and the risk of losing some
                  or all of the money you invest. Before investing you should:
                  (1) conduct your own investigation and analysis; (2) carefully
                  consider the investment and all related charges, expenses,
                  uncertainties and risks, including all uncertainties and risks
                  described in offering materials; and (3) consult with your own
                  investment, tax, financial and legal advisors. Such Securities
                  are only suitable for accredited investors who understand and
                  are willing and able to accept the high risks associated with
                  private investments.
                </p>

                <p>
                  <sup className="sups text-[10px] pr-1">16</sup>
                  Investing in private placements requires long-term
                  commitments, the ability to afford to lose the entire
                  investment, and low liquidity needs. This website provides
                  preliminary and general information about the Securities and
                  is intended for initial reference purposes only. It does not
                  summarize or compile all the applicable information. This
                  website does not constitute an offer to sell or buy any
                  securities. No offer or sale of any Securities will occur
                  without the delivery of confidential offering materials and
                  related documents. This information contained herein is
                  qualified by and subject to more detailed information in the
                  applicable offering materials. Investment.Yachts™ is not
                  registered as a broker-dealer. Investment.Yachts™ does not
                  make any representation or warranty to any prospective
                  investor regarding the legality of an investment in any
                  Investment.Yachts Securities.
                </p>

                <p>
                  <sup className="sups text-[10px] pr-1">17</sup>
                  Investment.Yachts Inc. is the direct owner of
                  Investment.Yachts Management, LLC, which is an SEC-registered
                  investment adviser that manages the Investment.Yachts funds
                  and provides investment advice to the Investment.Yachts funds,
                  and in certain cases, to retail investors. RealCadre LLC is
                  also indirectly owned by Investment.Yachts Inc. RealCadre LLC
                  is a broker-dealer registered with the Securities and Exchange
                  Commission (“SEC”) and a member of the Financial Industry
                  Regulatory Authority (“FINRA”) and the Securities Investor
                  Protection Corporation (“SIPC”). Information on all FINRA
                  registered broker-dealers can be found on FINRA’s BrokerCheck.
                  Despite its affiliation with Investment.Yachts Management,
                  LLC, RealCadre LLC has no role in the investment advisory
                  services received by Investment.Yachts clients or the
                  management or distribution of the Investment.Yachts funds or
                  other securities offered on our through Investment.Yachts and
                  its personnel. RealCadre LLC does not solicit, sell,
                  recommend, or place interests in the Investment.Yachts funds.
                </p>

                {/* <p>
                  <sup className="sups text-[10px] pr-1">18</sup>
                  Investment.Yachts is not a bank. Certain services are offered
                  through Synapse Financial Technologies, Inc. and its
                  affiliates (collectively, “Synapse”) as well as certain
                  third-party financial services partners. Synapse is not a bank
                  and is not affiliated with Investment.Yachts. Bank accounts
                  are established by Evolve Bank & Trust. Brokerage accounts and
                  cash management programs are provided through Synapse
                  Brokerage LLC (“Synapse Brokerage”), an SEC-registered
                  broker-dealer and member of FINRA and SIPC. Additional
                  information about Synapse Brokerage can be found on FINRA’s
                  BrokerCheck. By participating in a Synapse cash management
                  program, you acknowledge receipt of and accept Synapse’s Terms
                  of Service, Privacy Policy, and the applicable disclosures and
                  agreements available in Synapse’s Disclosure Library.
                </p> */}

                {/* <p>
                  <sup className="sups text-[10px] pr-1">19</sup>
                  Investment advisory services are only provided to clients of
                  Investment.Yachts Management, LLC, an investment advisor
                  registered with the Securities and Exchange Commission,
                  pursuant to a written advisory agreement.
                </p> */}

                {/* <p>
                  <sup className="sups text-[10px] pr-1">20</sup>
                  Our site uses a third party service to match browser cookies
                  to your mailing address. We then use another company to send
                  special offers through the mail on our behalf. Our company
                  never receives or stores any of this information and our third
                  parties do not provide or sell this information to any other
                  company or service.
                </p> */}
                <p>
                  <sup className="sups text-[10px] pr-1">21</sup>
                  Investors should carefully consider the investment objectives,
                  risks, charges and expenses of the Investment.Yachts Fund
                  before investing.
                </p>
                <p>
                  <sup className="sups text-[10px] pr-1">22</sup>
                  The prospectus for the Investment.Yachts Fund contains this
                  and other information about the Fund and can be obtained by
                  emailing diligence@investment.yachts or by referring to
                  www.Investment.Yachts/diligence The prospectus should be read
                  carefully before investing in the Fund.
                </p>
                <p>
                  <sup className="sups text-[10px] pr-1">23</sup>
                  Investments in the Fund are not bank deposits (and thus not
                  insured by the FDIC or by any other federal governmental
                  agency) and are not guaranteed by Investment.Yachts or any
                  other party.
                </p>
                <p>
                  <sup className="sups text-[10px] pr-1">24</sup>
                  The securities described in the prospectus are not offered for
                  sale in the United States of America. No subscription for the
                  sale of Fund shares will be accepted from any person residing
                  or located in the USA.
                </p>
                <p>
                  <sup className="sups text-[10px] pr-1">25</sup>
                  An investment in the Fund is not suitable for investors that
                  require short-term liquidity.
                </p>
                <p>
                  <sup className="sups text-[10px] pr-1">26</sup>
                  The Fund&apos;s shares have no history of public trading, are
                  not publicly traded, and you should not expect to be able to
                  sell your shares regardless of how the Fund performs.
                </p>
                <p>
                  <sup className="sups text-[10px] pr-1">27</sup>
                  The Fund&apos;s shares are currently not listed on any
                  securities exchange and there is no expectation that a
                  secondary market for the Fund&apos;s shares will develop in
                  the future.
                </p>
                <p>
                  <sup className="sups text-[10px] pr-1">28</sup>
                  Pursuant to its Share Repurchase Program, the Fund intends to
                  periodically repurchase shares from the Fund&apos;s investors,
                  subject to the discretion of the Fund&apos;s Board of
                  Directors.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <button onClick={toggleOpen} className="text-blue-500">
            {isOpen ? "Read less" : "Read more"}
          </button>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
