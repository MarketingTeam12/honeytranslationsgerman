export function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4d2f8c] bg-[rgba(255,255,255,0)] backdrop-blur-sm mb-6 shadow-[0px_-7px_11px_0px_inset_rgba(164,143,255,0.12)]">
            <span className="text-sm bg-gradient-to-r from-[rgba(229,156,255,0.4)] via-[rgba(186,156,255,0.4)] to-[rgba(156,178,255,0.4)] bg-clip-text text-transparent">
              Privacy
            </span>
          </div>
          <h1 className="text-5xl mb-4 bg-gradient-to-b from-white to-[rgba(255,255,255,0.7)] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-[rgba(239,237,253,0.5)] text-sm">Last updated: December 12, 2024</p>
        </div>

        {/* Content */}
        <div className="relative p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)]">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl text-white mb-4">1. Information We Collect</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed mb-3">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-[rgba(239,237,253,0.7)] space-y-2 ml-4">
                  <li>Contact information (name, email, phone number, address)</li>
                  <li>Business information (company name, industry, project details)</li>
                  <li>Documents and content submitted for translation</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication history with our team</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed mb-3">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-[rgba(239,237,253,0.7)] space-y-2 ml-4">
                  <li>Providing translation and localization services</li>
                  <li>Processing payments and maintaining billing records</li>
                  <li>Communicating about your projects and our services</li>
                  <li>Improving our services and customer experience</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">3. Data Security</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  We implement industry-standard security measures to protect your information. This includes encryption of data in transit and at rest, secure access controls, and regular security audits. All our translators and staff sign non-disclosure agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">4. Data Sharing and Disclosure</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed mb-3">
                  We do not sell or rent your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-[rgba(239,237,253,0.7)] space-y-2 ml-4">
                  <li>With translators and staff working on your project (under NDA)</li>
                  <li>With service providers who assist our operations (e.g., payment processors)</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">5. Data Retention</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  We retain your information for as long as necessary to provide our services and comply with legal obligations. Translated documents are typically stored for a period of 2 years, unless you request earlier deletion or longer retention.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">6. Your Rights</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-[rgba(239,237,253,0.7)] space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">7. Cookies and Tracking</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  Our website uses cookies to improve user experience and analyze site traffic. You can control cookie preferences through your browser settings. Essential cookies necessary for site functionality cannot be disabled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">8. International Data Transfers</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  As we operate globally, your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers in accordance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">9. Children's Privacy</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">10. Changes to This Policy</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">11. Contact Us</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  For questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@honeytranslation.dubai
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
