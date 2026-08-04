import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, LayoutGrid, Sparkles, Workflow, Award, Phone } from 'lucide-react';

const tabs = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Shop', path: '/products', icon: Sparkles },
  { label: 'Collection', path: '/collection', icon: LayoutGrid },
  { label: 'Process', path: '/process', icon: Workflow },
  { label: 'Why Us', path: '/why-us', icon: Award },
  { label: 'Contact', path: '/contact', icon: Phone },
];

export function MobileNav() {
  const loc = useLocation();

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#f4f1ea]/95 backdrop-blur-md border-t border-ink/10 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="flex items-stretch justify-between px-1 sm:px-3 h-[60px]">
        {tabs.map((t) => {
          const active = loc.pathname === t.path;
          const Icon = t.icon;
          return (
            <Link
              key={t.path}
              to={t.path}
              className="relative flex flex-1 flex-col items-center justify-center gap-0.5 min-w-0"
            >
              {active && (
                <motion.span
                  layoutId="mobilenav-pill"
                  className="absolute inset-x-1 inset-y-1.5 rounded-2xl bg-gradient-to-br from-teal/15 to-emerald/10 border border-teal/25"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className={`w-[18px] h-[18px] sm:w-5 sm:h-5 relative z-10 transition-colors ${active ? 'text-teal' : 'text-ink/55'}`} />
              <span className={`text-[8px] sm:text-[10px] mt-0.5 relative z-10 transition-colors truncate ${active ? 'text-teal font-medium' : 'text-ink/50'}`}>
                {t.label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
