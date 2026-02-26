import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import GlassCard from '@/components/ui/GlassCard';

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <Link to={createPageUrl('Services')}>
    <GlassCard delay={index * 0.1} className="p-8 group cursor-pointer">
      <div className="mb-6 relative">
        <motion.div
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-800/20 flex items-center justify-center border border-emerald-500/20"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-7 h-7 text-emerald-600" strokeWidth={1.5} />
        </motion.div>
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-emerald-400/10 rounded-full blur-xl group-hover:bg-emerald-400/20 transition-all duration-700" />
      </div>
      <h3 className="text-xl font-semibold text-[#0A3D2E] mb-3 tracking-tight">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      <motion.div
        className="mt-6 flex items-center gap-2 text-emerald-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      >
        <span>Explore</span>
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >{'\u2192'}</motion.span>
      </motion.div>
    </GlassCard>
    </Link>
  );
}