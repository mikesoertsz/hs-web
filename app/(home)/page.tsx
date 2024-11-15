import { homepage } from "@/public/content/en";
import AttentionHero from "./attention-hero";
import { InterestAssetDistribution } from "./interest-assetdistribution";
import { InterestBenefits } from "./interest-benefits";
import { InterestHowGuaranteed } from "./interest-howguaranteed";
import { InterestHowItWorks } from "./interest-howitworks";
import { InterestFundLeadership } from "./interest-leadership";
import { InterestMarket } from "./interest-market";
import { InterestPremise } from "./interest-premise";
import { InterestStrategy } from "./interest-strategy";
import { InterestCorporateStructure } from "./interest-structure";
import { AttentionDetailsBar } from "./attention-detailsbar";
import { InterestStinger } from "./interest-stinger";
import { DesireInvestmentSpecifics } from "./desire-specifics";
import Disclaimer from "./Disclaimer";
import EarningsCalculator from "./earnings-calculator";
import ActionCTA from "./action-cta";
import FAQ from "../(shared)/FAQ";
import ImageWide from "../(shared)/ImageWide";
import { DesireSeychelles } from "./desire-seychelles";
import { DesireWhoFor } from "./desire-whofor";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mx-auto bg-slate-100">
      <AttentionHero />
      <AttentionDetailsBar />
      <InterestPremise />
      <InterestStrategy />
      <InterestMarket />
      <InterestStinger />
      <InterestBenefits />
      <InterestHowGuaranteed />
      <InterestCorporateStructure />
      <InterestHowItWorks />
      <DesireInvestmentSpecifics />
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
