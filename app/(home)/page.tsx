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
  InterestIncomeDistribution,
  InterestWhoFor,
} from "./Interest";
import AttentionHero, {
  AttentionDetailsBar,
  AttentionStinger,
} from "./Attention";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center fillscreen bg-slate-100">
      <AttentionHero />
      <AttentionDetailsBar />
      <AttentionStinger />
      <InterestOverview />
      <InterestBenefits />
      <InterestHowGuaranteed />
      <InterestWhoFor />
      <InterestCorporateStructure />
      <InterestHowItWorks />
      <DetailsBlock />
      <InterestIncomeDistribution />
      <EarningsCalculator />
      {/* <BehindTheInvestment /> */}
      <DesireSeychelles />
      <FAQ {...homepage.desire} />
      <ActionCTA />
      <Disclaimer />
    </main>
  );
}
