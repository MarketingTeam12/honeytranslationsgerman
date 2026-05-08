import { Link } from 'react-router-dom';
import { 
  Mic, Radio, Volume2, CheckCircle2, Clock, Shield, FileText,
  MessageSquare, Star, Mail, Phone, MessageCircle, Monitor,
  Play, Users, Award, FileCheck, Headphones, Video,
  Presentation, GraduationCap, Smartphone, Film, Tv,
  Globe, Music, Zap, Heart, Target, Waves
} from 'lucide-react';

export function VoiceOverDubbingService() {
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white py-28 px-6 md:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-purple-400/20 bottom-10 left-10"></div>

        {/* Animated Audio Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <div className="flex items-end justify-around h-full gap-1">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-yellow-400 to-purple-400 w-1 rounded-t"
                style={{
                  height: `${Math.random() * 80 + 20}%`,
                  animation: `pulse ${Math.random() * 2 + 1}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl animate-pulse">
                <Mic className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              Voice Over & Dubbing Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Bring Your Content to Life with Professional Voices
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              At <strong className="text-white">Honey Translation</strong>, our Voice Over & Dubbing Service helps you communicate clearly and emotionally across languages. From corporate videos to e-learning and multimedia content, we deliver high-quality voice solutions that sound natural, engaging, and culturally appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center shadow-xl">
                <Headphones className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Why Choose Our Voice Over & Dubbing Services?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              Audio plays a powerful role in audience engagement. We ensure your message is heard the right way everywhere.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Professional Native Voice Artists',
                description: 'Authentic voices from native speakers',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Globe,
                title: 'Multiple Languages & Accents',
                description: 'Wide range of linguistic options',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Music,
                title: 'Studio-Quality Audio Output',
                description: 'Crystal clear professional recordings',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Clock,
                title: 'Accurate Script Adaptation & Timing',
                description: 'Perfect synchronization & flow',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Heart,
                title: 'Human-Led Voice Production',
                description: 'No robotic voices, only real talent',
                gradient: 'from-pink-400 to-pink-500'
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 card-shadow-premium hover:scale-105 transition-all duration-300 group"
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

      {/* VOICE OVER SERVICES */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Voice Over Services We Offer
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Commercial & Corporate */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <Presentation className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                📢 Commercial & Corporate Voice Over
              </h3>

              <div className="space-y-3">
                {[
                  'Company profiles & presentations',
                  'Advertisements & promotional videos',
                  'Brand videos & explainer content'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* E-learning & Training */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                🎓 E-learning & Training Voice Over
              </h3>

              <div className="space-y-3">
                {[
                  'Online courses & modules',
                  'Educational videos',
                  'Corporate training materials'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Digital & Media */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                📱 Digital & Media Content
              </h3>

              <div className="space-y-3">
                {[
                  'YouTube & social media videos',
                  'Podcasts & audio content',
                  'IVR & phone systems'
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
      </section>

      {/* DUBBING SERVICES */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl">
                <Video className="w-8 h-8 text-[#151249]" />
              </div>
            </div>

            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Dubbing Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We provide professional dubbing with perfect synchronization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* What We Dub */}
            <div className="bg-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-center gap-3 mb-6">
                <Film className="w-8 h-8 text-[#151249]" />
                <h3 className="text-2xl font-bold text-[#151249]">Content We Dub</h3>
              </div>

              <div className="space-y-3">
                {[
                  'Movies & short films',
                  'TV shows & documentaries',
                  'Web series & OTT content',
                  'Marketing & product videos'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#151249] flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dubbing Quality */}
            <div className="bg-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-[#151249]" />
                <h3 className="text-2xl font-bold text-[#151249]">Our Dubbing Ensures</h3>
              </div>

              <div className="space-y-3">
                {[
                  'Lip-sync accuracy (where required)',
                  'Natural tone & emotion',
                  'Cultural relevance'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LANGUAGES & ACCENTS */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Languages & Accents Available
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We offer voice over and dubbing services in:
            </p>
          </div>

          <div className="bg-gradient-to-br from-soft-blue to-white rounded-3xl p-10 card-shadow-premium">
            <div className="flex flex-wrap justify-center gap-4 text-lg text-[#151249]">
              {[
                'English', 'Hindi', 'Tamil', 'Telugu', 'Malayalam', 'Kannada',
                'Marathi', 'Gujarati', 'Punjabi', 'Urdu', 'Arabic', 'French',
                'German', 'Spanish', 'and more'
              ].map((language, idx) => (
                <span key={idx} className="font-semibold">
                  {language}{idx < 14 ? ' •' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VOICE PRODUCTION PROCESS */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Our Voice Production Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                number: '1',
                title: 'Script review & localization',
                icon: FileText,
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                number: '2',
                title: 'Voice selection & approval',
                icon: Users,
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                number: '3',
                title: 'Studio recording',
                icon: Mic,
                gradient: 'from-green-400 to-green-500'
              },
              {
                number: '4',
                title: 'Editing, mixing & quality check',
                icon: Music,
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                number: '5',
                title: 'Final delivery in required format',
                icon: FileCheck,
                gradient: 'from-pink-400 to-pink-500'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 card-shadow-premium text-center hover:scale-105 transition-transform duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#151249] mb-2">{step.number}️⃣</div>
                <p className="text-gray-700 leading-relaxed">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Makes Us Different?
            </h2>
          </div>

          {/* Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Native Voice Artists */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Mic className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🎙 Native Voice Artists</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Voices that sound <strong className="text-[#151249]">authentic, not artificial</strong>.
              </p>
            </div>

            {/* Studio Quality */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Waves className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🎚 Studio-Quality Output</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-[#151249]">Clear, balanced, and professional</strong> audio.
              </p>
            </div>

            {/* Cultural Adaptation */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🌍 Cultural Adaptation</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-[#151249]">Tone and emotion</strong> adapted for the target audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Clients Say
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-10 card-shadow-premium">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl text-gray-700 italic text-center mb-6 leading-relaxed">
              "The voice over sounded natural and professional. Perfect timing and great clarity."
            </blockquote>

            <p className="text-center text-[#151249] font-semibold">Media Client</p>
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
              Give Your Content a Voice Today
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Enhance your content with professional voice solutions.
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
              <Play className="w-5 h-5" />
              <span>Request a Voice Sample</span>
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

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.5); }
        }
      `}</style>
    </div>
  );
}
