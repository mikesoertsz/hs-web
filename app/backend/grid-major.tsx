"use client";

import { useStore } from "@/lib/store";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import tw from "tailwind-styled-components";

const GridItem = tw.div`
  aspect-square border rounded-md flex items-start justify-start p-4 flex-col
`;

export default function GridMajor() {
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

  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Key points</CardTitle>
        <CardDescription>Blah</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-2">
        <div className="grid grid-cols-2 gap-2 w-full">
          <GridItem>
            <Label htmlFor="fundAssetFee">Net Margin</Label>
            <h4
              className={`font-semibold text-2xl tracking-tighter pt-3 ${
                netMargin < 0 ? "text-red-500" : ""
              }`}
            >
              € {netMargin.toLocaleString()}
            </h4>
          </GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
          <GridItem></GridItem>
        </div>
      </CardContent>
    </Card>
  );
}
