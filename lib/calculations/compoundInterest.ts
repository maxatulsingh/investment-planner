import {
  InvestmentInput,
  InvestmentResult,
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

  const futureValue =
    input.principal *
    Math.pow(1 + r / n, n * input.years);

  return {
    futureValue,
    totalInvestment: input.principal,
    totalInterest: futureValue - input.principal,
  };
}