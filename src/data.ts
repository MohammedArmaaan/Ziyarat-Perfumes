export const business = {
  name: 'Ziarat Perfumes',
  tagline: 'Best Perfumes Shop in Ahmedabad',
  rating: 4.9,
  reviewCount: 33,
  phone: '099092 84960',
  phoneRaw: '+919909284960',
  address: 'GF3 Mahavir Chambers, Salapose Road, Relief Rd, opp. Hotel Mayur, Ahmedabad, Gujarat 380001',
  addressShort: 'Salapose Road, Relief Rd, Ahmedabad',
  hours: 'Open · Closes 10 PM',
  instagram: 'https://instagram.com',
  instagramHandle: '@ziaratperfumes',
  whatsapp: '919909284960',
  mapsQuery: 'Ziarat+Perfumes+Salapose+Road+Relief+Road+Ahmedabad',
};

export const categories = [
  {
    id: 'men',
    name: 'Men',
    description: 'Bold, woody and aromatic compositions for the modern gentleman.',
    image: 'https://images.pexels.com/photos/30263576/pexels-photo-30263576.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    accent: 'from-teal-900/60 to-slate-900/40',
  },
  {
    id: 'women',
    name: 'Women',
    description: 'Florals, fruits and musks crafted to captivate and linger.',
    image: 'https://images.pexels.com/photos/9957552/pexels-photo-9957552.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    accent: 'from-rose-300/50 to-slate-400/30',
  },
  {
    id: 'unisex',
    name: 'Unisex',
    description: 'Versatile signatures that transcend gender and occasion.',
    image: 'https://images.pexels.com/photos/1666405/pexels-photo-1666405.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    accent: 'from-amber-300/50 to-teal-300/30',
  },
  {
    id: 'oud',
    name: 'Oud',
    description: 'Precious agarwood blends — deep, resinous and regal.',
    image: 'https://images.pexels.com/photos/11482468/pexels-photo-11482468.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    accent: 'from-amber-400/40 to-slate-500/30',
  },
  {
    id: 'attars',
    name: 'Attars',
    description: 'Alcohol-free concentrated oils in the Indian tradition.',
    image: 'https://images.pexels.com/photos/38721545/pexels-photo-38721545.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    accent: 'from-yellow-300/40 to-teal-200/30',
  },
  {
    id: 'gift-sets',
    name: 'Gift Sets',
    description: 'Curated duos and coffrets for gifting that impresses.',
    image: 'https://images.pexels.com/photos/36482359/pexels-photo-36482359.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
    accent: 'from-slate-400/40 to-rose-300/30',
  },
] as const;

export type Badge = 'Best Seller' | 'New' | 'Trending' | '';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  size: string;
  price: number;
  image: string;
  badge: Badge;
}

const productImages = [
  'https://images.pexels.com/photos/7702669/pexels-photo-7702669.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/36389336/pexels-photo-36389336.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/8624586/pexels-photo-8624586.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/13875783/pexels-photo-13875783.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/21308575/pexels-photo-21308575.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/8625543/pexels-photo-8625543.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/21008941/pexels-photo-21008941.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/12402366/pexels-photo-12402366.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/37468240/pexels-photo-37468240.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/13767420/pexels-photo-13767420.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/11711808/pexels-photo-11711808.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/12999010/pexels-photo-12999010.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/4110341/pexels-photo-4110341.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/34113440/pexels-photo-34113440.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/15097440/pexels-photo-15097440.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/14466498/pexels-photo-14466498.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/21008923/pexels-photo-21008923.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/20591858/pexels-photo-20591858.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/13662407/pexels-photo-13662407.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/264819/pexels-photo-264819.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/15096784/pexels-photo-15096784.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/29611647/pexels-photo-29611647.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/32630375/pexels-photo-32630375.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/1961788/pexels-photo-1961788.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/4735889/pexels-photo-4735889.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/21546978/pexels-photo-21546978.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/14736080/pexels-photo-14736080.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/30981935/pexels-photo-30981935.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/35806941/pexels-photo-35806941.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/35806942/pexels-photo-35806942.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/17155333/pexels-photo-17155333.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/17155311/pexels-photo-17155311.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/35658144/pexels-photo-35658144.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/5790458/pexels-photo-5790458.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/36389337/pexels-photo-36389337.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/34144841/pexels-photo-34144841.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/34144749/pexels-photo-34144749.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/12053220/pexels-photo-12053220.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/34051690/pexels-photo-34051690.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/33768040/pexels-photo-33768040.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/31847826/pexels-photo-31847826.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/7270665/pexels-photo-7270665.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/9957568/pexels-photo-9957568.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/32630385/pexels-photo-32630385.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/9957575/pexels-photo-9957575.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/15097508/pexels-photo-15097508.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/9957554/pexels-photo-9957554.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  'https://images.pexels.com/photos/9957555/pexels-photo-9957555.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
];

