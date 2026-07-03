import { YearlyGrowth } from "@/types/investment";
import { formatCurrency } from "@/lib/utils/currency";

type Props = {
  data: YearlyGrowth[];
};

export default function YearlyGrowthTable({ data }: Props) {
  return (
    <div className="mt-10 rounded-2xl bg-white p-6 shadow-xl">
      <h3 className="mb-6 text-2xl font-bold">
        📅 Year-wise Growth
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Year</th>

              <th className="p-3 text-right">
                Invested This Year
              </th>

              <th className="p-3 text-right">
                Total Invested
              </th>

              <th className="p-3 text-right">
                Interest This Year
              </th>

              <th className="p-3 text-right">
                Total Interest
              </th>

              <th className="p-3 text-right">
                Portfolio Value
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => {
              const isInterestNegative =
                item.interestThisYear < 0;

              const isTotalInterestNegative =
                item.totalInterest < 0;

              const isPortfolioNegative =
                item.portfolioValue < 0;

              return (
                <tr
                  key={item.year}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-3">{item.year}</td>

                  <td className="p-3 text-right">
                    {formatCurrency(item.investedThisYear)}
                  </td>

                  <td className="p-3 text-right font-medium">
                    {formatCurrency(item.totalInvested)}
                  </td>

                  <td
                    className={`p-3 text-right font-medium ${
                      isInterestNegative
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {formatCurrency(item.interestThisYear)}
                  </td>

                  <td
                    className={`p-3 text-right font-semibold ${
                      isTotalInterestNegative
                        ? "text-red-700"
                        : "text-green-700"
                    }`}
                  >
                    {formatCurrency(item.totalInterest)}
                  </td>

                  <td
                    className={`p-3 text-right text-lg font-bold ${
                      isPortfolioNegative
                        ? "text-red-700"
                        : "text-green-700"
                    }`}
                  >
                    {formatCurrency(item.portfolioValue)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}