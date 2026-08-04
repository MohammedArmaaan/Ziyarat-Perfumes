import { useParams, Link, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ShoppingBag, Heart, MessageCircle, Star, Truck, Shield, RefreshCw, ChevronRight, Minus, Plus, Check,
} from 'lucide-react';
import { products, categories } from '@/data';
import { waLink } from '@/lib';
import { useStore } from '@/store';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Primitives';

const notes = {
  top: ['Bergamot', 'Saffron', 'Pink Pepper'],
  heart: ['Rose', 'Jasmine', 'Geranium'],
  base: ['Oud', 'Amber', 'Musk', 'Sandalwood'],
};

const features = [
  { icon: Truck, title: 'Free Shipping', text: 'On orders above ₹2,000' },
  { icon: Shield, title: '100% Authentic', text: 'Directly sourced ingredients' },
  { icon: RefreshCw, title: 'Easy Returns', text: '7-day return policy' },
];

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, inWishlist } = useStore();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<'description' | 'notes' | 'reviews'>('description');
  const [added, setAdded] = useState(false);

  const product = useMemo(() => products.find((p) => p.id === id), [id]);

  const related = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  const categoryName = categories.find((c) => c.id === product?.category)?.name ?? product?.category;

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center">
        <p className="text-ink/60">Product not found.</p>
        <Link to="/products" className="mt-4 inline-block text-teal font-medium">Back to collection</Link>
      </div>
    );
  }

  const wished = inWishlist(product.id);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="pt-24 lg:pt-32 pb-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <nav className="flex items-center gap-1.5 text-xs text-ink/40">
          <Link to="/" className="hover:text-teal">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products" className="hover:text-teal">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink/70 truncate">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-5 lg:px-10 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Image gallery */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-ivory-2 border border-ink/8"
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-gradient-to-r from-teal to-emerald text-white">
                  {product.badge}
                </span>
              )}
            </motion.div>
            {/* Thumbnails (reuse same image with subtle filter variations as placeholders) */}
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-ivory-2 border-2 cursor-pointer transition-all ${
                    i === 0 ? 'border-teal' : 'border-ink/8 hover:border-teal/40'
                  }`}
                >
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ filter: `hue-rotate(${i * 8}deg) brightness(${1 - i * 0.05})` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/products" className="inline-flex items-center gap-1.5 text-sm text-ink/50 hover:text-teal mb-4">
                <ArrowLeft className="w-4 h-4" /> Back
              </Link>

              <span className="text-xs tracking-[0.2em] uppercase text-teal">{categoryName}</span>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">{product.name}</h1>
              <p className="mt-1.5 text-ink/60 text-lg">{product.brand}</p>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-teal text-teal" />
                  ))}
                </div>
                <span className="text-sm text-ink/50">4.9 · 28 reviews</span>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-3xl text-ink">₹{product.price.toLocaleString('en-IN')}</span>
                <span className="text-ink/40 line-through text-lg">₹{(product.price * 1.25).toLocaleString('en-IN')}</span>
                <span className="px-2.5 py-1 rounded-full bg-teal/10 text-teal text-xs font-semibold">20% OFF</span>
              </div>
              <p className="mt-1 text-sm text-ink/50">Inclusive of all taxes · Size: {product.size}</p>

              {/* Short desc */}
              <p className="mt-5 text-ink/70 leading-relaxed">
                A luxurious {categoryName?.toLowerCase()} fragrance crafted with rare essences. {product.name} opens with
                vibrant top notes, reveals a rich floral heart, and settles into a deep, long-lasting base of oud and amber.
                Designed for those who wear scent as a signature.
              </p>

              {/* Quantity + actions */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 rounded-full border border-ink/15 bg-white px-1.5 py-1.5">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 grid place-items-center rounded-full hover:bg-ivory-2 text-ink"
                    aria-label="Decrease"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-semibold text-ink">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-8 h-8 grid place-items-center rounded-full hover:bg-ivory-2 text-ink"
                    aria-label="Increase"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={handleAdd}
                  className={`flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all ${
                    added
                      ? 'bg-emerald text-white'
                      : 'bg-gradient-to-r from-teal to-emerald text-white hover:shadow-teal'
                  }`}
                >
                  {added ? <><Check className="w-4 h-4" /> Added</> : <><ShoppingBag className="w-4 h-4" /> Add to Cart</>}
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.92 }}
                  onClick={() => toggleWishlist(product)}
                  className={`w-12 h-12 grid place-items-center rounded-full border transition-all ${
                    wished ? 'bg-rose text-white border-rose' : 'border-ink/15 text-ink hover:border-rose/40'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${wished ? 'fill-white' : ''}`} />
                </motion.button>

                <motion.a
                  whileTap={{ scale: 0.96 }}
                  href={waLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Enquire
                </motion.a>
              </div>

              {/* Features */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="flex flex-col items-center text-center gap-1.5 p-3 rounded-2xl bg-ivory-2/60 border border-ink/8">
                      <Icon className="w-5 h-5 text-teal" />
                      <span className="text-xs font-semibold text-ink">{f.title}</span>
                      <span className="text-[10px] text-ink/50 leading-tight">{f.text}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 lg:mt-20">
          <div className="flex gap-2 border-b border-ink/10">
            {([
              ['description', 'Description'],
              ['notes', 'Fragrance Notes'],
              ['reviews', 'Reviews'],
            ] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`relative px-5 py-3 text-sm font-medium transition-colors ${
                  tab === key ? 'text-teal' : 'text-ink/50 hover:text-ink'
                }`}
              >
                {label}
                {tab === key && (
                  <motion.span layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="py-8 max-w-3xl">
            {tab === 'description' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-ink/70 leading-relaxed space-y-4">
                <p>
                  {product.name} by {product.brand} is a masterfully composed {categoryName?.toLowerCase()} fragrance that
                  balances tradition with modern elegance. Each note is layered to unfold gracefully over hours on your skin,
                  ensuring a sillage that lingers and captivates.
                </p>
                <p>
                  Crafted with authentic, directly sourced ingredients, this {product.size} edition comes in hand-finished
                  packaging worthy of the fragrance inside — making it a perfect gift or a treasured addition to your collection.
                </p>
                <ul className="grid grid-cols-2 gap-2 pt-2">
                  {['Long-lasting 8–12 hours', 'Alcohol-free option available', 'Hand-finished luxury packaging', 'Suitable for all occasions'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink/80">
                      <Check className="w-4 h-4 text-teal shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {tab === 'notes' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid sm:grid-cols-3 gap-6">
                {([
                  ['Top Notes', notes.top],
                  ['Heart Notes', notes.heart],
                  ['Base Notes', notes.base],
                ] as const).map(([label, items]) => (
                  <div key={label} className="p-5 rounded-2xl bg-ivory-2/60 border border-ink/8">
                    <h4 className="font-display text-lg text-ink mb-3">{label}</h4>
                    <ul className="space-y-2">
                      {items.map((n) => (
                        <li key={n} className="flex items-center gap-2 text-sm text-ink/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal" /> {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            )}

            {tab === 'reviews' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                <div className="flex items-center gap-6 pb-5 border-b border-ink/10">
                  <div className="text-center">
                    <span className="font-display text-5xl text-ink">4.9</span>
                    <div className="flex justify-center mt-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-teal text-teal" />)}
                    </div>
                    <span className="text-xs text-ink/50 mt-1 block">28 reviews</span>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <span className="text-xs text-ink/50 w-3">{s}</span>
                        <Star className="w-3 h-3 fill-teal text-teal" />
                        <div className="flex-1 h-1.5 rounded-full bg-ink/10 overflow-hidden">
                          <div className="h-full bg-teal rounded-full" style={{ width: `${s === 5 ? 82 : s === 4 ? 12 : s === 3 ? 4 : 2}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {[
                  { name: 'Aarav M.', text: 'Absolutely stunning fragrance. Lasts the whole day and gets compliments everywhere.', date: '2 weeks ago' },
                  { name: 'Priya S.', text: 'The oud note is so rich and authentic. Worth every rupee.', date: '1 month ago' },
                ].map((r) => (
                  <div key={r.name} className="p-4 rounded-2xl bg-ivory-2/60 border border-ink/8">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-ink text-sm">{r.name}</span>
                      <span className="text-xs text-ink/40">{r.date}</span>
                    </div>
                    <div className="flex mb-1.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-teal text-teal" />)}
                    </div>
                    <p className="text-sm text-ink/70">{r.text}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mt-12 lg:mt-16 mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-teal">You may also like</span>
                <h2 className="mt-2 font-display text-3xl lg:text-4xl text-ink">Related Fragrances</h2>
              </div>
              <Link to="/products" className="hidden sm:flex items-center gap-1.5 text-sm text-teal font-medium hover:gap-2.5 transition-all">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
