import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Award, Code2, TrendingUp, Globe, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import FooterSection from '@/components/home/FooterSection';
import GlassCard from '@/components/ui/GlassCard';
import ScrollRevealPortrait from '@/components/about/ScrollRevealPortrait';

const expertise = [
  { label: 'Bespoke Web Development', value: 97 },
  { label: 'Technical SEO & Crawling', value: 95 },
  { label: 'Website Audit & Optimization', value: 93 },
  { label: 'Brand Identity Design', value: 88 },
  { label: 'Interactive / 3D Web Design', value: 90 },
  { label: 'Conversion Rate Optimization', value: 86 },
];

const milestones = [
  { year: '2023', title: 'Entered Web & Digital Strategy', desc: 'Began career in web design and digital strategy, building campaigns that scaled online brands from zero to revenue.' },
  { year: '2023', title: 'Certified Master Website Manager', desc: 'Obtained advanced certification, deepening expertise in technical web infrastructure and performance engineering.' },
  { year: '2024', title: 'Pivoted to Web Engineering', desc: 'Transitioned focus to technical web excellence — bespoke builds, deep audits, and SEO dominance.' },
  { year: '2025', title: 'Launched Olexweb', desc: 'Launched a specialized agency dedicated to delivering technically superior websites and digital experiences.' },
  { year: '2025', title: 'Founded Elvanex', desc: 'Expanded entrepreneurial vision by founding Elvanex — a new venture extending digital and business solutions to a broader market.' },
  { year: '2026', title: 'Olexprofitprime Becomes Olexweb', desc: 'Strategically rebranded Olexprofitprime to Olexweb, consolidating identity around premium web engineering and marking a new era of focused digital excellence.' },
];

const pillars = [
  { icon: Code2, title: 'Technical Mastery', desc: 'Every build is engineered to perform — clean code, fast load times, and infrastructure built to scale.' },
  { icon: Shield, title: 'Audit-First Approach', desc: 'We diagnose before we prescribe. Deep analysis ensures every decision is backed by real data.' },
  { icon: TrendingUp, title: 'Growth-Oriented SEO', desc: 'Organic traffic that compounds. Strategic SEO that turns your website into a 24/7 lead machine.' },
  { icon: Globe, title: 'Bespoke by Default', desc: 'No templates. Every client gets a website built from the ground up for their unique goals and audience.' },
  { icon: Zap, title: 'Performance First', desc: 'Sub-2-second load times, 90+ Lighthouse scores, and Core Web Vitals that satisfy Google and users.' },
  { icon: Award, title: 'Certified Excellence', desc: 'Backed by certified expertise as a Master Website Manager — not just creative instinct, but proven methodology.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F5F3] overflow-x-hidden">
      <style>{`* { font-family: 'Inter', sans-serif; } ::selection { background: rgba(52,211,153,0.2); }`}</style>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-emerald-600/5 rounded-full blur-2xl" />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link to={createPageUrl('Home')} className="inline-flex items-center gap-2 text-xs text-emerald-600 tracking-widest uppercase mb-6 hover:text-emerald-700 transition-colors">
              ← Back to Home
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo + scroll-reveal portrait */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center pb-8"
            >
              <ScrollRevealPortrait />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-emerald-600 text-sm font-medium tracking-[0.2em] uppercase">About the Founder</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A3D2E] tracking-tight mt-4 mb-6 leading-tight">
                Technically superior.<br />
                <span className="italic font-light">Strategically built.</span>
              </h1>
              <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
                <p>
                  With a proven track record of scaling digital brands, <strong className="text-[#0A3D2E]">Olaitan Adebayo</strong> has transitioned from the broad marketing focus of Olexprofitprime to launch Olexweb — a specialized agency dedicated to the technical heart of the internet.
                </p>
                <p>
                  At Olexweb, Olaitan leverages his expertise as a <strong className="text-[#0A3D2E]">certified Master Website Manager</strong> to deliver high-performance digital infrastructure. He specializes in building bespoke websites from the ground up, conducting deep-dive website audits, and mastering technical SEO through advanced crawling and site optimization.
                </p>
                <p>
                  By moving from general strategy to focused web engineering, Olaitan ensures that every client's online presence is not just visible, but <strong className="text-[#0A3D2E]">technically superior and built for conversion</strong>.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {['Certified Master Website Manager', 'Technical SEO Expert', '20+ Projects Delivered', 'Lagos, Nigeria Based'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link to={createPageUrl('Contact')}>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 px-7 py-3.5 bg-gradient-to-r from-[#0A3D2E] to-emerald-700 text-white text-sm font-medium rounded-full flex items-center gap-2 shadow-lg shadow-emerald-900/15"
                >
                  Work With Olaitan <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Bars */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <span className="text-emerald-600 text-sm font-medium tracking-[0.2em] uppercase">Core Expertise</span>
            <h2 className="text-4xl font-bold text-[#0A3D2E] mt-4 tracking-tight">Skills & <span className="italic font-light">proficiency</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-[#0A3D2E]">{skill.label}</span>
                  <span className="text-sm text-emerald-600 font-semibold">{skill.value}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: i * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-[#0A3D2E] to-emerald-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#0A3D2E 1px, transparent 1px), linear-gradient(90deg, #0A3D2E 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-emerald-600 text-sm font-medium tracking-[0.2em] uppercase">The Journey</span>
            <h2 className="text-4xl font-bold text-[#0A3D2E] mt-4 tracking-tight">From strategy to <span className="italic font-light">engineering</span></h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-8 items-start"
                >
                  <div className="w-32 shrink-0 text-right">
                    <span className="text-sm font-bold text-emerald-600">{m.year}</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 shadow-md shadow-emerald-200" />
                  </div>
                  <GlassCard className="flex-1 p-5" delay={i * 0.1}>
                    <h3 className="font-semibold text-[#0A3D2E] mb-1">{m.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{m.desc}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-emerald-600 text-sm font-medium tracking-[0.2em] uppercase">Our Philosophy</span>
            <h2 className="text-4xl font-bold text-[#0A3D2E] mt-4 tracking-tight">The Olexweb <span className="italic font-light">pillars</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <GlassCard key={i} delay={i * 0.1} className="p-7">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-emerald-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-[#0A3D2E] mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}