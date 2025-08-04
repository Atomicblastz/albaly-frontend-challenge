import type { RegionPerformance } from "@/types/insights";
import { TrendBadge } from "@/reusable/TrendBadge";

export default function RegionalStats({
  regions,
}: {
  regions: RegionPerformance[];
}) {
  const parsed = regions.map((r) => ({
    ...r,
    numeric: parseFloat(r.value.replace(/[^0-9.]/g, "")),
  }));

  const max = Math.max(...parsed.map((r) => r.numeric));
  const min = Math.min(...parsed.map((r) => r.numeric));
  const percent = ((max - min) / min) * 100;
  const isIncrease = max > min;

  const topRegion = parsed.find((r) => r.numeric === max);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 min-h-[280px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Regional Performance</h2>
        <TrendBadge value={`${isIncrease ? "+" : ""}${percent.toFixed(1)}%`} />
      </div>

      {topRegion && (
        <p className="mb-4 text-sm text-gray-700">
          {topRegion.region.toUpperCase()} region showing strongest growth this
          quarter.
        </p>
      )}

      <div className="space-y-4">
        {parsed.map((r, i) => {
          const barColor = r.numeric === max ? "bg-green-500" : "bg-blue-500";

          return (
            <div key={i}>
              <div className="flex justify-between text-sm font-medium">
                <span>{r.region}</span>
                <span>{r.value}</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded">
                <div
                  className={`h-2 rounded ${barColor}`}
                  style={{ width: `${(r.numeric / max) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
