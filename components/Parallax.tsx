"use client";

import { useEffect, useRef } from "react";

export default function Parallax({
  children,
  speed = 0.15,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const y = window.scrollY;

      ref.current.style.transform = `translateY(${y * speed}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return <div ref={ref}>{children}</div>;
}