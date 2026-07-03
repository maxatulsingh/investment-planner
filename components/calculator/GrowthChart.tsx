"use client";

import EventMarker from "./EventMarker";
import {
  Area,
  ComposedChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
  ReferenceDot,
  Legend,
} from "recharts";

import {
  YearlyGrowth,
  LifeEvent,
} from "@/types/investment";

import { formatCurrency } from "@/lib/utils/currency";
import CustomTooltip from "./CustomTooltip";

type GrowthChartProps = {
  data: YearlyGrowth[];
  events: LifeEvent[];
};

function formatAxis(value: number) {
  const abs = Math.abs(value);

  if (abs >= 10000000) {
    return `₹${(value / 10000000).toFixed(1)}Cr`;
  }

  if (abs >= 100000) {
    return `₹${(value / 100000).toFixed(1)}L`;
  }

  return `₹${Math.round(value)}`;
}

export default function GrowthChart({
  data,
  events,
}: GrowthChartProps) {
  const hasNegative = data.some(
    (item) => item.portfolioValue < 0
  );

  return (
    <div className="mt-10 rounded-2xl bg-white p-6 shadow-xl">
      <h3 className="mb-6 text-2xl font-bold">
        📈 Investment Growth
      </h3>

      <div className="h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              opacity={0.2}
            />

            <XAxis
              dataKey="year"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              tickFormatter={formatAxis}
              tick={{ fontSize: 12 }}
            />

            {hasNegative && (
              <ReferenceLine
                y={0}
                stroke="#64748b"
                strokeDasharray="5 5"
              />
            )}

            <Legend />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="portfolioValue"
              name="Portfolio Value"
              stroke={hasNegative ? "#dc2626" : "#16a34a"}
              fill={hasNegative ? "#ef4444" : "#22c55e"}
              fillOpacity={0.25}
              strokeWidth={3}
              animationDuration={900}
            />

            <Line
              type="monotone"
              dataKey="totalInvested"
              name="Total Invested"
              stroke="#2563eb"
              strokeWidth={3}
              dot={false}
              animationDuration={900}
            />

            {events.map((event) => {
              const point = data.find(
                (d) => d.year === event.year
              );

              if (!point) return null;

              return (
                <ReferenceDot
  key={event.id}
  x={event.year}
  y={point.portfolioValue}
  shape={<EventMarker payload={event} />}
/>
              );
            })}

          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}