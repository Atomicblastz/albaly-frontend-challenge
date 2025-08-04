import "./globals.css";
import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export const metadata = {
  title: "Albaly Dashboard",
  description: "Business insights dashboard for Albaly.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50 text-gray-900">
        <Sidebar />
        <main className="flex flex-col flex-1 overflow-y-auto">
          <Topbar />
          <div className="responsive-container">{children}</div>
        </main>
      </body>
    </html>
  );
}
