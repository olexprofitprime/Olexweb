import { motion } from 'framer-motion';
import { Award, Rocket } from 'lucide-react';

export default function ScrollRevealPortrait() {
  return (
    <div className="relative flex justify-center items-center" style={{ perspective: '900px' }}>
      {/* Glow aura behind photo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        {/* Card frame */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20 border border-white/40"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)' }}
        >
          <div className="relative w-[340px] h-[460px] overflow-hidden rounded-3xl">
            <motion.img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69987e110fa8b47933049be5/6070c19f5_WhatsAppImage2026-01-26at063858.jpg"
              alt="Olaitan Adebayo"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-full object-cover object-top"
            />
            {/* Gradient mask to fade out background edges */}
            <div className="absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 75% 90% at 50% 30%, transparent 55%, rgba(245,245,243,0.85) 80%, rgba(245,245,243,1) 100%)',
              }}
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F3] via-[#F5F5F3]/70 to-transparent" />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />
          </div>

          {/* Name badge at bottom */}
          <div className="absolute bottom-5 left-4 right-4">
            <div className="bg-white/25 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/40 shadow-lg">
              <p className="text-[#0A3D2E] font-bold text-base">Olaitan Adebayo</p>
              <p className="text-emerald-700 text-xs font-medium">Founder & Lead Strategist, Olexweb</p>
            </div>
          </div>
        </div>

        {/* Floating badge – years */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-4 -right-5 bg-white rounded-2xl shadow-xl p-4 border border-emerald-100 z-20"
        >
          <div className="text-2xl font-black text-[#0A3D2E]">3+</div>
          <div className="text-[10px] text-gray-400 leading-tight">Years of<br />Experience</div>
        </motion.div>

        {/* Floating badge – 20+ projects */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
          className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl p-3 border border-emerald-100 z-20"
        >
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <div className="text-xs font-semibold text-[#0A3D2E]">20+ Projects</div>
              <div className="text-[10px] text-gray-400">Successfully Delivered</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}