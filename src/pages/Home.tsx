import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, ArrowRight, MapPin, Phone, Clock, Instagram, Sparkles, Quote } from 'lucide-react';
import { business, categories, products, testimonials, instagramPosts } from '@/data';
import { waLink } from '@/lib';
import { Reveal, StaggerGroup, staggerItem, TextReveal } from '@/components/Primitives';
import { MagneticButton } from '@/components/MagneticButton';
import { ProductCard } from '@/components/ProductCard';


export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const bestsellers = products.filter((p) => p.badge === 'Best Seller').slice(0, 8);

  return (
    <div className="w-full overflow-hidden">
      {/* HERO — autoplay video background */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[600px] sm:min-h-[640px] overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/30618765/pexels-photo-30618765.jpeg?auto=compress&cs=tinysrgb&w=1200"
          >
            <source src="https://videos.pexels.com/video-files/8447669/8447669-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          {/* Gradient for text readability — bottom dark, top slight dark, sides open */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/30" />
        </div>

        {/* Animated text content */}
        <motion.div style={{ opacity, y: textY }} className="relative h-full flex items-center pointer-events-none">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 w-full">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-white pointer-events-auto"
              >
                <Sparkles className="w-3.5 h-3.5" /> Ahmedabad · Est. Legacy
              </motion.span>

              {/* Word-by-word animated heading */}
              <h1 className="mt-5 sm:mt-6 font-display text-[2.75rem] leading-[1] sm:text-6xl lg:text-8xl text-white drop-shadow-lg">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Ziarat
                  </motion.span>
                </span>{' '}
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block italic"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Perfumes
                  </motion.span>
                </span>
              </h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 sm:mt-5 text-base sm:text-xl text-white/80 max-w-lg leading-relaxed font-light drop-shadow"
              >
                {business.tagline}. Rare oud, pure attars and signature blends — crafted for those who wear scent as a statement.
              </motion.p>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-6 sm:mt-7 flex items-center gap-3 flex-wrap"
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, rotate: -45, scale: 0 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        transition={{ delay: 1.1 + i * 0.08, type: 'spring', stiffness: 200 }}
                      >
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="font-display text-xl sm:text-2xl text-white">{business.rating}</span>
                </div>
                <span className="text-xs sm:text-sm text-white/60">{business.reviewCount} Google reviews</span>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 sm:mt-9 flex flex-wrap gap-3 sm:gap-4 pointer-events-auto"
              >
                <MagneticButton as="a" href="#/products" className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-teal to-emerald text-white font-semibold text-xs sm:text-sm tracking-wide hover:shadow-teal transition-shadow">
                  Shop Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <MagneticButton as="a" href="#/contact" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white font-medium text-xs sm:text-sm tracking-wide hover:border-white/50 transition-colors">
                  Visit Store
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/50">Scroll</span>
          <motion.div
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-8 sm:h-10 bg-gradient-to-b from-white to-transparent origin-top"
          />
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="relative py-4 sm:py-5 border-y border-ink/10 bg-[#ece7da] overflow-hidden">
        <div className="marquee-track flex gap-8 sm:gap-12 whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-8 sm:gap-12 items-center">
              {['Oud', 'Attars', 'Eau de Parfum', 'Gift Sets', 'Unisex', 'Women', 'Men', 'Musk', 'Rose', 'Saffron'].map((w) => (
                <span key={w} className="font-display text-xl sm:text-2xl text-ink/30 flex items-center gap-8 sm:gap-12">
                  {w} <span className="text-teal">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BRAND STORY */}
      <section className="relative py-28 lg:py-36 noise">
        <div className="aurora w-[400px] h-[400px] bg-teal-2/15 top-20 -right-20" />
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-16 items-center relative">
          <Reveal>
            <div className="relative">
              <div className="img-zoom rounded-3xl overflow-hidden aspect-[4/5] shadow-soft">
                <img src="https://images.pexels.com/photos/8450125/pexels-photo-8450125.jpeg?auto=compress&cs=tinysrgb&h=1000&w=800" alt="Crafting perfume" className="w-full h-full object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="absolute -bottom-6 -right-6 lg:-right-10 w-40 h-40 rounded-2xl overflow-hidden border-2 border-teal/30 shadow-teal floaty"
              >
                <img src="https://images.pexels.com/photos/8625543/pexels-photo-8625543.jpeg?auto=compress&cs=tinysrgb&h=400&w=400" alt="Bottle" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </Reveal>
          <div>
            <Reveal><span className="text-xs tracking-[0.3em] uppercase text-teal">Our Story</span></Reveal>
            <TextReveal text="The Art of Scent, Refined" className="mt-4 font-display text-4xl lg:text-5xl text-ink leading-tight" />
            <Reveal delay={0.1}><p className="mt-6 text-ink/60 leading-relaxed text-lg">
              For years, Ziarat Perfumes has been Ahmedabad’s destination for authentic fragrances. From rare Cambodian oud to traditional Indian attars, every bottle in our collection is chosen for its purity, longevity and character.
            </p></Reveal>
            <Reveal delay={0.15}><p className="mt-4 text-ink/60 leading-relaxed">
              We believe a fragrance is more than a scent — it is a memory, a signature, a presence. Our perfumers blend each composition to unfold beautifully on your skin, lingering long after you’ve left the room.
            </p></Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { n: '100+', l: 'Fragrances' },
                  { n: '4.9★', l: 'Google Rating' },
                  { n: '6', l: 'Collections' },
                ].map((s, i) => (
                  <motion.div
                    key={s.l}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="font-display text-3xl text-gradient-teal">{s.n}</div>
                    <div className="text-xs text-ink/50 mt-1">{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="relative py-28 lg:py-36 bg-[#ece7da]">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Reveal><span className="text-xs tracking-[0.3em] uppercase text-teal">Featured Collections</span></Reveal>
              <TextReveal text="Find Your Signature" className="mt-4 font-display text-4xl lg:text-5xl text-ink" />
            </div>
            <Reveal delay={0.1}><Link to="/collection" className="group flex items-center gap-2 text-sm text-ink/70 hover:text-teal transition-colors">View all collections <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link></Reveal>
          </div>

          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c) => (
              <motion.div key={c.id} variants={staggerItem} whileHover={{ y: -6 }}>
                <Link to="/products" className="group block relative rounded-2xl overflow-hidden aspect-[4/5] img-zoom">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${c.accent}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl lg:text-3xl text-white drop-shadow-sm">{c.name}</h3>
                    <p className="mt-1.5 text-sm text-white/80 max-w-xs leading-snug line-clamp-2 drop-shadow-sm">{c.description}</p>
                    <motion.span
                      initial={false}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs text-teal-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all"
                    >
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="relative py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Reveal><span className="text-xs tracking-[0.3em] uppercase text-teal">Bestsellers</span></Reveal>
              <TextReveal text="Loved by Ahmedabad" className="mt-4 font-display text-4xl lg:text-5xl text-ink" />
            </div>
            <Reveal delay={0.1}><Link to="/products" className="group flex items-center gap-2 text-sm text-ink/70 hover:text-teal transition-colors">View all products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link></Reveal>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {bestsellers.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - teaser */}
      <section className="relative py-28 lg:py-36 bg-[#ece7da] noise overflow-hidden">
        <div className="aurora w-[450px] h-[450px] bg-teal-2/15 -bottom-40 -left-40" />
        <div className="mx-auto max-w-7xl px-5 lg:px-10 relative">
          <Reveal><span className="text-xs tracking-[0.3em] uppercase text-teal">Why Choose Us</span></Reveal>
          <TextReveal text="Crafted with intention, trusted for years" className="mt-4 font-display text-4xl lg:text-5xl text-ink max-w-2xl leading-tight" />
          <StaggerGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: 'Authentic Ingredients', d: 'Rare oud, rose and sandalwood from their native regions.' },
              { t: 'Expert Blending', d: 'Composed by perfumers with decades of olfactory craft.' },
              { t: 'Long-Lasting', d: 'Concentrated formulas that stay with you for 8–12 hours.' },
              { t: 'Luxury Packaging', d: 'Hand-finished boxes that make every bottle a gift.' },
              { t: 'Wide Range', d: 'Over 100 fragrances across six categories.' },
              { t: 'Trusted for Years', d: 'Ahmedabad’s chosen fragrance house.' },
            ].map((f) => (
              <motion.div key={f.t} variants={staggerItem} whileHover={{ y: -6 }} className="group p-7 rounded-2xl glass hover:border-teal/30 transition-colors">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-teal/20 to-transparent border border-teal/25 grid place-items-center mb-5"
                >
                  <Sparkles className="w-5 h-5 text-teal" />
                </motion.div>
                <h3 className="font-display text-xl text-ink">{f.t}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{f.d}</p>
              </motion.div>
            ))}
          </StaggerGroup>
          <Reveal delay={0.1}>
            <div className="mt-12 text-center">
              <Link to="/why-us" className="inline-flex items-center gap-2 text-sm text-teal link-underline">Discover what sets us apart <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center mb-14">
            <Reveal><span className="text-xs tracking-[0.3em] uppercase text-teal">Reviews</span></Reveal>
            <TextReveal text="Words from our patrons" className="mt-4 font-display text-4xl lg:text-5xl text-ink" />
            <Reveal delay={0.1}>
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-teal text-teal" />)}</div>
                <span className="text-sm text-ink/70">{business.rating} · {business.reviewCount} Google reviews</span>
              </div>
            </Reveal>
          </div>
          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={staggerItem} whileHover={{ y: -4 }} className="p-7 rounded-2xl glass relative">
                <Quote className="w-8 h-8 text-teal/25 mb-4" />
                <p className="text-ink/75 leading-relaxed text-[15px]">{t.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-emerald grid place-items-center font-display text-lg text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink">{t.name}</div>
                    <div className="text-xs text-ink/50">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* INSTAGRAM TEASER */}
      <section className="relative py-28 lg:py-36 bg-[#ece7da]">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="text-center mb-14">
            <Reveal><span className="text-xs tracking-[0.3em] uppercase text-teal">@ziaratperfumes</span></Reveal>
            <TextReveal text="Follow our journey" className="mt-4 font-display text-4xl lg:text-5xl text-ink" />
          </div>
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramPosts.map((src) => (
              <motion.a
                key={src}
                variants={staggerItem}
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 0.97 }}
                className="group relative aspect-square rounded-xl overflow-hidden img-zoom"
              >
                <img src={src} alt="Instagram post" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors grid place-items-center">
                  <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative py-32 lg:py-44 overflow-hidden noise">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&h=1000&w=2000" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory/85 via-ivory/70 to-ivory/90" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <TextReveal text="Discover your signature scent" className="font-display text-4xl lg:text-6xl text-ink leading-tight" />
          <Reveal delay={0.1}><p className="mt-5 text-ink/70 text-lg">Visit our boutique in the heart of Ahmedabad, or message us on WhatsApp to find your perfect fragrance.</p></Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <MagneticButton as="a" href={waLink()} target="_blank" className="px-8 py-4 rounded-full bg-gradient-to-r from-teal to-emerald text-white font-semibold text-sm hover:shadow-teal transition-shadow">
                WhatsApp Us
              </MagneticButton>
              <MagneticButton as="a" href="#/contact" className="px-8 py-4 rounded-full glass text-ink font-medium text-sm hover:border-teal/40 transition-colors">
                Get Directions
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="relative py-24 bg-[#ece7da]">
        <div className="mx-auto max-w-7xl px-5 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: MapPin, title: 'Visit', lines: [business.addressShort] },
            { icon: Phone, title: 'Call', lines: [business.phone] },
            { icon: Clock, title: 'Hours', lines: [business.hours] },
            { icon: Instagram, title: 'Follow', lines: [business.instagramHandle] },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <motion.div whileHover={{ y: -4 }} className="p-6 rounded-2xl glass h-full">
                <c.icon className="w-6 h-6 text-teal mb-4" />
                <h3 className="text-xs tracking-[0.25em] uppercase text-ink/50 mb-2">{c.title}</h3>
                {c.lines.map((l) => <p key={l} className="text-ink/80 text-sm">{l}</p>)}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
