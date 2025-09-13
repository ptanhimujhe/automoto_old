import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Car } from 'lucide-react';

const Terms: React.FC = () => {
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
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Automoto – Terms &amp; Conditions
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Last updated: 1 August, 2025
                </p>
                <p className="mb-8 text-gray-700">
                  Welcome to Automoto — the UAE’s one-stop app for discovering automobile service providers, purchasing value bundles, and rating vendor experiences.<br />
                  By using the Automoto mobile application ("App") or accessing any content provided through it, you agree to be bound by these Terms &amp; Conditions ("Terms"). If you do not agree, please do not use the App.
                </p>

                <div className="space-y-8">

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Eligibility</h2>
                    <p className="text-gray-600 leading-relaxed">
                      You must be at least 18 years old to use this App. By using the App, you confirm that you are legally eligible to enter into this agreement.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. App Usage</h2>
                    <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
                      <li>Discover garages and auto service vendors</li>
                      <li>Purchase service bundles</li>
                      <li>Redeem services in person at vendor branches</li>
                      <li>Rate and review vendors after service</li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      Automoto does not provide the services directly. All services are fulfilled by independent third-party vendors.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Vendor Listings</h2>
                    <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
                      <li>All vendor listings are provided by the vendors themselves.</li>
                      <li>We verify vendor details to the best of our ability, but we do not guarantee service quality, pricing accuracy, or service availability.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Purchases &amp; Payments</h2>
                    <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
                      <li>All bundle purchases are final unless stated otherwise.</li>
                      <li>Refunds are only issued in exceptional cases (e.g., vendor rejection or service unavailability), subject to our internal verification.</li>
                      <li>Automoto may use third-party payment gateways and is not responsible for errors or delays caused by those systems.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Reviews &amp; Ratings</h2>
                    <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
                      <li>You may post reviews and ratings after redeeming a bundle.</li>
                      <li>You agree not to post misleading, offensive, or defamatory content.</li>
                      <li>Automoto reserves the right to moderate or remove content at its discretion.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Vendor Obligations</h2>
                    <ul className="list-disc ml-6 text-gray-600 leading-relaxed">
                      <li>Vendors agree to honor valid bundle redemptions.</li>
                      <li>Any violation or abuse of customer trust may result in vendor removal without prior notice.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
                    <p className="text-gray-600 leading-relaxed">
                      All content, branding, and materials in the App are the property of Automoto or its licensors. You may not copy, reuse, or distribute any content without written permission.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Privacy</h2>
                    <p className="text-gray-600 leading-relaxed">
                      We collect limited data to operate and improve the App (e.g., location, app usage, purchase history).<br />
                      For details, please read our <Link className="text-primary underline" to="/privacy">Privacy Policy</Link>.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Automoto is not liable for service delays, damages, or disputes between users and vendors.<br />
                      Our role is limited to connecting users and vendors, and we are not a party to any service transaction.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
                    <p className="text-gray-600 leading-relaxed">
                      You may stop using the App at any time.<br />
                      We reserve the right to suspend or terminate your access for any violations of these Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
                    <p className="text-gray-600 leading-relaxed">
                      We may update these Terms periodically.<br />
                      Continued use of the App implies your acceptance of the revised terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
                    <p className="text-gray-600 leading-relaxed">
                      These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts in the UAE.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
                    <div className="bg-gray-50 p-6 rounded-xl mt-2">
                      <p className="text-gray-700 mb-1">
                        <strong>Email:</strong> support@automoto360.com<br />
                        <strong>Address:</strong> Dubai, UAE<br />
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. User Accounts</h2>
                    <p className="text-gray-600 leading-relaxed">
                      If users can create accounts (now or in the future):<br />
                      You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.<br />
                      Automoto is not liable for any unauthorized access caused by your failure to secure your account.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Promo Codes / Discounts (If applicable)</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Promo codes are subject to specific terms and validity periods.<br />
                      Automoto reserves the right to modify or revoke any promotional offer without prior notice.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Third-Party Services</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Automoto may integrate with third-party services (e.g., payment processors, analytics tools).<br />
                      By using the app, you also agree to the terms and privacy policies of these third parties.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. User Conduct / Acceptable Use</h2>
                    <p className="text-gray-600 leading-relaxed">
                      You agree not to misuse the App, including (but not limited to) spamming, misrepresenting information, or violating local laws.<br />
                      Automoto reserves the right to suspend accounts involved in suspicious or abusive behavior.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">18. Dispute Resolution</h2>
                    <p className="text-gray-600 leading-relaxed">
                      In case of any disputes between users and vendors, Automoto encourages amicable resolution first.<br />
                      If unresolved, legal proceedings must be brought under UAE law and jurisdiction.
                    </p>
                  </section>
                </div>

                <div className="mt-12 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <p className="text-gray-700">
                    <strong>Note:</strong> These terms may be updated from time to time. Please check back for the most current version or contact us for specific questions about our policies.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Terms;
