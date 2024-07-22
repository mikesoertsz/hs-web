"use client"
 
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import React from "react";

type Props = {};

const chartConfig = {
  past: {
    label: "past",
    color: "#2563eb", // Blue color
  },
  future: {
    label: "future",
    color: "#FFD700", // Gold color
  },
  
} satisfies ChartConfig

export default function InterestMarketChart({}: Props) {
  const chartData = [
    { year: "2018", value: 6.5, type: "past" },
    { year: "2023", value: 8.5, type: "past" },
    { year: "2027", value: 12.33, type: "future" },
    { year: "2032", value: 19.78, type: "future" },
  ];
  return <>
    <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <XAxis dataKey="year" />
        <Bar dataKey="value" fill={chartConfig.past.color} radius={4} />
      </BarChart>
    </ChartContainer>
  </>;
}
