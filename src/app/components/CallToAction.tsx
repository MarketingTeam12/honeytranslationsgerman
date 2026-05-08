import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(186,156,255,0.15)] to-transparent rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] rounded-3xl border border-[rgba(255,255,255,0.1)] shadow-[0px_0px_60px_0px_rgba(186,156,255,0.2)]" />
          <div className="relative p-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4d2f8c] bg-[rgba(255,255,255,0)] backdrop-blur-sm mb-8 shadow-[0px_-7px_11px_0px_inset_rgba(164,143,255,0.12)]">
              <span className="text-sm bg-gradient-to-r from-[rgba(229,156,255,0.4)] via-[rgba(186,156,255,0.4)] to-[rgba(156,178,255,0.4)] bg-clip-text text-transparent">
                Get Started Today
              </span>
            </div>
            
            <h2 className="text-5xl mb-6 bg-gradient-to-b from-white to-[rgba(255,255,255,0.7)] bg-clip-text text-transparent">
              Ready to Break Language Barriers?
            </h2>
            
            <p className="text-lg text-[rgba(239,237,253,0.7)] mb-10 max-w-2xl mx-auto">
              Get a free quote for your translation project. Our team will respond within 24 hours.
            </p>

            <button className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(60,8,126,0)] to-[rgba(60,8,126,0.32)] rounded-lg" 
                   style={{ backgroundImage: "linear-gradient(rgba(60, 8, 126, 0) 0%, rgba(60, 8, 126, 0.32) 100%), linear-gradient(90deg, rgba(113, 47, 255, 0.12) 0%, rgba(113, 47, 255, 0.12) 100%)" }} />
              <div className="absolute inset-0 border border-[#4d2f8c] rounded-lg pointer-events-none" />
              <div className="absolute inset-0 shadow-[0px_0px_12px_0px_inset_rgba(191,151,255,0.24)] pointer-events-none" />
              <span className="relative text-[#f4f0ff] z-10">Request Your Free Quote</span>
              <ArrowRight className="relative w-5 h-5 text-[#f4f0ff] group-hover:translate-x-1 transition-transform z-10" />
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Mail, label: 'Email Us', value: 'sales@honeytranslations.com', link: 'mailto:sales@honeytranslations.com' },
            { icon: Phone, label: 'Call Us', value: '+91 7299005577', link: 'tel:+917299005577' },
            { icon: MapPin, label: 'Visit Us', value: 'Remote', link: '#' }
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a 
                key={index}
                href={contact.link}
                className="group relative p-6 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)] hover:border-[rgba(186,156,255,0.3)] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgba(113,47,255,0.2)] to-[rgba(113,47,255,0.05)] border border-[rgba(186,156,255,0.2)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#BA9CFF]" />
                  </div>
                  <div>
                    <div className="text-sm text-[rgba(239,237,253,0.5)] mb-1">{contact.label}</div>
                    <div className="text-white">{contact.value}</div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-[rgba(255,255,255,0.05)] text-center">
          <p className="text-[rgba(239,237,253,0.5)]">
            © 2024 Honey Translation. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}