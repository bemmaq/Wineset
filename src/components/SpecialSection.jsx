import React from 'react';
import { specialSection } from './data/content';

const SpecialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-gray-900">
              {specialSection.title.line1}
              <br />
              {specialSection.title.line2}
            </h2>
            
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={specialSection.mainImage.src}
                alt={specialSection.mainImage.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-sm bg-black/70 px-4 py-2 rounded-full">
                  {specialSection.mainImage.caption}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed">
              {specialSection.description}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {specialSection.gallery.map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-sm bg-black/70 px-4 py-2 rounded-full">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialSection;