import React, { useState, useEffect } from 'react';
import {  Menu, X, Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <img
              src="/automoto_logo_crop.png"
              alt="Automoto Logo"
              className={`w-20 h-20 object-contain transition-all duration-300 ${
                  isScrolled ? '' : 'drop-shadow-lg'
              }`}
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
                onClick={() => scrollToSection('features')}
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                    isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
            >
              Features
            </button>
            <button
                onClick={() => scrollToSection('why-automoto')}
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                    isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
            >
              Why Automoto
            </button>
            <button
                onClick={() => scrollToSection('vendors')}
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                    isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
            >
              For Vendors
            </button>
            <button
                onClick={() => scrollToSection('faq')}
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                    isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
            >
              FAQ
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
                onClick={() => scrollToSection('hero')}
                className="bg-primary text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-primary-light transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Download className="w-4 h-4"/>
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
                  isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/20'
              }`}
          >
            {isMobileMenuOpen ? (
                <X className="w-6 h-6"/>
            ) : (
                <Menu className="w-6 h-6"/>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div
                className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
              <nav className="container mx-auto px-4 py-6 space-y-4">
                <button
                    onClick={() => scrollToSection('features')}
                className="block w-full text-left py-3 px-4 text-gray-700 font-medium hover:bg-primary/5 hover:text-primary rounded-xl transition-colors duration-300"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('why-automoto')}
                className="block w-full text-left py-3 px-4 text-gray-700 font-medium hover:bg-primary/5 hover:text-primary rounded-xl transition-colors duration-300"
              >
                Why Automoto
              </button>
              <button 
                onClick={() => scrollToSection('vendors')}
                className="block w-full text-left py-3 px-4 text-gray-700 font-medium hover:bg-primary/5 hover:text-primary rounded-xl transition-colors duration-300"
              >
                For Vendors
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left py-3 px-4 text-gray-700 font-medium hover:bg-primary/5 hover:text-primary rounded-xl transition-colors duration-300"
              >
                FAQ
              </button>
              <div className="pt-4 border-t border-gray-200">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-light transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download App
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;