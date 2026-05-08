import { Link } from 'react-router-dom';
import { 
  Shield, FileCheck, Globe, CheckCircle2, Clock, Award,
  FileText, GraduationCap, Briefcase, Lock, Info,
  Star, Mail, Phone, MessageCircle, ArrowRight, Building
} from 'lucide-react';

export function AttestationService() {
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
                <Shield className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              Attestation Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Reliable, Government‑Recognized Attestation Services for Global Use
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              At <strong className="text-white">Honey Translation</strong>, we provide end‑to‑end Attestation services to authenticate your documents for official use abroad. Whether for employment, education, migration, or business purposes, we ensure your documents meet all legal and embassy requirements—accurately and on time.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS ATTESTATION */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl p-12 card-shadow-premium">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Info className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
                  What Is Attestation?
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Attestation is the process of verifying the authenticity of a document by <strong className="text-[#151249]">authorized government bodies, embassies, or consulates</strong> so it can be legally accepted in another country.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <p className="text-lg text-gray-700 mb-3 font-semibold">It is often required for:</p>
                  <ul className="space-y-2">
                    {[
                      'Overseas employment',
                      'Higher education abroad',
                      'Immigration & visa applications',
                      'International business operations'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
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
              Why Choose Our Attestation Services?
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: 'Complete End‑to‑End Handling',
                description: 'We manage the entire attestation process',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Shield,
                title: 'Government & Embassy‑Compliant',
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
                title: 'Transparent Timelines',
                description: 'Regular updates throughout the process',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: ArrowRight,
                title: 'Urgent Requirements Supported',
                description: 'Express services available when needed',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: Globe,
                title: 'Global Recognition',
                description: 'Valid for use across Germany and internationally',
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

      {/* DOCUMENTS WE ATTEST */}
      <section className="py-24 bg-gradient-to-b from-soft-blue to-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Documents We Attest
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
                  'Degree & Diploma Certificates',
                  'Mark Sheets & Transcripts',
                  'School Certificates'
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
                  'Company incorporation documents',
                  'Business agreements & invoices',
                  'Board resolutions',
                  'Trade & export documents'
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

      {/* ATTESTATION PROCESS */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Attestation Process — Step by Step
            </h2>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-yellow-200 to-green-200" style={{ top: '3rem' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {[
                {
                  number: '1',
                  title: 'Notary Attestation',
                  description: 'Initial verification (if required)',
                  gradient: 'from-blue-400 to-blue-500'
                },
                {
                  number: '2',
                  title: 'State / Home Department',
                  description: 'State-level authentication',
                  gradient: 'from-purple-400 to-purple-500'
                },
                {
                  number: '3',
                  title: 'MEA Attestation',
                  description: 'Ministry of External Affairs verification',
                  gradient: 'from-yellow-400 to-yellow-500'
                },
                {
                  number: '4',
                  title: 'Embassy Attestation',
                  description: 'Consulate verification',
                  gradient: 'from-orange-400 to-orange-500'
                },
                {
                  number: '5',
                  title: 'Secure Delivery',
                  description: 'Your attested documents delivered',
                  gradient: 'from-green-400 to-green-500'
                }
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-xl relative z-10`}>
                    <span className="text-white text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#151249] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-600 mt-12 italic text-lg">
            *The exact process may vary depending on document type and destination country.
          </p>
        </div>
      </section>

      {/* COUNTRIES WE SUPPORT */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Countries We Support
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We provide attestation services for documents intended for use in countries such as:
            </p>
          </div>

          {/* Countries Grid */}
          <div className="bg-white rounded-3xl p-10 card-shadow-premium">
            <div className="flex flex-wrap justify-center gap-4 text-lg text-[#151249]">
              {[
                'Germany', 'France', 'Netherlands', 'Luxembourg', 'EU countries',
                'USA', 'UK', 'Canada', 'Australia', 'Germany', 'France', 'and many more'
              ].map((country, idx) => (
                <span key={idx} className="font-semibold">
                  {country}{idx < 12 ? ' •' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TURNAROUND TIME */}
      <section className="py-20 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-soft-blue to-white rounded-3xl p-12 card-shadow-premium">
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
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-[#151249]">Standard Processing</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-2">Few working days</p>
                <p className="text-gray-600">Regular processing timeline</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-2 border-yellow-300">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowRight className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-[#151249]">Express Service</h3>
                </div>
                <p className="text-2xl font-bold text-orange-600 mb-2">Available on request</p>
                <p className="text-gray-600">For urgent requirements</p>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-8 italic">
              Timelines depend on document category and embassy requirements.
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
                { icon: Lock, text: 'Strict privacy for all personal and official documents' },
                { icon: Shield, text: 'Secure storage & handling' },
                { icon: FileCheck, text: 'NDAs available upon request' }
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
              "The attestation process was handled professionally from start to finish. Timely updates and smooth delivery."
            </blockquote>

            <p className="text-center text-[#151249] font-semibold">— Overseas Job Applicant</p>
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
              Get Your Documents Attested Today
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Avoid delays and legal complications—let our experts manage the process for you.
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
