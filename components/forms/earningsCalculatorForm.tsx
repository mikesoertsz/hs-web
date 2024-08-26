"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useStore } from "@/lib/store"; // Import the store
import tw from "tailwind-styled-components";

type SliderProps = React.ComponentProps<typeof Slider>;

export default function EarningsCalculatorForm({ ...props }: SliderProps) {
  const guaranteedAnnualReturnRate = 0.08;
  const projectedTargetReturnRate = 0.113;
  const termYears = 6;
  const minInvestment = 100000;
  const maxInvestment = 1000000;

  const investmentAmount = useStore((state) => state.investmentAmount);
  const setInvestmentAmount = useStore((state) => state.setInvestmentAmount);

  const [investmentDetails, setInvestmentDetails] = useState(() => {
    const quarterly = (investmentAmount * guaranteedAnnualReturnRate) / 4;
    const annual = investmentAmount * guaranteedAnnualReturnRate;
    const bonus =
      investmentAmount *
      (projectedTargetReturnRate - guaranteedAnnualReturnRate) *
      termYears;
    const totalYield = annual * termYears + bonus;

    return {
      quarterlyPayout: quarterly,
      annualPayout: annual,
      endOfTermBonus: bonus,
      totalYieldOnCapital: totalYield,
    };
  });

  const calculateInvestmentDetails = (amount: number) => {
    const quarterly = (amount * guaranteedAnnualReturnRate) / 4;
    const annual = amount * guaranteedAnnualReturnRate;
    const bonus =
      amount *
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

  useEffect(() => {
    setInvestmentDetails(calculateInvestmentDetails(investmentAmount));
  }, [investmentAmount]);

  const handleSliderChange = (values: number[]) => {
    const amount = values[0];
    setInvestmentAmount(amount);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const amount = parseFloat(value);
    if (!isNaN(amount)) {
      setInvestmentAmount(amount);
    }
  };

  const Left = tw.div`flex flex-col items-center justify-center gap-2`;
  const Right = tw.div`flex flex-col items-center justify-center gap-2 bg-white rounded-lg border border-slate-300 shadow-md`;

  const { quarterlyPayout, annualPayout, endOfTermBonus, totalYieldOnCapital } =
    investmentDetails;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 rounded-lg bg-slate-100 mt-4">
      <Left>
        <h3 className="text-lg font-medium text-gray-700 ">
          Set your investment amount
        </h3>
        <p className="text-sm text-brand-p0">
          Drag the slider to see your investment return.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row bg-white px-4 py-2 rounded-full border border-slate-300 shadow-sm mt-5">
          <Slider
            defaultValue={[investmentAmount]}
            max={maxInvestment}
            step={25000}
            onValueChange={handleSliderChange}
            {...props}
            onMouseDown={(e) => e.stopPropagation()} // Prevent deselect on mouse down
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
            onChange={handleInputChange}
            className="text-xl font-semibold text-center bg-white"
          />
        </div>
        <p className="mt-2 text-xs text-gray-400">
          *Minimum investment USD100,000
        </p>
      </Left>
      <Right>
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
          <h3 className="text-md text-brand-g1 mb-4">End of Term Yields</h3>
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
              Projected <span className="font-normal">Yield-on-Capital</span>
            </h3>
            <p className="text-lg font-semibold text-right">
              $
              {Math.round(
                projectedTargetReturnRate * investmentAmount * termYears
              ).toLocaleString()}
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <h3 className="text-lg font-semibold">Total Yield on Capital</h3>
            <p className="text-lg font-semibold text-right">
              ${Math.round(totalYieldOnCapital).toLocaleString()}
            </p>
          </div>
        </div>
      </Right>
    </div>
  );
}
