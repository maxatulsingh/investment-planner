import { LifeEvent } from "@/types/investment";
import { formatCurrency } from "@/lib/utils/currency";

type Props = {
  events: LifeEvent[];
  onAdd: () => void;
  onUpdate: (
    id: string,
    field: string,
    value: string | number
  ) => void;
  onDelete: (id: string) => void;
};

export default function LifeEvents({
  events,
  onAdd,
  onUpdate,
  onDelete,
}: Props) {
  return (
    <div className="mt-10 rounded-2xl bg-white p-6 shadow-xl">

      <div className="mb-6 flex items-center justify-between">

        <h3 className="text-2xl font-bold">
          🎯 Life Events
        </h3>

        <button
          onClick={onAdd}
        >
          + Add Event
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-3 text-left">
                Year
              </th>

              <th className="p-3 text-left">
                Timing
              </th>

              <th className="p-3 text-left">
                Type
              </th>

              <th className="p-3 text-left">
                Event
              </th>

              <th className="p-3 text-right">
                Amount
              </th>

              <th className="p-3 text-center">
                Delete
              </th>

            </tr>

          </thead>

          <tbody>
  {events.map((event) => (
    <tr key={event.id} className="border-t hover:bg-slate-50">

      <td className="p-3">
        <input
          type="number"
          value={event.year}
          min={1}
          onChange={(e) =>
            onUpdate(event.id, "year", Number(e.target.value))
          }
          className="w-20 rounded border p-2"
        />
      </td>

      <td className="p-3">
        <select
          value={event.timing}
          onChange={(e) =>
            onUpdate(event.id, "timing", e.target.value)
          }
          className="rounded border p-2"
        >
          <option value="Beginning">Beginning</option>
          <option value="End">End</option>
        </select>
      </td>

      <td className="p-3">
        <select
          value={event.type}
          onChange={(e) =>
            onUpdate(event.id, "type", e.target.value)
          }
          className="rounded border p-2"
        >
          <option value="Withdrawal">💸 Withdrawal</option>
          <option value="Deposit">💰 Deposit</option>
        </select>
      </td>

      <td className="p-3">
        <input
          type="text"
          value={event.title}
          onChange={(e) =>
            onUpdate(event.id, "title", e.target.value)
          }
          className="w-full rounded border p-2"
        />
      </td>

      <td className="p-3">
        <input
          type="number"
          value={event.amount}
          onChange={(e) =>
            onUpdate(event.id, "amount", Number(e.target.value))
          }
          className="w-full rounded border p-2 text-right"
        />
      </td>

      <td className="p-3 text-center">
        <button
          onClick={() => onDelete(event.id)}
          className="rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
        >
          🗑
        </button>
      </td>

    </tr>
  ))}
</tbody>

        </table>

      </div>

    </div>
  );
}