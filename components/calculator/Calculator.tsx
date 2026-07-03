"use client";

import { useMemo, useState } from "react";
import LifeEvents from "./LifeEvents";
import { InvestmentInput } from "@/types/investment";
import { calculateInvestmentProjection } from "@/lib/calculations/investmentEngine";
import { formatCurrency } from "@/lib/utils/currency";

import InputField from "./InputField";
import ResultCard from "./ResultCard";
import GrowthChart from "./GrowthChart";
import YearlyGrowthTable from "./YearlyGrowthTable";


export default function Calculator() 
{
const [form, setForm] = useState<InvestmentInput>({
  initialInvestment: 100000,
  monthlySip: 10000,
  annualStepUp: 10,
  annualRate: 12,
  years: 20,
  frequency: "Monthly",

lifeEvents: [
  {
  id: crypto.randomUUID(),
  year: 10,
  timing: "End",
  type: "Withdrawal",
  eventType: "Education",
  title: "Child Education",
  amount: 100000,
},
],
});


const result = useMemo(() => {
  return calculateInvestmentProjection(form);
}, [form]);

  function updateField<K extends keyof InvestmentInput>(
    field: K,
    value: InvestmentInput[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function sortLifeEvents(events: InvestmentInput["lifeEvents"]) {
  return [...events].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }

    // Beginning events before End events in the same year
    if (a.timing === b.timing) {
      return 0;
    }

    return a.timing === "Beginning" ? -1 : 1;
  });
}

  function addLifeEvent() {
 const newEvent = {
  id: crypto.randomUUID(),
  year: 1,
  timing: "Beginning" as const,
  type: "Withdrawal" as const,
  eventType: "Education" as const,
  title: "Child Education",
  amount: 100000,
};

  setForm((prev) => ({
    ...prev,
    lifeEvents: sortLifeEvents([
  ...prev.lifeEvents,
  newEvent,
]),
  }));
}

function updateLifeEvent(
  id: string,
  field: string,
  value: string | number
) {
  setForm((prev) => ({
    ...prev,
    lifeEvents: sortLifeEvents(
  prev.lifeEvents.map((event) =>
    event.id === id
      ? {
          ...event,
          [field]: value,
        }
      : event
  )
),
  }));
}

function deleteLifeEvent(id: string) {
  setForm((prev) => ({
    ...prev,
    lifeEvents: prev.lifeEvents.filter(
      (event) => event.id !== id
    ),
  }));
}

  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        Investment Growth Calculator
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <InputField
          label="Initial Investment (₹)"
          value={form.initialInvestment}
          onChange={(value) => updateField("initialInvestment", value)}
        />

        <InputField
          label="Annual Return (%)"
          value={form.annualRate}
          onChange={(value) => updateField("annualRate", value)}
        />

        <InputField
          label="Monthly SIP (₹)"
          value={form.monthlySip}
          onChange={(value) => updateField("monthlySip", value)}
        />

        <InputField
          label="Annual Step-up (%)"
          value={form.annualStepUp}
          onChange={(value) => updateField("annualStepUp", value)}
        />

        <InputField
          label="Investment Period (Years)"
          value={form.years}
          onChange={(value) => updateField("years", value)}
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Compounding
          </label>

          <select
            value={form.frequency}
            onChange={(e) =>
              updateField("frequency", e.target.value as InvestmentInput["frequency"])
            }
            className="w-full rounded-lg border border-slate-300 p-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Half-Yearly">Half-Yearly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
      </div>

      {/* Result Cards */}

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <ResultCard
          title="Future Value"
          value={formatCurrency(result.futureValue)}
          icon="💰"
        />

        <ResultCard
          title="Interest Earned"
          value={formatCurrency(result.totalInterest)}
          icon="📈"
        />

        <ResultCard
          title="Total Invested"
          value={formatCurrency(result.totalInvestment)}
          icon="🏦"
        />
      </div>

      {/* Growth Chart */}

      <GrowthChart
  data={result.yearlyGrowth}
  events={form.lifeEvents}
/>

      {/* Year-wise Table */}

      <YearlyGrowthTable data={result.yearlyGrowth} />
      <LifeEvents
  events={form.lifeEvents}
  onAdd={addLifeEvent}
  onUpdate={updateLifeEvent}
  onDelete={deleteLifeEvent}
/>
    </div>
  );
}