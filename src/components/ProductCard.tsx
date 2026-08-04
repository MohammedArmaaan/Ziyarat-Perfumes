import { motion } from 'framer-motion';
import { Heart, ShoppingBag, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '@/data';
import { waLink } from '@/lib';
import { useStore } from '@/store';

const badgeStyles: Record<string, string> = {
  'Best Seller': 'bg-gradient-to-r from-teal to-emerald text-white',
  'New': 'bg-white text-teal border border-teal/30',
  'Trending': 'bg-rose/15 text-rose border border-rose/30',
};

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart, toggleWishlist, inWishlist } = useStore();
  const wished = inWishlist(product.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-ink/8 hover:border-teal/30 hover:shadow-soft transition-all"
    >
      <div className="relative img-zoom aspect-[3/4] bg-ivory-2">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

        {product.badge && (
          <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase ${badgeStyles[product.badge]}`}>
            {product.badge}
          </span>
        )}

        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => toggleWishlist(product)}
          aria-label="Wishlist"
          className={`absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full backdrop-blur-md transition-all ${
            wished ? 'bg-rose text-white' : 'bg-white/70 text-ink hover:bg-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${wished ? 'fill-white' : ''}`} />
        </motion.button>

        <div className="absolute inset-x-3 bottom-3 flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <motion.a
            whileTap={{ scale: 0.92 }}
            href={waLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp inquiry"
            className="flex-1 h-10 grid place-items-center rounded-full bg-[#25D366] text-white shadow-sm hover:bg-[#1ebe5d] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </motion.a>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => addToCart(product)}
            aria-label="Add to cart"
            className="flex-[1.6] h-10 flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-teal to-emerald text-white text-xs font-semibold hover:shadow-teal transition-shadow"
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Add
          </motion.button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-1">
        <div className="flex items-center gap-1 mb-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-teal text-teal" />
          ))}
          <span className="text-[10px] text-ink/40 ml-1">{product.brand}</span>
        </div>
        <h3 className="font-display text-lg leading-tight text-ink">
          <Link to={`/product/${product.id}`} className="hover:text-teal transition-colors">{product.name}</Link>
        </h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-ink/50">{product.size}</span>
          <span className="text-sm font-semibold text-teal">₹{product.price.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </motion.article>
  );
}
