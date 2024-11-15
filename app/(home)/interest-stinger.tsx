import { InnerWrap, Wrapper } from "@/lib/atoms";
import CTAButtonsBasic from "../(shared)/CTAButtonsBasic";

export function InterestStinger() {
  const stinger = {
    pretitle: "finally",
    title: (
      <>
        <span className="text-brand2-g3">Profit</span> from yacht ownership.{" "}
        <span>Without the pitfalls.</span>
      </>
    ),
  };

  return (
    <Wrapper className="py-[8vh] bg-brand2-base1 text-gray-100">
      <InnerWrap className="flex items-center justify-center">
        <p className="pb-4 text-sm tracking-widest uppercase text-brand-g1">
          {stinger.pretitle}
        </p>
        <h1 className="text-5xl leading-1 px-3 lg:text-7xl font-medium font-title tracking-tight my-3 text-center balanced max-w-5xl lg:leading-[1.2]">
          {stinger.title}
        </h1>
        <CTAButtonsBasic variant="secondary" theme="dark" />
      </InnerWrap>
    </Wrapper>
  );
}
