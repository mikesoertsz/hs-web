import ActionCTA from "./Action";
import AttentionHero, {
  AttentionQualifier,
  AttentionStinger,
} from "./Attention";
import DesireEarningPotential, { DesireFAQ } from "./Desire";
import InterestBenefits, {
  InterestAboutUs,
  InterestHowItWorks,
} from "./Interest";

type Props = {};

export default function PartnersPage({}: Props) {
  return (
    <main>
      <AttentionHero />
      <AttentionQualifier />
      <AttentionStinger />
      <InterestBenefits />
      <InterestHowItWorks />
      <InterestAboutUs />
      <DesireEarningPotential />
      <DesireFAQ />
      <ActionCTA />
    </main>
  );
}
