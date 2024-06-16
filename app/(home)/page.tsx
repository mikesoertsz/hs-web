import { homepage } from "@/public/content/en";
import FAQ from "../(shared)/FAQ";
import ActionCTA from "./Action";
import AttentionHero, {
  AttentionDetailsBar,
  AttentionStinger,
} from "./Attention";
import DesireEarningsCalculator, {
  DesireSeychelles,
  DesireWhoFor,
} from "./Desire";
import Disclaimer from "./Disclaimer";
import {
  InterestAssetDistribution,
  InterestBenefits,
  InterestCorporateStructure,
  InterestHowGuaranteed,
  InterestHowItWorks,
  InterestPremise,
  InterestStrategy,
  InterestMarket,
} from "./Interest";
import { InvestmentSpecifics } from "./Specifics";
import ImageWide from "../(shared)/ImageWide";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mx-auto fillscreen bg-slate-100">
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
      <DesireEarningsCalculator />
      <ActionCTA />
      <FAQ {...homepage.desire} />
      <Disclaimer />
      <ImageWide image="/img/hero/lagoon46wide.jpg" />
    </main>
  );
}
