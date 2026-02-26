import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', sublabel: 'Across 12 industries' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', sublabel: 'Based on post-project surveys' },
  { value: 3, suffix: 'x', label: 'Avg. Traffic Growth', sublabel: 'Within first 6 months' },
  { value: 40, suffix: '+', label: 'Awards Won', sublabel: 'Design & innovation' },
];

export default function StatsSection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#0A3D2E 1px, transparent 1px), linear-gradient(90deg, #0A3D2E 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 text-sm font-medium tracking-[0.2em] uppercase">Impact & Results</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D2E] mt-4 tracking-tight">Numbers that speak</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center relative group"
            >
              <div className="relative p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/50 hover:bg-white/60 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#0A3D2E] to-emerald-600 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-semibold text-[#0A3D2E] mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.sublabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}