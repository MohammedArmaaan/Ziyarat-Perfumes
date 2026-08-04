import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { business } from '@/data';
import { navLinks, waLink } from '@/lib';
import { useStore } from '@/store';
import { MagneticButton } from '@/components/MagneticButton';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const { cartCount, setCartOpen } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const onHome = loc.pathname === '/';
  // transparent = on home page AND not scrolled → dark video bg → need white text
  const transparent = onHome && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !onHome ? 'bg-[#f4f1ea]/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-[64px] sm:h-[72px] flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <span className={`font-display text-xl sm:text-2xl tracking-wide leading-none transition-colors duration-500 ${
              transparent ? 'text-white' : 'text-gradient-teal'
            }`}>
              Ziarat
            </span>
            <span className={`hidden sm:block text-[10px] tracking-[0.3em] uppercase leading-none mt-0.5 transition-colors duration-500 ${
              transparent ? 'text-white/60' : 'text-ink/50'
            }`}>
              Perfumes
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`link-underline text-sm tracking-wide transition-colors duration-300 ${
                  loc.pathname === l.path
                    ? (transparent ? 'text-white' : 'text-teal')
                    : (transparent ? 'text-white/75 hover:text-white' : 'text-ink/70 hover:text-ink')
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${business.phoneRaw}`}
              className={`flex items-center gap-1.5 text-sm transition-colors duration-300 ${
                transparent ? 'text-white/75 hover:text-white' : 'text-ink/70 hover:text-teal'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              {business.phone}
            </a>
            <MagneticButton
              as="a"
              href={waLink()}
              target="_blank"
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-teal to-emerald text-white hover:shadow-teal transition-shadow"
            >
              Get a Quote
            </MagneticButton>
          </div>

          {/* Mobile right — cart + hamburger */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={() => setCartOpen(true)}
              className={`relative p-2 transition-colors ${transparent ? 'text-white' : 'text-ink'}`}
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-teal text-white text-[10px] font-bold grid place-items-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setOpen(true)}
              className={`p-2 transition-colors ${transparent ? 'text-white' : 'text-ink'}`}
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile slide-in drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="absolute top-0 right-0 h-full w-[82%] max-w-sm bg-[#f4f1ea] border-l border-teal/15 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-2xl text-gradient-teal">Ziarat</span>
                <button onClick={() => setOpen(false)} className="p-2 text-ink" aria-label="Close">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-0">
                <Link to="/" className="py-4 border-b border-ink/8 text-ink/90 font-display text-xl">Home</Link>
                {navLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    className={`py-4 border-b border-ink/8 font-display text-xl transition-colors ${
                      loc.pathname === l.path ? 'text-teal' : 'text-ink/90'
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-6 flex flex-col gap-3">
                <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-2 text-ink/70 text-sm">
                  <Phone className="w-4 h-4" /> {business.phone}
                </a>
                <MagneticButton
                  as="a"
                  href={waLink()}
                  target="_blank"
                  className="px-5 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-teal to-emerald text-white text-center"
                >
                  Get a Quote on WhatsApp
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
