import { Link } from 'react-router-dom';
import { 
  Users, Languages, FileCheck, GlobeIcon, Briefcase, 
  Target, Shield, Heart, MessageSquare, Clock, CheckCircle2, 
  Award, Eye, Sparkles, ArrowRight, UserCheck, Search
} from 'lucide-react';
import { useEffect } from 'react';

export function OurTeam() {
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
      {/* SECTION 1: HERO - "The People Behind the Words" */}
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
              <span className="text-sm font-semibold text-white/90">Meet Our Team</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-white" style={{ 
              fontSize: '4rem',
              lineHeight: '1.1',
              fontWeight: '900',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.1)'
            }}>
              The People Behind{' '}
              <span className="gradient-text-shine">the Words</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{
              fontWeight: '500',
              lineHeight: '1.7',
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }}>
              Meet the professionals who bring clarity, accuracy, and cultural understanding to every translation.
            </p>

            {/* Sub-line */}
            <div className="pt-2">
              <p className="text-xl font-bold text-yellow-400" style={{
                textShadow: '0 0 20px rgba(250, 204, 21, 0.5)',
                letterSpacing: '0.05em'
              }}>
                Human expertise. Global perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE - A Global Language Team */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Text */}
            <div className="space-y-8 reveal-on-scroll">
              <div>
                <div className="inline-block mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#E3B552] to-[#F4D03F] rounded-full"></div>
                    <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">Who We Are</span>
                  </div>
                  <h2 className="text-[#151249]">A Global Language Team</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Honey Translation is powered by a <strong className="text-[#151249]">diverse team of language professionals</strong> working across regions and cultures.
                  </p>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our translators, editors, and reviewers collaborate to ensure every project meets <strong className="text-[#151249]">high standards of accuracy, tone, and meaning</strong>.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: '200+', label: 'Professionals', icon: Users },
                  { number: '80+', label: 'Languages', icon: Languages },
                  { number: '40+', label: 'Countries', icon: GlobeIcon }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-md">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-black text-[#00C4FF] mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Abstract World Map Visual */}
            <div className="reveal-on-scroll flex items-center justify-center" style={{ animationDelay: '200ms' }}>
              <div className="relative w-full max-w-md aspect-square">
                {/* Central Globe */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-2xl animate-core-pulse"
                    style={{ boxShadow: '0 0 60px rgba(0, 196, 255, 0.4)' }}
                  >
                    <GlobeIcon className="w-32 h-32 text-white animate-spin-slow" />
                  </div>
                </div>

                {/* Orbiting Team Icons */}
                <div className="absolute inset-0 animate-spin-slow">
                  {[
                    { icon: Users, color: 'from-pink-400 to-pink-500', position: 'top-0 left-1/2 -translate-x-1/2' },
                    { icon: Languages, color: 'from-blue-400 to-blue-500', position: 'right-0 top-1/2 -translate-y-1/2' },
                    { icon: FileCheck, color: 'from-green-400 to-green-500', position: 'bottom-0 left-1/2 -translate-x-1/2' },
                    { icon: Award, color: 'from-purple-400 to-purple-500', position: 'left-0 top-1/2 -translate-y-1/2' }
                  ].map((item, index) => (
                    <div key={index} className={`absolute ${item.position} animate-counter-spin-slow`}>
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dotted Circle */}
                <div className="absolute inset-12 border-2 border-dashed border-[#00C4FF]/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR TEAM STRUCTURE - How We Work Together */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">Our Team Structure</span>
              </div>
              <h2 className="text-[#151249]">How We Work Together</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team includes specialized roles that collaborate seamlessly
            </p>
          </div>

          {/* Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Languages,
                title: 'Professional Translators',
                description: 'Native speakers with domain expertise translating with precision and cultural awareness.',
                gradient: 'from-blue-400 to-blue-500',
                delay: '0ms'
              },
              {
                icon: FileCheck,
                title: 'Proofreaders & Editors',
                description: 'Quality specialists ensuring accuracy, consistency, and grammatical excellence.',
                gradient: 'from-purple-400 to-purple-500',
                delay: '100ms'
              },
              {
                icon: Award,
                title: 'Language Specialists',
                description: 'Experts in technical, legal, medical, and specialized industry translations.',
                gradient: 'from-green-400 to-green-500',
                delay: '200ms'
              },
              {
                icon: GlobeIcon,
                title: 'Localization Experts',
                description: 'Cultural consultants adapting content for regional and cultural relevance.',
                gradient: 'from-pink-400 to-pink-500',
                delay: '300ms'
              },
              {
                icon: Briefcase,
                title: 'Project Coordinators',
                description: 'Dedicated managers ensuring smooth workflow and timely delivery.',
                gradient: 'from-yellow-400 to-yellow-500',
                delay: '400ms'
              }
            ].map((role, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 card-shadow-premium hover-glow group transition-all duration-500 hover:scale-105 hover:-translate-y-2 reveal-on-scroll"
                style={{ animationDelay: role.delay }}
              >
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${role.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <role.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#151249] mb-4">{role.title}</h3>
                <p className="text-gray-600 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center reveal-on-scroll">
            <p className="text-xl text-gray-700 font-medium">
              Each role plays a <strong className="text-[#151249]">key part in delivering reliable translations</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR EXPERTS - Experience You Can Trust */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">Our Experts</h2>
            <p className="text-2xl text-gray-700 font-semibold">Experience You Can Trust</p>
          </div>

          {/* Split Content Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Block 1 */}
            <div className="reveal-on-scroll">
              <div className="bg-soft-blue rounded-3xl p-10 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#151249] mb-4">Rigorous Selection Process</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our team members are selected based on <strong className="text-[#151249]">expertise, language proficiency, and attention to detail</strong>.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="bg-soft-blue rounded-3xl p-10 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mb-6 shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#151249] mb-4">Domain Expertise</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Many of our professionals have experience in <strong className="text-[#151249]">business, legal, academic, and marketing translations</strong> — ensuring domain-specific accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 reveal-on-scroll">
            {[
              { label: 'Business', icon: Briefcase, color: 'from-blue-400 to-blue-500' },
              { label: 'Legal', icon: Shield, color: 'from-purple-400 to-purple-500' },
              { label: 'Academic', icon: Award, color: 'from-green-400 to-green-500' },
              { label: 'Marketing', icon: Target, color: 'from-pink-400 to-pink-500' }
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 card-shadow-premium text-center hover-glow hover:scale-105 transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mx-auto mb-3 shadow-md`}>
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-bold text-[#151249]">{area.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR VALUES AS A TEAM - What Guides Us */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">Our Values as a Team</h2>
            <p className="text-2xl text-gray-700 font-semibold">What Guides Us</p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {[
              {
                icon: Target,
                title: 'Accuracy & Quality',
                description: 'Precision in every word',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: GlobeIcon,
                title: 'Cultural Awareness',
                description: 'Context and nuance',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Heart,
                title: 'Respect & Collaboration',
                description: 'Working together',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: MessageSquare,
                title: 'Clear Communication',
                description: 'Open dialogue',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Clock,
                title: 'Deadline Commitment',
                description: 'On-time delivery',
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
                  <h3 className="text-lg font-bold text-[#151249] mb-2">{value.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center reveal-on-scroll">
            <p className="text-xl text-gray-700 font-medium">
              These values shape <strong className="text-[#151249]">how we work together and serve our clients</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: COLLABORATION & CULTURE - How We Work */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center reveal-on-scroll">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-2xl">
              <Users className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00C4FF]/10 border border-[#00C4FF]/20 mb-8">
            <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">Collaboration & Culture</span>
          </div>

          {/* Title */}
          <h2 className="text-[#151249] mb-10">How We Work</h2>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-2xl text-gray-700 leading-loose font-medium">
              We believe <strong className="text-[#151249]">great translations come from collaboration</strong>.
            </p>
            
            <p className="text-2xl text-gray-700 leading-loose font-medium">
              Our team works closely across <strong className="text-[#151249]">languages and time zones</strong>, maintaining open communication and consistent quality throughout every project.
            </p>
          </div>

          {/* Collaboration Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Users, label: 'Cross-Team', color: 'from-blue-400 to-blue-500' },
              { icon: GlobeIcon, label: 'Global Network', color: 'from-purple-400 to-purple-500' },
              { icon: MessageSquare, label: 'Open Communication', color: 'from-green-400 to-green-500' },
              { icon: Target, label: 'Shared Goals', color: 'from-pink-400 to-pink-500' }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-bold text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: QUALITY ASSURANCE TEAM - Our Final Check */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-5xl relative z-10 reveal-on-scroll">
          {/* Highlighted Content Block */}
          <div className="bg-white rounded-3xl p-12 card-shadow-premium">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-2xl">
                  <Eye className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-300 mb-6">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-bold text-green-700 uppercase tracking-wider">Quality Assurance</span>
                </div>

                <h2 className="text-[#151249] mb-6">Our Final Check</h2>

                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Before delivery, <strong className="text-[#151249]">every project goes through a dedicated review process</strong>.
                  </p>
                  <p>
                    Our quality assurance team ensures translations are <strong className="text-[#151249]">accurate, culturally appropriate, and aligned with client expectations</strong>.
                  </p>
                </div>

                {/* QA Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {[
                    { icon: CheckCircle2, label: 'Accuracy Check' },
                    { icon: GlobeIcon, label: 'Cultural Review' },
                    { icon: Target, label: 'Client Alignment' }
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: JOIN OUR TEAM - Grow With Us */}
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
            Join Our Team
          </h2>

          {/* Subtitle */}
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed" style={{
            fontWeight: '500',
            textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
          }}>
            We are always open to working with <strong className="text-yellow-400">skilled language professionals</strong> who share our commitment to quality.
          </p>

          <p className="text-xl text-white/80 mb-12 font-semibold">
            Interested in joining Honey Translation?
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              to="/join-us"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl shadow-2xl hover:shadow-[0_0_60px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105 text-lg font-bold"
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
            {['Global Team', 'Expert Professionals', 'Collaborative Culture'].map((badge, index) => (
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