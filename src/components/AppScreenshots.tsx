import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    id: 1,
    title: 'Explore Vendors',
    description: 'Browse nearby garages and auto services',
    image: '/images/home_ss.jpeg'
  },
  {
    id: 2,
    title: 'Bundle Details',
    description: 'View service packages and pricing',
    image: '/images/vendor_list.jpeg'
  },
  {
    id: 3,
    title: 'Vendor Profile',
    description: 'Check ratings, reviews, and info',
    image: '/images/vendor_profile.jpeg'
  },
  {
    id: 4,
    title: 'Redeem Screen',
    description: 'Show QR code to redeem bundles',
    image: '/images/road_asst.jpeg'
  },
];

const AppScreenshots: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              See Automoto in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a peek at the clean, intuitive interface designed to make finding and booking auto services effortless.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Mobile Carousel */}
            <div className="block lg:hidden">
              <div className="relative">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-64 h-80 bg-gray-900 rounded-3xl p-4 shadow-2xl flex items-center justify-center">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <img
                          src={screenshots[currentIndex].image}
                          alt={screenshots[currentIndex].title}
                          className="absolute inset-0 w-full h-full object-cover rounded-xl"
                          style={{background: '#fff'}}
                      />
                    </div>
                  </div>

                </div>

                {/* Navigation */}
                <div className="flex justify-center gap-4 mb-6">
                  <button
                      onClick={prevSlide}
                      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-6 h-6"/>
                  </button>
                  <button
                      onClick={nextSlide}
                      className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary hover:bg-gray-50"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2">
                  {screenshots.map((_, index) => (
                      <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                          }`}
                      />
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-4 gap-6">
              {screenshots.map((screenshot, index) => (
                  <div
                      key={screenshot.id}
                      className="group cursor-pointer animate-slide-up"
                      style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div
                        className="w-full aspect-[3/4] bg-gray-900 rounded-3xl p-3 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <img
                            src={screenshot.image}
                            alt={screenshot.title}
                            className="absolute inset-0 w-full h-full object-cover rounded-xl"
                            style={{background: '#fff'}}
                        />
                      </div>
                    </div>

                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default AppScreenshots;
