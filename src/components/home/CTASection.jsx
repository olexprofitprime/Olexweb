import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D2E] via-emerald-800 to-[#0A3D2E]" />
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(52,211,153,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(52,211,153,0.3) 0%, transparent 40%)'
          }} />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-8 right-8 md:right-16"
            >
              <Sparkles className="w-6 h-6 text-emerald-300/40" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to elevate your<br />
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent">digital presence?</span>
            </h2>
            <p className="text-emerald-200/70 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Let's create something extraordinary together. Your brand deserves a digital experience that turns heads and drives results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Contact')}>
                <motion.span
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(52,211,153,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A3D2E] rounded-full font-semibold shadow-xl cursor-pointer"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex px-8 py-4 border border-emerald-400/30 text-emerald-200 rounded-full font-medium hover:bg-white/5 transition-all cursor-pointer"
                >
                  Book a Free Audit
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}