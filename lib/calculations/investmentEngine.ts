import { InvestmentInput, InvestmentResult } from "@/types/investment";

export function calculateInvestmentProjection(
  input: InvestmentInput
): InvestmentResult {
  const {
    initialInvestment,
    monthlySip,
    annualStepUp,
    annualRate,
    years,
  } = input;

  const monthlyRate = annualRate / 100 / 12;

  let balance = initialInvestment;

  let currentSip = monthlySip;

  let totalInvestment = initialInvestment;

  let previousYearBalance = initialInvestment;

  const yearlyGrowth = [];

  for (let year = 1; year <= years; year++) {
    const investedThisYear = currentSip * 12;

    for (let month = 1; month <= 12; month++) {
      balance += currentSip;
      balance *= 1 + monthlyRate;
    }

    totalInvestment += investedThisYear;

    const yearlyInterest = balance - previousYearBalance - investedThisYear;

    const totalInterest = balance - totalInvestment;

    yearlyGrowth.push({
      year,

      yearlyDeposit: investedThisYear,

      totalDeposits: totalInvestment,

      yearlyInterest,

      accruedInterest: totalInterest,

      balance,
    });

    previousYearBalance = balance;

    currentSip *= 1 + annualStepUp / 100;
  }

  return {
    futureValue: balance,

    totalInvestment,

    totalInterest: balance - totalInvestment,

    yearlyGrowth,
  };
}