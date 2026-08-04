import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from '@/store';
import { Cursor, ScrollProgress } from '@/components/Primitives';
import { Header } from '@/components/Header';
import { MobileNav } from '@/components/MobileNav';
import { Footer } from '@/components/Footer';
import { CartDrawer, FloatingCounters } from '@/components/CartDrawer';
import { Home } from '@/pages/Home';
import { Collection } from '@/pages/Collection';
import { Products } from '@/pages/Products';
import { Process } from '@/pages/Process';
import { WhyUs } from '@/pages/WhyUs';
import { Contact } from '@/pages/Contact';
import { ProductDetail } from '@/pages/ProductDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <StoreProvider>
      <HashRouter>
        <ScrollToTop />
        <Cursor />
        <ScrollProgress />
        <Header />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/products" element={<Products />} />
            <Route path="/process" element={<Process />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
        <MobileNav />
        <FloatingCounters />
        <CartDrawer />
      </HashRouter>
    </StoreProvider>
  );
}
