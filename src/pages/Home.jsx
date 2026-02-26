import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Globe, Sparkles, MousePointer2, Search, BarChart3, ScanLine } from 'lucide-react';
import HeroScene from '@/components/three/HeroScene';
import Navbar from '@/components/home/Navbar';
import ServiceCard from '@/components/home/ServiceCard';
// Services cards link to Services page
import MarqueeStrip from '@/components/home/MarqueeStrip';
import StatsSection from '@/components/home/StatsSection';
import ProcessFlow from '@/components/home/ProcessFlow';
import PortfolioShowcase from '@/components/home/PortfolioShowcase';
import InfographicSection from '@/components/home/InfographicSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import FooterSection from '@/components/home/FooterSection';

const services = [
  {
    icon: Globe,
    title: 'Full Web Design',
    description: 'End-to-end web design from concept to deployment. Responsive, accessible, and built for performance.',
  },
  {
    icon: MousePointer2,
    title: 'Interactive Web Design',
    description: 'Immersive 3D experiences, WebGL animations, and micro-interactions that captivate and convert.',
  },
  {
    icon: Search,
    title: 'Website Audit',
    description: 'Comprehensive analysis of performance, accessibility, UX bottlenecks, and conversion killers.',
  },
  {
    icon: BarChart3,
    title: 'SEO & Ranking',
    description: 'Data-driven SEO strategies that push you to page one and keep you there with sustained organic growth.',
  },
  {
    icon: ScanLine,
    title: 'Crawling & Indexing',
    description: 'Technical SEO crawling, sitemap optimization, and structured data to ensure maximum search visibility.',
  },
  {
    icon: Sparkles,
    title: 'Brand Identity',
    description: 'Striking visual identities that resonate — logos, typography systems, and comprehensive brand guidelines.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F3] overflow-x-hidden">
      {/* Custom cursor glow */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        ::selection { background: rgba(52,211,153,0.2); }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#F5F5F3_75%)] z-[1]" />

        <div className="relative z-[2] text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-[#0A3D2E]/70 tracking-wider uppercase">Now accepting projects for Q2 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#0A3D2E] tracking-tighter leading-[0.9]"
          >
            We craft
            <br />
            <span className="italic font-light text-emerald-600">immersive</span>
            <br />
            digital worlds
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 text-base md:text-lg text-gray-400 max-w-lg mx-auto leading-relaxed"
          >
            Olexweb designs immersive 3D CGI websites, striking brand identities, and digital experiences that redefine what's possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to={createPageUrl('Contact')}>
              <motion.span
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(10,61,46,0.25)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0A3D2E] to-emerald-700 text-white font-semibold rounded-full shadow-xl shadow-emerald-900/20 text-sm cursor-pointer"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <Link to={createPageUrl('Work')}>
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex px-8 py-4 bg-white/60 backdrop-blur-md border border-white/70 text-[#0A3D2E] font-medium rounded-full shadow-sm text-sm hover:bg-white/80 transition-colors cursor-pointer"
              >
                View Our Work
              </motion.span>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-[#0A3D2E]/20 flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1.5 h-3 bg-[#0A3D2E]/30 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===================== MARQUEE ===================== */}
      <MarqueeStrip />

      {/* ===================== SERVICES ===================== */}
      <section id="services" className="py-28 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-emerald-600 text-sm font-medium tracking-[0.2em] uppercase">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D2E] mt-4 tracking-tight">
              Services built for <span className="italic font-light">growth</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={i} index={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <StatsSection />

      {/* ===================== INFOGRAPHICS ===================== */}
      <InfographicSection />

      {/* ===================== PROCESS ===================== */}
      <section id="process">
        <ProcessFlow />
      </section>

      {/* ===================== PORTFOLIO ===================== */}
      <section id="work">
        <PortfolioShowcase />
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <TestimonialsSection />

      {/* ===================== CTA ===================== */}
      <section id="contact">
        <CTASection />
      </section>

      {/* ===================== FOOTER ===================== */}
      <FooterSection />
    </div>
  );
}