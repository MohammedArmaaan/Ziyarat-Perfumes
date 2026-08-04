import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Clock, Instagram, CheckCircle2, Send } from 'lucide-react';
import { business } from '@/data';
import { Reveal, TextReveal } from '@/components/Primitives';
import { MagneticButton } from '@/components/MagneticButton';

const interests = ['General Inquiry', 'Men’s Fragrances', 'Women’s Fragrances', 'Oud & Attars', 'Gift Sets', 'Custom Order'];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: interests[0], message: '' });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const infoCards = [
    { icon: Phone, title: 'Call Us', value: business.phone, href: `tel:${business.phoneRaw}` },
    { icon: MapPin, title: 'Visit Us', value: business.address, href: `https://www.google.com/maps/search/?api=1&query=${business.mapsQuery}` },
    { icon: Clock, title: 'Opening Hours', value: business.hours },
    { icon: Instagram, title: 'Instagram', value: business.instagramHandle, href: business.instagram },
  ];

  return (
    <div className="pt-32 lg:pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-5 lg:px-10 text-center py-12">
        <Reveal><span className="text-xs tracking-[0.3em] uppercase text-teal">Get in Touch</span></Reveal>
        <TextReveal text="Visit our boutique" className="mt-4 font-display text-5xl lg:text-7xl text-ink" />
        <Reveal delay={0.1}><p className="mt-5 text-ink/70 max-w-2xl mx-auto text-lg">Find us in the heart of Ahmedabad, or send us a message — we’ll help you discover your perfect fragrance.</p></Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-12 grid lg:grid-cols-2 gap-10">
        <Reveal>
          <div className="p-8 lg:p-10 rounded-3xl glass h-full shadow-soft">
            <h2 className="font-display text-3xl text-ink">Send a message</h2>
            <p className="mt-2 text-sm text-ink/60">We usually respond within a few hours.</p>

            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 flex flex-col items-center justify-center text-center py-12"
                >
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                    <CheckCircle2 className="w-16 h-16 text-teal" />
                  </motion.div>
                  <h3 className="mt-5 font-display text-2xl text-ink">Thank you, {form.name || 'friend'}!</h3>
                  <p className="mt-2 text-ink/60 max-w-sm">Your message has been received. Our team will reach out to you shortly.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', interest: interests[0], message: '' }); }} className="mt-6 text-sm text-teal link-underline">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={onSubmit} className="mt-7 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" required>
                      <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="input" placeholder="Your name" />
                    </Field>
                    <Field label="Phone" required>
                      <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required type="tel" className="input" placeholder="Your phone" />
                    </Field>
                  </div>
                  <Field label="Email">
                    <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="input" placeholder="you@email.com" />
                  </Field>
                  <Field label="Interest">
                    <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="input">
                      {interests.map((i) => <option key={i} value={i} className="bg-white">{i}</option>)}
                    </select>
                  </Field>
                  <Field label="Message" required>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4} className="input resize-none" placeholder="Tell us what you're looking for..." />
                  </Field>
                  <MagneticButton as="button" className="w-full h-12 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal to-emerald text-white font-semibold text-sm hover:shadow-teal transition-shadow">
                    <Send className="w-4 h-4" /> Send Message
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          <div className="grid sm:grid-cols-2 gap-5">
            {infoCards.map((c, i) => {
              const Inner = (
                <motion.div whileHover={{ y: -4 }} className="p-6 rounded-2xl glass h-full hover:border-teal/30 transition-colors group">
                  <motion.div whileHover={{ scale: 1.1 }}><c.icon className="w-6 h-6 text-teal mb-4" /></motion.div>
                  <h3 className="text-xs tracking-[0.25em] uppercase text-ink/50 mb-2">{c.title}</h3>
                  <p className="text-ink/80 text-sm leading-relaxed">{c.value}</p>
                </motion.div>
              );
              return (
                <Reveal key={c.title} delay={i * 0.05}>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block h-full">{Inner}</a>
                  ) : Inner}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl overflow-hidden glass p-1.5 flex-1 min-h-[320px] shadow-soft">
              <iframe
                title="Ziarat Perfumes location"
                src={`https://www.google.com/maps?q=${business.mapsQuery}&output=embed`}
                className="w-full h-full min-h-[300px] rounded-2xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.2em] uppercase text-ink/50 mb-2">{label}{required && <span className="text-teal"> *</span>}</span>
      {children}
    </label>
  );
}
