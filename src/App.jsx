import React from 'react';
import { Heart, ShoppingCart, Search, ChevronLeft, ChevronRight, Wine } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import SpecialSection from './components/SpecialSection';
import CorporateSection from './components/CorporateSection';
import DeliverySection from './components/DeliverySection';
import Footer from './components/Footer';
import SommelierChoice from './components/SommelierChoice';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection/>
        <SpecialSection/>
        <CorporateSection/>
        <DeliverySection/>
        <SommelierChoice/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;