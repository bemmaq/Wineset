import React from 'react';
import { corporateServices } from './data/content';

const CorporateSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-serif text-gray-900">
              КОРПОРАТИВНЫМ КЛИЕНТАМ
              <br />
              И ПАРТНЕРАМ
            </h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                ←
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <div key={index} className="space-y-4">
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 border-t border-red-800 pt-4">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;