'use client';

import { useEffect, useState } from 'react';

export default function DynamicBackground() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
    

      {/* Mouse Follow Glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle 800px at ${position.x}% ${position.y}%, 
              rgba(120, 182, 217, 0.05) 0%,
              rgba(120, 182, 217, 0.08) 50%,
              transparent 75%
            )
          `,
        }}
      />
    </div>
  );
}