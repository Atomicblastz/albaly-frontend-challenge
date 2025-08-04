import type { ConversionFunnel } from "@/types/insights";
import { TrendBadge } from "@/reusable/TrendBadge";
import { FunnelLabelBadge } from "@/reusable/FunnelLabelBadge";

export default function FunnelChart({ funnel }: { funnel: ConversionFunnel }) {
  const steps = [
    { label: "Visitors", value: funnel.visitors },
    { label: "Product Views", value: funnel.productViews },
    { label: "Add to Cart", value: funnel.addToCart },
    { label: "Purchases", value: funnel.purchases },
  ];

  const max = Math.max(...steps.map((s) => s.value));
  const min = Math.min(...steps.map((s) => s.value));
  const percent = ((funnel.purchases / funnel.visitors) * 100).toFixed(1);
  const isIncrease = funnel.purchases > funnel.visitors;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 min-h-[280px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Conversion Funnel</h2>
        <TrendBadge value={`${isIncrease ? "+" : ""}${percent}%`} />
      </div>

      <div>
        <p className="mb-4 text-sm text-gray-700">
          Checkout to purchase conversion{" "}
          {isIncrease ? "increased" : "decreased"} by {percent}%.
        </p>
      </div>

      <div className="space-y-4">
        {steps.map((step, i) => {
          const barColor = step.value === min ? "bg-yellow-400" : "bg-blue-500";

          return (
            <div key={i}>
              <div className="flex justify-between text-sm font-medium space-y-2">
                <FunnelLabelBadge
                  label={step.label.toUpperCase()}
                  isLowest={step.value === min}
                />
                <span>{step.value.toLocaleString()}</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded">
                <div
                  className={`h-2 rounded ${barColor}`}
                  style={{ width: `${(step.value / max) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
