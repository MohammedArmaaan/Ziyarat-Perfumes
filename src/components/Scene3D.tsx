import { motion } from 'framer-motion';

/* Kept only for backward-compat imports in other pages */
export function AmbientScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="w-48 h-48 rounded-full bg-gradient-to-br from-teal/10 to-emerald/5 backdrop-blur-xl border border-teal/10"
      />
    </div>
  );
}
