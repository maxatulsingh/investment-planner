"use client";

import { useMemo, useState } from "react";
import GrowthChart from "./GrowthChart";
import { calculateCompoundInterest } from "@/lib/calculations/compoundInterest";
import { formatCurrency } from "@/lib/utils/currency";
import { InvestmentInput } from "@/types/investment";

import InputField from "./InputField";
import ResultCard from "./ResultCard";

export default function Calculator() {
  const [form, setForm] = useState<InvestmentInput>({
    principal: 100000,
    annualRate: 12,
    years: 20,
    frequency: "Monthly",
  });

  const result = useMemo(() => {
    return calculateCompoundInterest(form);
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
console.log(result.yearlyGrowth);
  return (
    <div className="rounded-2xl bg-white p-8 shadow-xl">

      <h2 className="mb-8 text-3xl font-bold text-slate-900">
        Compound Interest Calculator
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <InputField
          label="Initial Investment (₹)"
          value={form.principal}
          onChange={(value) => updateField("principal", value)}
        />

        <InputField
          label="Annual Return (%)"
          value={form.annualRate}
          onChange={(value) => updateField("annualRate", value)}
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
              updateField(
                "frequency",
                e.target.value as InvestmentInput["frequency"]
              )
            }
            className="w-full rounded-lg border border-slate-300 p-3 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Half-Yearly">Half-Yearly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>

      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">

        <ResultCard
          title="Future Value"
          value={formatCurrency(result.futureValue)}
        />

        <ResultCard
          title="Interest Earned"
          value={formatCurrency(result.totalInterest)}
        />

        <ResultCard
          title="Total Investment"
          value={formatCurrency(result.totalInvestment)}
        />

        <GrowthChart data={result.yearlyGrowth} />

      </div>

    </div>
  );
}