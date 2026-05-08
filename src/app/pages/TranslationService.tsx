import { Link } from 'react-router-dom';
import { 
  Languages, CheckCircle2, Shield, Clock, Award, Globe, 
  Scale, Heart, BookOpen, FileCheck, Briefcase, Users,
  Target, Sparkles, Mail, Phone, MessageCircle, Star
} from 'lucide-react';

export function TranslationService() {
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
                <Languages className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              Translation Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Your Trusted Partner for Fast, Accurate & Affordable Translations
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              In Germany's multilingual market, clear communication across German and English is essential. At <strong className="text-white">Honey Translation</strong>, we provide professional human translation services for individuals and businesses across Germany.
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
              Why Choose Our Translation Services?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We don't just translate words — we translate <strong className="text-[#151249]">meaning, tone, and cultural context</strong>.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: '100% Human Translation',
                description: 'No Machine Output — Only expert human linguists',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Award,
                title: 'Native & Expert Linguists',
                description: 'Subject-Matter Experts in your industry',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Shield,
                title: 'Strict Confidentiality',
                description: 'Data Security & NDA Protection',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Clock,
                title: 'Fast Turnaround',
                description: 'Quick delivery with consistent quality',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: CheckCircle2,
                title: 'Affordable Pricing',
                description: 'Transparent rates with no hidden costs',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: Globe,
                title: 'Global Coverage',
                description: 'Any language, any document, anywhere',
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

      {/* TRANSLATION EXPERTISE */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Our Translation Expertise
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We offer expert translation services across multiple industries
            </p>
          </div>

          {/* Expertise Cards */}
          <div className="space-y-12">
            {/* Legal Translation */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    ⚖ Legal Translation
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Contracts & agreements',
                      'Court & immigration documents',
                      'Corporate legal files'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      Legal translations require absolute precision. Our translators understand both legal terminology and regional regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Translation */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    🏥 Medical Translation
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Medical reports & prescriptions',
                      'Treatment records & insurance documents',
                      'Hospital & patient documentation'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      Medical translations are handled by linguists with strong medical knowledge to ensure accuracy and patient safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certified Translation */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    📜 Certified Translation
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Certificates (Birth, Marriage, Education)',
                      'Immigration & embassy submissions',
                      'Government documentation'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      Certified translations are accepted by official authorities and institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Translation */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Briefcase className="w-8 h-8 text-[#151249]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    💼 Business Translation
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                      'Business proposals & reports',
                      'Financial documents',
                      'Corporate communication'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-xl">
                    <p className="text-gray-700 italic">
                      We help businesses operate across Germany and EU-facing markets with confidence and clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US PROFESSIONAL */}
      <section className="py-24 bg-gradient-to-b from-soft-blue to-white px-6 md:px-8">
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
              <h3 className="text-2xl font-bold text-[#151249] mb-4">✅ Accuracy</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We study your document thoroughly before assigning it to a subject-matter expert. Every translation is reviewed to ensure it conveys the <strong className="text-[#151249]">exact meaning</strong> you intended.
              </p>
            </div>

            {/* Accessibility */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🌐 Accessibility</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We translate <strong className="text-[#151249]">official, legal, business and personal documents</strong>, making your content ready for German authorities, clients and audiences.
              </p>
            </div>

            {/* 24/7 Availability */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">⏰ 24/7 Availability</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                You can reach us online for urgent requests across Germany, with responsive support for certified translation deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HUMAN TRANSLATION EMPHASIS */}
      <section className="py-24 bg-gradient-to-br from-[#151249] to-[#1e1a5e] text-white px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 left-10"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center shadow-xl">
                <Heart className="w-8 h-8 text-[#151249]" />
              </div>
            </div>

            <h2 className="text-white mb-8" style={{ fontSize: '2.75rem' }}>
              Our Key to Accuracy — Human Translation
            </h2>

            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto">
              We rely on <strong className="text-yellow-400">human intelligence</strong>, not machines. While machines may store words, only humans understand:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                { icon: Sparkles, text: 'Cultural nuance' },
                { icon: Heart, text: 'Emotional tone' },
                { icon: BookOpen, text: 'Context & intent' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <item.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <p className="text-lg text-white font-semibold">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              We carefully select expert translators who put <strong className="text-yellow-400">heart, intelligence, and cultural awareness</strong> into every project.
            </p>
          </div>
        </div>
      </section>

      {/* AVAILABLE LANGUAGES */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-xl">
                <Languages className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Available Translation Languages
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We provide translation services in Germany's key languages and 120+ international languages
            </p>
          </div>

          {/* Languages Grid */}
          <div className="bg-soft-blue rounded-3xl p-10 card-shadow-premium mb-8">
            <div className="flex flex-wrap justify-center gap-4 text-lg text-[#151249]">
              {[
                'Spanish', 'Arabic', 'French', 'German', 'Chinese', 'Japanese', 
                'Korean', 'Hindi', 'Tamil', 'Urdu', 'Russian', 'Portuguese',
                'Italian', 'Dutch', 'Swedish', 'Thai', 'Vietnamese', 'Gujarati',
                'Bengali', 'Marathi', 'Punjabi', 'and many more'
              ].map((lang, idx) => (
                <span key={idx} className="font-semibold">
                  {lang}{idx < 21 ? ' •' : ''}
                </span>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-6 rounded-r-2xl">
            <p className="text-lg text-gray-700 italic">
              <strong className="text-[#151249]">Need a language not listed?</strong> Contact us — we can help.
            </p>
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
              "Accurate translations, fast delivery, and excellent service. Honey Translation is our go-to language partner."
            </blockquote>

            <p className="text-center text-[#151249] font-semibold">— Verified Client</p>
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
              Get Started Today
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Break language barriers with confidence.
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
              href="https://wa.me/971"
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
                  <p className="text-sm text-white/60 mb-1">Response Time</p>
                  <p className="text-white font-semibold">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
