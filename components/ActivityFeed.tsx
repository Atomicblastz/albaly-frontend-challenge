import type { Activity } from "@/types/overview";
import { Clock, CheckCircle2, AlertTriangle } from "lucide-react";

export default function ActivityFeed({
  activities,
}: {
  activities: Activity[];
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 min-h-[280px]">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-4">
        {activities.map((a, i) => {
          let Icon = Clock;
          let iconColor = "text-blue-600";
          let iconBg = "bg-blue-100";

          if (i === 1) {
            Icon = CheckCircle2;
            iconColor = "text-green-600";
            iconBg = "bg-green-100";
          } else if (i === 2) {
            Icon = AlertTriangle;
            iconColor = "text-yellow-600";
            iconBg = "bg-yellow-100";
          }

          return (
            <li
              key={i}
              className="flex items-start space-x-3 text-sm text-gray-700"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}
              >
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>

              <div className="space-y-1">
                <div className="font-medium">{a.status}</div>
                <div className="text-gray-500">{a.description}</div>
                <div className="text-gray-400 text-xs">{a.timestamp}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
