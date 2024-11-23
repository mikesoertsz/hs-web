"use client"

import { useStore } from "@/lib/store"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  guaranteedReturn: {
    label: "Guaranteed Return",
    color: "hsl(var(--chart-1))",
  },
  performanceReturn: {
    label: "Performance Return",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function FundReturnGauge() {
  const { guaranteedReturn, projectedReturn } = useStore((state) => state.helmShareFinances)

  const performanceReturn = projectedReturn - guaranteedReturn
  const chartData = [
    { name: "Guaranteed Return", value: guaranteedReturn },
    { name: "Performance Return", value: performanceReturn },
  ]

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Fund Return Gauge</CardTitle>
        <CardDescription>Live Total Return</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {projectedReturn.toFixed(2)}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Total Return
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="value"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-guaranteedReturn)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="value"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-performanceReturn)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Live updates of total return
        </div>
      </CardFooter>
    </Card>
  )
}
