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
import { HeaderWrapLeft, InnerWrap, Wrapper } from "@/lib/atoms";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { TitleLeft } from "../(shared)/Titles";

type QuestionName = "income" | "assets" | "entity" | "license" | "score";

type Props = {};

export default function EarningsCalculator({}: Props) {
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

  return (
    <Wrapper className="pb-[5vh]">
      <InnerWrap className="w-full">
        <div className="flex flex-col border rounded-xl border-slate-300 bg-white w-full p-8">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="uppercase text-[11px] tracking-[0.2em] font-medium text-brand-p1">
              how much you earn
            </p>
            <h1 className="text-4xl font-medium font-title tracking-tight mt-3">
              Earnings Projection
            </h1>
          </div>

          <div className="flex mt-12 gap-12">
            <div className="flex flex-col items-center justify-center basis-1/2 rounded-lg bg-slate-100">
              <h3 className=" text-lg font-medium text-gray-700">
                Set your investment amount
              </h3>
              <p className="text-sm text-brand-p0">
                Drag the slider to see your investment return.
              </p>
              <div className="flex items-center justify-center gap-4 basis-1/2 p-12 py-4">
                <Input
                  type="range"
                  id="investmentAmountRange"
                  name="investmentAmountRange"
                  min={minInvestment.toString()}
                  max={maxInvestment.toString()}
                  step="25000"
                  value={investmentAmount}
                  onChange={handleInvestmentChange}
                  className="bg-white border-0 shadow-none"
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
                  className="bg-white font-semibold text-xl text-center"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                *Minimum investment USD100,000
              </p>
            </div>
            <div className="basis-1/2 p-0">
              <div className="flex flex-col">
                <fieldset className="grid rounded-lg border p-6">
                  <legend className="-ml-1 px-1 text-md text-brand-g1">
                    Annual Schedule
                  </legend>
                  <div className="flex justify-between">
                    <h3 className="text-md font-medium">
                      Quarterly Payout
                      <sup className="text-green-600 pl-1">2%</sup>
                    </h3>
                    <p className="text-right">
                      ${Math.round(quarterlyPayout).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex justify-between mt-4">
                    <h3 className="text-md font-medium">
                      Annual Payout
                      <sup className="text-green-600 pl-1">{`${
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
                      <sup className="text-green-600 pl-1">
                        {`${projectedTargetReturnRate * 100}%`}
                      </sup>
                    </p>
                    <p className="text-right">
                      ${Math.round(endOfTermBonus).toLocaleString()}
                    </p>
                  </div>
                </fieldset>

                <fieldset className="grid rounded-lg border p-6 mt-8">
                  <legend className="-ml-1 px-1 text-md text-brand-g1">
                    End of Term Yields
                  </legend>
                  <div className="grid gap-3">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold">
                        Guaranteed{" "}
                        <span className="font-normal">Yield-on-Capital</span>
                      </h3>
                      <p className="text-right text-lg font-semibold">
                        $
                        {Math.round(
                          guaranteedAnnualReturnRate *
                            investmentAmount *
                            termYears
                        ).toLocaleString()}
                        <sup className="text-green-600 pl-1">
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
                    <p className="text-right text-lg font-semibold">
                      $
                      {Math.round(
                        0.093 * investmentAmount * termYears
                      ).toLocaleString()}
                      <sup className="text-green-600 pl-1">
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
                    <p className="text-right text-lg font-semibold">
                      ${Math.round(investmentAmount).toLocaleString()}
                      <sup className="text-green-600 pl-1">100%</sup>
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
export function Opportunity({}: Props) {
  return (
    <Wrapper className="pt-[10vh]">
      <InnerWrap>
        <div className="flex border rounded-xl border-slate-200 bg-slate-50 min-h-[30vh]">
          <div className="flex items-start justify-center">
            <h1>Earnings Calculator</h1>
            <h4>subheading</h4>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
            </ul>
          </div>
          <div className=""></div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

export function Essentials({}: Props) {
  return (
    <Wrapper className="pt-[10vh]">
      <InnerWrap>
        <div className="flex border rounded-xl border-slate-200 bg-slate-50 min-h-[30vh]">
          <div className="flex items-start justify-center">
            <h3>Who can invest?</h3>
            <h4>subheading</h4>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
            </ul>
          </div>
          <div className=""></div>
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

export function DesireWhoFor({}: Props) {
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
      icon: "",
      image: "",
    },
  };

  return (
    <Wrapper className="py-[5vh]">
      <InnerWrap>
        <div className="bg-gray-900 grid grid-cols-1 md:grid-cols-2 w-full p-5 md:p-12 rounded-xl gap-12">
          <div className="flex p-4 h-full">
            <TitleLeft
              preheading="Interested in investing?"
              heading="See if you qualify."
              subheading="This fund is exclusively for Accredited Investors."
              body="HelmShare is an exclusive fund available only to experienced, accredited investors. Each potential investor will undergo a standard vetting process through our partner InvestorVerify.com."
            />
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg basis-1/2">
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
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition duration-200 ease-in-out">
                        <div className="space-y-0.5">
                          <FormLabel>{label}</FormLabel>
                          <FormDescription>{description}</FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value === true} // Ensure the value is a boolean
                            onCheckedChange={(checked) =>
                              field.onChange(checked)
                            }
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
                  className="w-full hidden"
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
