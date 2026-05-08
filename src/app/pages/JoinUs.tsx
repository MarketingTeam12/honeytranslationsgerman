import { Link } from 'react-router-dom';
import { 
  Users, FileText, Eye, GlobeIcon, MessageSquare, 
  CheckCircle2, Shield, Heart, Award, Star, Zap, Clock,
  Target, Sparkles, ArrowRight, Languages, Send, MapPin,
  TrendingUp, Briefcase, BookOpen, Search, FileCheck
} from 'lucide-react';
import { useEffect } from 'react';

export function JoinUs() {
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
      {/* SECTION 1: HERO - "Grow With Honey Translation" */}
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
              <span className="text-sm font-semibold text-white/90">Join Our Global Team</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-white" style={{ 
              fontSize: '4rem',
              lineHeight: '1.1',
              fontWeight: '900',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.1)'
            }}>
              Grow With{' '}
              <span className="gradient-text-shine">Honey Translation</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{
              fontWeight: '500',
              lineHeight: '1.7',
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }}>
              Be part of a team that believes language connects people, cultures, and opportunities.
            </p>

            {/* Sub-line */}
            <div className="pt-2">
              <p className="text-xl font-bold text-yellow-400" style={{
                textShadow: '0 0 20px rgba(250, 204, 21, 0.5)',
                letterSpacing: '0.05em'
              }}>
                Work with purpose. Translate with meaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY JOIN - More Than Work */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Text */}
            <div className="space-y-8 reveal-on-scroll">
              <div>
                <div className="inline-block mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#E3B552] to-[#F4D03F] rounded-full"></div>
                    <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">Why Join Us</span>
                  </div>
                  <h2 className="text-[#151249]">More Than Work</h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    At Honey Translation, we value <strong className="text-[#151249]">people as much as words</strong>.
                  </p>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    We collaborate with skilled language professionals who care about <strong className="text-[#151249]">accuracy, culture, and quality</strong>.
                  </p>
                  
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Joining us means becoming part of a <strong className="text-[#151249]">trusted, respectful, and growing global network</strong>.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: '150+', label: 'Translators', icon: Users },
                  { number: '60+', label: 'Languages', icon: Languages },
                  { number: '25+', label: 'Countries', icon: MapPin }
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

            {/* Right: Abstract Visual */}
            <div className="reveal-on-scroll flex items-center justify-center" style={{ animationDelay: '200ms' }}>
              <div className="relative w-full max-w-md aspect-square">
                {/* Central Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl animate-core-pulse"
                    style={{ boxShadow: '0 0 60px rgba(250, 204, 21, 0.4)' }}
                  >
                    <Users className="w-28 h-28 text-[#151249]" />
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  {[
                    { icon: Heart, color: 'from-pink-400 to-pink-500', position: 'top-0 left-1/2 -translate-x-1/2' },
                    { icon: Target, color: 'from-blue-400 to-blue-500', position: 'right-0 top-1/2 -translate-y-1/2' },
                    { icon: Award, color: 'from-green-400 to-green-500', position: 'bottom-0 left-1/2 -translate-x-1/2' },
                    { icon: Star, color: 'from-purple-400 to-purple-500', position: 'left-0 top-1/2 -translate-y-1/2' }
                  ].map((item, index) => (
                    <div key={index} className={`absolute ${item.position} animate-counter-spin-slow`}>
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dotted Circle */}
                <div className="absolute inset-12 border-2 border-dashed border-[#E3B552]/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO CAN JOIN - We're Looking For */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">Who Can Join</span>
              </div>
              <h2 className="text-[#151249]">We're Looking For</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We welcome professionals who are passionate about language
            </p>
          </div>

          {/* Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Languages,
                title: 'Freelance Translators',
                description: 'Native speakers with expertise in specific language pairs and domains.',
                gradient: 'from-blue-400 to-blue-500',
                delay: '0ms'
              },
              {
                icon: FileCheck,
                title: 'Proofreaders & Editors',
                description: 'Detail-oriented professionals ensuring accuracy and polish.',
                gradient: 'from-purple-400 to-purple-500',
                delay: '100ms'
              },
              {
                icon: Award,
                title: 'Language Specialists',
                description: 'Experts in technical, legal, medical, or creative translation.',
                gradient: 'from-green-400 to-green-500',
                delay: '200ms'
              },
              {
                icon: GlobeIcon,
                title: 'Localization Experts',
                description: 'Professionals adapting content for cultural relevance.',
                gradient: 'from-pink-400 to-pink-500',
                delay: '300ms'
              },
              {
                icon: Eye,
                title: 'Content Reviewers',
                description: 'Quality assurance specialists maintaining high standards.',
                gradient: 'from-yellow-400 to-yellow-500',
                delay: '400ms'
              },
              {
                icon: BookOpen,
                title: 'Subject Matter Experts',
                description: 'Industry specialists bringing domain knowledge.',
                gradient: 'from-indigo-400 to-indigo-500',
                delay: '500ms'
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
              Experience matters, but <strong className="text-[#151249]">quality and commitment matter more</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT WE VALUE - Our Core Principles */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">What We Value</h2>
            <p className="text-2xl text-gray-700 font-semibold">Our Core Principles</p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Target,
                title: 'Accuracy & Attention to Detail',
                description: 'Every word matters. Precision is at the heart of everything we do.',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: GlobeIcon,
                title: 'Cultural Awareness',
                description: 'Understanding context and nuance beyond literal translation.',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Shield,
                title: 'Reliability & Professionalism',
                description: 'Consistent quality and dependable delivery on every project.',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: MessageSquare,
                title: 'Clear Communication',
                description: 'Open dialogue and transparent collaboration throughout.',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: Heart,
                title: 'Respect & Collaboration',
                description: 'Building partnerships based on mutual trust and support.',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Zap,
                title: 'Continuous Improvement',
                description: 'Always learning, growing, and refining our craft.',
                gradient: 'from-indigo-400 to-indigo-500'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-soft-blue rounded-3xl p-8 border-2 border-transparent hover:border-[#00C4FF]/30 transition-all duration-300 reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6 items-start">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold text-[#151249]">{value.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center p-8 bg-gradient-to-r from-[#151249] to-[#1e1a5e] rounded-3xl reveal-on-scroll">
            <p className="text-2xl text-white font-semibold leading-relaxed">
              These values guide <span className="text-yellow-400">every project and partnership</span>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS - Joining Process */}
      <section className="section-spacing bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white px-6 md:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 world-map-pattern opacity-30"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-[#00C4FF]/15 bottom-10 left-10"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-white mb-4">How It Works</h2>
            <p className="text-2xl text-white/80 font-semibold">Joining Process</p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                number: '01',
                title: 'Submit Your Application',
                description: 'Share your details, experience, and language expertise.',
                icon: Send
              },
              {
                number: '02',
                title: 'Review & Evaluation',
                description: 'We assess skills, quality, and suitability.',
                icon: Search
              },
              {
                number: '03',
                title: 'Collaboration Setup',
                description: 'Selected candidates are onboarded into our workflow.',
                icon: Users
              },
              {
                number: '04',
                title: 'Start Working',
                description: 'Receive projects, collaborate, and grow with us.',
                icon: Zap
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="relative flex gap-8 items-start reveal-on-scroll"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl border-4 border-[#151249]">
                    <span className="text-3xl font-black text-[#151249]">{step.number}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-yellow-400" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-white/80 leading-relaxed text-lg">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < 3 && (
                  <div className="absolute left-10 top-20 bottom-[-48px] w-0.5 bg-gradient-to-b from-yellow-400/60 to-yellow-400/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: BENEFITS - What You Gain */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">Benefits of Working With Us</h2>
            <p className="text-2xl text-gray-700 font-semibold">What You Gain</p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: MapPin,
                title: 'Flexible Remote Collaboration',
                description: 'Work from anywhere in the world. We value results, not location.',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Shield,
                title: 'Fair & Transparent Project Handling',
                description: 'Clear expectations, fair compensation, and honest communication.',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: TrendingUp,
                title: 'Professional Growth Opportunities',
                description: 'Expand your skills, work on diverse projects, and build expertise.',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: MessageSquare,
                title: 'Supportive Communication',
                description: 'Responsive team, clear guidelines, and ongoing assistance.',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: Clock,
                title: 'Long-Term Collaboration Potential',
                description: 'Build a lasting relationship as we grow together.',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Heart,
                title: 'Respectful Partnership',
                description: 'Be valued as a professional contributor, not just a service provider.',
                gradient: 'from-indigo-400 to-indigo-500'
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 card-shadow-premium hover-glow transition-all duration-300 reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6 items-start">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#151249] mb-3">{benefit.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center reveal-on-scroll">
            <p className="text-2xl text-gray-700 font-semibold">
              We believe in building <strong className="text-[#151249]">relationships, not just assignments</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR COMMUNITY - Who We Work With */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center reveal-on-scroll">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-2xl">
              <Users className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00C4FF]/10 border border-[#00C4FF]/20 mb-8">
            <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">Our Community</span>
          </div>

          {/* Title */}
          <h2 className="text-[#151249] mb-10">Who We Work With</h2>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-2xl text-gray-700 leading-loose font-medium">
              Our team includes <strong className="text-[#151249]">language professionals from diverse backgrounds and regions</strong>, working together to deliver high-quality translations across Germany and internationally.
            </p>
            
            <p className="text-2xl text-gray-700 leading-loose font-medium">
              <strong className="text-[#151249]">Diversity and collaboration</strong> strengthen our work.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Users, label: 'Global Team', color: 'from-blue-400 to-blue-500' },
              { icon: Languages, label: 'Multiple Languages', color: 'from-purple-400 to-purple-500' },
              { icon: Award, label: 'Certified Experts', color: 'from-green-400 to-green-500' },
              { icon: Heart, label: 'Passionate Professionals', color: 'from-pink-400 to-pink-500' }
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

      {/* SECTION 8: CALL TO ACTION - Ready to Join */}
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
            Ready to Join?
          </h2>

          {/* Subtitle */}
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed" style={{
            fontWeight: '500',
            textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
          }}>
            If you are passionate about <strong className="text-yellow-400">language and quality</strong>, we'd love to hear from you.<br />
            Join Honey Translation and be part of a <strong className="text-yellow-400">growing global network</strong>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl shadow-2xl hover:shadow-[0_0_60px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105 text-lg font-bold"
            >
              <Send className="w-6 h-6" />
              <span>Apply Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link 
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 text-lg font-bold"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center gap-6 flex-wrap">
            {['Remote Work', 'Fair Compensation', 'Global Network'].map((badge, index) => (
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
