import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Car, Shield } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-3 text-primary hover:text-primary-light transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              <div className="flex items-center gap-2">
                <Car className="w-6 h-6 text-primary" />
                <span className="font-bold text-primary">Automoto</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-12 h-12 text-primary" />
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Automoto – Privacy Policy
                </h1>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Effective Date: 1st August, 2025
                </p>

                <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary mb-8">
                  <p className="text-gray-700 font-medium">
                    This Privacy Policy describes how Automoto (“we”, “our”, or “us”) collects, uses, and protects your personal information when you use our mobile application (“App”).
                    <br />
                    By downloading or using Automoto, you agree to the terms of this Privacy Policy.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* 1. Information We Collect */}
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                    <ul className="list-disc ml-6 text-gray-600 leading-relaxed mb-2">
                      <li>
                        <strong>a. Personal Information</strong>
                        <ul className="list-disc ml-6">
                          <li>Name, email, phone number (if provided)</li>
                          <li>Profile details (e.g., car details, preferences)</li>
                          <li>Location (if location services are enabled)</li>
                        </ul>
                      </li>
                      <li>
                        <strong>b. App Usage Data</strong>
                        <ul className="list-disc ml-6">
                          <li>App interactions (screens viewed, bundles clicked)</li>
                          <li>Device type and OS version</li>
                          <li>Language and region settings</li>
                        </ul>
                      </li>
                      <li>
                        <strong>c. Transaction Data</strong>
                        <ul className="list-disc ml-6">
                          <li>Bundle purchases and redemptions</li>
                          <li>Payment information (processed securely via Stripe)</li>
                        </ul>
                      </li>
                      <li>
                        <strong>d. Vendor Reviews &amp; Ratings</strong>
                        <ul className="list-disc ml-6">
                          <li>Feedback, comments, and star ratings left by users</li>
                        </ul>
                      </li>
                    </ul>
                  </section>

                  {/* 2. How We Use Your Information */}
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                    <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
                      <li>Enable core app features (discovery, purchase, redemption)</li>
                      <li>Improve user experience and app performance</li>
                      <li>Offer relevant promotions and deals</li>
                      <li>Monitor activity for security and fraud prevention</li>
                      <li>Analyze trends to enhance vendor visibility and services</li>
                    </ul>
                    <p className="text-gray-600 mt-2">
                      We do <strong>not</strong> sell your personal data to third parties.
                    </p>
                  </section>

                  {/* 3. How We Share Your Information */}
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Share Your Information</h2>
                    <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
                      <li>With vendors: when you redeem a bundle or leave a review</li>
                      <li>With service providers: for hosting, analytics, payments (e.g., Firebase, Stripe)</li>
                      <li>With law enforcement: if legally required</li>
                    </ul>
                    <p className="text-gray-600 mt-2">
                      All third parties are contractually required to protect your data.
                    </p>
                  </section>

                  {/* 4. Cookies & Analytics */}
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies &amp; Analytics</h2>
                    <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
                      <li>We may use Firebase Analytics or similar tools to understand app usage.</li>
                      <li>We do not use tracking cookies outside the app.</li>
                      <li>All analytics data is anonymized and aggregated where possible.</li>
                    </ul>
                  </section>

                  {/* 5. Data Security */}
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
                    <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
                      <li>We use encryption and secure protocols to protect your data.</li>
                      <li>Access to your data is restricted to authorized personnel only.</li>
                    </ul>
                    <p className="text-gray-600 mt-2">
                      Despite best efforts, no digital system is 100% secure. Use the app at your own risk.
                    </p>
                  </section>

                  {/* 6. Your Rights */}
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
                    <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
                      <li>You can request to access, update, or delete your personal data.</li>
                      <li>You can opt out of non-essential communications or location tracking via your device settings.</li>
                    </ul>
                    <p className="text-gray-600 mt-2">
                      To request any of the above, contact us at <a href="mailto:support@automoto360.com" className="text-primary underline">support@automoto360.com</a>.
                    </p>
                  </section>

                  {/* 7. Data Retention */}
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
                    <p className="text-gray-600 leading-relaxed">
                      We retain your information only as long as necessary to provide services or comply with legal obligations.<br />
                      You may request early deletion of your data at any time.
                    </p>
                  </section>

                  {/* 8. Children’s Privacy */}
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children’s Privacy</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Our app is not intended for children under 13. We do not knowingly collect data from minors.
                    </p>
                  </section>

                  {/* 9. Changes to This Policy */}
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
                    <p className="text-gray-600 leading-relaxed">
                      We may update this Privacy Policy as our services evolve. Any changes will be reflected in the "Effective Date" above. Continued use of the app after changes means you accept the updated policy.
                    </p>
                  </section>

                  {/* 10. Contact Us */}
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <p className="text-gray-700">
                        <strong>Email:</strong> support@automoto360.com<br />
                        <strong>Address:</strong> Dubai, UAE
                      </p>
                    </div>
                  </section>
                </div>

                <div className="mt-12 p-6 bg-green-50 rounded-xl border-l-4 border-green-400">
                  <p className="text-gray-700">
                    <strong>Commitment to Privacy:</strong> We are committed to maintaining the highest standards of privacy protection for all our users in the UAE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Privacy;
