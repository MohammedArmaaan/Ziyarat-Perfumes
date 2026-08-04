import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { categories, products } from '@/data';
import { Reveal, StaggerGroup, staggerItem, TextReveal } from '@/components/Primitives';

export function Collection() {
  return (
    <div className="pt-32 lg:pt-40 pb-20">
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/5206892/pexels-photo-5206892.jpeg?auto=compress&cs=tinysrgb&h=900&w=2000" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-ivory/70 to-ivory" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10 text-center">
          <Reveal><span className="text-xs tracking-[0.3em] uppercase text-teal">Collections</span></Reveal>
          <TextReveal text="Explore by Category" className="mt-4 font-display text-5xl lg:text-7xl text-ink" />
          <Reveal delay={0.1}><p className="mt-5 text-ink/70 max-w-xl mx-auto text-lg">Six distinct worlds of fragrance — from bold masculine ouds to delicate florals and pure traditional attars.</p></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-10 py-12">
        <StaggerGroup className="grid md:grid-cols-2 gap-6">
          {categories.map((c, i) => {
            const count = products.filter((p) => p.category === c.id).length;
            const big = i % 3 === 0;
            return (
              <motion.div key={c.id} variants={staggerItem} whileHover={{ y: -6 }} className={big ? 'md:col-span-2' : ''}>
                <Link to="/products" className="group block relative rounded-3xl overflow-hidden aspect-[16/9] img-zoom shadow-soft">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${c.accent}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="text-xs tracking-[0.25em] uppercase text-teal-2 mb-2 self-start"
                    >
                      {count} fragrances
                    </motion.span>
                    <h2 className="font-display text-4xl lg:text-6xl text-white drop-shadow-sm">{c.name}</h2>
                    <p className="mt-2 text-white/80 max-w-md text-sm lg:text-base drop-shadow-sm">{c.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-teal-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                      Browse {c.name} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </section>
    </div>
  );
}
