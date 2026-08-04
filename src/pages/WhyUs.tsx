import { motion } from 'framer-motion';
import { Leaf, FlaskConical, Clock, Gift, Layers, BadgeCheck, Quote, Star } from 'lucide-react';
import { Reveal, StaggerGroup, staggerItem, TextReveal } from '@/components/Primitives';
import { testimonials, business } from '@/data';

const features = [
  { icon: Leaf, title: 'Authentic Ingredients', text: 'We source rare oud, Taif rose, Mysore sandalwood and saffron directly from trusted growers and distillers — never synthetic substitutes.' },
  { icon: FlaskConical, title: 'Expert Blending', text: 'Our perfumers compose in layers, balancing top, heart and base notes so each fragrance unfolds gracefully over hours.' },
  { icon: Clock, title: 'Long-Lasting', text: 'High concentration means our fragrances stay with you for 8–12 hours, evolving beautifully rather than fading fast.' },
  { icon: Gift, title: 'Luxury Packaging', text: 'Every bottle is presented in hand-finished packaging designed to feel like a gift — worthy of the fragrance inside.' },
  { icon: Layers, title: 'Wide Range', text: 'Over 100 fragrances across six categories — men, women, unisex, oud, attars and gift sets — for every mood and occasion.' },
  { icon: BadgeCheck, title: 'Trusted for Years', text: 'Ahmedabad’s chosen fragrance house, with a 4.9-star rating and a loyal community of regulars who return season after season.' },
];

export function WhyUs() {
  return (
    <div className="pt-32 lg:pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-5 lg:px-10 text-center py-12">
        <Reveal><span className="text-xs tracking-[0.3em] uppercase text-teal">Why Ziarat</span></Reveal>
        <TextReveal text="The Ziarat difference" className="mt-4 font-display text-5xl lg:text-7xl text-ink" />
        <Reveal delay={0.1}><p className="mt-5 text-ink/70 max-w-2xl mx-auto text-lg">Six reasons discerning customers in Ahmedabad choose us for their fragrances — and stay with us for years.</p></Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-12">
        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} variants={staggerItem} whileHover={{ y: -8 }} className="group p-8 rounded-3xl glass hover:border-teal/30 transition-colors h-full">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal/15 to-transparent border border-teal/20 grid place-items-center mb-6"
                >
                  <Icon className="w-6 h-6 text-teal" />
                </motion.div>
                <h3 className="font-display text-2xl text-ink">{f.title}</h3>
                <p className="mt-3 text-ink/60 leading-relaxed">{f.text}</p>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-12">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden p-12 lg:p-16 text-center glass-teal">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/8 to-transparent" />
            <div className="relative">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div key={i} initial={{ scale: 0, rotate: -45 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <Star className="w-7 h-7 fill-teal text-teal" />
                  </motion.div>
                ))}
              </div>
              <div className="font-display text-6xl lg:text-7xl text-gradient-teal">{business.rating}</div>
              <p className="mt-3 text-ink/70">Rated by {business.reviewCount} happy customers on Google</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-12">
        <TextReveal text="What our customers say" className="font-display text-3xl lg:text-4xl text-ink text-center mb-10" />
        <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t) => (
            <motion.div key={t.name} variants={staggerItem} whileHover={{ y: -4 }} className="p-7 rounded-2xl glass">
              <Quote className="w-7 h-7 text-teal/25 mb-4" />
              <p className="text-ink/75 leading-relaxed text-[15px]">{t.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-emerald grid place-items-center font-display text-lg text-white">{t.name.charAt(0)}</div>
                <div>
                  <div className="text-sm font-medium text-ink">{t.name}</div>
                  <div className="text-xs text-ink/50">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </section>
    </div>
  );
}
