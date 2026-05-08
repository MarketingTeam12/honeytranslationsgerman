import { Link } from 'react-router-dom';
import { 
  Mic, MessageSquare, Video, Phone, Scale, Heart, 
  Briefcase, Users, Shield, Clock, Globe, CheckCircle2,
  Lock, Award, Target, Star, Mail, MessageCircle
} from 'lucide-react';

export function InterpretationService() {
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
                <Mic className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              Interpretation Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Clear Communication. Real-Time Understanding. Professional Interpretation Services
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              At <strong className="text-white">Honey Translation</strong>, we provide accurate and professional interpretation services to help people communicate clearly across languages — in real time. Whether it's a business meeting, conference, legal proceeding, or medical appointment, our expert interpreters ensure nothing is lost in translation.
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
              Why Choose Our Interpretation Services?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Interpretation requires more than language skills — it demands <strong className="text-[#151249]">speed, accuracy, and cultural understanding</strong>.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Professionally Trained Interpreters',
                description: 'Expert human interpreters with proven experience',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Globe,
                title: 'Native-Language Fluency',
                description: 'Cultural awareness and linguistic expertise',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Lock,
                title: 'Confidential & Secure',
                description: 'All communications handled with strict privacy',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Video,
                title: 'On-Site & Remote Options',
                description: 'Flexible delivery methods to suit your needs',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Clock,
                title: 'Flexible Scheduling',
                description: 'Quick response and 24/7 availability',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: CheckCircle2,
                title: 'Professional Excellence',
                description: 'Certified interpreters for every industry',
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

      {/* TYPES OF INTERPRETATION */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Types of Interpretation We Offer
            </h2>
          </div>

          {/* Interpretation Types */}
          <div className="space-y-12">
            {/* Consecutive Interpretation */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    🗣 Consecutive Interpretation
                  </h3>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    The interpreter listens to the speaker and translates after they pause.
                  </p>

                  <div className="mb-6">
                    <p className="text-lg font-semibold text-[#151249] mb-3">Best for:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Business meetings',
                        'Legal discussions',
                        'Medical consultations',
                        'Interviews'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simultaneous Interpretation */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    🎤 Simultaneous Interpretation
                  </h3>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    The interpreter translates in real time while the speaker is talking.
                  </p>

                  <div className="mb-6">
                    <p className="text-lg font-semibold text-[#151249] mb-3">Best for:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Conferences & seminars',
                        'International events',
                        'Webinars & live broadcasts',
                        'Large-scale meetings'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Remote Interpretation */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    📞 Remote / Over-the-Phone Interpretation
                  </h3>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Professional interpretation delivered remotely via phone or video platforms.
                  </p>

                  <div className="mb-6">
                    <p className="text-lg font-semibold text-[#151249] mb-3">Best for:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Urgent discussions',
                        'Online meetings',
                        'Global teams',
                        'Virtual conferences'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialized Interpretation */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Award className="w-8 h-8 text-[#151249]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                    ⚖ Specialized Interpretation
                  </h3>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    We provide interpreters with subject-matter expertise for:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Legal interpretation (courts, immigration, law offices)',
                      'Medical interpretation (hospitals, clinics)',
                      'Business & corporate interpretation',
                      'Government & official meetings'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
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
            {/* Accuracy & Clarity */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">✅ Accuracy & Clarity</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our interpreters are trained to convey <strong className="text-[#151249]">meaning, intent, and tone</strong>, not just words.
              </p>
            </div>

            {/* Cultural Sensitivity */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🌐 Cultural Sensitivity</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We ensure communication is <strong className="text-[#151249]">culturally appropriate and respectful</strong>.
              </p>
            </div>

            {/* Availability */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">⏰ Availability</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We offer interpretation services <strong className="text-[#151249]">24/7</strong>, based on your needs.
              </p>
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
              Confidentiality You Can Trust
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: Lock, text: 'All interpretation sessions handled with strict confidentiality' },
                { icon: Shield, text: 'Sensitive information protected at every stage' },
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

      {/* LANGUAGES */}
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
              Languages We Interpret
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We provide interpretation services in a wide range of German and international languages
            </p>
          </div>

          {/* Languages Grid */}
          <div className="bg-soft-blue rounded-3xl p-10 card-shadow-premium">
            <div className="flex flex-wrap justify-center gap-4 text-lg text-[#151249]">
              {[
                'English', 'Hindi', 'Tamil', 'Telugu', 'Malayalam', 'Kannada',
                'Arabic', 'French', 'German', 'Spanish', 'Chinese', 'Japanese', 
                'Korean', 'Russian', 'Portuguese', 'Italian', 'Urdu', 'Bengali',
                'Marathi', 'Punjabi', 'and many more'
              ].map((lang, idx) => (
                <span key={idx} className="font-semibold">
                  {lang}{idx < 20 ? ' •' : ''}
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
              "The interpreter was professional, clear, and culturally aware. Communication went smoothly without any misunderstandings."
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
              Book an Interpreter Today
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Need reliable interpretation support?
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
