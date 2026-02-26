import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Globe, MousePointer2, Search, BarChart3, ScanLine, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import FooterSection from '@/components/home/FooterSection';
import GlassCard from '@/components/ui/GlassCard';
import MarqueeStrip from '@/components/home/MarqueeStrip';

const services = [
  {
    icon: Globe,
    title: 'Full Web Design',
    tagline: 'From concept to launch — fully bespoke.',
    description: 'We design and build complete websites from the ground up, tailored to your brand identity and business goals. Every pixel is intentional.',
    deliverables: ['Custom responsive design', 'CMS integration', 'Performance optimization', 'Cross-browser compatibility', 'Accessibility (WCAG 2.1)', 'Launch support'],
    image: 'https://images.unsplash.com/photo-1545670723-196ed0954986?w=700&h=500&fit=crop',
  },
  {
    icon: MousePointer2,
    title: 'Interactive Web Design',
    tagline: 'Experiences that stop the scroll.',
    description: 'WebGL animations, 3D environments, fluid transitions, and micro-interactions that transform your website into an unforgettable digital world.',
    deliverables: ['3D CGI elements', 'WebGL / Three.js scenes', 'Motion design system', 'Scroll-based animations', 'Particle effects', 'Interactive infographics'],
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=700&h=500&fit=crop',
  },
  {
    icon: Search,
    title: 'Website Audit',
    tagline: 'Diagnose. Fix. Dominate.',
    description: 'A deep-dive technical audit uncovering performance bottlenecks, UX friction points, accessibility gaps, and missed conversion opportunities.',
    deliverables: ['Core Web Vitals analysis', 'UX/UI friction mapping', 'Accessibility review', 'Conversion rate audit', 'Competitor benchmarking', 'Actionable report'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop',
  },
  {
    icon: BarChart3,
    title: 'SEO & Ranking',
    tagline: 'Page one isn\'t luck — it\'s strategy.',
    description: 'Advanced SEO strategies built on data: keyword architecture, on-page optimization, link building, and content frameworks that drive organic growth.',
    deliverables: ['Keyword research & mapping', 'On-page optimization', 'Schema markup', 'Link acquisition strategy', 'Content optimization', 'Monthly rank tracking'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&h=500&fit=crop',
  },
  {
    icon: ScanLine,
    title: 'Crawling & Indexing',
    tagline: 'Make search engines love you.',
    description: 'Technical SEO mastery: sitemap architecture, crawl budget management, canonical tags, structured data, and index coverage optimization.',
    deliverables: ['Crawl error resolution', 'Sitemap optimization', 'Robots.txt audit', 'Canonical strategy', 'Structured data / JSON-LD', 'Index coverage monitoring'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=500&fit=crop',
  },
  {
    icon: Sparkles,
    title: 'Brand Identity',
    tagline: 'Identities that are impossible to ignore.',
    description: 'Full brand identity systems — from logo design and typography to color systems and brand guidelines that keep your visual language consistent.',
    deliverables: ['Logo design (3 concepts)', 'Color & typography system', 'Brand guidelines doc', 'Icon & illustration style', 'Social media kit', 'Brand voice guidelines'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&h=500&fit=crop',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#F5F5F3] overflow-x-hidden">
      <style>{`* { font-family: 'Inter', sans-serif; } ::selection { background: rgba(52,211,153,0.2); }`}</style>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #0A3D2E 1px, transparent 1px), radial-gradient(circle at 80% 20%, #34D399 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link to={createPageUrl('Home')} className="inline-flex items-center gap-2 text-xs text-emerald-600 tracking-widest uppercase mb-6 hover:text-emerald-700 transition-colors">
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold text-[#0A3D2E] tracking-tighter leading-[0.9] mb-6">
              Services built<br />
              <span className="italic font-light text-emerald-600">for impact</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Every service we offer is engineered to deliver measurable results — from first impression to long-term growth.
            </p>
          </motion.div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Services Detail */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10 ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                <img src={service.image} alt={service.title} className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D2E]/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-white font-semibold text-sm">{service.title}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? 'md:order-1' : ''}>
                <span className="text-emerald-600 text-xs font-medium tracking-[0.2em] uppercase">{service.tagline}</span>
                <h2 className="text-3xl font-bold text-[#0A3D2E] mt-2 mb-4 tracking-tight">{service.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6 text-sm">{service.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {service.deliverables.map((d, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
                <Link to={createPageUrl('Contact')}>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#0A3D2E] to-emerald-700 text-white text-sm font-medium rounded-full flex items-center gap-2 shadow-lg shadow-emerald-900/15"
                  >
                    Get a Quote <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="p-12 text-center" hover={false}>
            <h2 className="text-3xl font-bold text-[#0A3D2E] mb-4">Not sure which service you need?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm">Book a free 30-minute strategy call and we'll map out the perfect plan for your goals.</p>
            <Link to={createPageUrl('Contact')}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-gradient-to-r from-[#0A3D2E] to-emerald-700 text-white font-semibold rounded-full shadow-xl text-sm"
              >
                Book Free Strategy Call
              </motion.button>
            </Link>
          </GlassCard>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}