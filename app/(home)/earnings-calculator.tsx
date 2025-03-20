"use client";
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { TitleBlock } from "@/components/ui/titleblock";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import { Calculator, ChevronRight } from "lucide-react";

const rates = {
  guaranteedAnnualReturnRate: 0.08,
  projectedTargetReturnRate: 0.1175,
  termYears: 6,
};

export default function EarningsCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [calculatedReturns, setCalculatedReturns] = useState(() =>
    calculateReturns(100000, 5)
  );

  function calculateReturns(amount: number, years: number) {
    const adjustedAmount = Math.round(amount / 25000) * 25000;
    const annualPayout = adjustedAmount * rates.guaranteedAnnualReturnRate;
    const endOfTermBonus =
      adjustedAmount *
      (rates.projectedTargetReturnRate - rates.guaranteedAnnualReturnRate) *
      rates.termYears;
    const totalYieldOnCapital = annualPayout * rates.termYears + endOfTermBonus;
    const guaranteedYieldOnCapital = annualPayout * rates.termYears;
    const projectedValue =
      adjustedAmount * Math.pow(1 + rates.guaranteedAnnualReturnRate, years);
    const totalEarnings = projectedValue - adjustedAmount;

    return {
      formattedInvestmentAmount: `€${Math.round(
        adjustedAmount
      ).toLocaleString()}`,
      formattedAnnualPayout: `€${Math.round(annualPayout).toLocaleString()}`,
      formattedQuarterlyPayout: `€${Math.round(
        annualPayout / 4
      ).toLocaleString()}`,
      formattedEndOfTermBonus: `€${Math.round(
        endOfTermBonus
      ).toLocaleString()}`,
      formattedTotalYieldOnCapital: `€${Math.round(
        totalYieldOnCapital
      ).toLocaleString()}`,
      formattedGuaranteedYieldOnCapital: `€${Math.round(
        guaranteedYieldOnCapital
      ).toLocaleString()}`,
      totalEarnings: `€${Math.round(totalEarnings).toLocaleString()}`,
      projectedValue: `€${Math.round(projectedValue).toLocaleString()}`,
      adjustedAmount,
      annualPayout,
      endOfTermBonus,
      totalYieldOnCapital,
      guaranteedYieldOnCapital,
    };
  }

  useEffect(() => {
    setCalculatedReturns(calculateReturns(investmentAmount, 5));
  }, [investmentAmount]);

  const payoutData = [
    {
      label: "Quarterly Payout",
      value: calculatedReturns.formattedQuarterlyPayout,
      percentage: "2%",
    },
    {
      label: "Annual Payout",
      value: calculatedReturns.formattedAnnualPayout,
      percentage: `${rates.guaranteedAnnualReturnRate * 100}%`,
    },
    {
      label: "Target Annualized Yield",
      value: calculatedReturns.formattedEndOfTermBonus,
      percentage: `${rates.projectedTargetReturnRate * 100}%`,
    },
  ];

  const yieldData = [
    {
      label: "Guaranteed Yield-on-Capital",
      value: calculatedReturns.formattedGuaranteedYieldOnCapital,
      percentage: `${(
        rates.guaranteedAnnualReturnRate *
        100 *
        rates.termYears
      ).toFixed(2)}%`,
    },
    {
      label: "Projected Net Yield-on-Capital",
      value: calculatedReturns.formattedTotalYieldOnCapital,
      percentage: `${(
        rates.projectedTargetReturnRate *
        100 *
        rates.termYears
      ).toFixed(2)}%`,
    },
  ];

  return (
    <div className="bg-bahama-blue-50 py-20" id="earnings">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-bahama-blue-900 mb-4">
              Investment Calculator
            </h2>
            <p className="text-bahama-blue-600">
              Calculate your potential returns from yacht investment
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 border-b border-bahama-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-bahama-blue-100 rounded-lg">
                  <Calculator className="w-5 h-5 text-bahama-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-bahama-blue-900">
                  Set your investment amount
                </h3>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex-1">
                  <Slider
                    defaultValue={[100000]}
                    min={100000}
                    max={1000000}
                    step={25000}
                    onValueChange={(value) => {
                      setInvestmentAmount(value[0]);
                    }}
                    className="w-full"
                  />
                </div>
                <div className="w-36 text-right">
                  <div className="text-2xl font-semibold text-bahama-blue-900">
                    {calculatedReturns.formattedInvestmentAmount}
                  </div>
                  <div className="text-sm text-bahama-blue-500">
                    Investment Amount
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-bahama-blue-900">
                    Annual Returns
                  </h4>
                  {payoutData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-bahama-blue-50 rounded-lg"
                    >
                      <div className="text-bahama-blue-700">{item.label}</div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-medium text-bahama-blue-900">
                          {item.value}
                        </span>
                        <span className="text-sm text-bahama-blue-500">
                          {item.percentage}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <h4 className="text-lg font-medium text-bahama-blue-900">
                    Total Returns (6 Years)
                  </h4>
                  {yieldData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-bahama-blue-50 rounded-lg"
                    >
                      <div className="text-bahama-blue-700">{item.label}</div>
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-medium text-bahama-blue-900">
                          {item.value}
                        </span>
                        <span className="text-sm text-bahama-blue-500">
                          {item.percentage}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
