import { create } from "zustand";

interface PromoCode {
  discount: number;
  redeemed: number;
  limit: number;
  startDate: Date;
  endDate: Date;
}

interface HelmShareFinances {
  fundSize: number;
  realEstate: number;
  yachts: number;
  other: number;
  netRevPerYacht: number;
  guaranteedReturn: number;
  projectedReturn: number;
  annualFundExpenses: number;
  yachtPrice: number;
  avgYachtValue: number;
  annualDividend: number;
  totalYachtValue: number;
  numberOfYachts: number;
  actualYachtValue: number;
  annualRevenue: number;
  remainingFundBalance: number;
  grossMargin: number;
  managementFee: number;
  performanceFee: number;
  totalFirmRevenue: number;
  netMargin: number;
  annualSalaryBeforeTax: number;
  annualSalaryAfterTax: number;
  monthlySalaryBeforeTax: number;
  monthlySalaryAfterTax: number;
  fundAssetFee: number;
  fundPerformanceFee: number;
}

interface StoreState {
  offerEndDate: number;
  offerEndDateAIBeginner: number;
  setOfferEndDate: (date: number) => void;
  promoCodes: Record<string, PromoCode>;
  getEndDateForPromo: (promoCode: string) => number | null;
  accredited: boolean;
  setAccredited: (status: boolean) => void;
  investmentAmount: number;
  setInvestmentAmount: (amount: number) => void;
  helmShareFinances: HelmShareFinances;
  setHelmShareFinances: (data: Partial<HelmShareFinances>) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  offerEndDateAIBeginner: new Date("Feb 7, 2024 00:00:00").getTime(),
  offerEndDate: new Date("Feb 7, 2024 00:00:00").getTime(),
  setOfferEndDate: (date: number) => set({ offerEndDate: date }),
  promoCodes: {
    EARLY: {
      discount: 0.2,
      redeemed: 0,
      limit: 100,
      startDate: new Date("2024-01-01T00:00:00Z"),
      endDate: new Date("2024-02-15T23:59:59Z"),
    },
    JOAO: {
      discount: 0.5,
      redeemed: 0,
      limit: 30,
      startDate: new Date("2024-01-01T00:00:00Z"),
      endDate: new Date("2024-02-15T23:59:59Z"),
    },
    JOAC: {
      discount: 0.2,
      redeemed: 0,
      limit: 30,
      startDate: new Date("2024-01-01T00:00:00Z"),
      endDate: new Date("2024-02-15T23:59:59Z"),
    },
    PORTOEXPATS: {
      discount: 0.75,
      redeemed: 0,
      limit: 20,
      startDate: new Date("2024-01-01T00:00:00Z"),
      endDate: new Date("2024-02-21T23:59:59Z"),
    },
  },
  getEndDateForPromo: (promoCode: string) => {
    const promo = get().promoCodes[promoCode.toUpperCase()];
    return promo ? promo.endDate.getTime() : null;
  },
  accredited: false,
  setAccredited: (status: boolean) => set({ accredited: status }),
  investmentAmount: 100000,
  setInvestmentAmount: (amount: number) => set({ investmentAmount: amount }),
  helmShareFinances: {
    fundSize: 5000000,
    yachtPrice: 1023000,
    avgYachtValue: 1023000,
    realEstate: 20,
    yachts: 70,
    other: 10,
    netRevPerYacht: 11400,
    guaranteedReturn: 8,
    projectedReturn: 13,
    annualFundExpenses: 25000,
    annualDividend: 0,
    totalYachtValue: 0,
    numberOfYachts: 0,
    actualYachtValue: 0,
    annualRevenue: 0,
    remainingFundBalance: 0,
    grossMargin: 0,
    managementFee: 0,
    performanceFee: 0,
    totalFirmRevenue: 0,
    netMargin: 0,
    annualSalaryBeforeTax: 0,
    annualSalaryAfterTax: 0,
    monthlySalaryBeforeTax: 0,
    monthlySalaryAfterTax: 0,
    fundAssetFee: 2,
    fundPerformanceFee: 20,
  },
  setHelmShareFinances: (data: Partial<HelmShareFinances>) =>
    set((state) => ({
      helmShareFinances: { ...state.helmShareFinances, ...data },
    })),
}));
