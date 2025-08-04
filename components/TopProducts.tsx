import type { TopProduct } from "@/types/insights";
import { TrendBadge } from "@/reusable/TrendBadge";

export default function TopProducts({ products }: { products: TopProduct[] }) {
  const max = Math.max(...products.map((p) => p.value));
  const min = Math.min(...products.map((p) => p.value));
  const base = products[1]?.value ?? 1;

  const percent = ((products[0].value - base) / base) * 100;
  const isIncrease = percent >= 0;

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Top-Selling Products</h2>
        <TrendBadge value={`${isIncrease ? "+" : ""}${percent.toFixed(1)}%`} />
      </div>

      <div>
        <p className="mb-4 text-sm text-gray-700">
          {products[0].name} outperformed by {`${percent.toFixed(1)}%`} this
          month.
        </p>
      </div>

      <div className="space-y-4">
        {products.map((p, i) => {
          const product = (
            <>
              <div className="flex justify-between text-sm space-y-2">
                <span>{p.name}</span>
                <span>{p.value.toLocaleString()}</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded">
                <div
                  className="h-2 bg-blue-500 rounded"
                  style={{ width: `${(p.value / max) * 100}%` }}
                />
              </div>
            </>
          );

          return i === 0 ? (
            <div key={i} className="bg-gray-100 p-3 rounded-md">
              {product}
            </div>
          ) : (
            <div key={i} className="p-3 rounded-md">
              {product}
            </div>
          );
        })}
      </div>
    </div>
  );
}
