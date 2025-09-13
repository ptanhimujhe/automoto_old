import React from 'react';
import { Search, ShoppingBag, Ticket, Star, MapPin, Archive } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Discover Garages & Auto Shops',
    description: 'Find trusted garages and auto service providers across the UAE with detailed profiles and real reviews.'
  },
  {
    icon: ShoppingBag,
    title: 'Buy Value Service Bundles',
    description: 'Purchase convenient service packages at great prices, tailored for UAE car owners.'
  },
  {
    icon: Ticket,
    title: 'Redeem in Person — No Booking Needed',
    description: 'Simply walk in and redeem your purchased bundles. No complicated booking process required.'
  },
  {
    icon: Star,
    title: 'Rate & Review Vendors',
    description: 'Share your honest experiences and help fellow UAE drivers make informed choices.'
  },
  {
    icon: MapPin,
    title: 'View Store Info',
    description: 'Access complete information including location, timings, services offered, and contact details.'
  },
  {
    icon: Archive, // You could use a different icon if you prefer
    title: 'Find Spare Parts Easily',
    description: 'Request the car part you need and get offers from verified vendors — no more endless searching.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automoto brings together all essential auto services in one simple, easy-to-use platform designed for UAE drivers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;