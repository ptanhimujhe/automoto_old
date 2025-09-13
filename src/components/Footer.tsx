import React from 'react';
import {  Instagram,  Facebook,  } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                    src="/automoto_logo_crop.png"
                    alt="Automoto Logo"
                    className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                UAE's all-in-one auto app connecting drivers with trusted garages and service providers across the
                country.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* App Store */}
                <a
                    href="https://apps.apple.com/ae/app/automoto/id6749366287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                  <img
                      src="/images/app_store_.png" // Download from Apple or use their official CDN
                      alt="Download on the App Store"
                      className="h-14 w-auto"
                  />
                </a>

                {/* Google Play */}
                <a
                    href="https://play.google.com/store/apps/details?id=com.automoto360.automoto" // <-- Replace with your real Play Store link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                  <img
                      src="/images/google.png" // Download from Google or use their official CDN
                      alt="Get it on Google Play"
                      className="h-14 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href="mailto:support@automoto360.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Contact Us
                  </a>
                </li>
                <li>
                <a href="mailto:support@automoto360.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                    List Your Business
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Connect</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-300">
                  <span className="block font-medium text-white">Email</span>
                  support@automoto360.com
                </p>
                <p className="text-gray-300">
                  <span className="block font-medium text-white">Phone</span>
                  +971 58 550 7650
                </p>
              </div>
              
              {/* Social Media */}
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/automoto360ae?utm_source=qr&igsh=bGl6dWJ1cGVraWV0"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/share/1Ftpg59v4X/"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-300 text-sm">
                © 2025 Automoto UAE. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Made with ❤️ for UAE drivers
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;