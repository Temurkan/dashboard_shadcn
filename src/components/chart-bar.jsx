import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Status,
  StatusIndicator,
  StatusLabel,
} from "@/components/ui/shadcn-io/status/index.jsx";

export const description = "A bar chart";

const chartData = [
  { week: "M", views: 186 },
  { week: "T", views: 305 },
  { week: "W", views: 237 },
  { week: "T", views: 73 },
  { week: "F", views: 209 },
  { week: "S", views: 214 },
  { week: "S", views: 300 },
];

const GLOBAL_CHART_CONFIG = {
  views: {
    label: "Views",
    color: "var(--chart-6)",
    hoverColor: "rgba(59, 130, 246, 1)",
  },
};

export function ChartBarDefault({ title, description, data, config, status }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const finalChartConfig = config || GLOBAL_CHART_CONFIG;

  return (
    <Card className='h-full flex flex-col'>
      <CardHeader>
        <CardTitle>{title || ""}</CardTitle>
        <CardDescription>{description || ""}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={finalChartConfig}>
          <BarChart accessibilityLayer data={data || chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='week'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey='views'
              fill='var(--color-views)'
              radius={2}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              shape={(props) => {
                const { x, y, width, height, index } = props;
                const isActive = index === activeIndex;

                const defaultColor = "var(--color-views)";
                const hoverColor = finalChartConfig.views?.hoverColor;

                return (
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    rx={2}
                    ry={2}
                    fill={isActive ? hoverColor : defaultColor}
                  />
                );
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm mt-auto'>
        <Status className='text-xs border-0' status='online' variant='outline'>
          <StatusIndicator />
          <StatusLabel className='geist-400'>{status || "status"}</StatusLabel>
        </Status>
      </CardFooter>
    </Card>
  );
}
