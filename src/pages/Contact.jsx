import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import FooterSection from '@/components/home/FooterSection';
import GlassCard from '@/components/ui/GlassCard';

const services = ['Full Web Design', 'Interactive Web Design', 'Website Audit', 'SEO & Ranking', 'Crawling & Indexing', 'Brand Identity'];
const budgets = ['< $1,000', '$1,000 – $3,000', '$3,000 – $8,000', '$8,000 – $20,000', '$20,000+'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F3] overflow-x-hidden">
      <style>{`* { font-family: 'Inter', sans-serif; } ::selection { background: rgba(52,211,153,0.2); }`}</style>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link to={createPageUrl('Home')} className="inline-flex items-center gap-2 text-xs text-emerald-600 tracking-widest uppercase mb-6 hover:text-emerald-700 transition-colors">
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold text-[#0A3D2E] tracking-tighter leading-[0.9] mt-4">
              Let's build<br />
              <span className="italic font-light text-emerald-600">something great</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {/* Left: Info */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                Ready to elevate your digital presence? Tell us about your project and we'll get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'Olexweb@gmail.com', href: 'mailto:Olexweb@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+2348037843784', href: 'tel:+2348037843784' },
                  { icon: MessageSquare, label: 'WhatsApp', value: '+2348037843784', href: 'https://wa.me/2348037843784' },
                  { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: '#' },
                  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: '#' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="w-4 h-4 text-emerald-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">{label}</div>
                      <div className="text-sm font-medium text-[#0A3D2E]">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <GlassCard className="p-5" delay={0.4}>
              <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">Connect with us</p>
              <div className="flex flex-col gap-2">
                <a href="https://www.linkedin.com/in/olexweb" target="_blank" rel="noopener noreferrer" className="text-xs text-[#0A3D2E] font-medium hover:text-emerald-600 transition-colors flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" /> LinkedIn
                </a>
                <a href="https://www.facebook.com/olexweb" target="_blank" rel="noopener noreferrer" className="text-xs text-[#0A3D2E] font-medium hover:text-emerald-600 transition-colors flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" /> Facebook
                </a>
              </div>
            </GlassCard>

            {/* FAQ teaser */}
            <GlassCard className="p-5" delay={0.5}>
              <p className="text-xs font-semibold text-[#0A3D2E] mb-3">Quick answers</p>
              {[
                { q: 'How long does a project take?', a: '2–12 weeks depending on scope.' },
                { q: 'Do you work with startups?', a: 'Yes — we love early-stage brands.' },
                { q: 'Is there a free consultation?', a: 'Absolutely. First call is always free.' },
              ].map(({ q, a }) => (
                <div key={q} className="mb-3 last:mb-0">
                  <p className="text-xs font-medium text-[#0A3D2E]">{q}</p>
                  <p className="text-xs text-gray-400">{a}</p>
                </div>
              ))}
            </GlassCard>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-2">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              {submitted ? (
                <GlassCard className="p-16 text-center" hover={false}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#0A3D2E] mb-3">Message sent!</h3>
                  <p className="text-gray-400 text-sm mb-6">We'll be in touch within 24 hours. Looking forward to working with you.</p>
                  <button onClick={() => setSubmitted(false)} className="text-sm text-emerald-600 hover:text-emerald-700 underline underline-offset-2">
                    Send another message
                  </button>
                </GlassCard>
              ) : (
                <GlassCard className="p-8" hover={false}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {[
                        { name: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text', required: true },
                        { name: 'email', label: 'Email Address', placeholder: 'john@company.com', type: 'email', required: true },
                        { name: 'company', label: 'Company / Brand', placeholder: 'Acme Inc.', type: 'text', required: false },
                      ].map(field => (
                        <div key={field.name} className={field.name === 'message' ? 'sm:col-span-2' : ''}>
                          <label className="block text-xs font-medium text-[#0A3D2E] mb-2 uppercase tracking-wider">{field.label}</label>
                          <input
                            type={field.type}
                            required={field.required}
                            placeholder={field.placeholder}
                            value={form[field.name]}
                            onChange={e => setForm({ ...form, [field.name]: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/60 text-sm text-[#0A3D2E] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 focus:border-emerald-300 transition-all backdrop-blur-sm"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-medium text-[#0A3D2E] mb-2 uppercase tracking-wider">Service Needed</label>
                      <div className="flex flex-wrap gap-2">
                        {services.map(s => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setForm({ ...form, service: s })}
                            className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                              form.service === s
                                ? 'bg-[#0A3D2E] text-white shadow-md'
                                : 'bg-white/60 border border-white/60 text-gray-500 hover:border-emerald-200'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-xs font-medium text-[#0A3D2E] mb-2 uppercase tracking-wider">Estimated Budget</label>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map(b => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setForm({ ...form, budget: b })}
                            className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                              form.budget === b
                                ? 'bg-emerald-600 text-white shadow-md'
                                : 'bg-white/60 border border-white/60 text-gray-500 hover:border-emerald-200'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-medium text-[#0A3D2E] mb-2 uppercase tracking-wider">Project Details</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Tell us about your project, goals, timeline..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/60 text-sm text-[#0A3D2E] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 focus:border-emerald-300 transition-all backdrop-blur-sm resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03, boxShadow: "0 20px 60px rgba(10,61,46,0.2)" }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-4 bg-gradient-to-r from-[#0A3D2E] to-emerald-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xl text-sm"
                    >
                      Send Message <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </form>
                </GlassCard>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}