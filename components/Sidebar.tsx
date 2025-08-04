"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart2, LogOut } from "lucide-react";

const navItems = [
  { name: "Overview", path: "/overview", icon: <Home size={20} /> },
  { name: "Insights", path: "/insights", icon: <BarChart2 size={20} /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-200 hidden md:flex flex-col justify-between">
      <div className="space-y-6">
        <div className="p-6 font-bold text-xl text-white">Albaly Insights</div>
        <nav className="px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-3 py-2 transition text-white hover:bg-gray-600 ${
                pathname === item.path
                  ? "bg-gray-600 font-semibold transition"
                  : ""
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-4">
        <button className="flex items-center justify-center gap-2 text-sm text-white px-3 py-2 rounded-md w-full bg-blue-500 hover:bg-blue-400 transition">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
