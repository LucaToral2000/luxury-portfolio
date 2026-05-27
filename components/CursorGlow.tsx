"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: any) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl transition-transform duration-150"
      style={{
        left: position.x - 130,
        top: position.y - 130,
      }}
    />
  );
}