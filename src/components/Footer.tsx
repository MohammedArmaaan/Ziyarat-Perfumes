import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin, Clock, Star } from 'lucide-react';
import { business } from '@/data';
import { navLinks, waLink } from '@/lib';

export function Footer() {
  return (
    <footer className="relative bg-[#ece7da] border-t border-ink/10 pt-20 pb-32 lg:pb-16 overflow-hidden">
      <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-3xl text-gradient-teal">Ziarat Perfumes</Link>
            <p className="mt-4 text-ink/60 max-w-sm leading-relaxed">
              {business.tagline}. Curated fragrances, rare oud and traditional attars — crafted for those who appreciate the art of scent.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass">
                <Star className="w-4 h-4 fill-teal text-teal" />
                <span className="text-sm font-medium">{business.rating}</span>
                <span className="text-xs text-ink/50">({business.reviewCount} reviews)</span>
              </div>
              <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full glass hover:border-teal/40 transition-colors">
                <Instagram className="w-4 h-4 text-teal" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-teal mb-5">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-ink/70 hover:text-teal transition-colors text-sm">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-teal mb-5">Visit Us</h4>
            <ul className="space-y-4 text-sm text-ink/70">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <span>{business.address}</span>
              </li>
              <li>
                <a href={`tel:${business.phoneRaw}`} className="flex gap-3 hover:text-teal transition-colors">
                  <Phone className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                  <span>{business.phone}</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <span>{business.hours}</span>
              </li>
            </ul>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-teal link-underline">
              Message us on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 pt-7 border-t border-ink/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink/40">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p className="tracking-wide">Crafted with care in Ahmedabad.</p>
        </div>
      </div>
    </footer>
  );
}
