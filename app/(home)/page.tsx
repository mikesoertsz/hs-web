import { homepage } from "@/public/content/en";
import FAQ from "../(shared)/FAQ";
import ImageWide from "../(shared)/ImageWide";
import ActionCTA from "./Action";
import AttentionHero, {
  AttentionDetailsBar,
  AttentionStinger,
} from "./Attention";
import { DesireSeychelles, DesireWhoFor } from "./Desire";
import Disclaimer from "./Disclaimer";
import EarningsCalculator from "./earnings-calculator";
import {
  InterestAssetDistribution,
  InterestBenefits,
  InterestCorporateStructure,
  InterestHowGuaranteed,
  InterestHowItWorks,
  InterestMarket,
  InterestPremise,
  InterestStrategy,
} from "./Interest";
import { InvestmentSpecifics } from "./Specifics";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mx-auto fillscreen bg-slate-100 subpixel-antialiased">
      <AttentionHero />
      <AttentionDetailsBar />
      <InterestPremise />
      <InterestStrategy />
      <InterestMarket />
      <AttentionStinger />
      <InterestBenefits />
      <InterestHowGuaranteed />
      <InterestCorporateStructure />
      <InterestHowItWorks />
      <InvestmentSpecifics />
      <InterestAssetDistribution />
      <DesireSeychelles />
      <DesireWhoFor />
      <EarningsCalculator />
      <ActionCTA />
      <FAQ {...homepage.desire} />
      <Disclaimer />
      <ImageWide image="/img/hero/lagoon46wide.jpg" />
    </main>
  );
}
