import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, MessageCircle, Heart } from 'lucide-react';
import { useStore } from '@/store';
import { business, products } from '@/data';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, cartCount } = useStore();
  const total = cart.reduce((s, i) => s + i.product.price * i.qty, 0);

  const checkoutMsg = `Hello ${business.name}, I'd like to order the following fragrances:\n\n${cart
    .map((i) => `• ${i.product.name} (${i.product.size}) × ${i.qty} — ₹${(i.product.price * i.qty).toLocaleString('en-IN')}`)
    .join('\n')}\n\nTotal: ₹${total.toLocaleString('en-IN')}`;

  return (
    <AnimatePresence>
      {cartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70]"
        >
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="absolute top-0 right-0 h-full w-full max-w-md bg-[#f4f1ea] border-l border-teal/15 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-ink/5">
              <h3 className="font-display text-2xl text-gradient-teal flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-teal" /> Your Cart ({cartCount})
              </h3>
              <button onClick={() => setCartOpen(false)} className="p-2 text-ink hover:text-teal transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-3">
                  <ShoppingBag className="w-10 h-10 text-ink/20" />
                  <p className="text-ink/50">Your cart is empty.</p>
                  <button onClick={() => setCartOpen(false)} className="text-teal text-sm link-underline">Browse products</button>
                </div>
              ) : (
                cart.map((i) => (
                  <motion.div key={i.product.id} layout initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3 p-3 rounded-xl bg-white/60 border border-ink/5">
                    <img src={i.product.image} alt={i.product.name} className="w-16 h-20 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-base text-ink truncate">{i.product.name}</h4>
                      <p className="text-xs text-ink/50">{i.product.brand} · {i.product.size}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-teal font-semibold">₹{(i.product.price * i.qty).toLocaleString('en-IN')}</span>
                        <span className="text-xs text-ink/50">× {i.qty}</span>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(i.product.id)} className="p-2 text-ink/40 hover:text-rose transition-colors self-start">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-ink/5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-ink/60">Total</span>
                  <span className="font-display text-2xl text-teal">₹{total.toLocaleString('en-IN')}</span>
                </div>
                <a
                  href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(checkoutMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" /> Checkout via WhatsApp
                </a>
                <p className="text-center text-xs text-ink/40">You'll confirm your order with our team on WhatsApp.</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function FloatingCounters() {
  const { cartCount, wishlist, setCartOpen } = useStore();
  const wished = products.filter((p) => wishlist.includes(p.id)).slice(0, 3);
  return (
    <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCartOpen(true)}
        className="relative w-14 h-14 grid place-items-center rounded-full glass shadow-soft hover:border-teal/40 transition-colors"
        aria-label="Open cart"
      >
        <ShoppingBag className="w-5 h-5 text-teal" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-teal text-white text-[11px] font-bold grid place-items-center">
            {cartCount}
          </span>
        )}
      </motion.button>
      <motion.div
        whileHover={{ scale: 1.08 }}
        className="relative w-14 h-14 grid place-items-center rounded-full glass shadow-soft cursor-default"
        title={`${wishlist.length} wishlisted`}
      >
        <Heart className="w-5 h-5 text-rose fill-rose/30" />
        {wishlist.length > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose text-white text-[11px] font-bold grid place-items-center">
            {wishlist.length}
          </span>
        )}
      </motion.div>
    </div>
  );
}

export { Link };
