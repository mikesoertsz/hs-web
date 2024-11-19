"use client";
import { useState, useEffect } from "react";
import { Slider } from "@nextui-org/slider";
import { TitleBlock } from "@/components/ui/titleblock";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { Separator } from "@/components/ui/separator";
import { Calculator } from "lucide-react";

export default function EarningsCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [adjustedAmount, setAdjustedAmount] = useState(100000);
  const [annualPayout, setAnnualPayout] = useState(0);
  const [endOfTermBonus, setEndOfTermBonus] = useState(0);
  const [totalYieldOnCapital, setTotalYieldOnCapital] = useState(0);
  const [guaranteedYieldOnCapital, setGuaranteedYieldOnCapital] = useState(0);

  const rates = {
    guaranteedAnnualReturnRate: 0.08,
    projectedTargetReturnRate: 0.1175,
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

  const guaranteedYieldPercentage = `${(
    rates.guaranteedAnnualReturnRate *
    100 *
    rates.termYears
  ).toFixed(2)}%`;
  const totalYieldPercentage = `${(
    rates.projectedTargetReturnRate *
    100 *
    rates.termYears
  ).toFixed(2)}%`;

  const payoutData = [
    {
      label: "Quarterly Payout",
      value: formattedQuarterlyPayout,
      percentage: "2%",
    },
    {
      label: "Annual Payout",
      value: formattedAnnualPayout,
      percentage: `${rates.guaranteedAnnualReturnRate * 100}%`,
    },
    {
      label: "Target Annualized Yield",
      value: formattedEndOfTermBonus,
      percentage: `${rates.projectedTargetReturnRate * 100}%`,
    },
  ];

  const yieldData = [
    {
      label: "Guaranteed Yield-on-Capital",
      value: formattedGuaranteedYieldOnCapital,
      percentage: guaranteedYieldPercentage,
    },
    {
      label: "Projected Net Yield-on-Capital",
      value: formattedTotalYieldOnCapital,
      percentage: totalYieldPercentage,
    },
  ];

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
          <div className="grid grid-cols-1 p-4 mt-4 rounded-lg md:grid-cols-2 bg-slate-100">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <Calculator size={24} className="" />
              <h3 className="text-lg font-medium text-gray-700 ">
                Set your investment amount
              </h3>
              <p className="text-sm text-brand-p0">
                Drag the slider to see your investment return.
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
                      base: "bg-white rounded-full border border-slate-300 w-[500px] mr-5",
                      filler: "bg-brand-g1 rounded-full ml-4",
                      labelWrapper: "mb-2",
                      label: "font-medium text-default-700 text-medium",
                      value: "font-medium text-default-500 text-small",
                      thumb: [
                        "transition-size ml-1",
                        "bg-gradient-to-r from-secondary-400 to-primary-500",
                        "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                        "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
                      ],
                      step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
                    }}
                  />
                  <div className="text-xl font-semibold tracking-tight items-center justify-end text-right flex w-[100px] pl-8">
                    {formattedInvestmentAmount}
                  </div>
                </div>
                <p className="flex items-center justify-center w-full text-xs italic text-center opacity-60">
                  *Minimum investment €100,000
                </p>
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
              <div className="flex flex-col w-full p-6 rounded-lg">
                <h3 className="text-md text-brand-g1">Annual Schedule</h3>
                <p className="pt-1 pb-3 text-xs text-gray-600">
                  What payments to expect on your investment.
                </p>
                {payoutData.map((item, index) => (
                  <div className="flex justify-between mt-4" key={index}>
                    <h3 className="font-medium text-md">{item.label}</h3>
                    <div className="flex items-center justify-end gap-2">
                      <p className="text-right">{item.value}</p>
                      <p className="text-gray-300">/</p>
                      <p className="text-green-600">{item.percentage}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col w-full p-6 border rounded-lg">
                <h3 className="text-md text-brand-g1">
                  Cumulated End of Term Yields
                </h3>
                <p className="pt-1 pb-3 text-xs text-gray-600">
                  Earnings at the end of the 6-year term.
                </p>
                {yieldData.map((item, index) => (
                  <div className="flex justify-between mt-4" key={index}>
                    <h3 className="text-lg font-semibold">
                      {item.label.split(" ")[0]}{" "}
                      <span className="font-normal">
                        {item.label.split(" ").slice(1).join(" ")}
                      </span>
                    </h3>
                    <div className="flex items-center justify-end gap-2">
                      <p className="text-lg font-semibold text-right">
                        {item.value}
                      </p>
                      <p className="text-gray-300">/</p>
                      <p className="text-green-600">{item.percentage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </InnerWrap>
    </Wrapper>
  );
}
