import React from 'react';
import { Download, Car } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white overflow-hidden pt-16 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-white/15 blur-2xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            {/*<div className="flex items-center justify-center lg:justify-start gap-2 mb-6">*/}
            {/*  <Car className="w-8 h-8 text-white" />*/}
            {/*  <span className="text-lg font-medium">Automoto</span>*/}
            {/*</div>*/}
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              UAE's All-in-One
              <span className="block text-gray-200">Auto App</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl">
              Discover garages, explore value bundles, and get access to trusted automobile services near you — all in one app.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex gap-4">
                {/* App Store */}
                <a
                    href="https://apps.apple.com/ae/app/automoto/id6749366287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform duration-300 hover:scale-105"
                >
                  <img
                      src="/images/app_store_.png"
                      alt="Download on the App Store"
                      className="h-14 w-auto"
                  />
                </a>

                {/* Google Play */}
                <a
                    href="https://play.google.com/store/apps/details?id=com.automoto360.automoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform duration-300 hover:scale-105"
                >
                  <img
                      src="/images/google.png"
                      alt="Get it on Google Play"
                      className="h-14 w-auto"
                  />
                </a>
              </div>

            </div>

            <p className="text-gray-300 text-sm mt-6">
              Get it Now!!
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-96 bg-gray-900 rounded-3xl p-4 shadow-2xl animate-float">
                <div
                    className="w-full h-full bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <img
                      src="/images/home_ss.jpeg"
                      alt="Automoto App Home Screen"
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Floating Icons */}
              <div
                  className="absolute -top-4 -left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <Car className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Download className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;