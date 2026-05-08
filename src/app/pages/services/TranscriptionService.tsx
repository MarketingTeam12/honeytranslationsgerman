import { Link } from 'react-router-dom';
import { 
  FileAudio, Headphones, Type, CheckCircle2, Clock, Shield,
  MessageSquare, Star, Mail, Phone, MessageCircle, Lock,
  Briefcase, Scale, HeartPulse, GraduationCap, Film,
  Users, Award, FileCheck, Globe, Mic, Volume2,
  Timer, Play, Zap, Target, BookOpen
} from 'lucide-react';

export function TranscriptionService() {
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white py-28 px-6 md:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-blue-400/20 bottom-10 left-10"></div>

        {/* Animated Audio Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20">
          <div className="flex items-end justify-around h-full gap-1">
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-yellow-400 to-blue-400 w-1 rounded-t"
                style={{
                  height: `${Math.random() * 70 + 30}%`,
                  animation: `pulse ${Math.random() * 2 + 1}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Timestamp Visuals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-20 left-10 font-mono text-2xl animate-pulse">00:00:12</div>
          <div className="absolute top-40 right-20 font-mono text-2xl animate-pulse" style={{ animationDelay: '1s' }}>00:01:45</div>
          <div className="absolute bottom-32 left-1/4 font-mono text-2xl animate-pulse" style={{ animationDelay: '2s' }}>00:03:20</div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl animate-pulse">
                <FileAudio className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              Transcription Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Accurate, Clear & Confidential Transcription Solutions
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              At <strong className="text-white">Honey Translation</strong>, our Transcription Service converts audio and video content into precise, readable text while preserving meaning, tone, and context. We deliver high-quality transcriptions for business, legal, medical, academic, and media needs.
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-xl">
                <Headphones className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Why Choose Our Transcription Services?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              Clear and accurate transcription is essential for documentation, compliance, and content reuse.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Human-Based Transcription',
                description: 'Not raw AI output, real human accuracy',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Target,
                title: 'High Accuracy & Attention to Detail',
                description: 'Precise transcripts every time',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Volume2,
                title: 'Multiple Accents & Speaker Handling',
                description: 'Clear identification of speakers',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Lock,
                title: 'Strict Confidentiality & Data Security',
                description: 'Your content stays private',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Zap,
                title: 'Quick Turnaround Options Available',
                description: 'Fast delivery when you need it',
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

      {/* TYPES OF TRANSCRIPTION */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Types of Transcription We Offer
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Business & Corporate */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                💼 Business & Corporate
              </h3>

              <div className="space-y-3">
                {[
                  'Meetings & conferences',
                  'Interviews & presentations',
                  'Webinars & training sessions'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center shadow-lg">
                  <Scale className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                ⚖ Legal Transcription
              </h3>

              <div className="space-y-3">
                {[
                  'Court proceedings',
                  'Depositions & hearings',
                  'Legal interviews & recordings'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Medical */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg">
                  <HeartPulse className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                🏥 Medical Transcription
              </h3>

              <div className="space-y-3">
                {[
                  'Doctor dictations',
                  'Clinical notes',
                  'Medical reports & discussions'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                🎓 Academic & Research
              </h3>

              <div className="space-y-3">
                {[
                  'Lectures & seminars',
                  'Research interviews',
                  'Thesis & academic recordings'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Media */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center shadow-lg">
                  <Film className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                🎬 Media & General
              </h3>

              <div className="space-y-3">
                {[
                  'Podcasts & YouTube videos',
                  'Films & documentaries',
                  'Voice notes & audio files'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LANGUAGES SUPPORTED */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Languages We Support
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We provide transcription services in multiple languages, including:
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-10 card-shadow-premium">
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

      {/* TRANSCRIPTION PROCESS */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Our Transcription Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                number: '1',
                title: 'Audio/video review & clarity check',
                icon: Play,
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                number: '2',
                title: 'Accurate human transcription',
                icon: Mic,
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                number: '3',
                title: 'Proofreading & quality assurance',
                icon: FileCheck,
                gradient: 'from-green-400 to-green-500'
              },
              {
                number: '4',
                title: 'Formatting as per client requirement',
                icon: Type,
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                number: '5',
                title: 'Secure delivery',
                icon: Lock,
                gradient: 'from-pink-400 to-pink-500'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-soft-blue rounded-2xl p-6 card-shadow-premium text-center hover:scale-105 transition-transform duration-300">
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

      {/* CONFIDENTIALITY & SECURITY */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center shadow-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Confidentiality & Security
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: 'Secure File Handling',
                description: 'Encrypted transfers and storage'
              },
              {
                icon: FileCheck,
                title: 'NDA Available Upon Request',
                description: 'Legal protection for sensitive content'
              },
              {
                icon: Shield,
                title: 'Privacy Maintained',
                description: 'All recordings kept confidential'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 card-shadow-premium text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#151249] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Clients Say
            </h2>
          </div>

          <div className="bg-gradient-to-br from-soft-blue to-white rounded-3xl p-10 card-shadow-premium">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl text-gray-700 italic text-center mb-6 leading-relaxed">
              "The transcription was highly accurate and well-formatted. It saved us a lot of time."
            </blockquote>

            <p className="text-center text-[#151249] font-semibold">Corporate Client</p>
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
              Get Professional Transcription Support
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Turn your audio and video into reliable text.
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
              <MessageSquare className="w-5 h-5" />
              <span>Request a Transcription Quote</span>
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
