"use client";

import { useEffect, useState, useRef } from "react";
import { trustMetrics } from "@/data/services";

function AnimatedCounter({ value, label, description }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    const steps = 50;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <div ref={ref} className="text-center">
      {/* Big Number - Brand Blue */}
      <p className="text-5xl lg:text-6xl font-bold text-[#085689] mb-3 tracking-tighter">
        {count}
        {suffix}
      </p>

      {/* Label */}
      <p className="text-xl font-semibold text-slate-900 mb-1">
        {label}
      </p>

      {/* Description */}
      <p className="text-sm text-slate-600 max-w-[280px] mx-auto">
        {description}
      </p>
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="py-24 lg:py-32 bg-transparent mb-[200px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-md font-medium tracking-wider text-[#085689] uppercase mb-4">
            Our Track Record
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 text-balance">
            Numbers that speak for themselves
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            A decade of building trust through exceptional service and lasting partnerships.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {trustMetrics.map((metric, idx) => (
            <AnimatedCounter
              key={idx}
              value={metric.value}
              label={metric.label}
              description={metric.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}