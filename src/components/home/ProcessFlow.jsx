import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const steps = [
  { icon: Search, title: 'Discovery', desc: 'Deep-dive into your brand, audience, and goals through strategic analysis.', num: '01' },
  { icon: Palette, title: 'Design', desc: 'Crafting immersive visual identities with 3D elements and fluid interactions.', num: '02' },
  { icon: Code2, title: 'Develop', desc: 'Building with cutting-edge tech for blazing performance and SEO dominance.', num: '03' },
  { icon: Rocket, title: 'Launch', desc: 'Deploying, optimizing, and scaling your digital presence globally.', num: '04' },
];

export default function ProcessFlow() {
  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-emerald-600 text-sm font-medium tracking-[0.2em] uppercase">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D2E] mt-4 tracking-tight">
            From vision to <span className="italic font-light">reality</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200" />

          {steps.map((step, i) => (
            <GlassCard key={i} delay={i * 0.15} className="p-8 text-center relative">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A3D2E] to-emerald-600 flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-emerald-500/20"
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <step.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </motion.div>
              <span className="text-[80px] font-black text-emerald-500/5 absolute top-2 right-4 leading-none select-none">{step.num}</span>
              <h3 className="text-lg font-semibold text-[#0A3D2E] mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}