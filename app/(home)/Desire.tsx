"use client";

import { Input } from "@/components/ui/input";
import { InnerWrap, Wrapper } from "@/lib/atoms";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";

type Props = {};

export default function EarningsCalculator({}: Props) {
  const guaranteedAnnualReturnRate = 0.08;
  const projectedTargetReturnRate = 0.093;
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
        <div className="flex border rounded-xl border-slate-300 bg-white min-h-[30vh] w-full">
          <div className="flex-1 p-4">
            <label
              htmlFor="investmentAmount"
              className="block text-sm font-medium text-gray-700"
            >
              Investment Amount
            </label>
            <div className="flex items-center gap-4">
              <Input
                type="range"
                id="investmentAmountRange"
                name="investmentAmountRange"
                min={minInvestment.toString()}
                max={maxInvestment.toString()}
                step="100000"
                value={investmentAmount}
                onChange={handleInvestmentChange}
              />
              <Input
                type="text"
                id="investmentAmount"
                name="investmentAmount"
                min={minInvestment}
                max={maxInvestment}
                step="100000"
                placeholder="Enter amount"
                value={`$${Math.round(investmentAmount).toLocaleString()}`}
                onChange={handleInvestmentChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="flex-1 p-10">
            <div className="flex flex-col">
              <h3 className="text-md font-medium">Earnings Projection</h3>

              <div className="flex justify-between mt-4">
                <h3 className="text-md font-medium">Quarterly Payout: (2%)</h3>
                <p className="text-right">
                  ${Math.round(quarterlyPayout).toLocaleString()}
                </p>
              </div>

              <div className="flex justify-between mt-4">
                <h3 className="text-md font-medium">
                  Annual Payout ({guaranteedAnnualReturnRate * 100}%):
                </h3>
                <p className="text-right">
                  ${Math.round(annualPayout).toLocaleString()}
                </p>
              </div>
              <div className="justify-between hidden">
                <p className="text-left">Initial Investment Amount:</p>
                <p className="text-right">100% Return</p>
              </div>
              <div className="flex justify-between">
                <p className="text-left">Project Performance Bonus:</p>
                <p className="text-right">
                  ${Math.round(endOfTermBonus).toLocaleString()}
                </p>
              </div>

              <div className="flex justify-between mt-12 border-t border-dashed border-gray-300 pt-4">
                <h3 className="text-lg font-semibold">
                  Guaranteed Yield-on-Capital
                  <sup className="text-green-600 pl-1">8%</sup>
                </h3>
                <p className="text-right text-lg font-semibold">
                  $
                  {Math.round(
                    guaranteedAnnualReturnRate * investmentAmount * termYears
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
              <div className="flex justify-between mt-4">
                <h3 className="text-lg font-semibold">
                  Target Yield-on-Capital{" "}
                  <sup className="text-green-600">9.3%</sup>
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
