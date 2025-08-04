"use client";

import { useEffect, useState } from "react";
import TopProducts from "@/components/TopProducts";
import DropOffChart from "@/components/DropOffChart";
import RegionalStats from "@/components/RegionalStats";
import FunnelChart from "@/components/FunnelChart";
import type { InsightsData } from "@/types/insights";

export default function InsightsPage() {
  const [data, setData] = useState<InsightsData | null>(null);

  useEffect(() => {
    fetch("/api/insights")
      .then((res) => res.json())
      .then((json: InsightsData) => setData(json));
  }, []);

  if (!data) return <div>Loading insights...</div>;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TopProducts products={data.topProducts} />
        <DropOffChart weeks={data.dropOffWeeks} />
        <RegionalStats regions={data.regionalPerformance} />
        <FunnelChart funnel={data.conversionFunnel} />
      </div>
    </div>
  );
}
