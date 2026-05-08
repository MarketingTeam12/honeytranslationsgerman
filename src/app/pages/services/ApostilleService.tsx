import { Link } from 'react-router-dom';
import { 
  Award, FileCheck, Globe, Shield, CheckCircle2, Clock,
  FileText, GraduationCap, Briefcase, Lock, Info,
  Star, Mail, Phone, MessageCircle, ArrowRight
} from 'lucide-react';

export function ApostilleService() {
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white py-28 px-6 md:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-blue-400/20 bottom-10 left-10"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl">
                <Award className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              Apostille Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Fast, Reliable & Government‑Accepted Apostille Services
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              At <strong className="text-white">Honey Translation</strong>, we provide professional Apostille services to help your documents gain international legal recognition. Whether you are planning to study abroad, work overseas, migrate, or expand your business globally, we ensure your documents are apostilled accurately and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS APOSTILLE */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl p-12 card-shadow-premium">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Info className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
                  What Is an Apostille?
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  An Apostille is an official certification that validates the authenticity of a document for use in countries that are members of the <strong className="text-[#151249]">Hague Apostille Convention</strong>.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Once apostilled, your documents are <strong className="text-[#151249]">legally recognized in foreign countries</strong> without the need for further embassy legalization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Why Choose Our Apostille Services?
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: 'End‑to‑end Apostille Handling',
                description: 'Complete support from start to finish',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Shield,
                title: 'Government‑Compliant Process',
                description: 'Fully authorized and legally recognized',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Lock,
                title: 'Secure Document Handling',
                description: 'Safe storage and confidential processing',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Clock,
                title: 'Fast Turnaround',
                description: 'Clear timelines with express options',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: FileCheck,
                title: 'All Document Types',
                description: 'Personal, educational & commercial support',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: Globe,
                title: 'Global Recognition',
                description: 'Valid in all Hague Convention countries',
                gradient: 'from-[#00C4FF] to-blue-500'
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-soft-blue to-white rounded-2xl p-8 card-shadow-premium hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#151249] mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS WE APOSTILLE */}
      <section className="py-24 bg-gradient-to-b from-soft-blue to-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Documents We Apostille
            </h2>
          </div>

          {/* Document Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Personal Documents */}
            <div className="bg-white rounded-3xl p-8 card-shadow-premium">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-6 text-center">📜 Personal Documents</h3>
              <ul className="space-y-3">
                {[
                  'Birth Certificates',
                  'Marriage Certificates',
                  'Divorce Certificates',
                  'Death Certificates',
                  'Affidavits & Power of Attorney'
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Educational Documents */}
            <div className="bg-white rounded-3xl p-8 card-shadow-premium">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-6 text-center">🎓 Educational Documents</h3>
              <ul className="space-y-3">
                {[
                  'Degree Certificates',
                  'Diploma Certificates',
                  'Mark Sheets & Transcripts',
                  'School Leaving Certificates'
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Commercial Documents */}
            <div className="bg-white rounded-3xl p-8 card-shadow-premium">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-6 text-center">💼 Commercial Documents</h3>
              <ul className="space-y-3">
                {[
                  'Business agreements',
                  'Company incorporation documents',
                  'Board resolutions',
                  'Export & trade documents'
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* APOSTILLE PROCESS */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Apostille Process — Simple & Transparent
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We keep you informed at every step
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200" style={{ top: '3rem' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                {
                  number: '1',
                  title: 'Document Verification',
                  description: 'We review and verify your documents',
                  gradient: 'from-blue-400 to-blue-500'
                },
                {
                  number: '2',
                  title: 'Notary / State Authentication',
                  description: 'Required authentication completed (if needed)',
                  gradient: 'from-purple-400 to-purple-500'
                },
                {
                  number: '3',
                  title: 'MEA Apostille Stamping',
                  description: 'Official apostille certification applied',
                  gradient: 'from-yellow-400 to-yellow-500'
                },
                {
                  number: '4',
                  title: 'Secure Delivery',
                  description: 'Your apostilled documents delivered safely',
                  gradient: 'from-green-400 to-green-500'
                }
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-xl relative z-10`}>
                    <span className="text-white text-3xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#151249] mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TURNAROUND TIME */}
      <section className="py-20 bg-gradient-to-b from-soft-blue to-white px-6 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl p-12 card-shadow-premium">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl">
                  <Clock className="w-8 h-8 text-[#151249]" />
                </div>
              </div>
              <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
                Turnaround Time
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-[#151249]">Standard Apostille</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-2">Few working days</p>
                <p className="text-gray-600">Regular processing timeline</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-300">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowRight className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-[#151249]">Urgent Apostille</h3>
                </div>
                <p className="text-2xl font-bold text-orange-600 mb-2">Express service</p>
                <p className="text-gray-600">Subject to document type</p>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-8 italic">
              Exact timelines depend on document category and issuing authority.
            </p>
          </div>
        </div>
      </section>

      {/* CONFIDENTIALITY */}
      <section className="py-24 bg-gradient-to-br from-[#151249] to-[#1e1a5e] text-white px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 left-10"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-xl">
                <Lock className="w-8 h-8 text-[#151249]" />
              </div>
            </div>

            <h2 className="text-white mb-8" style={{ fontSize: '2.75rem' }}>
              Confidentiality & Security
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Lock, text: 'Strict privacy for all documents' },
                { icon: Shield, text: 'Safe handling & secure storage' },
                { icon: FileCheck, text: 'NDAs available on request' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <item.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <p className="text-lg text-white leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COUNTRIES COVERED */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Countries Covered
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              Apostille services are valid for all <strong className="text-[#151249]">Hague Convention member countries</strong>
            </p>
          </div>

          {/* Countries Grid */}
          <div className="bg-soft-blue rounded-3xl p-10 card-shadow-premium">
            <div className="flex flex-wrap justify-center gap-4 text-lg text-[#151249]">
              {[
                'USA', 'UK', 'Canada', 'Germany', 'France', 'Italy', 'Spain',
                'Australia', 'Netherlands', 'Japan', 'South Korea', 'and many more'
              ].map((country, idx) => (
                <span key={idx} className="font-semibold">
                  {country}{idx < 11 ? ' •' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-10 card-shadow-premium">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl text-gray-700 italic text-center mb-6 leading-relaxed">
              "The Apostille process was smooth and stress‑free. Honey Translation handled everything professionally."
            </blockquote>

            <p className="text-center text-[#151249] font-semibold">— Overseas Applicant</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#151249] to-[#1e1a5e] text-white px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 bottom-10 right-10"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-white mb-6" style={{ fontSize: '2.75rem' }}>
              Get Your Documents Apostilled Today
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Avoid delays and complications — let our experts handle it for you.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="tel:+3220000000"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>

            <a 
              href="https://wa.me/917299005577"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-green-500 text-white font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>

            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-[#151249] font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <Mail className="w-5 h-5" />
              <span>Request a Free Quote</span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <a href="mailto:sales@honeytranslations.com" className="text-white hover:text-yellow-400 transition-colors font-semibold">
                    sales@honeytranslations.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Support</p>
                  <p className="text-white font-semibold">24/7 Assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
