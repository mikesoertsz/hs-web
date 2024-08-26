import React, { useEffect, useState } from "react";
import { useStore } from "@/lib/store"; // Import the store

type Props = {};

export default function EarningsStatement({}: Props) {
  const guaranteedAnnualReturnRate = 0.08;
  const projectedTargetReturnRate = 0.113;
  const termYears = 6;

  const investmentAmount = useStore((state) => state.investmentAmount);

  const calculateInvestmentDetails = (amount: number) => {
    const adjustedAmount = Math.round(amount / 25000) * 25000;
    const quarterly = (adjustedAmount * guaranteedAnnualReturnRate) / 4;
    const annual = adjustedAmount * guaranteedAnnualReturnRate;
    const bonus =
      adjustedAmount *
      (projectedTargetReturnRate - guaranteedAnnualReturnRate) *
      termYears;
    const totalYield = annual * termYears + bonus;

    return {
      quarterlyPayout: quarterly,
      annualPayout: annual,
      endOfTermBonus: bonus,
      totalYieldOnCapital: totalYield,
    };
  };

  const calculateYieldPercentages = (amount: number) => {
    const adjustedAmount = Math.round(amount / 25000) * 25000;
    const guaranteedYield = guaranteedAnnualReturnRate * adjustedAmount;
    const projectedYield = projectedTargetReturnRate * adjustedAmount;
    const totalYield = guaranteedYield + projectedYield;

    return {
      guaranteedYield,
      projectedYield,
      totalYield,
    };
  };

  const [investmentDetails, setInvestmentDetails] = useState(() =>
    calculateInvestmentDetails(investmentAmount)
  );

  const updateInvestmentDetails = () => {
    setInvestmentDetails(calculateInvestmentDetails(investmentAmount));
  };

  useEffect(() => {
    updateInvestmentDetails();
  }, [investmentAmount]);

  const { quarterlyPayout, annualPayout, endOfTermBonus, totalYieldOnCapital } =
    investmentDetails;

  return (
    <>
      <div className="p-6 flex w-full flex-col rounded-lg">
        <h3 className="text-md text-brand-g1 mb-4">Annual Schedule</h3>
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
      </div>
      <div className="p-6 border rounded-lg flex w-full flex-col">
        <h3 className="text-md text-brand-g1 mb-4">
          Cumulated End of Term Yields
        </h3>
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">
            Guaranteed <span className="font-normal">Yield-on-Capital</span>
          </h3>
          <p className="text-lg font-semibold text-right">
            $
            {Math.round(
              guaranteedAnnualReturnRate * investmentAmount * termYears
            ).toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <h3 className="text-lg font-semibold">
            Projected Net <span className="font-normal">Yield-on-Capital</span>
          </h3>
          <p className="text-lg font-semibold text-right">
            $
            {Math.round(
              projectedTargetReturnRate * investmentAmount * termYears
            ).toLocaleString()}
          </p>
        </div>
      </div>
    </>
  );
}
