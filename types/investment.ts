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

export interface InvestmentResult {
  futureValue: number;
  totalInterest: number;
  totalInvestment: number;
}