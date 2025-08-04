import type { DropOffWeek } from "@/types/insights";
import { TrendBadge } from "@/reusable/TrendBadge";

export default function DropOffChart({ weeks }: { weeks: DropOffWeek[] }) {
  const totalUsers = 10000;

  const weeksWithRates = weeks.map((week) => ({
    ...week,
    rate: (week.value / totalUsers) * 100,
  }));

  const maxWeek = weeksWithRates.reduce(
    (prev, curr) => (curr.rate > prev.rate ? curr : prev),
    weeksWithRates[0]
  );

  const first = weeksWithRates[0]?.rate ?? 0;
  const last = weeksWithRates[weeksWithRates.length - 1]?.rate ?? 0;
  const diff = last - first;
  const percentChange = Math.abs(diff).toFixed(1);
  const isIncrease = diff > 0;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 min-h-">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Customer Drop-Off</h2>
        <TrendBadge value={`${isIncrease ? "+" : ""}${percentChange}%`} />
      </div>

      <p className="mb-4 text-sm text-gray-700">
        {maxWeek.week} saw a {maxWeek.rate.toFixed(1)}% increase in user churn.
      </p>

      <ul className="space-y-4 text-sm">
        {weeksWithRates.map((week, i) => {
          const isMax = week.week === maxWeek.week;
          const bulletColor = isMax ? "bg-red-500" : "bg-blue-500";

          return (
            <li key={i} className="flex items-start gap-2">
              <span className={`w-2 h-2 mt-1 rounded-full ${bulletColor}`} />
              {maxWeek.week === week.week ? (
                <span className="font-medium">
                  {week.week}: {week.rate.toFixed(1)}% churn rate.
                </span>
              ) : (
                <span>
                  {week.week}: {week.rate.toFixed(1)}% churn rate.
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
