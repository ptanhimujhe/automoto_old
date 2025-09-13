import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: 'No Booking Hassles',
    description: 'Just walk in and redeem — no complicated scheduling or waiting for confirmations.'
  },
  {
    title: 'Honest, Transparent User Reviews',
    description: 'Real feedback from real UAE drivers to help you make the best choices.'
  },
  {
    title: 'No More Endless Searching',
    description: 'Stop jumping between Google, Maps, and dozens of sites. Automoto brings everything for your car, all in one place.'
  },
  {
    title: 'In-App Deals Tailored for UAE Car Owners',
    description: 'Special offers and bundles designed for local preferences and needs.'
  }
];

const WhyAutomoto: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Automoto?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building something different — an auto service platform that puts simplicity and transparency first.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAutomoto;