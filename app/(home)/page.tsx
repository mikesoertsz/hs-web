"use client";
import { homepage } from "@/public/content/en";
import FAQ from "../(shared)/FAQ";
import ActionCTA from "./Action";
import EarningsCalculator, { DesireSeychelles, DesireWhoFor } from "./Desire";
import { InvestmentSpecifics } from "./Specifics";
import Disclaimer from "./Disclaimer";
import InterestOverview, {
  InterestBenefits,
  InterestCorporateStructure,
  InterestHowGuaranteed,
  InterestHowItWorks,
  InterestAssetDistribution,
  InterestPremise,
  InterestBehindTheInvestment,
  InterestStrategy,
} from "./Interest";
import AttentionHero, {
  AttentionDetailsBar,
  AttentionStinger,
} from "./Attention";
import CTAButtonsBasic from "../(shared)/CTAButtonsBasic";
import ScrollToTop from "react-scroll-to-top";
import { BsArrowUpSquareFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center fillscreen bg-slate-100">
      <AttentionHero />
      <AttentionDetailsBar />
      <InterestPremise />
      <InterestStrategy />
      <AttentionStinger />
      {/* <InterestOverview /> */}
      <InterestBenefits />
      <InterestHowGuaranteed />
      <InterestCorporateStructure />
      <InterestHowItWorks />
      <InvestmentSpecifics />
      <InterestAssetDistribution />
      <EarningsCalculator />
      {/* <InterestBehindTheInvestment /> */}
      <DesireSeychelles />
      <FAQ {...homepage.desire} />
      <DesireWhoFor />
      <ActionCTA />
      <Disclaimer />
    </main>
  );
}

// component={<BsArrowUpSquareFill />}
