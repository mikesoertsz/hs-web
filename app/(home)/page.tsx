import Image from "next/image";
import FAQ from "../(shared)/FAQ";
import { homepage } from "@/public/content/en";
import Hero from "./Hero";
import Disclaimer from "./Disclaimer";
import Details, { DetailsBlock } from "./Details";
import DetailsBar from "./Details";
import Overview, { FundLeadership, IncomeDistribution } from "./Interest";
import Intro from "./Attention";
import SubNav from "../(shared)/SubNav";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center fillscreen bg-slate-100">
      <SubNav />
      <Hero />
      <DetailsBar />
      <DetailsBlock />
      <Intro />
      <Overview />
      <IncomeDistribution />
      <FundLeadership />
      <FAQ {...homepage.desire} />
      <Disclaimer />
    </main>
  );
}
