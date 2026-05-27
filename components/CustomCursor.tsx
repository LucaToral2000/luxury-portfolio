"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    const addHover = () => setIsHovering(true);

    const removeHover = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll("a, button, .group");

    hoverElements.forEach((el) => {

      el.addEventListener("mouseenter", addHover);

      el.addEventListener("mouseleave", removeHover);

    });

    return () => {

      window.removeEventListener("mousemove", moveCursor);

      hoverElements.forEach((el) => {

        el.removeEventListener("mouseenter", addHover);

        el.removeEventListener("mouseleave", removeHover);

      });

    };

  }, []);

  return (

    <div
      className={`
        fixed
        top-0
        left-0
        pointer-events-none
        z-[9999]
        rounded-full
        border
        border-white/70
        backdrop-blur-sm
        transition-all
        duration-300
        ease-out
        mix-blend-difference
        ${isHovering
          ? "w-16 h-16"
          : "w-5 h-5"
        }
      `}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
      }}
    />

  );

}