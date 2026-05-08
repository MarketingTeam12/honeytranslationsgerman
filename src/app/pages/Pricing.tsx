import { Link } from 'react-router-dom';
import { 
  DollarSign, FileText, Globe, Clock, Shield, Check, 
  Sparkles, ArrowRight, Star, CreditCard, HelpCircle,
  Mail, Phone, Zap, AlertCircle, TrendingUp, Package,
  Calculator, Award, Lock
} from 'lucide-react';
import { useEffect } from 'react';

export function Pricing() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      {/* SECTION 1: HERO - Clear. Fair. Transparent Pricing */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white section-spacing px-6 md:px-8 overflow-hidden radial-glow-overlay">
        {/* Blur Blobs */}
        <div className="blur-blob w-96 h-96 bg-yellow-400/30 top-10 right-10" style={{ animationDelay: '0s' }}></div>
        <div className="blur-blob w-80 h-80 bg-[#00C4FF]/20 bottom-20 left-20" style={{ animationDelay: '5s' }}></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 world-map-pattern"></div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="space-y-8 animate-fadeInUp">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <DollarSign className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-white/90">Pricing</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-white" style={{ 
              fontSize: '4rem',
              lineHeight: '1.1',
              fontWeight: '900',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.1)'
            }}>
              <span className="gradient-text-shine">Clear. Fair.</span><br />
              Transparent Pricing
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{
              fontWeight: '500',
              lineHeight: '1.7',
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }}>
              At Honey Translation, our pricing is designed to be simple, flexible, and tailored to your needs. Costs depend on language pair, content complexity, turnaround time, and service type.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION - Simple & Trust-Building */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 reveal-on-scroll">
            <p className="text-2xl text-gray-700 leading-loose font-medium max-w-4xl mx-auto mb-12">
              We believe in <strong className="text-[#151249]">transparent pricing with no hidden fees</strong>. Whether you need a short document or a large-scale localization project, we provide clear quotes before work begins.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { icon: Award, text: 'Professional linguists', gradient: 'from-blue-400 to-blue-500' },
                { icon: Shield, text: 'Quality assurance included', gradient: 'from-green-400 to-green-500' },
                { icon: Lock, text: 'Confidential & secure handling', gradient: 'from-purple-400 to-purple-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 justify-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="font-bold text-[#151249] text-left">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRICING MODELS - How We Charge */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">Pricing Models</h2>
            <p className="text-2xl text-gray-700 font-semibold">How We Charge</p>
          </div>

          {/* Pricing Model Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Per-Word Pricing */}
            <div className="reveal-on-scroll">
              <div className="bg-white rounded-3xl p-10 card-shadow-premium hover-glow h-full transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
                  <FileText className="w-10 h-10 text-white" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300 mb-6">
                  <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Per-Word</span>
                </div>

                <h3 className="text-2xl font-bold text-[#151249] mb-4">Per-Word Pricing</h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Ideal for documents, articles, and written content.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Pricing is calculated per source word',
                    'Rates vary by language pair and complexity',
                    'Minimum order fee may apply'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-sm font-bold text-blue-900">Best for:</p>
                  <p className="text-sm text-blue-800">documents, certificates, reports, PDFs</p>
                </div>
              </div>
            </div>

            {/* Per-Page/Project Pricing */}
            <div className="reveal-on-scroll" style={{ animationDelay: '100ms' }}>
              <div className="bg-white rounded-3xl p-10 card-shadow-premium hover-glow h-full transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mb-6 shadow-lg">
                  <Globe className="w-10 h-10 text-white" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-300 mb-6">
                  <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">Per-Page / Project</span>
                </div>

                <h3 className="text-2xl font-bold text-[#151249] mb-4">Per-Page / Per-Project Pricing</h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Used for structured or design-based content.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Fixed pricing based on page count or scope',
                    'Clear deliverables agreed upfront',
                    'No surprise costs'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-purple-50 rounded-xl p-4">
                  <p className="text-sm font-bold text-purple-900">Best for:</p>
                  <p className="text-sm text-purple-800">websites, brochures, presentations</p>
                </div>
              </div>
            </div>

            {/* Hourly Pricing */}
            <div className="reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="bg-white rounded-3xl p-10 card-shadow-premium hover-glow h-full transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mb-6 shadow-lg">
                  <Clock className="w-10 h-10 text-white" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-300 mb-6">
                  <span className="text-sm font-bold text-green-700 uppercase tracking-wider">Hourly</span>
                </div>

                <h3 className="text-2xl font-bold text-[#151249] mb-4">Hourly Pricing</h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  For ongoing or flexible language support.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Charged per hour of work',
                    'Suitable for revisions, proofreading, or consulting',
                    'Flexible and transparent billing'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                      </div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-sm font-bold text-green-900">Best for:</p>
                  <p className="text-sm text-green-800">editing, linguistic review, support tasks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SAMPLE PRICING TABLE */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">Sample Pricing Table</h2>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-100 border border-yellow-300">
              <AlertCircle className="w-5 h-5 text-yellow-700" />
              <span className="text-sm font-bold text-yellow-800">Prices shown are estimates. Final pricing is confirmed after review.</span>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="reveal-on-scroll">
            <div className="bg-white rounded-3xl card-shadow-premium overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-[#151249] to-[#1e1a5e] px-8 py-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-bold text-xl">Service Type</h3>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Starting From</h3>
                  </div>
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-gray-200">
                {[
                  { service: 'Document Translation', price: '$0.10 / word', icon: FileText, color: 'from-blue-400 to-blue-500' },
                  { service: 'Website Translation', price: '$50 / page', icon: Globe, color: 'from-purple-400 to-purple-500' },
                  { service: 'Proofreading & Editing', price: '$40 / hour', icon: Check, color: 'from-green-400 to-green-500' },
                  { service: 'Localization Projects', price: 'Custom Quote', icon: Star, color: 'from-yellow-400 to-yellow-500' }
                ].map((row, index) => (
                  <div key={index} className="grid grid-cols-2 gap-6 px-8 py-6 hover:bg-soft-blue transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${row.color} flex items-center justify-center shadow-md`}>
                        <row.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-[#151249] text-lg">{row.service}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-black text-[#00C4FF]">{row.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT AFFECTS PRICING? */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">What Affects Pricing?</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Several factors influence the final cost
            </p>
          </div>

          {/* Factors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Language Pair',
                description: 'e.g., English–Spanish vs English–Japanese',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Award,
                title: 'Technical or Specialized Content',
                description: 'Legal, medical, or industry-specific terminology',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: FileText,
                title: 'File Format',
                description: 'Word, PDF, scanned files',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Zap,
                title: 'Turnaround Time / Urgency',
                description: 'Rush orders require priority handling',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Package,
                title: 'Volume of Content',
                description: 'Larger projects may qualify for discounts',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: Calculator,
                title: 'Additional Services',
                description: 'Formatting, certification, notarization',
                gradient: 'from-orange-400 to-orange-500'
              }
            ].map((factor, index) => (
              <div 
                key={index}
                className="reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-3xl p-8 card-shadow-premium hover-glow h-full transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${factor.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <factor.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#151249] mb-3">{factor.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: RUSH & PRIORITY SERVICES */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="reveal-on-scroll">
            <div className="bg-gradient-to-br from-[#151249] to-[#1e1a5e] rounded-3xl p-12 md:p-16 relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C4FF]/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl">
                      <Zap className="w-16 h-16 text-[#151249]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow text-center md:text-left">
                    <h2 className="text-white mb-6">Rush & Priority Services</h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      Need it fast? We offer expedited delivery options.
                    </p>

                    <div className="space-y-4">
                      {[
                        'Same-day or next-day delivery (subject to availability)',
                        'Priority handling by senior translators',
                        'Additional fees may apply'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 justify-center md:justify-start">
                          <div className="w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-4 h-4 text-yellow-400" />
                          </div>
                          <span className="text-white/90 text-lg">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHAT'S INCLUDED IN OUR PRICING */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">What's Included in Our Pricing</h2>
            <p className="text-xl text-gray-700 font-semibold">Every project includes</p>
          </div>

          {/* Included Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Award,
                title: 'Professional Human Translation',
                description: 'Translated by certified native speakers, never by machines',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Check,
                title: 'Quality Check / Review',
                description: 'Every translation is reviewed for accuracy and consistency',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: FileText,
                title: 'Formatting Consistency',
                description: 'Delivered in your preferred format with original layout',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Lock,
                title: 'Confidential Handling of Files',
                description: 'Your documents are secure with our strict privacy protocols',
                gradient: 'from-pink-400 to-pink-500'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-3xl p-8 card-shadow-premium hover-glow h-full flex gap-6 items-start transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#151249] mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center reveal-on-scroll">
            <div className="inline-block bg-white rounded-2xl px-10 py-6 card-shadow-premium">
              <p className="text-xl font-bold text-[#151249] mb-2">
                No hidden costs. No automated translations.
              </p>
              <p className="text-gray-600">Just professional, human-quality work every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: GET A CUSTOM QUOTE - Fast & Free */}
      <section className="section-spacing bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white px-6 md:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 world-map-pattern opacity-20"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/30 top-10 left-1/4"></div>
        <div className="blur-blob w-96 h-96 bg-[#00C4FF]/20 bottom-10 right-1/4"></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10 reveal-on-scroll">
          <h2 className="text-white mb-8" style={{
            fontSize: '3.5rem',
            textShadow: '0px 3px 12px rgba(0,0,0,0.4)'
          }}>
            Get a Custom Quote
          </h2>

          <p className="text-xl text-white/80 mb-4 font-semibold">Fast & Free</p>

          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed" style={{
            fontWeight: '500',
            textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
          }}>
            Because every project is different, the best way to get accurate pricing is to request a custom quote.
          </p>

          {/* Benefits */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            {[
              { icon: Check, text: 'Free quote' },
              { icon: Shield, text: 'No obligation' },
              { icon: Clock, text: 'Response within 24 hours' }
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                <benefit.icon className="w-5 h-5 text-yellow-400" />
                <span className="font-bold text-white">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link 
            to="/contact"
            className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl shadow-2xl hover:shadow-[0_0_60px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105 text-xl font-bold"
          >
            <Sparkles className="w-6 h-6" />
            <span>Request a Quote</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* SECTION 8: PAYMENT INFORMATION */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Section Title */}
          <div className="text-center mb-16 reveal-on-scroll">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-2xl">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-[#151249] mb-4">Payment Information</h2>
          </div>

          {/* Payment Details */}
          <div className="reveal-on-scroll">
            <div className="bg-soft-blue rounded-3xl p-10">
              <div className="space-y-8">
                {[
                  {
                    icon: Shield,
                    text: 'Payments are required before project delivery unless otherwise agreed',
                    color: 'from-blue-400 to-blue-500'
                  },
                  {
                    icon: CreditCard,
                    text: 'Accepted payment methods: Credit Card, Bank Transfer, Online Payment',
                    color: 'from-purple-400 to-purple-500'
                  },
                  {
                    icon: FileText,
                    text: 'Invoices provided upon request',
                    color: 'from-green-400 to-green-500'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-lg text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQs - Pricing Questions */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16 reveal-on-scroll">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl">
                <HelpCircle className="w-10 h-10 text-[#151249]" />
              </div>
            </div>
            <h2 className="text-[#151249] mb-4">Pricing Questions</h2>
            <p className="text-xl text-gray-700">Frequently Asked Questions</p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6 reveal-on-scroll">
            {[
              {
                question: 'Do you charge extra for revisions?',
                answer: 'Reasonable revisions due to quality concerns are included.'
              },
              {
                question: 'Is machine translation cheaper?',
                answer: 'We provide 100% human translation to ensure accuracy and quality.'
              },
              {
                question: 'Can I get a discount for large projects?',
                answer: 'Yes, volume-based pricing is available.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 card-shadow-premium hover-glow">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">Q</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#151249] mb-3">{faq.question}</h3>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">A</span>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed flex-grow">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: CONTACT US - Let's Discuss Your Project */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-5xl text-center reveal-on-scroll">
          <h2 className="text-[#151249] mb-8">Let's Discuss Your Project</h2>
          
          <p className="text-2xl text-gray-700 leading-relaxed mb-12">
            Have questions or need help choosing a service?
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <a 
              href="mailto:sales@honeytranslations.com"
              className="group bg-soft-blue rounded-3xl p-10 card-shadow-premium hover-glow transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#151249] mb-2">Email Us</h3>
              <p className="text-[#00C4FF] font-semibold">sales@honeytranslations.com</p>
            </a>

            {/* Contact Page */}
            <Link 
              to="/contact"
              className="group bg-soft-blue rounded-3xl p-10 card-shadow-premium hover-glow transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#151249] mb-2">Contact Page</h3>
              <p className="text-[#00C4FF] font-semibold flex items-center gap-2 justify-center">
                Visit Contact Page
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </p>
            </Link>
          </div>

          <p className="text-xl text-gray-700 font-medium">
            We're happy to guide you.
          </p>
        </div>
      </section>
    </div>
  );
}