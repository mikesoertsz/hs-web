"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useStore } from "@/lib/store";
import { toast } from "sonner";
import PNLAnnual from "./pnl-annual";

type Props = {};

const formSchema = z.object({
  fundSize: z.number().default(5000000),
  realEstate: z.number().default(20),
  yachts: z.number().default(70),
  other: z.number().default(10),
  netRevPerYacht: z.number().default(11400),
  guaranteedReturn: z.number().default(8),
  projectedReturn: z.number().default(13),
  annualFundExpenses: z.number().default(25000),
  avgYachtValue: z.number().default(1023000),
  fundAssetFee: z.number().default(2),
  fundPerformanceFee: z.number().default(20),
});

export default function CalculatorForm({}: Props) {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: formSchema.parse({}),
  });

  const { helmShareFinances, setHelmShareFinances } = useStore((state) => ({
    helmShareFinances: state.helmShareFinances,
    setHelmShareFinances: state.setHelmShareFinances,
  }));

  // Watch for changes in form inputs and update the store
  React.useEffect(() => {
    const subscription = watch((value) => {
      setHelmShareFinances(value);
    });
    return () => subscription.unsubscribe();
    toast("Form data successfully updated!");
  }, [watch, setHelmShareFinances]);

  const onSubmit = (data: any) => {
    const totalPercentage = data.realEstate + data.yachts + data.other;
    if (totalPercentage !== 100) {
      toast("The sum of Real Estate, Yachts, and Other must be 100%");
      return;
    }
    try {
      setHelmShareFinances(data); // Update the store with form data on submit
      toast("Form data successfully updated!");
      console.log(data);
    } catch (error) {
      toast("Failed to update form data.");
      console.error(error);
    }
  };

  const formatCurrency = (value: number) => {
    return `€ ${value.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;
  };

  return (
    <Card className="w-full p-4">
      <CardHeader>
        <CardTitle>Calculator Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-3 gap-4 pb-6">
            <div className="grid gap-2">
              <Label htmlFor="fundSize">Size</Label>
              <div className="flex items-center relative">
                <span className="absolute left-2 text-gray-400">€</span>
                <Input
                  id="fundSize"
                  {...register("fundSize")}
                  type="number"
                  className="pl-6"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="fundAssetFee">Asset</Label>
              <div className="flex items-center relative">
                <span className="absolute left-2 text-gray-400">%</span>
                <Input
                  id="fundAssetFee"
                  {...register("fundAssetFee")}
                  type="number"
                  className="pl-7"
                  step={0.05}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="fundPerformanceFee">Performance</Label>
              <div className="flex items-center relative">
                <span className="absolute left-2 text-gray-400">%</span>
                <Input
                  id="fundPerformanceFee"
                  {...register("fundPerformanceFee")}
                  type="number"
                  className="pl-7"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="yachts">Yachts</Label>
              <Input id="yachts" {...register("yachts")} type="number" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="realEstate">Real Estate</Label>
              <Input
                id="realEstate"
                {...register("realEstate")}
                type="number"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="other">Other</Label>
              <Input id="other" {...register("other")} type="number" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="netRevPerYacht">Net Revenue Per Yacht</Label>
            <div className="flex items-center relative">
              <span className="absolute left-2 text-gray-400">€</span>
              <Input
                id="netRevPerYacht"
                {...register("netRevPerYacht")}
                type="number"
                className="pl-6"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="guaranteedReturn">Guaranteed Return</Label>
              <div className="flex items-center relative">
                <span className="absolute left-2 text-gray-400">%</span>
                <Input
                  id="guaranteedReturn"
                  {...register("guaranteedReturn")}
                  type="number"
                  className="pl-7"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="projectedReturn">Projected Return</Label>
              <div className="flex items-center relative">
                <span className="absolute left-2 text-gray-400">%</span>
                <Input
                  id="projectedReturn"
                  {...register("projectedReturn")}
                  type="number"
                  className="pl-7"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="annualFundExpenses">Annual Fund Expenses</Label>
            <div className="flex items-center relative">
              <span className="absolute left-2 text-gray-400">€</span>
              <Input
                id="annualFundExpenses"
                {...register("annualFundExpenses")}
                type="number"
                className="pl-6"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="avgYachtValue">Average Yacht Value</Label>
            <div className="flex items-center relative">
              <span className="absolute left-2 text-gray-400">€</span>
              <Input
                id="avgYachtValue"
                {...register("avgYachtValue")}
                type="number"
                className="pl-6"
              />
            </div>
          </div>
          <CardFooter className="w-full px-0">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </CardFooter>
        </form>
      </CardContent>
      <div className="flex w-full p-3 border border-slate-200 rounded-lg">
        <PNLAnnual />
      </div>
    </Card>
  );
}
