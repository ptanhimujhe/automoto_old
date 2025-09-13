import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Is Automoto free to use?',
    answer: 'Yes, downloading and using the Automoto app is completely free. You only pay for the service bundles you choose to purchase.'
  },
  {
    question: 'Do I need to book a service?',
    answer: 'No booking required! Simply purchase a service bundle through the app, then walk into any participating garage and redeem it in person.'
  },
  {
    question: 'Can I use Automoto without an account?',
    answer: 'You can browse garages and view information without an account, but you\'ll need to create one to purchase bundles and leave reviews.'
  },
  {
    question: 'How do I redeem a bundle?',
    answer: 'After purchasing a bundle, you\'ll receive a QR code in the app. Simply show this code to the garage staff to redeem your service.'
  },
  {
    question: 'Where is Automoto available?',
    answer: 'Currently, Automoto is launching in the UAE. We\'re starting with major cities and expanding to cover the entire country.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about getting started with Automoto
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help.
            </p>
            <a
                href="mailto:support@automoto360.com"
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-light transition-colors duration-300 inline-block"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;