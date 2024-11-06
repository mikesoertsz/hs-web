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
import { InterestAssetDistribution } from "./interest-assetdistribution";
import { InterestBenefits } from "./interest-benefits";
import { InterestHowGuaranteed } from "./interest-howguaranteed";
import { InterestHowItWorks } from "./interest-howitworks";
import { InterestFundLeadership } from "./interest-leadership";
import { InterestMarket } from "./interest-market";
import { InterestPremise } from "./interest-premise";
import { InterestStrategy } from "./interest-strategy";
import { InterestCorporateStructure } from "./interest-structure";
import { InvestmentSpecifics } from "./Specifics";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mx-auto bg-slate-100">
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
      <InterestFundLeadership />
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
