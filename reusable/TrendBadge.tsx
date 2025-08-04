import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function TrendBadge({ value }: { value: string }) {
  const isPositive = value.startsWith("+");
  const numeric = parseFloat(value.replace("+", "").replace("-", ""));

  let textColor = "";
  let bgColor = "";
  const Arrow = isPositive ? ArrowUpRight : ArrowDownRight;

  if (numeric <= 5) {
    textColor = "text-yellow-600";
    bgColor = "bg-yellow-100";
  } else if (isPositive) {
    textColor = "text-green-600";
    bgColor = "bg-green-100";
  } else {
    textColor = "text-red-600";
    bgColor = "bg-red-100";
  }

  return (
    <span
      className={`flex items-center text-sm font-medium px-2 py-1 rounded-full ${textColor} ${bgColor}`}
    >
      <Arrow size={16} />
      <span className="ml-1">{value.replace("+", "").replace("-", "")}</span>
    </span>
  );
}
