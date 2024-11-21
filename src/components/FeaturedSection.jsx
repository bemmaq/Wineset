import React from 'react';
import { featuredCategories } from './data/content';

const FeaturedSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
      {featuredCategories.map((category, index) => (
        <div key={index} className="relative h-[300px] overflow-hidden rounded-lg group">
          <img
            src={category.image}
            alt={category.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-2xl font-serif text-center">
              {category.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeaturedSection;