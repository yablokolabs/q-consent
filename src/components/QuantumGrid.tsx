'use client';

import { useEffect, useRef } from 'react';

export default function QuantumGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      grid.style.background = `
        radial-gradient(circle at ${x}% ${y}%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
        linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
      `;
    };

    grid.addEventListener('mousemove', handleMouseMove);

    return () => {
      grid.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10 neon-grid opacity-30"
      style={{
        backgroundSize: '60px 60px',
        background: `
          linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
        `
      }}
    />
  );
}