import type { LucideIcon } from "lucide-react";

export interface KPIFromAPI {
  label: string;
  value: string;
  change: string;
  icon: string;
}

export interface KPI {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export interface Activity {
  status: string;
  description: string;
  timestamp: string;
}

export interface MonthlyPerformance {
  revenue: string;
  percentChange: number;
}

export interface OverviewData {
  kpis: KPI[];
  activities: Activity[];
  monthlyPerformance: MonthlyPerformance;
}
