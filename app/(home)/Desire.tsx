"use client";
import EarningsCalculatorForm from "@/components/forms/earningsCalculatorForm";
import QualifierForm from "@/components/forms/qualifierForm";
import { TitleBlock } from "@/components/ui/titleblock";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { useStore } from "@/lib/store";
import Image from "next/image";
import { useEffect, useState } from "react";

type QuestionName = "income" | "assets" | "entity" | "license" | "score";
import Confetti from "react-dom-confetti";

const confettiConfig = {
  angle: 90,
  spread: 180,
  startVelocity: 30,
  elementCount: 200,
  decay: 0.95,
  width: "8px",
  height: "7px",
  colors: ["#00CC00", "#00CCCC", "#0066FF", "#66FF66"],
};

type Props = {};

export function DesireWhoFor({}: Props) {
  const accredited = useStore((state) => state.accredited);
  const [showConfetti, setShowConfetti] = useState(false);
  const [previouslyAccredited, setPreviouslyAccredited] = useState(false);

  useEffect(() => {
    if (accredited && !previouslyAccredited) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
    setPreviouslyAccredited(accredited);
  }, [accredited, previouslyAccredited]);

  const qualifier = {
    header: {
      preheading: "Interested in investing?",
      heading: "See if you qualify.",
      subheading: "This fund is exclusively for Accredited Investors.",
      body: "HelmShare is an exclusive fund available only to experienced, accredited investors. Each potential investor will undergo a standard vetting process through our partner InvestorVerify.com.",
      icon: "",
      image: "",
    },
    qualifiedHeader: {
      preheading: "🎉 Congratulations!",
      heading: "You Qualify",
      subheading: "",
      body: (
        <>
          You meet the criteria for an accredited investor. <br />
          Register below & we&apos;ll reach out to you with more information.
        </>
      ),
      icon: "",
      image: "",
    },
  };

  return (
    <Wrapper className="py-[5vh]">
      <InnerWrap>
        <div className="grid w-full grid-cols-1 gap-12 p-5 bg-gray-900 md:grid-cols-2 md:p-12 rounded-xl overflow-hidden">
          <div className="flex p-4">
            <TitleBlock
              preheading={
                accredited
                  ? qualifier.qualifiedHeader.preheading
                  : qualifier.header.preheading
              }
              heading={
                accredited
                  ? qualifier.qualifiedHeader.heading
                  : qualifier.header.heading
              }
              subheading={
                accredited
                  ? qualifier.qualifiedHeader.subheading
                  : qualifier.header.subheading
              }
              body={
                accredited
                  ? qualifier.qualifiedHeader.body
                  : qualifier.header.body
              }
              theme="dark"
              orientation="left"
            />
            <div>
              <Confetti active={showConfetti} config={confettiConfig} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start p-8 bg-white rounded-lg">
            <QualifierForm />
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

export function DesireSeychelles() {
  return (
    <Wrapper className="min-h-[400px] relative">
      <Image
        src="/img/hero/hero21.JPG"
        alt="Hero Image"
        fill
        className="absolute inset-0"
        style={{ objectFit: "cover" }}
      />
    </Wrapper>
  );
}