const productNames = [
  ['Royal Oud Noir', 'Maison Ziarat'], ['Amber Velvet', 'Ziarat Signature'], ['Rose Impériale', 'Ziarat Couture'],
  ['Saffron Mirage', 'Maison Ziarat'], ['Midnight Musk', 'Ziarat Signature'], ['Golden Amber', 'Ziarat Heritage'],
  ['Cedar Royale', 'Maison Ziarat'], ['Jasmine Sillage', 'Ziarat Couture'], ['Oud Royale', 'Ziarat Heritage'],
  ['Velvet Rose', 'Ziarat Signature'], ['Santal Mystique', 'Maison Ziarat'], ['Amber Noir', 'Ziarat Heritage'],
  ['Bergamot Lumière', 'Ziarat Couture'], ['Patchouli Intense', 'Maison Ziarat'], ['Iris Divine', 'Ziarat Signature'],
  ['Leather Oud', 'Ziarat Heritage'], ['Vanille Impériale', 'Ziarat Couture'], ['White Amber', 'Maison Ziarat'],
  ['Rose Taif', 'Ziarat Signature'], ['Oud Mubarak', 'Ziarat Heritage'], ['Mystic Oud', 'Maison Ziarat'],
  ['Floral Mirage', 'Ziarat Couture'], ['Saffron Oud', 'Ziarat Heritage'], ['Amber Saffron', 'Maison Ziarat'],
  ['Rose Musk', 'Ziarat Signature'], ['Cedar Amber', 'Ziarat Heritage'], ['Jasmine Oud', 'Maison Ziarat'],
  ['Vanille Oud', 'Ziarat Couture'], ['Santal Royale', 'Ziarat Heritage'], ['Citrus Noir', 'Maison Ziarat'],
  ['Iris Oud', 'Ziarat Signature'], ['Musk Royale', 'Ziarat Heritage'], ['Amber Rose', 'Maison Ziarat'],
  ['Oud Velvet', 'Ziarat Couture'], ['Saffron Rose', 'Ziarat Signature'], ['Jasmine Amber', 'Maison Ziarat'],
  ['Cedar Oud', 'Ziarat Heritage'], ['Rose Oud Royale', 'Ziarat Couture'], ['Mystic Amber', 'Maison Ziarat'],
  ['Velvet Oud', 'Ziarat Signature'], ['Santal Oud', 'Ziarat Heritage'], ['Leather Noir', 'Maison Ziarat'],
  ['Iris Amber', 'Ziarat Couture'], ['Bergamot Oud', 'Ziarat Signature'], ['Patchouli Oud', 'Maison Ziarat'],
  ['White Musk', 'Ziarat Heritage'], ['Vanille Royale', 'Ziarat Couture'], ['Amber Oud', 'Maison Ziarat'],
];

const sizes = ['50ml', '100ml', '12ml attar', '100ml', '50ml', '12ml attar', '100ml', '50ml', 'Set of 2'];
const catIds = ['men', 'women', 'unisex', 'oud', 'attars', 'gift-sets'];
const badges: Badge[] = ['Best Seller', 'New', 'Trending', 'Best Seller', '', '', 'New', 'Trending', ''];

export const products: Product[] = Array.from({ length: 108 }, (_, i) => {
  const [name, brand] = productNames[i % productNames.length];
  const cat = catIds[i % catIds.length];
  return {
    id: `p${i + 1}`,
    name,
    brand,
    category: cat,
    size: sizes[i % sizes.length],
    price: 1200 + (i % 9) * 650 + (i % 3) * 250,
    image: productImages[i % productImages.length],
    badge: badges[i % badges.length],
  };
});

