import { formatCurrency } from "@/lib/utils/currency";

type CustomTooltipProps = {
  active?: boolean;
  payload?: any[];
  label?: number;
};

export default function CustomTooltip({
  active,
  payload,
  label,
}: CustomTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  const data = payload[0].payload;

  return (
    <div className="rounded-xl border bg-white p-4 shadow-xl min-w-[240px]">
      <h4 className="mb-3 text-lg font-bold">
        📅 Year {label}
      </h4>

      <div className="space-y-2 text-sm">

        <div className="flex justify-between">
          <span>💼 Portfolio</span>
          <span className="font-semibold">
            {formatCurrency(data.portfolioValue)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>💰 Invested</span>
          <span className="font-semibold">
            {formatCurrency(data.totalInvested)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>📈 Interest</span>
          <span
            className={
              data.totalInterest >= 0
                ? "font-semibold text-green-600"
                : "font-semibold text-red-600"
            }
          >
            {formatCurrency(data.totalInterest)}
          </span>
        </div>

      </div>
    </div>
  );
}