import { homepage } from "@/public/content/en";
import FAQ from "../(shared)/FAQ";
import SubNav from "../(shared)/SubNav";
import DetailsBar, { DetailsBlock } from "./Details";
import Disclaimer from "./Disclaimer";
import { HeroSplit } from "./Hero";
import WhoFor from "./WhoFor";
import EarningsCalculator from "./Desire";
import ActionCTA from "./Action";
import InterestOverview, {
  InterestBenefits,
  InterestCorporateStructure,
  InterestHowGuaranteed,
  InterestHowItWorks,
  InterestIncomeDistribution,
  InterestPremise,
  InterestWhoFor,
} from "./Interest";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center fillscreen bg-slate-100">
      <HeroSplit />
      <DetailsBar />
      <InterestPremise />
      <InterestBenefits />
      <InterestHowGuaranteed />
      <InterestWhoFor />
      <InterestOverview />
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