export const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Verified Google Review',
    rating: 5,
    text: 'Absolutely the best perfume shop in Ahmedabad. The oud collection is unmatched and the staff helped me find my signature scent. Long-lasting and authentic.',
  },
  {
    name: 'Priya Sharma',
    role: 'Verified Google Review',
    rating: 5,
    text: 'I visited Ziarat for a gift and left with three bottles. The attars are pure and luxurious. Beautifully packaged and reasonably priced for the quality.',
  },
  {
    name: 'Rohan Desai',
    role: 'Verified Google Review',
    rating: 5,
    text: 'Been a customer for over two years. Their woody and leather fragrances are incredible — people always ask what I am wearing. Highly recommended.',
  },
  {
    name: 'Sneha Patel',
    role: 'Verified Google Review',
    rating: 5,
    text: 'The floral range is divine. Rose Impériale lasts all day on me. The boutique feels premium and the service is warm and knowledgeable.',
  },
  {
    name: 'Karan Joshi',
    role: 'Verified Google Review',
    rating: 5,
    text: 'Best place for genuine oud and attars in the city. Fair prices, premium packaging, and fragrances that genuinely last. My go-to store now.',
  },
  {
    name: 'Ishita Gandhi',
    role: 'Verified Google Review',
    rating: 5,
    text: 'Got a gift set for my husband and he loved it. The presentation was stunning. Ziarat Perfumes truly understands luxury gifting.',
  },
];

export const instagramPosts = [
  'https://images.pexels.com/photos/7702669/pexels-photo-7702669.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
  'https://images.pexels.com/photos/8624586/pexels-photo-8624586.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
  'https://images.pexels.com/photos/21308575/pexels-photo-21308575.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
  'https://images.pexels.com/photos/12402366/pexels-photo-12402366.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
  'https://images.pexels.com/photos/13767420/pexels-photo-13767420.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
  'https://images.pexels.com/photos/11711808/pexels-photo-11711808.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
];

export const processSteps = [
  {
    step: '01',
    title: 'Sourcing Ingredients',
    text: 'We source rare essences — Cambodian oud, Taif rose, Mysore sandalwood and saffron — directly from trusted growers and distillers across the world.',
    image: 'https://images.pexels.com/photos/8450508/pexels-photo-8450508.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  },
  {
    step: '02',
    title: 'Crafting Blends',
    text: 'Our perfumers compose in layers — top, heart and base — balancing each note so the fragrance unfolds gracefully over hours on your skin.',
    image: 'https://images.pexels.com/photos/8450105/pexels-photo-8450105.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  },
  {
    step: '03',
    title: 'Quality Testing',
    text: 'Every batch is aged, then tested for longevity, projection and purity. Only blends that meet our standards reach the shelf.',
    image: 'https://images.pexels.com/photos/8450466/pexels-photo-8450466.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  },
  {
    step: '04',
    title: 'Luxury Packaging',
    text: 'Each bottle is presented in hand-finished packaging designed to feel like a gift — worthy of the fragrance inside.',
    image: 'https://images.pexels.com/photos/12053220/pexels-photo-12053220.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  },
];

export const whyUs = [
  { icon: 'Leaf', title: 'Authentic Ingredients', text: 'Rare oud, rose and sandalwood sourced from their native regions.' },
  { icon: 'FlaskConical', title: 'Expert Blending', text: 'Composed by perfumers with decades of olfactory craft.' },
  { icon: 'Clock', title: 'Long-Lasting', text: 'Concentrated formulas that stay with you for 8–12 hours.' },
  { icon: 'Gift', title: 'Luxury Packaging', text: 'Hand-finished boxes that make every bottle a gift.' },
  { icon: 'Layers', title: 'Wide Range', text: 'Over 100 fragrances across six categories for every mood.' },
  { icon: 'BadgeCheck', title: 'Trusted for Years', text: 'Ahmedabad’s chosen fragrance house, loved by loyal regulars.' },
];
