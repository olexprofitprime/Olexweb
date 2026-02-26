import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, NeoVault',
    quote: 'Olexweb transformed our digital presence entirely. The 3D interactive elements they created are unlike anything we\'ve seen. Our conversions went up 240%.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Marcus Rivera',
    role: 'CMO, Stellar Commerce',
    quote: 'The SEO strategy alone paid for the entire project within months. Our organic traffic tripled, and the website design is absolutely stunning.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  },
  {
    name: 'Ava Thompson',
    role: 'Founder, AuraHealth',
    quote: 'Working with Olexweb felt like having a creative partner, not just a vendor. They delivered a site that perfectly captures our brand\'s essence.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
  },
];

export default function TestimonialsSection() {
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
          <span className="text-emerald-600 text-sm font-medium tracking-[0.2em] uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D2E] mt-4 tracking-tight">
            Trusted by <span className="italic font-light">innovators</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <GlassCard key={i} delay={i * 0.12} className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-200" />
                <div>
                  <div className="text-sm font-semibold text-[#0A3D2E]">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}