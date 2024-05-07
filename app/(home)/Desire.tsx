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
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  // Function to check if any of the form values are true
  const checkQualification = (data: z.infer<typeof FormSchema>) => {
    const qualifies = Object.values(data).some((value) => value === true);
    setQualifies(qualifies);
  };

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
        <div className="grid w-full grid-cols-1 gap-12 p-5 bg-gray-900 md:grid-cols-2 md:p-12 rounded-xl">
          <div className="flex h-full p-4">
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
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg basis-1/2">
            <div className="hidden">Congrats you qualify</div>
            <Form {...form}>
              <form
                className="grid grid-cols-1 gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {questions.map(({ label, description, name }) => (
                  <FormField
                    key={name}
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                      <FormItem
                        className={`flex flex-row items-center justify-between p-3 transition duration-200 ease-in-out border rounded-lg shadow-sm ${
                          field.value === true
                            ? "bg-green-100 hover:border-green-400"
                            : "hover:bg-slate-50"
                        } border-slate-300`}
                      >
                        <div className="space-y-0.5">
                          <FormLabel>{label}</FormLabel>
                          <FormDescription>{description}</FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value === true} // Ensure the value is a boolean
                            onCheckedChange={(checked) => {
                              field.onChange(checked);
                              checkQualification({
                                ...form.getValues(),
                                [name]: checked,
                              }); // Update qualification state on switch toggle
                            }}
                            className="ml-8"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ))}
                <Button
                  variant="outline"
                  type="submit"
                  className="hidden w-full"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

