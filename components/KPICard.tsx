import type { KPI } from "@/types/overview";
import { TrendingUp, Users, Gift } from "lucide-react";
import { TrendBadge } from "@/reusable/TrendBadge";

export default function KPICard({ label, value, change, icon: Icon }: KPI) {
  const isPositive = change.startsWith("+");

  let iconText = "text-gray-300";
  let iconBg = "bg-gray-100";

  if (Icon === TrendingUp) {
    iconText = "text-blue-600";
    iconBg = "bg-blue-100";
  } else if (Icon === Users) {
    iconText = "text-pink-500";
    iconBg = "bg-pink-100";
  } else if (Icon === Gift) {
    iconText = "text-green-600";
    iconBg = "bg-green-100";
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-row justify-between items-center min-h-[96px] sm:min-h-[128px] gap-x-4">
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <span className="text-sm text-gray-500 font-medium truncate -mt-2">
          {label}
        </span>
        <div className="flex items-center flex-wrap gap-2 mt-2 min-w-0">
          <span className="text-2xl font-bold truncate">{value}</span>
          <TrendBadge value={change} />
        </div>
      </div>

      <div
        className={`flex items-center justify-center rounded-lg ${iconBg} w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 ml-2`}
      >
        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${iconText}`} />
      </div>
    </div>
  );
}
