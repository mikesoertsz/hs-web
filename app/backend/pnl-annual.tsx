import React from "react";
import { useStore } from "@/lib/store";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

export default function PNLAnnual({}: Props) {
  const { helmShareFinances } = useStore();
  const {
    fundSize,
    guaranteedReturn,
    netRevPerYacht,
    yachts,
    avgYachtValue,
    annualFundExpenses,
    projectedReturn,
    fundAssetFee,
    fundPerformanceFee,
  } = helmShareFinances;

  const annualDividend = Math.floor((fundSize * guaranteedReturn) / 100);
  const totalYachtValue = Math.ceil((yachts / 100) * fundSize);
  const numberOfYachts = Math.ceil(totalYachtValue / avgYachtValue);
  const actualYachtValue = numberOfYachts * avgYachtValue;
  const annualRevenue = Math.floor(
    avgYachtValue * (projectedReturn / 100) * numberOfYachts
  );
  const remainingFundBalance = fundSize - actualYachtValue;
  const annualExpenses = annualFundExpenses;
  const grossMargin = annualRevenue - annualDividend - annualExpenses;

  const managementFee = Math.floor((fundSize * fundAssetFee) / 100);
  const performanceFee =
    grossMargin >= 100000
      ? Math.floor((grossMargin * fundPerformanceFee) / 100)
      : 0;
  const totalFirmRevenue = managementFee + performanceFee;
  const netMargin = grossMargin - totalFirmRevenue;

  const taxRate = 0.28;
  const annualSalaryBeforeTax = managementFee;
  const annualSalaryAfterTax = Math.floor(
    annualSalaryBeforeTax * (1 - taxRate)
  );
  const monthlySalaryBeforeTax = Math.floor(annualSalaryBeforeTax / 12);
  const monthlySalaryAfterTax = Math.floor(annualSalaryAfterTax / 12);

  const annualYoC = ((annualRevenue - annualExpenses) / fundSize) * 100;

  return (
    <div className="flex flex-col items-start justify-start gap-2 w-full text-sm">
      <Tabs defaultValue="yachts" className="w-full">
        <TabsList>
          <TabsTrigger value="yachts">Yachts</TabsTrigger>
          <TabsTrigger value="realEstate">Real Estate</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
        <TabsContent value="yachts" className="flex flex-col gap-1">
          <h3 className="font-semibold">Annual P&L</h3>
          <div className="flex justify-between w-full">
            <span>Number of Yachts</span>
            <span>{numberOfYachts}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Total Fund Size</span>
            <span>€ {fundSize.toLocaleString()}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Total Yacht Value</span>
            <span>€ {actualYachtValue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Remaining Fund Balance</span>
            <span>€ {remainingFundBalance.toLocaleString()}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Annual Revenue</span>
            <span>€ {annualRevenue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Annual Dividend</span>
            <span>€ {annualDividend.toLocaleString()}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Annual Expenses</span>
            <span>€ {annualExpenses.toLocaleString()}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Gross Margin</span>
            <span>€ {grossMargin.toLocaleString()}</span>
          </div>
          <Separator className="w-full my-3" />
          <h3 className="font-semibold">Firm Take</h3>
          <div className="flex justify-between w-full">
            <span>Management Fee ({fundAssetFee}% of Fund Size)</span>
            <span>€ {managementFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Performance Fee ({fundPerformanceFee}% of Gross Margin)</span>
            <span>€ {performanceFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Total Firm Revenue</span>
            <span>€ {totalFirmRevenue.toLocaleString()}</span>
          </div>
          <Separator className="w-full my-3" />
          <h3 className="font-semibold">Margins</h3>
          <div className="flex justify-between w-full">
            <span>Net Cashflow</span>
            <span
              className={`${netMargin < 0 ? "text-red-500 font-semibold" : ""}`}
            >
              € {netMargin.toLocaleString()}
            </span>
          </div>
          <Separator className="w-full my-3" />
          <h3 className="font-semibold">Salary Calculation</h3>
          <div className="flex justify-between w-full">
            <span>Annual Salary Before Tax</span>
            <span>€ {annualSalaryBeforeTax.toLocaleString()}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Annual Salary After Tax</span>
            <span>€ {annualSalaryAfterTax.toLocaleString()}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Monthly Salary Before Tax</span>
            <span>€ {monthlySalaryBeforeTax.toLocaleString()}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Monthly Salary After Tax</span>
            <span>€ {monthlySalaryAfterTax.toLocaleString()}</span>
          </div>
        </TabsContent>
        <TabsContent value="realEstate">
          {/* Real Estate content will go here */}
        </TabsContent>
        <TabsContent value="other">
          {/* Other content will go here */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
