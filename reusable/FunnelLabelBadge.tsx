export function FunnelLabelBadge({
  label,
  isLowest,
}: {
  label: string;
  isLowest: boolean;
}) {
  const bg = isLowest
    ? "bg-yellow-100 text-yellow-700"
    : "bg-blue-100 text-blue-700";

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${bg}`}>
      {label}
    </span>
  );
}
