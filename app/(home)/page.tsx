import { homepage } from "@/public/content/en";
import FAQ from "../(shared)/FAQ";
import ActionCTA from "./Action";
import EarningsCalculator from "./Desire";
import DetailsBar, { DetailsBlock } from "./Details";
import Disclaimer from "./Disclaimer";
import { HeroSplit } from "./Hero";
import InterestOverview, {
  InterestBenefits,
  InterestCorporateStructure,
  InterestHowGuaranteed,
  InterestHowItWorks,
  InterestIncomeDistribution,
  InterestWhoFor,
} from "./Interest";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center fillscreen bg-slate-100">
      <HeroSplit />
      <DetailsBar />
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
      <FAQ {...homepage.desire} />
      <ActionCTA />
      <Disclaimer />
    </main>
  );
}
