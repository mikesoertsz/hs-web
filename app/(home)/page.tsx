"use client";
import { homepage } from "@/public/content/en";
import FAQ from "../(shared)/FAQ";
import ActionCTA from "./Action";
import EarningsCalculator, { DesireSeychelles } from "./Desire";
import { DetailsBlock } from "./Details";
import Disclaimer from "./Disclaimer";
import InterestOverview, {
  InterestBenefits,
  InterestCorporateStructure,
  InterestHowGuaranteed,
  InterestHowItWorks,
  InterestAssetDistribution,
  InterestWhoFor,
  InterestPremise,
  InterestBehindTheInvestment,
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
      <AttentionStinger />
      {/* <InterestOverview /> */}
      <CTAButtonsBasic variant="primary" />
      <InterestBenefits />
      <InterestHowGuaranteed />
      <InterestCorporateStructure />
      <InterestHowItWorks />
      <DetailsBlock />
      <InterestAssetDistribution />
      <EarningsCalculator />
      {/* <InterestBehindTheInvestment /> */}
      <DesireSeychelles />
      <FAQ {...homepage.desire} />
      <InterestWhoFor />
      <ActionCTA />
      <Disclaimer />
    </main>
  );
}

// component={<BsArrowUpSquareFill />}
