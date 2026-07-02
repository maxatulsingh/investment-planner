"use client";

import { useMemo, useState } from "react";

import { InvestmentInput } from "@/types/investment";
import { calculateInvestmentProjection } from "@/lib/calculations/investmentEngine";
import { formatCurrency } from "@/lib/utils/currency";

import InputField from "./InputField";
import ResultCard from "./ResultCard";
import GrowthChart from "./GrowthChart";
import YearlyGrowthTable from "./YearlyGrowthTable";

export default function Calculator() {
  const [form, setForm] = useState<InvestmentInput>({
    initialInvestment: 100000,
    monthlySip: 10000,
    annualStepUp: 10,
    annualRate: 12,
    years: 20,
    frequency: "Monthly",
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

      <GrowthChart data={result.yearlyGrowth} />

      {/* Year-wise Table */}

      <YearlyGrowthTable data={result.yearlyGrowth} />
    </div>
  );
}