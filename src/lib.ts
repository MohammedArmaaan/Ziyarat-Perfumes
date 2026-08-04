import { business, type Product } from '@/data';

export function waLink(product?: Product) {
  const msg = product
    ? `Hello ${business.name}, I'm interested in "${product.name}" by ${product.brand} (${product.size}, ₹${product.price}). Could you share more details and availability?`
    : `Hello ${business.name}, I'd like to know more about your fragrance collection.`;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const navLinks = [
  { label: 'Collection', path: '/collection' },
  { label: 'Products', path: '/products' },
  { label: 'Process', path: '/process' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Contact', path: '/contact' },
];
