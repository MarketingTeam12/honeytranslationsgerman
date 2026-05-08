export function TermsCondition() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4d2f8c] bg-[rgba(255,255,255,0)] backdrop-blur-sm mb-6 shadow-[0px_-7px_11px_0px_inset_rgba(164,143,255,0.12)]">
            <span className="text-sm bg-gradient-to-r from-[rgba(229,156,255,0.4)] via-[rgba(186,156,255,0.4)] to-[rgba(156,178,255,0.4)] bg-clip-text text-transparent">
              Legal
            </span>
          </div>
          <h1 className="text-5xl mb-4 bg-gradient-to-b from-white to-[rgba(255,255,255,0.7)] bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-[rgba(239,237,253,0.5)] text-sm">Last updated: December 12, 2024</p>
        </div>

        {/* Content */}
        <div className="relative p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)]">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  By accessing and using Honey Translation services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">2. Services Provided</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed mb-3">
                  Honey Translation provides professional translation and localization services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-[rgba(239,237,253,0.7)] space-y-2 ml-4">
                  <li>Document translation</li>
                  <li>Website localization</li>
                  <li>Business translation</li>
                  <li>Interpretation services</li>
                  <li>Content translation</li>
                  <li>Multimedia translation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">3. Client Responsibilities</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed mb-3">
                  Clients are responsible for:
                </p>
                <ul className="list-disc list-inside text-[rgba(239,237,253,0.7)] space-y-2 ml-4">
                  <li>Providing accurate source materials</li>
                  <li>Specifying target languages and any special requirements</li>
                  <li>Reviewing and approving delivered translations within the specified timeframe</li>
                  <li>Making timely payments as per agreed terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">4. Payment Terms</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  Payment is due upon completion of services unless otherwise agreed in writing. We accept various payment methods including bank transfer, credit cards, and online payment platforms. Late payments may incur additional charges.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">5. Confidentiality</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  We maintain strict confidentiality of all client materials and information. Our translators and staff are bound by non-disclosure agreements. Client data is securely stored and protected in accordance with applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">6. Quality Assurance</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  We strive to provide high-quality translations. If you are not satisfied with the quality of our work, please notify us within 7 days of delivery. We will review the translation and make necessary corrections at no additional charge if errors are found.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">7. Intellectual Property</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  All translated content becomes the property of the client upon full payment. We retain no rights to translated materials except as necessary to provide our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">8. Limitation of Liability</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  Honey Translation shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the specific service in question.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">9. Modifications to Terms</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-white mb-4">10. Contact Information</h2>
                <p className="text-[rgba(239,237,253,0.7)] leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at info@honeytranslation.dubai
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
