"use client";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import * as SliderPrimitive from "@radix-ui/react-slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function InvestmentAmountSlider({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  );
}
