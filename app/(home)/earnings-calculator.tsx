"use client";
import { useState, useEffect } from "react";
import { Slider } from "@nextui-org/slider";
import { TitleBlock } from "@/components/ui/titleblock";
import { InnerWrap, Wrapper } from "@/lib/atoms";

export default function EarningsCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [adjustedAmount, setAdjustedAmount] = useState(100000);
  const [annualPayout, setAnnualPayout] = useState(0);
  const [endOfTermBonus, setEndOfTermBonus] = useState(0);
  const [totalYieldOnCapital, setTotalYieldOnCapital] = useState(0);
  const [guaranteedYieldOnCapital, setGuaranteedYieldOnCapital] = useState(0);

  const rates = {
    guaranteedAnnualReturnRate: 0.08,
    projectedTargetReturnRate: 0.113,
    termYears: 6,
  };

  const calculateReturns = (investmentAmount: number) => {
    const newAdjustedAmount = Math.round(investmentAmount / 25000) * 25000;
    setAdjustedAmount(newAdjustedAmount);

    const newAnnualPayout =
      newAdjustedAmount * rates.guaranteedAnnualReturnRate;
    setAnnualPayout(newAnnualPayout);

    const newEndOfTermBonus =
      newAdjustedAmount *
      (rates.projectedTargetReturnRate - rates.guaranteedAnnualReturnRate) *
      rates.termYears;
    setEndOfTermBonus(newEndOfTermBonus);

    const newTotalYieldOnCapital =
      newAnnualPayout * rates.termYears + newEndOfTermBonus;
    setTotalYieldOnCapital(newTotalYieldOnCapital);

    const newGuaranteedYieldOnCapital = newAnnualPayout * rates.termYears;
    setGuaranteedYieldOnCapital(newGuaranteedYieldOnCapital);
  };

  useEffect(() => {
    calculateReturns(investmentAmount);
  }, [investmentAmount]);

  const formatCurrency = (amount: any) =>
    `€${Math.round(amount).toLocaleString()}`;

  const formattedInvestmentAmount = investmentAmount.toLocaleString("en-EU", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formattedQuarterlyPayout = formatCurrency(annualPayout / 4);
  const formattedAnnualPayout = formatCurrency(annualPayout);
  const formattedEndOfTermBonus = formatCurrency(endOfTermBonus);
  const formattedGuaranteedYieldOnCapital = formatCurrency(
    guaranteedYieldOnCapital
  );
  const formattedTotalYieldOnCapital = formatCurrency(totalYieldOnCapital);

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
          <div className="grid grid-cols-1 md:grid-cols-2 p-4 rounded-lg bg-slate-100 mt-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <h3 className="text-lg font-medium text-gray-700 ">
                Set your investment amount
              </h3>
              <p className="text-sm text-brand-p0">
                Enter an amount to see your investment return.
              </p>
              <div className="w-2/3 space-y-6">
                <div className="flex flex-row items-center justify-between w-full gap-4 my-8">
                  <Slider
                    step={25000}
                    minValue={100000}
                    maxValue={1000000}
                    defaultValue={100000}
                    fillOffset={0}
                    showOutline={false}
                    getValue={(investmentAmount) => `${investmentAmount}`}
                    size="lg"
                    onChange={(value: number | number[]) => {
                      if (Array.isArray(value)) {
                        // Handle the case where value is an array
                        setInvestmentAmount(value[0]); // or any logic you need
                      } else {
                        setInvestmentAmount(value);
                      }
                    }}
                    classNames={{
                      base: "bg-white rounded-full border border-slate-300 w-[500px]",
                      filler: "bg-brand-g1 rounded-full ml-5",
                      labelWrapper: "mb-2",
                      label: "font-medium text-default-700 text-medium",
                      value: "font-medium text-default-500 text-small",
                      thumb: [
                        "transition-size ml-2",
                        "bg-gradient-to-r from-secondary-400 to-primary-500",
                        "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                        "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
                      ],
                      step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
                    }}
                  />
                  <div className="text-xl font-semibold tracking-tight items-center justify-end text-right flex w-[100px]">
                    {formattedInvestmentAmount}
                  </div>
                </div>
                <div className="flex flex-col w-full items-center justify-center">
                  <p className="flex opacity-60 w-full text-center items-center justify-center text-xs">
                    Minimum investment €100,000
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                border: "1px solid #cbd5e0",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="p-6 flex w-full flex-col rounded-lg">
                <h3 className="text-md text-brand-g1 mb-4">Annual Schedule</h3>
                <div className="flex justify-between">
                  <h3 className="font-medium text-md">
                    Quarterly Payout
                    <sup className="pl-1 text-green-600">2%</sup>
                  </h3>
                  <p className="text-right">{formattedQuarterlyPayout}</p>
                </div>
                <div className="flex justify-between mt-4">
                  <h3 className="font-medium text-md">
                    Annual Payout
                    <sup className="pl-1 text-green-600">{`${
                      rates.guaranteedAnnualReturnRate * 100
                    }%`}</sup>
                  </h3>
                  <p className="text-right">{formattedAnnualPayout}</p>
                </div>
                <div className="flex justify-between py-1 mt-3">
                  <p className="text-left">
                    Target Annualized Yield
                    <sup className="pl-1 text-green-600">
                      {`${rates.projectedTargetReturnRate * 100}%`}
                    </sup>
                  </p>
                  <p className="text-right">{formattedEndOfTermBonus}</p>
                </div>
              </div>
              <div className="p-6 border rounded-lg flex w-full flex-col">
                <h3 className="text-md text-brand-g1 mb-4">
                  Cumulated End of Term Yields
                </h3>
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold">
                    Guaranteed{" "}
                    <span className="font-normal">Yield-on-Capital</span>
                  </h3>
                  <p className="text-lg font-semibold text-right">
                    {formattedGuaranteedYieldOnCapital}
                  </p>
                </div>
                <div className="flex justify-between mt-4">
                  <h3 className="text-lg font-semibold">
                    Projected Net{" "}
                    <span className="font-normal">Yield-on-Capital</span>
                  </h3>
                  <p className="text-lg font-semibold text-right">
                    {formattedTotalYieldOnCapital}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
