import React from 'react';
import { Download } from 'lucide-react';

const BlogCTA: React.FC = () => {
  return (
    <section className="mt-12 bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Find the Best Auto Services?
        </h3>
        <p className="text-gray-200 mb-6">
          Download Automoto and discover trusted garages, exclusive deals, and hassle-free service booking across the UAE.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://apps.apple.com/ae/app/automoto/id6749366287"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/images/app_store_.png"
              alt="Download on the App Store"
              className="h-12 w-auto"
            />
          </a>
          
          <a
            href="https://play.google.com/store/apps/details?id=com.automoto360.automoto"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/images/google.png"
              alt="Get it on Google Play"
              className="h-12 w-auto"
            />
          </a>
        </div>
        
        <p className="text-gray-300 text-sm mt-4">
          Free to download • Available on iOS and Android
        </p>
      </div>
    </section>
  );
};

export default BlogCTA;