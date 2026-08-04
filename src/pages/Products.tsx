import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { products, categories } from '@/data';
import { ProductCard } from '@/components/ProductCard';
import { Reveal, TextReveal } from '@/components/Primitives';

const filters = ['All', ...categories.map((c) => c.name)] as const;

export function Products() {
  const [active, setActive] = useState<string>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const catId = categories.find((c) => c.name === active)?.id;
    return products.filter((p) => {
      const catOk = active === 'All' || p.category === catId;
      const qOk = query.trim() === '' || p.name.toLowerCase().includes(query.toLowerCase()) || p.brand.toLowerCase().includes(query.toLowerCase());
      return catOk && qOk;
    });
  }, [active, query]);

  return (
    <div className="pt-32 lg:pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal><span className="text-xs tracking-[0.3em] uppercase text-teal">Our Fragrances</span></Reveal>
        <TextReveal text="The Collection" className="mt-4 font-display text-5xl lg:text-7xl text-ink" />
        <Reveal delay={0.1}><p className="mt-5 text-ink/70 max-w-xl text-lg">Over 100 fragrances across six categories. Filter to find your match, then enquire on WhatsApp or add to cart.</p></Reveal>

        <div className="mt-10 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2.5">
            {filters.map((f) => (
              <motion.button
                key={f}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  active === f
                    ? 'bg-gradient-to-r from-teal to-emerald text-white font-medium shadow-teal'
                    : 'glass text-ink/70 hover:text-ink hover:border-teal/30'
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>
          <div className="relative lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fragrances..."
              className="input pl-10"
            />
          </div>
        </div>

        <p className="mt-6 text-sm text-ink/50">{filtered.length} fragrances</p>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-24 text-center text-ink/50">No fragrances match your search.</motion.div>
          ) : (
            <motion.div key={active + query} layout className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
