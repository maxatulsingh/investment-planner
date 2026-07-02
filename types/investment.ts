export type CompoundingFrequency =
  | "Monthly"
  | "Quarterly"
  | "Half-Yearly"
  | "Yearly";

export interface InvestmentInput {
  initialInvestment: number;
  monthlySip: number;
  annualStepUp: number;
  annualRate: number;
  years: number;
  frequency: CompoundingFrequency;
}

export interface YearlyGrowth {
  year: number;

  yearlyDeposit: number;

  totalDeposits: number;

  yearlyInterest: number;

  accruedInterest: number;

  balance: number;
}

export interface InvestmentResult {
  futureValue: number;

  totalInvestment: number;

  totalInterest: number;

  yearlyGrowth: YearlyGrowth[];
}