import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import WhyAutomoto from '../components/WhyAutomoto';
import VendorInvitation from '../components/VendorInvitation';
import FAQ from '../components/FAQ';
import AppScreenshots from '../components/AppScreenshots';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="why-automoto">
        <WhyAutomoto />
      </div>
      <div id="vendors">
        <VendorInvitation />
      </div>
      <AppScreenshots />
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;