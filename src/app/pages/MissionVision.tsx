import { Link } from 'react-router-dom';
import { 
  Target, Eye, CheckCircle2, Users, TrendingUp, Award, 
  Shield, Heart, MessageSquare, GlobeIcon, Zap, Star, 
  Sparkles, ArrowRight, BookOpen, Briefcase, Clock, Lock
} from 'lucide-react';
import { useEffect } from 'react';

export function MissionVision() {
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
      {/* SECTION 1: HERO - "Driven by Purpose, Guided by Language" */}
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
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-white/90">Our Purpose & Direction</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-white" style={{ 
              fontSize: '4rem',
              lineHeight: '1.1',
              fontWeight: '900',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.1)'
            }}>
              Driven by Purpose,{' '}
              <span className="gradient-text-shine">Guided by Language</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{
              fontWeight: '500',
              lineHeight: '1.7',
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }}>
              Our purpose defines how we work today — and where we aim to go tomorrow.
            </p>

            {/* Sub-line */}
            <div className="pt-2">
              <p className="text-xl font-bold text-yellow-400" style={{
                textShadow: '0 0 20px rgba(250, 204, 21, 0.5)',
                letterSpacing: '0.05em'
              }}>
                Connecting people through clarity and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR MISSION - What We Do Every Day */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Mission Content */}
            <div className="space-y-8 reveal-on-scroll">
              <div>
                <div className="inline-block mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#E3B552] to-[#F4D03F] rounded-full"></div>
                    <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">Our Mission</span>
                  </div>
                  <h2 className="text-[#151249]">What We Do Every Day</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                    Our mission is to deliver <strong className="text-[#151249]">accurate, culturally aware translations</strong> that help people and businesses communicate clearly across languages.
                  </p>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    We focus on <strong className="text-[#151249]">quality, integrity, and human understanding</strong> — ensuring every message sounds natural and meaningful in its new language.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Abstract Visual */}
            <div className="reveal-on-scroll flex items-center justify-center" style={{ animationDelay: '200ms' }}>
              <div className="relative w-full max-w-md aspect-square">
                {/* Central Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-2xl animate-core-pulse"
                    style={{ boxShadow: '0 0 60px rgba(0, 196, 255, 0.4)' }}
                  >
                    <Target className="w-32 h-32 text-white" />
                  </div>
                </div>

                {/* Concentric Rings */}
                <div className="absolute inset-8 border-2 border-dashed border-[#00C4FF]/30 rounded-full"></div>
                <div className="absolute inset-16 border-2 border-dotted border-[#00C4FF]/20 rounded-full"></div>
                <div className="absolute inset-24 border-2 border-dashed border-[#00C4FF]/10 rounded-full"></div>

                {/* Floating dots */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-float"
                    style={{
                      top: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                      left: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                      animationDelay: `${i * 0.3}s`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW WE FULFILL OUR MISSION - Our Approach */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">How We Fulfill Our Mission</h2>
            <p className="text-2xl text-gray-700 font-semibold">Our Approach</p>
          </div>

          {/* Approach Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Heart,
                title: 'Human-Centered Translation',
                description: 'Every translation is crafted with empathy and understanding for real people.',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: GlobeIcon,
                title: 'Cultural & Contextual Accuracy',
                description: 'We preserve meaning, tone, and cultural nuances in every language.',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: CheckCircle2,
                title: 'Professional Review & Quality Checks',
                description: 'Multiple layers of review ensure the highest standards.',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: MessageSquare,
                title: 'Clear Communication with Clients',
                description: 'Transparent process with regular updates and open dialogue.',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Clock,
                title: 'Commitment to Deadlines',
                description: 'On-time delivery you can rely on, every single time.',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Lock,
                title: 'Confidentiality Guaranteed',
                description: 'Your content is handled with complete privacy and security.',
                gradient: 'from-indigo-400 to-indigo-500'
              }
            ].map((approach, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 card-shadow-premium hover-glow group transition-all duration-500 hover:scale-105 hover:-translate-y-2 reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${approach.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <approach.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#151249] mb-4">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>

                {/* Checkmark */}
                <div className="flex items-center gap-2 mt-6 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-semibold">Always Applied</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center reveal-on-scroll">
            <p className="text-xl text-gray-700 font-medium">
              Our approach ensures <strong className="text-[#151249]">consistency and trust</strong> in every project.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR VISION - Where We're Headed */}
      <section className="section-spacing bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white px-6 md:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 pattern-dots"></div>
        </div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-20 right-20"></div>
        <div className="blur-blob w-96 h-96 bg-[#00C4FF]/15 bottom-20 left-20"></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10 reveal-on-scroll">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl animate-core-pulse">
              <Eye className="w-12 h-12 text-[#151249]" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <span className="text-sm font-bold text-white uppercase tracking-wider">Our Vision</span>
          </div>

          {/* Title */}
          <h2 className="text-white mb-10" style={{
            fontSize: '3rem',
            textShadow: '0px 3px 12px rgba(0,0,0,0.4)'
          }}>
            Where We're Headed
          </h2>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-2xl text-white/90 leading-loose font-medium" style={{
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }}>
              Our vision is to create a world where <strong className="text-yellow-400">language is never a barrier</strong> to opportunity, collaboration, or understanding.
            </p>
            
            <p className="text-2xl text-white/90 leading-loose font-medium" style={{
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }}>
              We aim to become a <strong className="text-yellow-400">trusted global translation partner</strong> known for reliability, clarity, and cultural respect.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-12 rounded-full"></div>
        </div>
      </section>

      {/* SECTION 5: LONG-TERM GOALS - What We Aspire to Build */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">Long-Term Goals</h2>
            <p className="text-2xl text-gray-700 font-semibold">What We Aspire to Build</p>
          </div>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: '01',
                icon: Users,
                title: 'Expand Our Global Network',
                description: 'Build a diverse community of skilled language professionals across Germany and internationally.',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                number: '02',
                icon: TrendingUp,
                title: 'Support International Markets',
                description: 'Help businesses grow and succeed in German markets.',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                number: '03',
                icon: Award,
                title: 'Maintain High Quality Standards',
                description: 'Continue delivering excellence in every translation.',
                gradient: 'from-green-400 to-green-500'
              },
              {
                number: '04',
                icon: Heart,
                title: 'Build Long-Term Relationships',
                description: 'Foster lasting partnerships with clients and collaborators.',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                number: '05',
                icon: Zap,
                title: 'Continuous Improvement',
                description: 'Innovate and learn to provide better service.',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                number: '06',
                icon: GlobeIcon,
                title: 'Cultural Connection',
                description: 'Bridge cultures and promote global understanding.',
                gradient: 'from-indigo-400 to-indigo-500'
              }
            ].map((goal, index) => (
              <div 
                key={index}
                className="relative bg-soft-blue rounded-3xl p-8 border-2 border-transparent hover:border-[#00C4FF]/30 transition-all duration-300 reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#151249] to-[#1e1a5e] flex items-center justify-center shadow-lg">
                  <span className="text-lg font-black text-yellow-400">{goal.number}</span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${goal.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <goal.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#151249] mb-3">{goal.title}</h3>
                <p className="text-gray-700 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center p-8 bg-gradient-to-r from-[#151249] to-[#1e1a5e] rounded-3xl reveal-on-scroll">
            <p className="text-2xl text-white font-semibold leading-relaxed">
              These goals guide our <span className="text-yellow-400">growth and decisions</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: VALUES THAT GUIDE US - Our Foundation */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">Values That Guide Us</h2>
            <p className="text-2xl text-gray-700 font-semibold">Our Foundation</p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {[
              {
                icon: Target,
                title: 'Accuracy',
                description: 'Precision in every word',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Shield,
                title: 'Integrity',
                description: 'Honest and transparent',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Heart,
                title: 'Cultural Respect',
                description: 'Honoring all languages',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: Eye,
                title: 'Transparency',
                description: 'Clear communication',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Star,
                title: 'Client Commitment',
                description: 'Your success matters',
                gradient: 'from-yellow-400 to-yellow-500'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-3xl p-8 card-shadow-premium text-center h-full flex flex-col items-center justify-center hover-glow group hover:scale-105 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Checkmark */}
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#151249] mb-2">{value.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center reveal-on-scroll">
            <p className="text-xl text-gray-700 font-medium">
              Our values influence <strong className="text-[#151249]">every translation we deliver</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: IMPACT WE AIM TO CREATE - Beyond Words */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center reveal-on-scroll">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-2xl">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00C4FF]/10 border border-[#00C4FF]/20 mb-8">
            <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">Our Impact</span>
          </div>

          {/* Title */}
          <h2 className="text-[#151249] mb-10">Beyond Words</h2>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-2xl text-gray-700 leading-loose font-medium">
              Through our work, we strive to help <strong className="text-[#151249]">people communicate confidently</strong>, businesses <strong className="text-[#151249]">grow globally</strong>, and cultures <strong className="text-[#151249]">connect with mutual respect</strong>.
            </p>
            
            <p className="text-2xl text-gray-700 leading-loose font-medium">
              Every translation is an <strong className="text-[#151249]">opportunity to build understanding</strong>.
            </p>
          </div>

          {/* Impact Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Users, label: 'Connect People', color: 'from-blue-400 to-blue-500' },
              { icon: Briefcase, label: 'Grow Businesses', color: 'from-purple-400 to-purple-500' },
              { icon: GlobeIcon, label: 'Bridge Cultures', color: 'from-green-400 to-green-500' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-lg font-bold text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CALL TO ACTION - Join Our Journey */}
      <section className="section-spacing bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white px-6 md:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 world-map-pattern opacity-20"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/30 top-10 left-1/4"></div>
        <div className="blur-blob w-96 h-96 bg-[#00C4FF]/20 bottom-10 right-1/4"></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10 reveal-on-scroll">
          {/* Title */}
          <h2 className="text-white mb-8" style={{
            fontSize: '3.5rem',
            textShadow: '0px 3px 12px rgba(0,0,0,0.4)'
          }}>
            Join Our Journey
          </h2>

          {/* Subtitle */}
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed" style={{
            fontWeight: '500',
            textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
          }}>
            Whether you are a <strong className="text-yellow-400">client, partner, or language professional</strong>, we invite you to be part of our mission.
          </p>

          <p className="text-xl text-white/80 mb-12 font-semibold">
            Let's create clarity together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              to="/services"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl shadow-2xl hover:shadow-[0_0_60px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105 text-lg font-bold"
            >
              <BookOpen className="w-6 h-6" />
              <span>Our Services</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link 
              to="/join-us"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 text-lg font-bold"
            >
              <Users className="w-6 h-6" />
              <span>Join Us</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link 
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 text-lg font-bold"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Contact Us</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center gap-6 flex-wrap">
            {['120+ Languages', 'Trusted Globally', 'Quality Guaranteed'].map((badge, index) => (
              <div 
                key={index}
                className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                <span className="text-sm font-semibold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
