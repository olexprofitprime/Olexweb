import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mail, MapPin, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

const links = {
  Services: [
    { label: 'Full Web Design', page: 'Services' },
    { label: 'Interactive Web Design', page: 'Services' },
    { label: 'Website Audit', page: 'Services' },
    { label: 'SEO & Ranking', page: 'Services' },
    { label: 'Crawling Analysis', page: 'Services' },
  ],
  Company: [
    { label: 'About Us', page: 'About' },
    { label: 'Portfolio', page: 'Work' },
    { label: 'Contact', page: 'Contact' },
  ],
  Resources: [
    { label: 'Free Audit', page: 'Contact' },
    { label: 'Our Process', page: 'About' },
    { label: 'Work With Us', page: 'Contact' },
  ],
};

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden">
      <div className="bg-gradient-to-b from-transparent to-[#0A3D2E]/5 pt-16" />
      <div className="bg-[#0A3D2E] relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Link to={createPageUrl('Home')}>
                  <span className="text-2xl font-bold text-white tracking-tight">Olex<span className="text-emerald-400">web</span></span>
                </Link>
              </motion.div>
              <p className="text-emerald-200/50 text-sm leading-relaxed my-4 max-w-xs">
                Crafting immersive 3D CGI websites, striking brand identities, and digital experiences that define the future.
              </p>
              <div className="space-y-3">
                <a href="mailto:Olexweb@gmail.com" className="flex items-center gap-2 text-emerald-300/60 hover:text-emerald-300 transition-colors text-sm">
                  <Mail className="w-4 h-4" /> Olexweb@gmail.com
                </a>
                <a href="tel:+2348037843784" className="flex items-center gap-2 text-emerald-300/60 hover:text-emerald-300 transition-colors text-sm">
                  <Phone className="w-4 h-4" /> +2348037843784
                </a>
                <a href="https://wa.me/2348037843784" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-300/60 hover:text-emerald-300 transition-colors text-sm">
                  <MessageSquare className="w-4 h-4" /> WhatsApp
                </a>
                <span className="flex items-center gap-2 text-emerald-300/60 text-sm">
                  <MapPin className="w-4 h-4" /> Lagos, Nigeria
                </span>
              </div>
            </div>

            {/* Links */}
            {Object.entries(links).map(([heading, items]) => (
              <div key={heading}>
                <h4 className="text-xs font-semibold text-emerald-400/70 tracking-[0.15em] uppercase mb-4">{heading}</h4>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={createPageUrl(item.page)}
                        className="text-sm text-emerald-100/40 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                      >
                        {item.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="border-t border-emerald-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-emerald-200/30">© 2026 Olexweb. All rights reserved. Founded by Olaitan Adebayo.</p>
            <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/olexweb" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-200/30 hover:text-emerald-300 transition-colors">
                  LinkedIn
                </a>
                <a href="https://www.facebook.com/olexweb" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-200/30 hover:text-emerald-300 transition-colors">
                  Facebook
                </a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}