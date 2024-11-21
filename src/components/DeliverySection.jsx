import React from 'react';
import { deliveryContent } from './data/content';

const DeliverySection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <h2 className="text-3xl font-serif text-gray-900 mb-8">ДОСТАВКА</h2>
            <img
              src={deliveryContent.image}
              alt="Wine corks"
              className="rounded-lg w-full aspect-[4/3] object-cover"
            />
          </div>

          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed">
              {deliveryContent.description}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {deliveryContent.additionalInfo}
            </p>
            <button className="inline-flex items-center text-red-800 hover:text-red-900 transition-colors">
              ПОДРОБНЕЕ О ДОСТАВКЕ
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative wine stain */}
      <div className="absolute -bottom-10 right-0 opacity-10">
        <img
          src="/wine-stain.png"
          alt=""
          className="w-64 h-auto transform rotate-45"
        />
      </div>
    </section>
  );
};

export default DeliverySection;