"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Slider } from "@/components/ui/slider";
import { TitleBlock } from "@/components/ui/titleblock";
import EarningsCalculatorForm from "@/components/forms/earningsCalculatorForm";
import QualifierForm from "@/components/forms/qualifierForm";

type QuestionName = "income" | "assets" | "entity" | "license" | "score";

type Props = {};

export function DesireWhoFor({}: Props) {
  const [qualifies, setQualifies] = useState(false);
  const FormSchema = z.object({
    income: z.boolean(),
    assets: z.boolean(),
    entity: z.boolean(),
    license: z.boolean(),
    score: z.number(),
  });

  const questions: {
    label: string;
    description: string;
    name: QuestionName;
    score: number;
  }[] = [
    {
      label:
        "Do you earn $200K+ yearly, or $300K+ with your spousal equivalent?",
      description: "Indicate your annual income level.",
      name: "income",
      score: 50,
    },
    {
      label: "Do you have $1M+ in assets, excluding your primary residence?",
      description: "Indicate if your asset value exceeds $1 million.",
      name: "assets",
      score: 50,
    },
    {
      label: "Do you own an entity (i.e., family office) with $5M+ in assets?",
      description:
        "Indicate if you own an entity with significant asset value.",
      name: "entity",
      score: 50,
    },
    {
      label:
        "Do you hold a Series 7, 65, or 82 license currently in good standing?",
      description: "Indicate if you have a valid financial license.",
      name: "license",
      score: 50,
    },
  ];

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

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
      preheading: "Congratulations!",
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
                qualifies
                  ? qualifier.qualifiedHeader.preheading
                  : qualifier.header.preheading
              }
              heading={
                qualifies
                  ? qualifier.qualifiedHeader.heading
                  : qualifier.header.heading
              }
              subheading={
                qualifies
                  ? qualifier.qualifiedHeader.subheading
                  : qualifier.header.subheading
              }
              body={
                qualifies
                  ? qualifier.qualifiedHeader.body
                  : qualifier.header.body
              }
              theme="dark"
              orientation="left"
            />
          </div>
          <div className="flex flex-col items-center justify-start p-8 bg-white rounded-lg">
            <QualifierForm />
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

export default function DesireEarningsCalculator({}: Props) {
  return (
    <Wrapper className="pt-[5vh] bg-gray-900" id="earnings">
      <InnerWrap className="w-full">
        <div className="flex flex-col w-full p-8 bg-white border rounded-xl border-slate-300">
          <div className="flex flex-col items-center justify-center text-center">
            <TitleBlock
              preheading="How much you earn"
              heading="Earnings Projection"
              subheading="Use the calculator below to see your guaranteed and projected earnings."
              theme="light"
              orientation="center"
            />
          </div>
          <EarningsCalculatorForm />
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
