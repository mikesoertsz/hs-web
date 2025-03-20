"use client";

import { useState } from "react";
import { Slider } from "@nextui-org/slider";

interface CharterRate {
  season: string;
  rate: number;
}

interface ROICalculatorProps {
  initialInvestment: number;
  charterRates: CharterRate[];
}

export default function ROICalculator({
  initialInvestment,
  charterRates,
}: ROICalculatorProps) {
  const [investment, setInvestment] = useState(initialInvestment);
  const [weeksPerSeason, setWeeksPerSeason] = useState(
    charterRates.map(() => 4)
  );

  const calculateAnnualRevenue = () => {
    return charterRates.reduce(
      (total, rate, index) => total + rate.rate * weeksPerSeason[index],
      0
    );
  };

  const calculateROI = () => {
    const annualRevenue = calculateAnnualRevenue();
    const operatingCosts = investment * 0.1; // Estimated annual operating costs
    const netIncome = annualRevenue - operatingCosts;
    return (netIncome / investment) * 100;
  };

  const formatCurrency = (value: number) => {
    return value?.toLocaleString() || "0";
  };

  return (
    <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
      <div>
        <label className="block text-sm font-medium mb-2">
          Investment Amount (€)
        </label>
        <Slider
          size="sm"
          step={100000}
          minValue={500000}
          maxValue={5000000}
          defaultValue={investment}
          value={investment}
          onChange={(value) => setInvestment(value as number)}
          className="max-w-md"
        />
        <p className="mt-1 text-sm text-gray-600">
          €{formatCurrency(investment)}
        </p>
      </div>

      {charterRates.map((rate, index) => (
        <div key={rate.season}>
          <label className="block text-sm font-medium mb-2">
            {rate.season} Season Weeks (€{formatCurrency(rate.rate)}/week)
          </label>
          <Slider
            size="sm"
            step={1}
            minValue={0}
            maxValue={16}
            defaultValue={weeksPerSeason[index]}
            value={weeksPerSeason[index]}
            onChange={(value) => {
              const newWeeks = [...weeksPerSeason];
              newWeeks[index] = value as number;
              setWeeksPerSeason(newWeeks);
            }}
            className="max-w-md"
          />
          <p className="mt-1 text-sm text-gray-600">
            {weeksPerSeason[index]} weeks
          </p>
        </div>
      ))}

      <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium">Annual Revenue</h4>
            <p className="text-lg font-semibold">
              €{formatCurrency(calculateAnnualRevenue())}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium">Projected ROI</h4>
            <p className="text-lg font-semibold">
              {calculateROI().toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
