import CardOrder from "@/components/card-order.jsx";
import { ChartBarDefault } from "@/components/chart-bar.jsx";
import { ChartBarMultiple } from "@/components/chart-barto.jsx";
import { ChartLineMultiple } from "@/components/chart-line.jsx";
import { ChartPieDonut } from "@/components/chart-pie.jsx";
import { ChartAreaAxes } from "@/components/chartinter.jsx";
import { DataTableDemo } from "@/components/datatable.jsx";
import { Button } from "@/components/ui/button.jsx";

import React from "react";

const chartConfig = [
  {
    id: 1,
    title: "Website View",
    description: "Last Campaign Performance",
    chartData: [
      { week: "M", views: 186 },
      { week: "T", views: 305 },
      { week: "W", views: 237 },
      { week: "T", views: 73 },
      { week: "F", views: 209 },
      { week: "S", views: 214 },
      { week: "S", views: 300 },
    ],
    status: "campaign sent 2 days ago",
  },
  {
    id: 2,
    title: "Daily Sales",
    description: "15% increase in today sales",
    chartData: [
      { week: "M", views: 124 },
      { week: "T", views: 276 },
      { week: "W", views: 390 },
      { week: "T", views: 130 },
      { week: "F", views: 200 },
      { week: "S", views: 109 },
      { week: "S", views: 260 },
    ],
    status: "updated 4 min ago",
  },
  {
    id: 3,
    title: "Completed Tasks",
    description: "Last Campaign Performance",
    chartData: [
      { week: "M", views: 190 },
      { week: "T", views: 60 },
      { week: "W", views: 341 },
      { week: "T", views: 10 },
      { week: "F", views: 207 },
      { week: "S", views: 239 },
      { week: "S", views: 304 },
    ],
    status: "just updated",
  },
];

export default function Dashboard() {
  return (
    <main className='bg-white p-6 rounded-2xl '>
      <div className='relative w-full min-h-[263px] h-[263px] rounded-lg overflow-hidden'>
        <img
          src='public/infocard.jpg'
          alt='Info card'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 p-8 text-white'>
          <h2 className=' text-3xl geist-600'>Build Amazing Teams</h2>
          <p className='text-lg geist-400 max-w-[525px] mt-4'>
            Connect with diverse talent and create inclusive workspaces that
            drive innovation. Discover how our platform helps you build stronger
            teams.
          </p>
          <Button className={"mt-8"}>Get Started</Button>
        </div>
      </div>
      <div className='flex justify-between mt-6 gap-6 items-stretch'>
        {chartConfig.map((chart) => (
          <div key={chart.id} className='w-full flex-1'>
            <ChartBarDefault
              title={chart.title}
              description={chart.description}
              data={chart.chartData}
              status={chart.status}
            />
          </div>
        ))}
        <div className='w-full flex-1'>
          <CardOrder />
        </div>
      </div>
      <DataTableDemo />
      <div className='grid grid-cols-2 mt-24 gap-6'>
        <ChartAreaAxes />
        <ChartLineMultiple />
        <ChartPieDonut />
        <ChartBarMultiple />
      </div>
    </main>
  );
}
