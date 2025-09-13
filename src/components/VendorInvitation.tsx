import React from 'react';
import { Store, Users, DollarSign, TrendingUp } from 'lucide-react';

const VendorInvitation: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Store className="w-16 h-16 mx-auto mb-6 text-white/90" />
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Are You an Auto Vendor in the UAE?
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Automoto is open to all garages and auto-related businesses in the UAE.
            <span className="block mt-2 font-medium">
              Join now — no listing fees or hidden charges.
            </span>
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-white/80"/>
              <h3 className="text-lg font-semibold mb-2">Simple Onboarding</h3>
              <p className="text-gray-300 text-sm">Get listed in minutes, hassle-free</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-white/80"/>
              <h3 className="text-lg font-semibold mb-2">Reach More Customers</h3>
              <p className="text-gray-300 text-sm">Connect with UAE drivers</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-white/80"/>
              <h3 className="text-lg font-semibold mb-2">Grow Your Business</h3>
              <p className="text-gray-300 text-sm">Increase your revenue</p>
            </div>
          </div>

          <a href="https://wa.me/971585507650"
              className="group bg-white text-primary px-12 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            List Your Business
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          
          <p className="text-gray-300 text-sm mt-6">
            Free to join • No setup fees • Simple onboarding process
          </p>
        </div>
      </div>
    </section>
  );
};

export default VendorInvitation;