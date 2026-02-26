import { motion } from 'framer-motion';

const items = [
  'Web Design', '•', '3D Experiences', '•', 'Brand Identity', '•', 'SEO Ranking', '•',
  'Interactive Design', '•', 'Website Audit', '•', 'Crawling', '•', 'UI/UX', '•',
  'Motion Graphics', '•', 'Digital Strategy', '•',
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items, ...items];

  return (
    <div className="py-8 overflow-hidden border-y border-emerald-500/10 bg-white/30 backdrop-blur-sm">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`text-sm font-medium ${item === '•' ? 'text-emerald-400' : 'text-[#0A3D2E]/40'} tracking-wider uppercase`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}