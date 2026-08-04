import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { processSteps } from '@/data';
import { Reveal, TextReveal } from '@/components/Primitives';

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="pt-32 lg:pt-40 pb-24">
      <section className="mx-auto max-w-7xl px-5 lg:px-10 text-center py-12">
        <Reveal><span className="text-xs tracking-[0.3em] uppercase text-teal">Our Process</span></Reveal>
        <TextReveal text="From essence to bottle" className="mt-4 font-display text-5xl lg:text-7xl text-ink" />
        <Reveal delay={0.1}><p className="mt-5 text-ink/70 max-w-2xl mx-auto text-lg">Every Ziarat fragrance passes through four careful stages — sourcing, blending, testing and packaging — so what reaches you is nothing short of exceptional.</p></Reveal>
      </section>

      <section ref={ref} className="relative mx-auto max-w-5xl px-5 lg:px-10">
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-ink/8">
          <motion.div style={{ height: lineHeight }} className="w-full bg-gradient-to-b from-teal to-emerald" />
        </div>

        <div className="space-y-20 lg:space-y-32">
          {processSteps.map((s, i) => {
            const left = i % 2 === 0;
            return (
              <div key={s.step} className={`relative flex flex-col ${left ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                <Reveal className="lg:w-1/2" y={40}>
                  <div className="img-zoom rounded-3xl overflow-hidden aspect-[4/3] shadow-soft">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                </Reveal>
                <div className="lg:w-1/2 pl-16 lg:pl-0">
                  <Reveal>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display text-6xl text-gradient-teal leading-none">{s.step}</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-teal/40 to-transparent" />
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl text-ink">{s.title}</h2>
                    <p className="mt-4 text-ink/60 leading-relaxed text-lg">{s.text}</p>
                  </Reveal>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="absolute left-8 lg:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-ivory border-2 border-teal z-10"
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
