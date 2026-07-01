type CalculatorProps = {};

export default function Calculator({}: CalculatorProps) {
  return (
    <div className="rounded-2xl bg-white shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-6">
        Compound Interest Calculator
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="block text-sm font-medium mb-2">
            Initial Investment (₹)
          </label>

          <input
            type="number"
            placeholder="100000"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Annual Return (%)
          </label>

          <input
            type="number"
            placeholder="12"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Investment Period (Years)
          </label>

          <input
            type="number"
            placeholder="20"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Compounding
          </label>

          <select className="w-full rounded-lg border p-3">
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Half-Yearly</option>
            <option>Yearly</option>
          </select>
        </div>

      </div>

      <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700">
        Calculate
      </button>
    </div>
  );
}