"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button.jsx"

export const description = "An area chart with axes"

const chartData = [
  { month: "January", expenses: 186, sales: 80 },
  { month: "February", expenses: 305, sales: 200 },
  { month: "March", expenses: 237, sales: 120 },
  { month: "April", expenses: 73, sales: 190 },
  { month: "May", expenses: 209, sales: 130 },
  { month: "June", expenses: 800, sales: 900 },
  { month: "July", expenses: 800, sales: 600 },
  { month: "August", expenses: 305, sales: 200 },
  { month: "September", expenses: 237, sales: 120 },
  { month: "October", expenses: 73, sales: 190 },
  { month: "November", expenses: 209, sales: 130 },
  { month: "December", expenses: 214, sales: 140 },
]

const chartConfig = {
  expenses: {
    label: "Expenses",
    color: "var(--chart-6)",
  },
  sales: {
    label: "Sales",
    color: "var(--chart-2)",
  },
}

export function ChartAreaAxes() {
  return (
    <Card>
      <CardHeader className='flex justify-between'>
        <div>
          <CardTitle>Sales vs Expenses</CardTitle>
          <CardDescription>Monthly revenue vs expenses</CardDescription>
        </div>
        <Button variant='outline'>View Report</Button>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey='sales'
              type='natural'
              fill='var(--color-sales)'
              fillOpacity={0.4}
              stroke='var(--color-sales)'
              stackId='a'
            />
            <Area
              dataKey='expenses'
              type='natural'
              fill='var(--color-expenses)'
              fillOpacity={0.4}
              stroke='var(--color-expenses)'
              stackId='a'
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
