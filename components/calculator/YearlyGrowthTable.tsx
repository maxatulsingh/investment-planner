import { YearlyGrowth } from "@/types/investment";
import { formatCurrency } from "@/lib/utils/currency";

type YearlyGrowthTableProps = {
  data: YearlyGrowth[];
};

export default function YearlyGrowthTable({
  data,
}: YearlyGrowthTableProps) {
  return (
    <div className="mt-10 rounded-xl bg-white p-6 shadow-xl">
      <h3 className="mb-4 text-xl font-bold">
        Year-wise Growth
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left">
              <th className="border-b py-4 text-left">Year</th>

<th className="border-b py-4 text-right">
  Investment Value
</th>

<th className="border-b py-4 text-right">
  Interest Earned
</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.year}
                className="border-b hover:bg-slate-50"
              >
                <td className="py-3 text-right">{item.year}</td>

                <td className="py-3 text-right">
                  {formatCurrency(item.value)}
                </td>

                <td className="py-3 text-right">
                  {formatCurrency(item.interest)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}