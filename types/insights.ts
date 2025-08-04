export interface TopProduct {
  name: string;
  value: number;
}

export interface DropOffWeek {
  week: string;
  value: number;
}

export interface RegionPerformance {
  region: string;
  value: string;
  trend: 'up' | 'down';
}

export interface ConversionFunnel {
  visitors: number;
  productViews: number;
  addToCart: number;
  purchases: number;
}

export interface InsightsData {
  topProducts: TopProduct[];
  dropOffWeeks: DropOffWeek[];
  regionalPerformance: RegionPerformance[];
  conversionFunnel: ConversionFunnel;
}
