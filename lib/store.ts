import { create } from "zustand";

interface PromoCode {
  discount: number;
  redeemed: number;
  limit: number;
  startDate: Date;
  endDate: Date;
}

interface StoreState {
  offerEndDateAIBeginner: number;
  setOfferEndDate: (date: number) => void;
  promoCodes: Record<string, PromoCode>;
  getEndDateForPromo: (promoCode: string) => number | null;
}

export const useStore = create((set, get) => ({
  offerEndDateAIBeginner: new Date("Feb 7, 2024 00:00:00").getTime(),
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
    const promo = (get() as StoreState).promoCodes[promoCode.toUpperCase()];
    return promo ? promo.endDate.getTime() : null;
  },
}));
