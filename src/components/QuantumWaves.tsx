'use client';

import { useEffect, useRef } from 'react';

export default function QuantumWaves() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('path');
    let animationId: number;

    const animate = (timestamp: number) => {
      paths.forEach((path, index) => {
        const offset = timestamp * 0.001 + index * 0.5;
        const amplitude = 30 + Math.sin(offset) * 10;
        const frequency = 0.02 + index * 0.005;
        
        let pathData = `M 0 ${svg.clientHeight / 2}`;
        
        for (let x = 0; x <= svg.clientWidth; x += 10) {
          const y = svg.clientHeight / 2 + Math.sin(x * frequency + offset) * amplitude;
          pathData += ` L ${x} ${y}`;
        }
        
        path.setAttribute('d', pathData);
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-5"
      style={{ opacity: 0.3 }}
    >
      <defs>
        <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00ffff" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00ff88" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00ffff" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path
        fill="none"
        stroke="url(#wave1)"
        strokeWidth="2"
        className="opacity-60"
      />
      <path
        fill="none"
        stroke="url(#wave2)"
        strokeWidth="1.5"
        className="opacity-40"
      />
    </svg>
  );
}