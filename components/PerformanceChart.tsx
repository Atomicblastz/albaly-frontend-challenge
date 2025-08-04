import type { MonthlyPerformance } from "@/types/overview";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function PerformanceChart({
  data,
}: {
  data: MonthlyPerformance;
}) {
  const chartData = [
    { month: "Jan", value: 5200 },
    { month: "Feb", value: 6100 },
    { month: "Mar", value: 8200 },
    { month: "Apr", value: 7000 },
    { month: "May", value: 6900 },
    { month: "Jun", value: 3600 },
    { month: "Jul", value: 5900 },
  ];

  const isPositive = data.percentChange >= 0;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 min-h-[280px]">
      <h2 className="text-lg font-semibold mb-4">Monthly Performance</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="month" tick={{ fill: "#000000", fontSize: 14 }} />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="text-gray-600 font-medium">
          Total Revenue: <span className="text-gray-900">{data.revenue}</span>
        </span>

        <span
          className={`flex items-center font-medium ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}
          <span className="ml-1">{data.percentChange}% vs last period</span>
        </span>
      </div>
    </div>
  );
}
