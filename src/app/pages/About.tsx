import { Link } from 'react-router-dom';
import { Shield, Heart, Lock, Users, Award, FileText, Globe as GlobeIcon, Briefcase, GraduationCap, MessageSquare, CheckCircle2, Target, Eye, Sparkles, Clock, TrendingUp, Star, ArrowRight, Languages } from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();
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
      {/* SECTION 1: HERO - "Clarity That Speaks Every Language" */}
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
              <span className="text-sm font-semibold text-white/90">{t('aboutPage.hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-white" style={{
              fontSize: '4rem',
              lineHeight: '1.1',
              fontWeight: '900',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.1)'
            }}>
              {t('aboutPage.hero.title').split(' ').slice(0, -2).join(' ')}{' '}
              <span className="gradient-text-shine">{t('aboutPage.hero.title').split(' ').slice(-2).join(' ')}</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{
              fontWeight: '500',
              lineHeight: '1.7',
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }}>
              {t('aboutPage.hero.subtitle')}
            </p>

            {/* Tagline */}
            <div className="pt-4">
              <p className="text-2xl font-bold text-yellow-400" style={{
                textShadow: '0 0 20px rgba(250, 204, 21, 0.5)'
              }}>
                {t('aboutPage.hero.tagline')}
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/40 rounded-full mx-auto flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-white/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE - Human-First Translation */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Text */}
            <div className="space-y-8 reveal-on-scroll">
              <div>
                <div className="inline-block mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#E3B552] to-[#F4D03F] rounded-full"></div>
                    <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">{t('aboutPage.whoWeAre.badge')}</span>
                  </div>
                  <h2 className="text-[#151249]">{t('aboutPage.whoWeAre.title')}</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-700 text-xl leading-relaxed">
                    {t('aboutPage.whoWeAre.paragraph1').split('traductions précises et culturellement adaptées')[0]}<strong className="text-[#151249]">{t('aboutPage.whoWeAre.paragraph1').includes('accurate and culturally adapted translations') ? 'accurate and culturally adapted translations' : 'traductions précises et culturellement adaptées'}</strong>.
                  </p>

                  <p className="text-gray-700 text-xl leading-relaxed">
                    {t('aboutPage.whoWeAre.paragraph2').split(/le sens, le ton et l'intention|meaning, tone, and intent/)[0]}<strong className="text-[#151249]">{t('aboutPage.whoWeAre.paragraph2').includes('meaning, tone, and intent') ? 'meaning, tone, and intent' : "le sens, le ton et l'intention"}</strong>.
                  </p>

                  <p className="text-gray-700 text-xl leading-relaxed">
                    {t('aboutPage.whoWeAre.paragraph3').split(/naturel, clair et authentique|natural, clear, and authentic/)[0]}<strong className="text-[#151249]">{t('aboutPage.whoWeAre.paragraph3').includes('natural, clear, and authentic') ? 'natural, clear, and authentic' : 'naturel, clair et authentique'}</strong>{t('aboutPage.whoWeAre.paragraph3').includes('target language') ? ' in the target language' : ' dans la langue cible'}.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: t('aboutPage.whoWeAre.stat1'), label: t('aboutPage.whoWeAre.stat1Label') },
                  { number: t('aboutPage.whoWeAre.stat2'), label: t('aboutPage.whoWeAre.stat2Label') },
                  { number: t('aboutPage.whoWeAre.stat3'), label: t('aboutPage.whoWeAre.stat3Label') }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-black text-[#00C4FF] mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Abstract Graphic */}
            <div className="reveal-on-scroll flex items-center justify-center" style={{ animationDelay: '200ms' }}>
              <div className="relative w-full max-w-md aspect-square">
                {/* Central Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl animate-core-pulse"
                    style={{ boxShadow: '0 0 60px rgba(250, 204, 21, 0.4)' }}
                  >
                    <Heart className="w-20 h-20 text-[#151249]" />
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  {[
                    { icon: Languages, color: 'from-blue-400 to-blue-500', position: 'top-0 left-1/2 -translate-x-1/2' },
                    { icon: Users, color: 'from-purple-400 to-purple-500', position: 'right-0 top-1/2 -translate-y-1/2' },
                    { icon: GlobeIcon, color: 'from-green-400 to-green-500', position: 'bottom-0 left-1/2 -translate-x-1/2' },
                    { icon: Award, color: 'from-pink-400 to-pink-500', position: 'left-0 top-1/2 -translate-y-1/2' }
                  ].map((item, index) => (
                    <div key={index} className={`absolute ${item.position} animate-counter-spin-slow`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Dotted Circle */}
                <div className="absolute inset-8 border-2 border-dashed border-[#E3B552]/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT MAKES US DIFFERENT - Our Sweet Advantage */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-[#E3B552] to-[#F4D03F] rounded-full"></div>
                <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">{t('aboutPage.whatMakesUsDifferent.badge')}</span>
                <div className="w-12 h-1 bg-gradient-to-r from-[#F4D03F] to-[#E3B552] rounded-full"></div>
              </div>
              <h2 className="text-[#151249]">{t('aboutPage.whatMakesUsDifferent.title')}</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('aboutPage.whatMakesUsDifferent.subtitle')}
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: t('aboutPage.whatMakesUsDifferent.feature1'),
                description: t('aboutPage.whatMakesUsDifferent.feature1Desc'),
                gradient: 'from-green-400 to-green-500',
                delay: '0ms'
              },
              {
                icon: Heart,
                title: t('aboutPage.whatMakesUsDifferent.feature2'),
                description: t('aboutPage.whatMakesUsDifferent.feature2Desc'),
                gradient: 'from-pink-400 to-pink-500',
                delay: '100ms'
              },
              {
                icon: Clock,
                title: t('aboutPage.whatMakesUsDifferent.feature3'),
                description: t('aboutPage.whatMakesUsDifferent.feature3Desc'),
                gradient: 'from-blue-400 to-blue-500',
                delay: '200ms'
              },
              {
                icon: MessageSquare,
                title: t('aboutPage.whatMakesUsDifferent.feature4'),
                description: t('aboutPage.whatMakesUsDifferent.feature4Desc'),
                gradient: 'from-purple-400 to-purple-500',
                delay: '300ms'
              },
              {
                icon: Star,
                title: t('aboutPage.whatMakesUsDifferent.feature5'),
                description: t('aboutPage.whatMakesUsDifferent.feature5Desc'),
                gradient: 'from-yellow-400 to-yellow-500',
                delay: '400ms'
              },
              {
                icon: Shield,
                title: t('aboutPage.whatMakesUsDifferent.feature6'),
                description: t('aboutPage.whatMakesUsDifferent.feature6Desc'),
                gradient: 'from-indigo-400 to-indigo-500',
                delay: '500ms'
              }
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 card-shadow-premium hover-glow group transition-all duration-500 hover:scale-105 hover:-translate-y-2 reveal-on-scroll"
                style={{ animationDelay: card.delay }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#151249] mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>

                {/* Checkmark */}
                <div className="flex items-center gap-2 mt-6 text-green-600 font-semibold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm">{t('aboutPage.whatMakesUsDifferent.verifiedAdvantage')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR SERVICES - What We Translate */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">{t('aboutPage.ourServices.badge')}</span>
              </div>
              <h2 className="text-[#151249]">{t('aboutPage.ourServices.title')}</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('aboutPage.ourServices.subtitle')}
            </p>
          </div>

          {/* Zig-Zag Grid Layout */}
          <div className="space-y-16">
            {[
              {
                icon: Briefcase,
                title: t('aboutPage.ourServices.service1'),
                description: t('aboutPage.ourServices.service1Desc'),
                gradient: 'from-blue-400 to-blue-500',
                align: 'left'
              },
              {
                icon: GlobeIcon,
                title: t('aboutPage.ourServices.service2'),
                description: t('aboutPage.ourServices.service2Desc'),
                gradient: 'from-purple-400 to-purple-500',
                align: 'right'
              },
              {
                icon: TrendingUp,
                title: t('aboutPage.ourServices.service3'),
                description: t('aboutPage.ourServices.service3Desc'),
                gradient: 'from-pink-400 to-pink-500',
                align: 'left'
              },
              {
                icon: Shield,
                title: t('aboutPage.ourServices.service4'),
                description: t('aboutPage.ourServices.service4Desc'),
                gradient: 'from-green-400 to-green-500',
                align: 'right'
              },
              {
                icon: GraduationCap,
                title: t('aboutPage.ourServices.service5'),
                description: t('aboutPage.ourServices.service5Desc'),
                gradient: 'from-yellow-400 to-yellow-500',
                align: 'left'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-on-scroll ${
                  service.align === 'right' ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Side */}
                <div className={`flex justify-center ${service.align === 'right' ? 'lg:order-2' : ''}`}>
                  <div className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-500`}>
                    <service.icon className="w-24 h-24 text-white" />
                  </div>
                </div>

                {/* Content Side */}
                <div className={service.align === 'right' ? 'lg:order-1' : ''}>
                  <h3 className="text-3xl font-bold text-[#151249] mb-6">{service.title}</h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-[#00C4FF] font-bold hover:gap-4 transition-all group"
                  >
                    <span>{t('common.learnMore')}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR PROCESS - Simple. Clear. Reliable. */}
      <section className="section-spacing bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white px-6 md:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 world-map-pattern opacity-30"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-[#00C4FF]/15 bottom-10 left-10"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-white mb-4">{t('aboutPage.ourProcess.title')}</h2>
            <p className="text-2xl text-white/80 font-semibold">{t('aboutPage.ourProcess.subtitle')}</p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: '01',
                  title: t('aboutPage.ourProcess.step1'),
                  description: t('aboutPage.ourProcess.step1Desc'),
                  icon: Target
                },
                {
                  number: '02',
                  title: t('aboutPage.ourProcess.step2'),
                  description: t('aboutPage.ourProcess.step2Desc'),
                  icon: Languages
                },
                {
                  number: '03',
                  title: t('aboutPage.ourProcess.step3'),
                  description: t('aboutPage.ourProcess.step3Desc'),
                  icon: CheckCircle2
                },
                {
                  number: '04',
                  title: t('aboutPage.ourProcess.step4'),
                  description: t('aboutPage.ourProcess.step4Desc'),
                  icon: Award
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="relative reveal-on-scroll"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step Card */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                    {/* Number Badge */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl border-4 border-[#151249]">
                      <span className="text-2xl font-black text-[#151249]">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mt-8 mb-6">
                      <step.icon className="w-12 h-12 text-yellow-400" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">{step.title}</h3>
                    <p className="text-white/80 leading-relaxed text-center">{step.description}</p>
                  </div>

                  {/* Arrow (Desktop) */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-24 -right-4 z-20">
                      <ArrowRight className="w-8 h-8 text-yellow-400/70" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR MISSION - Why We Exist */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center reveal-on-scroll">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-2xl">
              <Target className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00C4FF]/10 border border-[#00C4FF]/20 mb-8">
            <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">{t('aboutPage.ourMission.badge')}</span>
          </div>

          {/* Title */}
          <h2 className="text-[#151249] mb-10">{t('aboutPage.ourMission.title')}</h2>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-2xl text-gray-700 leading-loose font-medium" dangerouslySetInnerHTML={{
              __html: t('aboutPage.ourMission.paragraph1').replace(/eliminate language barriers|éliminer les barrières linguistiques/g, '<strong class="text-[#151249]">$&</strong>')
            }} />

            <p className="text-2xl text-gray-700 leading-loose font-medium" dangerouslySetInnerHTML={{
              __html: t('aboutPage.ourMission.paragraph2').replace(/natural, respectful, and meaningful|naturelles, respectueuses et significatives/g, '<strong class="text-[#151249]">$&</strong>')
            }} />
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-[#00C4FF]"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR VISION - Where We're Going */}
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
            <span className="text-sm font-bold text-white uppercase tracking-wider">{t('aboutPage.ourVision.badge')}</span>
          </div>

          {/* Title */}
          <h2 className="text-white mb-10">{t('aboutPage.ourVision.title')}</h2>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-2xl text-white/90 leading-loose font-medium" style={{
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }} dangerouslySetInnerHTML={{
              __html: t('aboutPage.ourVision.paragraph1').replace(/language is never a limitation|la langue n'est jamais une limitation/g, '<strong class="text-yellow-400">$&</strong>')
            }} />

            <p className="text-2xl text-white/90 leading-loose font-medium" style={{
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }} dangerouslySetInnerHTML={{
              __html: t('aboutPage.ourVision.paragraph2').replace(/trusted global partner|partenaire mondial de confiance/g, '<strong class="text-yellow-400">$&</strong>')
            }} />
          </div>

          {/* Decorative Line */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-12 rounded-full"></div>
        </div>
      </section>

      {/* SECTION 8: TRUST & VALUES - What We Stand For */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <div className="inline-block mb-6">
              <h2 className="text-[#151249]">{t('aboutPage.whatWeStandFor.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E3B552] to-[#F4D03F] rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('aboutPage.whatWeStandFor.subtitle')}
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: Award,
                title: t('aboutPage.whatWeStandFor.value1'),
                description: t('aboutPage.whatWeStandFor.value1Desc'),
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Shield,
                title: t('aboutPage.whatWeStandFor.value2'),
                description: t('aboutPage.whatWeStandFor.value2Desc'),
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Lock,
                title: t('aboutPage.whatWeStandFor.value3'),
                description: t('aboutPage.whatWeStandFor.value3Desc'),
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Heart,
                title: t('aboutPage.whatWeStandFor.value4'),
                description: t('aboutPage.whatWeStandFor.value4Desc'),
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: Star,
                title: t('aboutPage.whatWeStandFor.value5'),
                description: t('aboutPage.whatWeStandFor.value5Desc'),
                gradient: 'from-yellow-400 to-yellow-500'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-3xl p-8 card-shadow-premium text-center h-full flex flex-col items-center hover-glow group hover:scale-105 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#151249] mb-4">{value.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CALL TO ACTION - Let's Translate Together */}
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
            {t('aboutPage.cta.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed" style={{
            fontWeight: '500',
            textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
          }}>
            {t('aboutPage.cta.subtitle')}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl shadow-2xl hover:shadow-[0_0_60px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105 text-lg font-bold"
            >
              <span>{t('aboutPage.cta.button1')}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 text-lg font-bold"
            >
              <span>{t('aboutPage.cta.button2')}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="flex justify-center gap-6 mt-16 flex-wrap">
            {[t('aboutPage.cta.badge1'), t('aboutPage.cta.badge2'), t('aboutPage.cta.badge3')].map((badge, index) => (
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