"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useStore } from "@/lib/store"; // Import the store
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import { z } from "zod";
import { toast } from "sonner"; // Import sonner
import { Slider } from "@nextui-org/slider";
import { PiSpinnerGapLight } from "react-icons/pi";
import { useState, useEffect } from "react";
import { Wrapper } from "@/lib/atoms";

const FormSchema = z.object({
  investmentAmount: z
    .number()
    .min(100000, { message: "Minimum investment is €100,000." })
    .max(1000000, { message: "Maximum investment is €1,000,000." }),
});

export default function EarningsCalculatorForm() {
  const guaranteedAnnualReturnRate = 0.08;
  const projectedTargetReturnRate = 0.113;
  const termYears = 6;

  const investmentAmount = useStore((state) => state.investmentAmount);
  const setInvestmentAmount = useStore((state) => state.setInvestmentAmount);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      investmentAmount: investmentAmount,
    },
  });

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

  const [investmentDetails, setInvestmentDetails] = useState(() =>
    calculateInvestmentDetails(investmentAmount)
  );

  const updateInvestmentDetails = () => {
    setInvestmentDetails(calculateInvestmentDetails(investmentAmount));
  };

  useEffect(() => {
    updateInvestmentDetails();
  }, [investmentAmount]);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setInvestmentAmount(data.investmentAmount);
      toast.success(`Investment amount set to: ${data.investmentAmount}`);
      setIsSubmitting(false);
    }, 1000);
  };

  const Left = tw.div`flex flex-col items-center justify-center gap-2`;
  const Right = tw.div`flex flex-col items-center justify-center gap-2 bg-white rounded-lg border border-slate-300 shadow-md`;

  const { quarterlyPayout, annualPayout, endOfTermBonus, totalYieldOnCapital } =
    investmentDetails;

  return (
    <Wrapper className="grid grid-cols-1 md:grid-cols-2 p-4 rounded-lg bg-slate-100 mt-4">
      <Left>
        <h3 className="text-lg font-medium text-gray-700 ">
          Set your investment amount
        </h3>
        <p className="text-sm text-brand-p0">
          Enter an amount to see your investment return.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="investmentAmount"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-row items-center justify-between w-full gap-4 my-8">
                      <Slider
                        step={25000}
                        size="lg"
                        classNames={{
                          base: "max-w-md gap-3 bg-slate-300 rounded-full border border-slate-300 p-0 flex",
                          track: "ml-1",
                          filler: "bg-gray-900",
                        }}
                        renderThumb={(props) => (
                          <div
                            {...props}
                            className="group p-1 top-1/2 bg-white border-black border-[2px] shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing subpixel-antialiased"
                          >
                            <span className="transition-transform bg-gradient-to-br shadow-small from-secondary-100 to-secondary-500 rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" />
                          </div>
                        )}
                        maxValue={1000000}
                        minValue={100000}
                        defaultValue={investmentAmount}
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        className=""
                      />
                      <input
                        type="hidden"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                      <div className="text-2xl font-semibold tracking-tight flex items-center justify-end text-right">
                        {field.value.toLocaleString("en-EU", {
                          style: "currency",
                          currency: "EUR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </div>
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col w-full items-center justify-center">
              <Button
                type="submit"
                size="lg"
                className="rounded-full px-4 mb-2 flex items-center justify-center min-w-[150px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <PiSpinnerGapLight
                    className="animate-spin text-gray-100"
                    size={20}
                  />
                ) : (
                  "Re-Calculate"
                )}
              </Button>
              <p className="flex opacity-60 w-full text-center items-center justify-center text-xs">
                Minimum investment USD100,000
              </p>
            </div>
          </form>
        </Form>
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
              Projected Net{" "}
              <span className="font-normal">Yield-on-Capital</span>
            </h3>
            <p className="text-lg font-semibold text-right">
              $
              {Math.round(
                projectedTargetReturnRate * investmentAmount * termYears
              ).toLocaleString()}
            </p>
          </div>
        </div>
      </Right>
    </Wrapper>
  );
}
