import React from "react";
import { seed_page } from "./en";
import FAQ from "../(shared)/FAQ";
import { Desire } from "../../lib/types";
import AttentionHero from "./attention-hero";

type Props = {};

export default function page({}: Props) {
  

  return (
    <main className="flex flex-col items-center justify-center mx-auto fillscreen bg-slate-100 antialiased">
      <AttentionHero hero={seed_page.attention.hero} />
      <FAQ faq={seed_page.faq} />
    </main>
  );
}
