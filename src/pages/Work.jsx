import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import FooterSection from '@/components/home/FooterSection';
import GlassCard from '@/components/ui/GlassCard';

const categories = ['All', 'Web Design', 'Interactive', 'SEO', 'Brand Identity'];

const projects = [
  { title: 'NeoVault Finance', category: 'Interactive', tags: ['3D Web', 'WebGL', 'React'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop', result: '+240% conversions', year: '2025' },
  { title: 'Stellar Commerce', category: 'SEO', tags: ['SEO', 'Full Web Design', 'CRO'], image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop', result: '3x organic traffic', year: '2025' },
  { title: 'AuraHealth Platform', category: 'Brand Identity', tags: ['Brand Identity', 'UI/UX', 'Web Design'], image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&h=500&fit=crop', result: '98% client satisfaction', year: '2025' },
  { title: 'Apex Real Estate', category: 'Web Design', tags: ['Web Design', 'CMS', 'Performance'], image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&h=500&fit=crop', result: '4x lead generation', year: '2024' },
  { title: 'Orion Tech SaaS', category: 'Interactive', tags: ['3D Web', 'Motion Design', 'Brand'], image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=500&fit=crop', result: '$2M funding raised', year: '2024' },
  { title: 'Lumina Cosmetics', category: 'Brand Identity', tags: ['Brand Identity', 'Web Design', 'Social Kit'], image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&h=500&fit=crop', result: '180% brand recall lift', year: '2024' },
  { title: 'FreshMarket Grocery', category: 'SEO', tags: ['Technical SEO', 'Crawling', 'Audit'], image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&h=500&fit=crop', result: '1st page Google in 90 days', year: '2025' },
  { title: 'Volta EV Motors', category: 'Web Design', tags: ['Web Design', 'Interactive', 'Performance'], image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=700&h=500&fit=crop', result: '52% lower bounce rate', year: '2025' },
  { title: 'Zenith Architecture', category: 'Interactive', tags: ['3D Showcase', 'WebGL', 'Immersive'], image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=500&fit=crop', result: 'Awwwards nomination', year: '2024' },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#F5F5F3] overflow-x-hidden">
      <style>{`* { font-family: 'Inter', sans-serif; } ::selection { background: rgba(52,211,153,0.2); }`}</style>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link to={createPageUrl('Home')} className="inline-flex items-center gap-2 text-xs text-emerald-600 tracking-widest uppercase mb-6 hover:text-emerald-700 transition-colors">
              ← Back to Home
            </Link>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="text-emerald-600 text-sm font-medium tracking-[0.2em] uppercase">Selected Work</span>
                <h1 className="text-5xl md:text-7xl font-bold text-[#0A3D2E] tracking-tighter leading-[0.9] mt-4">
                  Crafted with<br />
                  <span className="italic font-light text-emerald-600">precision</span>
                </h1>
              </div>
              <p className="text-gray-400 max-w-xs text-sm leading-relaxed md:text-right">
                {projects.length} projects across 8 industries. Each one built to outperform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#0A3D2E] text-white shadow-lg shadow-emerald-900/15'
                    : 'bg-white/60 backdrop-blur-sm border border-white/60 text-gray-500 hover:text-[#0A3D2E]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group cursor-pointer"
                >
                  <GlassCard className="overflow-hidden" hover>
                    <div className="relative overflow-hidden">
                      <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.6 }} className="aspect-[4/3]">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D2E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <ArrowUpRight className="w-4 h-4 text-[#0A3D2E]" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-xs text-emerald-300 font-semibold">{project.result}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-xs text-emerald-600 font-medium tracking-wider uppercase">{project.category}</span>
                          <h3 className="text-base font-semibold text-[#0A3D2E] mt-1">{project.title}</h3>
                        </div>
                        <span className="text-xs text-gray-300 font-light">{project.year}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/8 text-emerald-700 border border-emerald-200/40">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="p-12 text-center" hover={false}>
            <h2 className="text-3xl font-bold text-[#0A3D2E] mb-4">Your project could be next</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm">Let's build something that earns its place in this portfolio.</p>
            <Link to={createPageUrl('Contact')}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-[#0A3D2E] to-emerald-700 text-white font-semibold rounded-full shadow-xl text-sm flex items-center gap-2 mx-auto"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </GlassCard>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}