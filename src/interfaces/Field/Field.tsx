import { ProductionPhase } from "../Phase/ProductionPhase";

export interface Field {
    fieldName: string;
    pricingType: string;
    price: number;
    hours: number;
    total: number;
    phases: ProductionPhase[];
  }