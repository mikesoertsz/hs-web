import { homepage } from "@/public/content/en";
import FAQ from "../(shared)/FAQ";
import ImageWide from "../(shared)/ImageWide";
import ActionCTA from "./action-cta";
import { AttentionDetailsBar } from "./attention-detailsbar";
import AttentionHero from "./attention-hero";
import { DesireSeychelles } from "./desire-seychelles";
import { DesireInvestmentSpecifics } from "./desire-specifics";
import { DesireWhoFor } from "./desire-whofor";
import Disclaimer from "./Disclaimer";
import EarningsCalculator from "./earnings-calculator";
import { InterestAssetDistribution } from "./interest-assetdistribution";
import { InterestBenefits } from "./interest-benefits";
import { InterestHowGuaranteed } from "./interest-howguaranteed";
import { InterestHowItWorks } from "./interest-howitworks";
import { InterestFundLeadership } from "./interest-leadership";
import { InterestMarket } from "./interest-market";
import { InterestPremise } from "./interest-premise";
import { InterestStinger } from "./interest-stinger";
import { InterestStrategy } from "./interest-strategy";
import { InterestCorporateStructure } from "./interest-structure";

export const metadata = {
  title: "HelmShare - Invest in Luxury Yachts",
  description: "Earn guaranteed returns through fractional yacht ownership",
};

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
