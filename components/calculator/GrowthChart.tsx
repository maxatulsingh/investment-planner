"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { YearlyGrowth } from "@/types/investment";
import { formatCurrency } from "@/lib/utils/currency";

type GrowthChartProps = {
  data: YearlyGrowth[];
};

function formatAxis(value: number) {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(1)}Cr`;
  }

  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(1)}L`;
  }

  return `₹${Math.round(value)}`;
}

export default function GrowthChart({
  data,
}: GrowthChartProps) {
  return (
    <div className="mt-10 rounded-2xl bg-white p-6 shadow-xl">
      <h3 className="mb-6 text-2xl font-bold">
        📈 Investment Growth
      </h3>

      <div className="h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="growth"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.25}
            />

            <XAxis dataKey="year" />

            <YAxis tickFormatter={formatAxis} />

            <Tooltip
              formatter={(value) =>
                formatCurrency(Number(value))
              }
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              fill="url(#growth)"
              animationDuration={900}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}