"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { YearlyGrowth } from "@/types/investment";

type GrowthChartProps = {
  data: YearlyGrowth[];
};

export default function GrowthChart({
  data,
}: GrowthChartProps) {
  return (
    <div className="mt-10 h-96 rounded-xl bg-white p-6 shadow-xl">
      <h3 className="mb-6 text-xl font-bold">
        Investment Growth
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="year" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}