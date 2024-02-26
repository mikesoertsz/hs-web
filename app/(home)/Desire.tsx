"use client";

import { InnerWrap, Wrapper } from "@/lib/atoms";
import React, { useState } from "react";

type Props = {};

export default function EarningsCalculator({}: Props) {
  const guaranteedAnnualReturnRate = 0.08;
  const projectedTargetReturnRate = 0.093;
  const termYears = 6;

  const [investmentAmount, setInvestmentAmount] = useState<number>(100000);
  const [quarterlyPayout, setQuarterlyPayout] = useState<number>(0);
  const [annualPayout, setAnnualPayout] = useState<number>(0);
  const [endOfTermBonus, setEndOfTermBonus] = useState<number>(0);
  const [totalYieldOnCapital, setTotalYieldOnCapital] = useState<number>(0);

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
            <input
              type="range"
              id="investmentAmountRange"
              name="investmentAmountRange"
              min="100000"
              max="1000000"
              step="100000"
              value={investmentAmount}
              onChange={handleInvestmentChange}
              className="mt-1 block w-full"
            />
            <input
              type="number"
              id="investmentAmount"
              name="investmentAmount"
              min="100000"
              max="1000000"
              step="100000"
              placeholder="Enter amount"
              value={investmentAmount}
              onChange={handleInvestmentChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex-1 p-4">
            <div className="flex flex-col">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Earnings Summary</h3>
                <p>
                  Guaranteed Return (6 years):{" "}
                  {guaranteedAnnualReturnRate * 100}%
                </p>
                <p>
                  Projected Target Return: {projectedTargetReturnRate * 100}%
                  annualized
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Quarterly Payouts</h3>
                <p>${quarterlyPayout.toFixed(2)} per quarter</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Annual Payouts</h3>
                <p>${annualPayout.toFixed(2)} per year</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">End of Term</h3>
                <p>Initial Investment Amount: Returned in full after 6 years</p>
                <p>Project Performance Bonus: ${endOfTermBonus.toFixed(2)}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Total Yield-on-Capital
                </h3>
                <p>${totalYieldOnCapital.toFixed(2)}</p>
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
