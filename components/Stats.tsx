import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          STATS.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = stat.duration;
            const incrementTime = duration / (end / 100); // Approximate steps
            
            const timer = setInterval(() => {
              start += Math.ceil(end / 100);
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts(prev => {
                const newCounts = [...prev];
                newCounts[index] = start;
                return newCounts;
              });
            }, incrementTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#0f0f23] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-600/50">
          {STATS.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-5xl font-bold text-[#22c55e] mb-2 font-mono">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-lg font-medium text-gray-300 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;