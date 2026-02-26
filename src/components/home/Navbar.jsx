import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Services', page: 'Services' },
  { label: 'Work', page: 'Work' },
  { label: 'About', page: 'About' },
  { label: 'Contact', page: 'Contact' },
  { label: 'Insights', page: 'Insights' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === createPageUrl('Home') || location.pathname === '/';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
         <Link to={createPageUrl('Home')}>
  <motion.img
    src="/logo.png"
    alt="Olexweb Logo"
    className="h-12 w-auto"
    whileHover={{ scale: 1.05 }}
  />
</Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, page }) => {
              const active = location.pathname === createPageUrl(page);
              return (
                <Link
                  key={label}
                  to={createPageUrl(page)}
                  className="text-sm text-gray-500 hover:text-[#0A3D2E] transition-colors duration-200 relative group"
                >
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-emerald-500 transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link to={createPageUrl('Contact')}>
              <motion.span
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(10,61,46,0.2)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-block px-6 py-2.5 bg-gradient-to-r from-[#0A3D2E] to-emerald-700 text-white text-sm font-medium rounded-full shadow-lg shadow-emerald-900/20 cursor-pointer"
              >
                Get Started
              </motion.span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/50 backdrop-blur-sm border border-white/40"
          >
            {mobileOpen ? <X className="w-5 h-5 text-[#0A3D2E]" /> : <Menu className="w-5 h-5 text-[#0A3D2E]" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-24 px-8 md:hidden"
          >
            <div className="space-y-6">
              {navItems.map(({ label, page }, i) => (
                <motion.div key={label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link
                    to={createPageUrl(page)}
                    onClick={() => setMobileOpen(false)}
                    className="block text-2xl font-semibold text-[#0A3D2E]"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link to={createPageUrl('Contact')} onClick={() => setMobileOpen(false)}>
                  <button className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-[#0A3D2E] to-emerald-700 text-white font-medium rounded-full">
                    Get Started
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}