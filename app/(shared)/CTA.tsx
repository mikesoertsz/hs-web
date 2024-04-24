import { Action } from "@/lib/types";
import type { CTASmall } from "@/lib/types";
import tw from "tailwind-styled-components";
import { InnerWrap, Wrapper } from "@/lib/atoms";

type Props = {};

const ColWrapper = tw.div`grid grid-cols-1 md:grid-cols-2 w-full mt-8 md:flex-row md:justify-between gap-8`;
const Column = tw.div`flex flex-col items-center justify-center p-6 px-8 text-center rounded-lg bg-gray-50 min-h-[450px] shadow-lg`;

export default function CTA({ cta }: Action) {
  const ctacontent = {
    header: {
      preheading: "Ready to get started?",
      heading: "Join the next webinar",
      subheading: "Get to know the instructor and ask questions.",
    },
  };
  return (
    <Wrapper className="bg-gray-900 pb-[10vh]">
      <InnerWrap>
        <ColWrapper>
          <Column>Talk to the instructor</Column>
          <Column>Attend a webinar</Column>
        </ColWrapper>
      </InnerWrap>
    </Wrapper>
  );
}

export function CTASmall({ cta }: { cta: CTASmall }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-8 bg-gray-800 border border-black rounded-xl min-h-[10vh] p-12">
        hello
      </div>
    </>
  );
}
