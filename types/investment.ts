export type CompoundingFrequency =
  | "Monthly"
  | "Quarterly"
  | "Half-Yearly"
  | "Yearly";

export type EventType =
  | "Deposit"
  | "Withdrawal";

export type EventTiming =
  | "Beginning"
  | "End";

export interface LifeEvent {
  id: string;

  year: number;

  timing: "Beginning" | "End";

  type: "Deposit" | "Withdrawal";

  eventType: LifeEventType;

  title: string;

  amount: number;
}

export interface InvestmentInput {
  initialInvestment: number;
  monthlySip: number;
  annualStepUp: number;
  annualRate: number;
  years: number;
  frequency: CompoundingFrequency;

  lifeEvents: LifeEvent[];
}

export interface YearlyGrowth {
  year: number;

  monthlySip: number;

  investedThisYear: number;

  totalInvested: number;

  interestThisYear: number;

  totalInterest: number;

  portfolioValue: number;
}

export interface InvestmentResult {
  futureValue: number;

  totalInvestment: number;

  totalInterest: number;

  yearlyGrowth: YearlyGrowth[];
}

export type LifeEventType =
  | "Education"
  | "House"
  | "Wedding"
  | "Car"
  | "Vacation"
  | "Retirement"
  | "Bonus"
  | "Other";