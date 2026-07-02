import { YearlyGrowth } from "@/types/investment";
import { formatCurrency } from "@/lib/utils/currency";

type YearlyGrowthTableProps = {
  data: YearlyGrowth[];
};

export default function YearlyGrowthTable({
  data,
}: YearlyGrowthTableProps) {
  return (
    <div className="mt-10 rounded-2xl bg-white p-6 shadow-xl">
      <h3 className="mb-6 text-2xl font-bold">
        📅 Year-wise Growth
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-slate-100">
            <tr>
              <th className="border-b py-4 text-left">Year</th>

              <th className="border-b py-4 text-right">
                SIP This Year
              </th>

              <th className="border-b py-4 text-right">
                Total Invested
              </th>

              <th className="border-b py-4 text-right">
                Interest Earned
              </th>

              <th className="border-b py-4 text-right">
                Portfolio Value
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.year}
                className="border-b odd:bg-white even:bg-slate-50 hover:bg-blue-50"
              >
                <td className="py-3">
                  {item.year}
                </td>

                <td className="py-3 text-right">
                  {formatCurrency(item.yearlyDeposit)}
                </td>

                <td className="py-3 text-right">
                  {formatCurrency(item.totalDeposits)}
                </td>

                <td className="py-3 text-right text-green-600 font-medium">
                  {formatCurrency(item.accruedInterest)}
                </td>

                <td className="py-3 text-right font-bold text-blue-700">
                  {formatCurrency(item.balance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}