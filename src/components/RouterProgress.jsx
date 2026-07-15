import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Thin red top-bar that animates on every route change.
 * Purely visual — gives navigation a "loading" feel without artificial delays.
 */
export default function RouterProgress() {
  const { pathname } = useLocation();
  const [width, setWidth] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const timers = useRef([]);

  function clearAll() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  useEffect(() => {
    clearAll();

    // Reset to zero instantly, then animate forward
    setWidth(0);
    setOpacity(1);

    timers.current.push(setTimeout(() => setWidth(55), 20));   // quick rush
    timers.current.push(setTimeout(() => setWidth(78), 280));  // slow crawl
    timers.current.push(setTimeout(() => setWidth(92), 520));  // almost there
    timers.current.push(setTimeout(() => setWidth(100), 680)); // complete
    timers.current.push(setTimeout(() => setOpacity(0), 780)); // fade out
    timers.current.push(setTimeout(() => setWidth(0), 1000));  // reset

    return clearAll;
  }, [pathname]);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[2px] bg-red-500 pointer-events-none"
      style={{
        width: `${width}%`,
        opacity,
        transition: [
          width === 0 ? "none" : "width 260ms ease-out",
          "opacity 180ms ease",
        ].join(", "),
        boxShadow: opacity > 0 ? "0 0 8px 1px rgba(239,68,68,0.55)" : "none",
      }}
    />
  );
}
