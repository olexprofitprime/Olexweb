import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ExternalLink } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const projects = [
  {
    title: 'Stripe',
    category: 'Interactive Web Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    color: 'from-emerald-600/20 to-emerald-900/30',
    url: 'https://stripe.com',
  },
  {
    title: 'Shopify',
    category: 'Full Web Design + SEO',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    color: 'from-[#0A3D2E]/20 to-emerald-600/20',
    url: 'https://www.shopify.com',
  },
  {
    title: 'Calm',
    category: 'Brand Identity + UX',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    color: 'from-emerald-400/20 to-emerald-800/20',
    url: 'https://www.calm.com',
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-emerald-600 text-sm font-medium tracking-[0.2em] uppercase">Selected Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A3D2E] mt-4 tracking-tight">
              Crafted with <span className="italic font-light">precision</span>
            </h2>
          </div>
          <Link to={createPageUrl('Work')}>
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-6 py-3 rounded-full border border-[#0A3D2E]/20 text-[#0A3D2E] text-sm font-medium hover:bg-[#0A3D2E] hover:text-white transition-all duration-300 cursor-pointer"
            >
              View All Projects →
            </motion.span>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a key={i} href={project.url} target="_blank" rel="noopener noreferrer" className="block">
              <GlassCard delay={i * 0.15} className="group cursor-pointer overflow-hidden h-full">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <motion.div
                    className="aspect-[4/3] overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} mix-blend-multiply`} />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-2 border border-white/30">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-emerald-600 font-medium tracking-wider uppercase">{project.category}</span>
                    <h3 className="text-lg font-semibold text-[#0A3D2E] mt-1">{project.title}</h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 transition-colors shrink-0" />
                </div>
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}