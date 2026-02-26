import { motion } from 'framer-motion';
import { TrendingUp, Globe, Zap, Shield, Eye, BarChart3 } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const infographics = [
  {
    icon: Globe,
    stat: '75%',
    label: 'of users judge credibility by web design',
    bar: 75,
  },
  {
    icon: TrendingUp,
    stat: '94%',
    label: 'of first impressions are design-related',
    bar: 94,
  },
  {
    icon: Zap,
    stat: '3s',
    label: 'is the max load time users will tolerate',
    bar: 60,
  },
  {
    icon: Shield,
    stat: '88%',
    label: 'won\'t return after a bad UX experience',
    bar: 88,
  },
  {
    icon: Eye,
    stat: '38%',
    label: 'stop engaging with unattractive layouts',
    bar: 38,
  },
  {
    icon: BarChart3,
    stat: '200%',
    label: 'ROI increase with proper SEO strategy',
    bar: 95,
  },
];

export default function InfographicSection() {
  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 text-sm font-medium tracking-[0.2em] uppercase">Why It Matters</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D2E] mt-4 tracking-tight">
            The design <span className="italic font-light">advantage</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm">
            Data-driven insights that prove great design isn't a luxury — it's a business necessity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {infographics.map((item, i) => (
            <GlassCard key={i} delay={i * 0.1} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-emerald-600" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-[#0A3D2E]">{item.stat}</div>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.label}</p>
                </div>
              </div>
              <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.bar}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[#0A3D2E] to-emerald-500"
                />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}