"use client";

import KPICard from "@/components/KPICard";
import ActivityFeed from "@/components/ActivityFeed";
import PerformanceChart from "@/components/PerformanceChart";
import { useEffect, useState } from "react";
import {
  OverviewData,
  KPIFromAPI,
  Activity,
  MonthlyPerformance,
} from "@/types/overview";
import { TrendingUp, Users, Gift, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  Gift,
};

export default function OverviewPage() {
  const [data, setData] = useState<OverviewData | null>(null);

  useEffect(() => {
    fetch("/api/overview")
      .then((res) => res.json())
      .then(
        (json: {
          kpis: KPIFromAPI[];
          activities: Activity[];
          monthlyPerformance: MonthlyPerformance;
        }) => {
          const transformed: OverviewData = {
            ...json,
            kpis: json.kpis.map((kpi) => ({
              ...kpi,
              icon: iconMap[kpi.icon] ?? TrendingUp,
            })),
          };
          setData(transformed);
        }
      );
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Overview</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {data.kpis.map((item, idx) => (
          <KPICard key={idx} {...item} />
        ))}
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <ActivityFeed activities={data.activities} />
        <PerformanceChart data={data.monthlyPerformance} />
      </div>
    </div>
  );
}