export default function DesireEarningsCalculator({}: Props) {
  const guaranteedAnnualReturnRate = 0.08;
  const projectedTargetReturnRate = 0.113;
  const termYears = 6;
  const minInvestment = 100000;
  const maxInvestment = 1000000;

  const [investmentAmount, setInvestmentAmount] =
    useState<number>(minInvestment);
  const [quarterlyPayout, setQuarterlyPayout] = useState<number>(
    (minInvestment * guaranteedAnnualReturnRate) / 4
  );
  const [annualPayout, setAnnualPayout] = useState<number>(
    minInvestment * guaranteedAnnualReturnRate
  );
  const [endOfTermBonus, setEndOfTermBonus] = useState<number>(
    minInvestment *
      (projectedTargetReturnRate - guaranteedAnnualReturnRate) *
      termYears
  );
  const [totalYieldOnCapital, setTotalYieldOnCapital] = useState<number>(
    minInvestment * guaranteedAnnualReturnRate * termYears +
      minInvestment *
        (projectedTargetReturnRate - guaranteedAnnualReturnRate) *
        termYears
  );

  const calculatePayouts = (amount: number) => {
    const quarterly = (amount * guaranteedAnnualReturnRate) / 4;
    const annual = amount * guaranteedAnnualReturnRate;
    const bonus =
      amount *
      (projectedTargetReturnRate - guaranteedAnnualReturnRate) *
      termYears;
    const totalYield = annual * termYears + bonus;

    setQuarterlyPayout(quarterly);
    setAnnualPayout(annual);
    setEndOfTermBonus(bonus);
    setTotalYieldOnCapital(totalYield);
  };

  const handleInvestmentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const amount = parseFloat(event.target.value);
    setInvestmentAmount(amount);
    calculatePayouts(amount);
  };

  const earningscalculator = {
    header: {
      preheading: "How much you earn",
      heading: "Earnings Projection",
      subheading: "Set your investment amount",
      icon: "",
      image: "",
    },
  };

  return (
    <Wrapper className="pt-[5vh] bg-gray-900">
      <InnerWrap className="w-full">
        <div className="flex flex-col w-full p-8 bg-white border rounded-xl border-slate-300">
          <div className="flex flex-col items-center justify-center text-center">
            <TitleBlock
              preheading={earningscalculator.header.preheading}
              heading={earningscalculator.header.heading}
              subheading={earningscalculator.header.subheading}
              theme="light"
              orientation="center"
            />
          </div>

          <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center p-4 rounded-lg basis-1/2 bg-slate-100">
              <h3 className="text-lg font-medium text-gray-700 ">
                Set your investment amount
              </h3>
              <p className="text-sm text-brand-p0">
                Drag the slider to see your investment return.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 p-12 py-4 lg:flex-row basis-1/2">
                <Slider
                  defaultValue={[investmentAmount]}
                  max={maxInvestment}
                  step={25000}
                  onValueChange={(values) =>
                    handleInvestmentChange({
                      target: { value: values[0].toString() },
                    } as any)
                  }
                />
                <Input
                  type="text"
                  id="investmentAmount"
                  name="investmentAmount"
                  min={minInvestment}
                  max={maxInvestment}
                  step="25000"
                  placeholder="Enter amount"
                  value={`$${Math.round(investmentAmount).toLocaleString()}`}
                  onChange={handleInvestmentChange}
                  className="text-xl font-semibold text-center bg-white"
                />
              </div>
              <p className="mt-2 text-xs text-gray-400">
                *Minimum investment USD100,000
              </p>
            </div>
            <div className="p-0 basis-1/2">
              <div className="flex flex-col">
                <fieldset className="grid p-6 border rounded-lg">
                  <legend className="px-1 -ml-1 text-md text-brand-g1">
                    Annual Schedule
                  </legend>
                  <div className="flex justify-between">
                    <h3 className="font-medium text-md">
                      Quarterly Payout
                      <sup className="pl-1 text-green-600">2%</sup>
                    </h3>
                    <p className="text-right">
                      ${Math.round(quarterlyPayout).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex justify-between mt-4">
                    <h3 className="font-medium text-md">
                      Annual Payout
                      <sup className="pl-1 text-green-600">{`${
                        guaranteedAnnualReturnRate * 100
                      }%`}</sup>
                    </h3>
                    <p className="text-right">
                      ${Math.round(annualPayout).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex justify-between py-1 mt-3">
                    <p className="text-left">
                      Target Annualized Yield
                      <sup className="pl-1 text-green-600">
                        {`${projectedTargetReturnRate * 100}%`}
                      </sup>
                    </p>
                    <p className="text-right">
                      ${Math.round(endOfTermBonus).toLocaleString()}
                    </p>
                  </div>
                </fieldset>

                <fieldset className="grid p-6 mt-8 border rounded-lg">
                  <legend className="px-1 -ml-1 text-md text-brand-g1">
                    End of Term Yields
                  </legend>
                  <div className="grid gap-3">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold">
                        Guaranteed{" "}
                        <span className="font-normal">Yield-on-Capital</span>
                      </h3>
                      <p className="text-lg font-semibold text-right">
                        $
                        {Math.round(
                          guaranteedAnnualReturnRate *
                            investmentAmount *
                            termYears
                        ).toLocaleString()}
                        <sup className="pl-1 text-green-600">
                          {Math.round(
                            ((0.08 * investmentAmount * termYears) /
                              investmentAmount) *
                              100
                          )}
                          %
                        </sup>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <h3 className="text-lg font-semibold">
                      Target{" "}
                      <span className="font-normal">Yield-on-Capital</span>
                    </h3>
                    <p className="text-lg font-semibold text-right">
                      $
                      {Math.round(
                        0.093 * investmentAmount * termYears
                      ).toLocaleString()}
                      <sup className="pl-1 text-green-600">
                        {Math.round(
                          ((0.093 * investmentAmount * termYears) /
                            investmentAmount) *
                            100
                        )}
                        %
                      </sup>
                    </p>
                  </div>
                  <div className="flex justify-between mt-4">
                    <h3 className="text-lg font-semibold">Priciple Return</h3>
                    <p className="text-lg font-semibold text-right">
                      ${Math.round(investmentAmount).toLocaleString()}
                      <sup className="pl-1 text-green-600">100%</sup>
                    </p>
                  </div>
                </fieldset>
              </div>
            </div>
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
