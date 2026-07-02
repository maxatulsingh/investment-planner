import { InvestmentInput, InvestmentResult, YearlyGrowth } from "@/types/investment";

export function calculateInvestmentProjection(
  input: InvestmentInput
): InvestmentResult {
const {
  initialInvestment,
  monthlySip,
  annualStepUp,
  annualRate,
  years,
  lifeEvents,
} = input;

  const monthlyRate = annualRate / 100 / 12;

  let balance = initialInvestment;
  let currentSip = monthlySip;

  let totalInvested = initialInvestment;

  const yearlyGrowth: YearlyGrowth[] = [];

  for (let year = 1; year <= years; year++) {

const beginningEvents = lifeEvents.filter(
  (event) =>
    event.year === year &&
    event.timing === "Beginning"
);

for (const event of beginningEvents) {
  if (event.type === "Deposit") {
    balance += event.amount;
    totalInvested += event.amount;
  } else {
    balance -= event.amount;
  }
}

    const balanceAtStartOfYear = balance;

    const investedThisYear = currentSip * 12;

    for (let month = 1; month <= 12; month++) {
      balance += currentSip;
      balance *= 1 + monthlyRate;
    }

    const endEvents = lifeEvents.filter(
  (event) =>
    event.year === year &&
    event.timing === "End"
);

for (const event of endEvents) {
  if (event.type === "Deposit") {
    balance += event.amount;
    totalInvested += event.amount;
  } else {
    balance -= event.amount;
  }
}

    totalInvested += investedThisYear;

    const interestThisYear =
      balance - balanceAtStartOfYear - investedThisYear;

    const totalInterest =
      balance - totalInvested;

yearlyGrowth.push({
  year,
  monthlySip: currentSip,
  investedThisYear,
  totalInvested,
  interestThisYear,
  totalInterest,
  portfolioValue: balance,
});
    currentSip *= 1 + annualStepUp / 100;
  }

  return {
    futureValue: balance,
    totalInvestment: totalInvested,
    totalInterest: balance - totalInvested,
    yearlyGrowth,
  };
}