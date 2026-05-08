import { Link } from 'react-router-dom';
import { 
  Type, Layout, FileText, CheckCircle2, Shield, Clock, Award, Globe,
  File, FileImage, Target, Lock, Star, Mail, Phone, MessageCircle,
  Palette, Zap, Settings
} from 'lucide-react';

export function DTPTypingService() {
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
                <Type className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              DTP & Typing Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Professional Formatting. Accurate Typing. Print-Ready Documents
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              At <strong className="text-white">Honey Translation</strong>, our DTP (Desktop Publishing) & Typing services ensure your documents are not only accurate in content but also professionally formatted and presentation-ready. We help individuals and businesses convert, type, format, and design documents with precision and consistency.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Why Choose Our DTP & Typing Services?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Well-formatted documents improve <strong className="text-[#151249]">readability, credibility, and usability</strong>.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Experienced DTP & Typing Professionals',
                description: 'Skilled experts with proven expertise',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Target,
                title: 'Accurate Typing',
                description: 'Zero content loss with meticulous attention',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Globe,
                title: 'Multilingual Formatting Support',
                description: 'Professional formatting in any language',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: CheckCircle2,
                title: 'Print-Ready & Digital-Ready Output',
                description: 'Perfect for both print and digital use',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Lock,
                title: 'Confidential Handling',
                description: 'Secure document processing',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: Clock,
                title: 'Fast Turnaround',
                description: 'Quick delivery without quality compromise',
                gradient: 'from-[#00C4FF] to-blue-500'
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 card-shadow-premium hover:scale-105 transition-all duration-300 group"
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

      {/* TYPING SERVICES */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Typing Services We Offer
            </h2>
          </div>

          {/* Manual & Digital Typing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Type className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    📄 Manual & Digital Typing
                  </h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  'Handwritten documents',
                  'Scanned images & PDFs',
                  'Notes & manuscripts',
                  'Forms & applications'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-xl">
                <p className="text-gray-700 italic">
                  We ensure <strong className="text-[#151249]">fast, error-free typing</strong> with proper formatting.
                </p>
              </div>
            </div>

            {/* Multilingual Typing */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    🌐 Multilingual Typing
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                We provide typing services in multiple languages, including:
              </p>

              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex flex-wrap gap-2 text-sm text-[#151249]">
                  {[
                    'English', 'Hindi', 'Tamil', 'Telugu', 'Malayalam', 'Kannada',
                    'Marathi', 'Gujarati', 'Punjabi', 'Urdu', 'Arabic', 'French',
                    'German', 'Spanish', 'and more'
                  ].map((lang, idx) => (
                    <span key={idx} className="font-semibold">
                      {lang}{idx < 14 ? ' •' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DTP SERVICES */}
      <section className="py-24 bg-gradient-to-b from-soft-blue to-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-xl">
                <Layout className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              DTP (Desktop Publishing) Services
            </h2>
          </div>

          {/* Document Formatting & Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    📑 Document Formatting & Layout
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'Reports & manuals',
                  'Books & eBooks',
                  'Brochures & flyers',
                  'Certificates & forms'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Multilingual DTP */}
            <div className="bg-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Globe className="w-8 h-8 text-[#151249]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    🌍 Multilingual DTP
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 mb-4">We specialize in multilingual DTP, ensuring:</p>

              <div className="space-y-3">
                {[
                  'Correct fonts & character support',
                  'Proper text alignment for each language',
                  'Layout consistency across languages',
                  'Cultural & regional formatting standards'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US PROFESSIONAL */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Makes Us Professional?
            </h2>
          </div>

          {/* Professional Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Accuracy */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">✅ Accuracy & Attention to Detail</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We ensure typed content <strong className="text-[#151249]">matches the source exactly</strong>.
              </p>
            </div>

            {/* Design Consistency */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🎨 Design Consistency</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Layouts remain <strong className="text-[#151249]">consistent across all pages and languages</strong>.
              </p>
            </div>

            {/* Quick Turnaround */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">⏰ Quick Turnaround</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We handle both <strong className="text-[#151249]">standard and urgent</strong> DTP & typing requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORTED FILE FORMATS */}
      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl">
                <File className="w-8 h-8 text-[#151249]" />
              </div>
            </div>

            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Supported File Formats
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We work with a wide range of formats:
            </p>
          </div>

          {/* File Formats Grid */}
          <div className="bg-white rounded-3xl p-10 card-shadow-premium">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'Word', icon: FileText, color: 'from-blue-400 to-blue-500' },
                { name: 'Excel', icon: File, color: 'from-green-400 to-green-500' },
                { name: 'PowerPoint', icon: FileText, color: 'from-orange-400 to-orange-500' },
                { name: 'PDF', icon: FileText, color: 'from-red-400 to-red-500' },
                { name: 'InDesign', icon: Layout, color: 'from-pink-400 to-pink-500' },
                { name: 'Illustrator', icon: Palette, color: 'from-yellow-400 to-yellow-500' },
                { name: 'Photoshop', icon: FileImage, color: 'from-purple-400 to-purple-500' },
                { name: 'TXT', icon: FileText, color: 'from-gray-400 to-gray-500' },
                { name: 'Scanned Images', icon: FileImage, color: 'from-[#00C4FF] to-blue-500' }
              ].map((format, idx) => (
                <div key={idx} className="text-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${format.color} flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                    <format.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-[#151249]">{format.name}</p>
                </div>
              ))}
            </div>
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
                <Shield className="w-8 h-8 text-[#151249]" />
              </div>
            </div>

            <h2 className="text-white mb-8" style={{ fontSize: '2.75rem' }}>
              Confidentiality & Data Security
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Lock, text: 'Strict confidentiality for all documents' },
                { icon: Shield, text: 'Secure file storage & handling' },
                { icon: CheckCircle2, text: 'NDAs available upon request' }
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
              "The formatting and typing were flawless. The final document was clean, professional, and print-ready."
            </blockquote>

            <p className="text-center text-[#151249] font-semibold">— Corporate Client</p>
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
              Get Professional DTP & Typing Support
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Save time and ensure perfect presentation.
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
