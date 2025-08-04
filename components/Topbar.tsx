"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Hexagon } from "lucide-react";

export default function Topbar() {
  const [hasImage, setHasImage] = useState(false);

  const mockupName = "Jonathan Doe";

  const [bgColor, setBgColor] = useState("bg-gray-400");

  useEffect(() => {
    const colors = [
      "bg-red-400",
      "bg-blue-400",
      "bg-green-400",
      "bg-yellow-400",
      "bg-purple-400",
      "bg-pink-400",
      "bg-indigo-400",
      "bg-teal-400",
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);

    const img = new window.Image();
    img.src = "/avatars/user.png";
    img.onload = () => setHasImage(true);
    img.onerror = () => setHasImage(false);
  }, []);

  return (
    <header className="flex items-center justify-between pl-6 border-b border-gray-200 bg-white h-20">
      <h1 className="text-lg font-semibold">Albaly Insights</h1>

      <div className="flex items-center gap-6 pr-6">
        <div className="flex items-center gap-1 px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-md font-medium">
          <Hexagon size={14} className="text-gray-500" />
          Star
        </div>

        {hasImage ? (
          <Image
            src="/avatars/user.png"
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
        ) : (
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold ${bgColor}`}
          >
            {mockupName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
        )}
      </div>
    </header>
  );
}
