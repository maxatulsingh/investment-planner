import {
  InvestmentInput,
  InvestmentResult,
  YearlyGrowth,
} from "@/types/investment";

const periodsPerYear = {
  Monthly: 12,
  Quarterly: 4,
  "Half-Yearly": 2,
  Yearly: 1,
};

export function calculateCompoundInterest(
  input: InvestmentInput
): InvestmentResult {
  const n = periodsPerYear[input.frequency];
  const r = input.annualRate / 100;

  const yearlyGrowth: YearlyGrowth[] = [];

  for (let year = 1; year <= input.years; year++) {
    const value =
      input.principal *
      Math.pow(1 + r / n, n * year);

    yearlyGrowth.push({
      year,
      value,
      interest: value - input.principal,
    });
  }

  const futureValue =
    yearlyGrowth[yearlyGrowth.length - 1].value;

  return {
    futureValue,
    totalInvestment: input.principal,
    totalInterest: futureValue - input.principal,
    yearlyGrowth,
  };
}