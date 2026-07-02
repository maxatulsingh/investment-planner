export type CompoundFrequency =
  | "Monthly"
  | "Quarterly"
  | "Half-Yearly"
  | "Yearly";

export interface InvestmentInput {
  principal: number;
  annualRate: number;
  years: number;
  frequency: CompoundFrequency;
}

export interface YearlyGrowth {
  year: number;
  value: number;
  interest: number;
}

export interface InvestmentResult {
  futureValue: number;
  totalInterest: number;
  totalInvestment: number;
  yearlyGrowth: YearlyGrowth[];
}