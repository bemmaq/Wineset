import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from './data/content';

const Hero = () => {
  const currentSlide = heroSlides[0]; // For now, showing only first slide

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={currentSlide.image}
          alt={currentSlide.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="text-5xl font-serif text-white mb-6">
              {currentSlide.title}
            </h1>
            <h2 className="text-7xl font-serif text-white mb-8">
              {currentSlide.subtitle.split(' & ').map((text, i) => (
                <React.Fragment key={i}>
                  {text}
                  <br />
                </React.Fragment>
              ))}
            </h2>
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition-colors">
              {currentSlide.buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
        <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-red-600" />
          <div className="w-2 h-2 rounded-full bg-white/50" />
          <div className="w-2 h-2 rounded-full bg-white/50" />
        </div>
        <button className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default Hero;