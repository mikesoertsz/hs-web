import { homepage } from "@/public/content/en";
import FAQ from "../(shared)/FAQ";
import SubNav from "../(shared)/SubNav";
import DetailsBar, { DetailsBlock } from "./Details";
import Disclaimer from "./Disclaimer";
import { HeroSplit } from "./Hero";
import Overview, {
  BehindTheInvestment,
  Benefits,
  IncomeDistribution,
} from "./Interest";
import WhoFor from "./WhoFor";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center fillscreen bg-slate-100">
      <SubNav />
      <HeroSplit />
      <DetailsBar />
      <Benefits />
      <WhoFor />
      <Overview />
      <DetailsBlock />
      <IncomeDistribution />
      <BehindTheInvestment />
      <FAQ {...homepage.desire} />
      <Disclaimer />
    </main>
  );
}
