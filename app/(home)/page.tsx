import { homepage } from "@/public/content/en";
import FAQ from "../(shared)/FAQ";
import ActionCTA from "./Action";
import AttentionHero, {
  AttentionDetailsBar,
  AttentionStinger,
} from "./Attention";
import EarningsCalculator, { DesireSeychelles, DesireWhoFor } from "./Desire";
import Disclaimer from "./Disclaimer";
import {
  InterestAssetDistribution,
  InterestBenefits,
  InterestCorporateStructure,
  InterestHowGuaranteed,
  InterestHowItWorks,
  InterestPremise,
  InterestStrategy,
} from "./Interest";
import { InvestmentSpecifics } from "./Specifics";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center fillscreen bg-slate-100">
      <AttentionHero />
      <AttentionDetailsBar />
      <InterestPremise />
      <InterestStrategy />
      <AttentionStinger />
      <InterestBenefits />
      <InterestHowGuaranteed />
      <InterestCorporateStructure />
      <InterestHowItWorks />
      <InvestmentSpecifics />
      <InterestAssetDistribution />
      <EarningsCalculator />
      <DesireSeychelles />
      <FAQ {...homepage.desire} />
      <DesireWhoFor />
      <ActionCTA />
      <Disclaimer />
    </main>
  );
}
