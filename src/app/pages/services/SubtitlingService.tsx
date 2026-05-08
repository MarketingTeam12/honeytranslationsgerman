import { Link } from 'react-router-dom';
import { 
  Subtitles, Video, Globe, CheckCircle2, Clock, Shield,
  MessageSquare, Star, Mail, Phone, MessageCircle, Accessibility,
  Briefcase, GraduationCap, Film, PlayCircle, Languages,
  FileCheck, Timer, Eye, Target, Zap, FileText,
  Monitor, Users, Award, AlignLeft
} from 'lucide-react';

export function SubtitlingService() {
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white py-28 px-6 md:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-purple-400/20 bottom-10 left-10"></div>

        {/* Subtitle Overlay Mockups */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          {/* Simulated subtitle boxes */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-96 h-16 bg-black/80 rounded flex items-center justify-center text-white text-sm font-mono animate-pulse">
            Welcome to professional subtitling
          </div>
          <div className="absolute top-40 left-20 w-72 h-12 bg-black/80 rounded flex items-center justify-center text-white text-xs font-mono animate-pulse" style={{ animationDelay: '1s' }}>
            Clear • Accurate • Culturally Adapted
          </div>
          <div className="absolute top-60 right-24 w-80 h-14 bg-black/80 rounded flex items-center justify-center text-white text-xs font-mono animate-pulse" style={{ animationDelay: '2s' }}>
            Subtitles for Global Audiences
          </div>
        </div>

        {/* Timing Indicators */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-24 left-10 font-mono text-xl">00:00:05,420 → 00:00:08,150</div>
          <div className="absolute bottom-28 right-16 font-mono text-xl">00:01:23,840 → 00:01:26,920</div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl animate-pulse">
                <Subtitles className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              Subtitling Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Clear, Accurate & Culturally Adapted Subtitles for Global Audiences
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              At <strong className="text-white">Honey Translation</strong>, our Subtitling Service helps your video content reach wider audiences with precise, readable, and perfectly timed subtitles. We ensure linguistic accuracy, cultural relevance, and technical compliance across platforms.
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
                <Video className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Why Choose Our Subtitling Services?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              Subtitles improve accessibility, engagement, and global reach. Our experts handle both language and timing with care.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Human-Created Subtitles',
                description: 'Not raw auto-captions, real human accuracy',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Timer,
                title: 'Accurate Timing & Synchronization',
                description: 'Perfect sync with audio and video',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Globe,
                title: 'Multilingual Subtitle Support',
                description: 'Reach audiences across Germany and internationally',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Monitor,
                title: 'Platform-Compliant Subtitle Formats',
                description: 'Works on YouTube, Netflix, and more',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Shield,
                title: 'Strict Confidentiality & Quality Control',
                description: 'Your content stays secure',
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

      {/* TYPES OF SUBTITLING */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Types of Subtitling We Offer
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Multilingual Subtitling */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                🌐 Multilingual Subtitling
              </h3>

              <div className="space-y-3">
                {[
                  'Translate and subtitle videos for international audiences',
                  'Cultural adaptation for regional viewers',
                  'Consistent terminology & tone'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Accessibility Subtitling */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center shadow-lg">
                  <Accessibility className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                ♿ Accessibility Subtitling
              </h3>

              <div className="space-y-3">
                {[
                  'Subtitles for the hearing-impaired',
                  'Speaker identification & sound cues',
                  'Platform-ready closed captions'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate & Educational */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                📢 Corporate & Educational
              </h3>

              <div className="space-y-3">
                {[
                  'Corporate videos & presentations',
                  'Training & e-learning modules',
                  'Webinars & explainer videos'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Media & Entertainment */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                  <Film className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                🎥 Media & Entertainment
              </h3>

              <div className="space-y-3">
                {[
                  'Films & short movies',
                  'Web series & OTT content',
                  'YouTube & social media videos'
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
      </section>

      {/* LANGUAGES & FORMATS */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Languages & Formats Supported
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Languages */}
            <div className="bg-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-xl">
                  <Languages className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                🌐 Languages
              </h3>

              <div className="flex flex-wrap justify-center gap-3 text-gray-700">
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

            {/* Formats */}
            <div className="bg-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center shadow-xl">
                  <FileText className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                📁 Subtitle Formats
              </h3>

              <div className="flex flex-wrap justify-center gap-3 text-gray-700">
                {[
                  'SRT', 'VTT', 'SSA/ASS', 'STL', 'SBV', 'and other platform-specific formats'
                ].map((format, idx) => (
                  <span key={idx} className="font-semibold bg-soft-blue px-4 py-2 rounded-lg">
                    {format}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBTITLING PROCESS */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Our Subtitling Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                number: '1',
                title: 'Video review & timing analysis',
                icon: PlayCircle,
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                number: '2',
                title: 'Subtitle creation / translation',
                icon: Languages,
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                number: '3',
                title: 'Synchronization & line length optimization',
                icon: Timer,
                gradient: 'from-green-400 to-green-500'
              },
              {
                number: '4',
                title: 'Quality check & readability review',
                icon: FileCheck,
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                number: '5',
                title: 'Final delivery in required format',
                icon: Award,
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

      {/* WHAT MAKES SUBTITLES EFFECTIVE */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Makes Our Subtitles Effective?
            </h2>
          </div>

          {/* Effectiveness Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Perfect Timing */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🕒 Perfect Timing</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Subtitles appear and disappear <strong className="text-[#151249]">naturally</strong>.
              </p>
            </div>

            {/* Readability Focus */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🧠 Readability Focus</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Proper <strong className="text-[#151249]">line length, speed, and clarity</strong>.
              </p>
            </div>

            {/* Cultural Accuracy */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🌍 Cultural Accuracy</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Subtitles feel <strong className="text-[#151249]">natural to the target audience</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO FRAME SHOWCASE */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Simulated Video Player with Subtitles */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl aspect-video">
            {/* Video frame background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30"></div>
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/40">
                <PlayCircle className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Subtitle overlay at bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-11/12 max-w-3xl">
              <div className="bg-black/80 backdrop-blur-sm rounded-lg px-6 py-4 text-center">
                <p className="text-white text-lg leading-relaxed">
                  Professional subtitles make your content accessible to everyone
                </p>
              </div>
            </div>

            {/* Timing indicator */}
            <div className="absolute bottom-2 left-4 text-white/60 text-sm font-mono">
              00:00:15 / 00:02:30
            </div>
          </div>

          <p className="text-center text-gray-500 mt-6 italic">
            Example of subtitle overlay positioning
          </p>
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
              "The subtitles were perfectly timed and easy to read. Our international viewers loved the experience."
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
              Make Your Videos Globally Accessible
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Reach German audiences with professional subtitling.
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
              <span>Request Subtitling Support</span>
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
                  <a href="mailto:salest@honeytranslations.com" className="text-white hover:text-yellow-400 transition-colors font-semibold">
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
