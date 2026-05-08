import { Link } from 'react-router-dom';
import {
  FileText, Globe as GlobeIcon, TrendingUp, Scale, GraduationCap,
  Briefcase, ShoppingCart, BookOpen, Building2, Users, Sparkles,
  CheckCircle2, Shield, Clock, Target, Award, Eye, MessageSquare,
  Zap, Heart, Star, ArrowRight, Languages, Search, FileCheck, Layers
} from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Services() {
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
      {/* SECTION 1: HERO - "Translation That Feels Natural" */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white section-spacing px-6 md:px-8 overflow-hidden radial-glow-overlay">
        {/* Blur Blobs */}
        <div className="blur-blob w-96 h-96 bg-yellow-400/30 top-10 right-10" style={{ animationDelay: '0s' }}></div>
        <div className="blur-blob w-80 h-80 bg-[#00C4FF]/20 bottom-20 left-20" style={{ animationDelay: '5s' }}></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 world-map-pattern"></div>

        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div className="space-y-8 animate-fadeInUp">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-white/90">{t('servicesPage.hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-white" style={{
              fontSize: '4rem',
              lineHeight: '1.1',
              fontWeight: '900',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.1)'
            }}>
              {t('servicesPage.hero.title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="gradient-text-shine">{t('servicesPage.hero.title').split(' ').slice(-1)}</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed" style={{
              fontWeight: '500',
              lineHeight: '1.7',
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }}>
              {t('servicesPage.hero.subtitle')}
            </p>

            {/* Sub-line */}
            <div className="pt-2">
              <p className="text-xl font-bold text-yellow-400" style={{
                textShadow: '0 0 20px rgba(250, 204, 21, 0.5)',
                letterSpacing: '0.05em'
              }}>
                {t('servicesPage.hero.tagline')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OVERVIEW - What We Do */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center reveal-on-scroll">
          {/* Content */}
          <div className="space-y-8">
            <p className="text-2xl text-gray-700 leading-loose font-medium">
              {t('servicesPage.overview.paragraph1')}
            </p>

            <p className="text-2xl text-gray-700 leading-loose font-medium">
              {t('servicesPage.overview.paragraph2')}
            </p>

            <p className="text-2xl text-gray-700 leading-loose font-medium">
              {t('servicesPage.overview.paragraph3')}
            </p>
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE SERVICES - What We Translate */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">{t('servicesPage.core.title')}</span>
              </div>
              <h2 className="text-[#151249]">{t('servicesPage.core.subtitle')}</h2>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: t('servicesPage.core.service1Title'),
                description: t('servicesPage.core.service1Desc'),
                gradient: 'from-blue-400 to-blue-500',
                delay: '0ms'
              },
              {
                icon: GlobeIcon,
                title: t('servicesPage.core.service2Title'),
                description: t('servicesPage.core.service2Desc'),
                gradient: 'from-purple-400 to-purple-500',
                delay: '100ms'
              },
              {
                icon: TrendingUp,
                title: t('servicesPage.core.service3Title'),
                description: t('servicesPage.core.service3Desc'),
                gradient: 'from-pink-400 to-pink-500',
                delay: '200ms'
              },
              {
                icon: Scale,
                title: t('servicesPage.core.service4Title'),
                description: t('servicesPage.core.service4Desc'),
                gradient: 'from-green-400 to-green-500',
                delay: '300ms'
              },
              {
                icon: GraduationCap,
                title: t('servicesPage.core.service5Title'),
                description: t('servicesPage.core.service5Desc'),
                gradient: 'from-yellow-400 to-yellow-500',
                delay: '400ms'
              },
              {
                icon: FileText,
                title: t('servicesPage.core.service6Title'),
                description: t('servicesPage.core.service6Desc'),
                gradient: 'from-indigo-400 to-indigo-500',
                delay: '500ms'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 card-shadow-premium hover-glow group transition-all duration-500 hover:scale-105 hover:-translate-y-2 reveal-on-scroll"
                style={{ animationDelay: service.delay }}
              >
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#151249] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SPECIALIZED SOLUTIONS - Beyond Translation */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 reveal-on-scroll">
              <div>
                <div className="inline-block mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#E3B552] to-[#F4D03F] rounded-full"></div>
                    <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">{t('servicesPage.specialized.title')}</span>
                  </div>
                  <h2 className="text-[#151249]">{t('servicesPage.specialized.subtitle')}</h2>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  {t('servicesPage.specialized.intro')}
                </p>

                {/* Services List */}
                <div className="space-y-6">
                  {[
                    { icon: FileCheck, title: t('servicesPage.specialized.service1Title'), description: t('servicesPage.specialized.service1Desc') },
                    { icon: GlobeIcon, title: t('servicesPage.specialized.service2Title'), description: t('servicesPage.specialized.service2Desc') },
                    { icon: Layers, title: t('servicesPage.specialized.service3Title'), description: t('servicesPage.specialized.service3Desc') },
                    { icon: Eye, title: t('servicesPage.specialized.service4Title'), description: t('servicesPage.specialized.service4Desc') }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center flex-shrink-0 shadow-md">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#151249] mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-gray-600 mt-8 italic" dangerouslySetInnerHTML={{
                  __html: t('servicesPage.specialized.outro').replace(/natural and professional|naturel et professionnel/g, '<strong class="text-[#151249]">$&</strong>')
                }} />
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="reveal-on-scroll flex items-center justify-center" style={{ animationDelay: '200ms' }}>
              <div className="relative w-full max-w-md aspect-square">
                {/* Central Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-12 transition-all duration-500">
                    <Languages className="w-28 h-28 text-white" />
                  </div>
                </div>

                {/* Floating Cards */}
                {[
                  { icon: CheckCircle2, position: 'top-0 left-0', color: 'from-green-400 to-green-500' },
                  { icon: Star, position: 'top-0 right-0', color: 'from-yellow-400 to-yellow-500' },
                  { icon: Shield, position: 'bottom-0 left-0', color: 'from-purple-400 to-purple-500' },
                  { icon: Zap, position: 'bottom-0 right-0', color: 'from-pink-400 to-pink-500' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`absolute ${item.position} w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl animate-float`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                ))}

                {/* Decorative circles */}
                <div className="absolute inset-12 border-2 border-dashed border-[#00C4FF]/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR WORKFLOW - How We Work */}
      <section className="section-spacing bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white px-6 md:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 world-map-pattern opacity-30"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-[#00C4FF]/15 bottom-10 left-10"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-white mb-4">{t('servicesPage.workflow.title')}</h2>
            <p className="text-2xl text-white/80 font-semibold">{t('servicesPage.workflow.subtitle')}</p>
          </div>

          {/* Vertical Timeline */}
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                number: '01',
                title: 'Content Review',
                description: 'We assess your content, purpose, and target audience.',
                icon: Search
              },
              {
                number: '02',
                title: 'Expert Translation',
                description: 'Professional translators handle your project with precision.',
                icon: Languages
              },
              {
                number: '03',
                title: 'Quality Assurance',
                description: 'Multiple checks for accuracy, tone, and clarity.',
                icon: CheckCircle2
              },
              {
                number: '04',
                title: 'Final Delivery',
                description: 'On-time delivery with post-delivery support if needed.',
                icon: Award
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

      {/* SECTION 6: INDUSTRIES WE SERVE - Who We Help */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">{t('servicesPage.industries.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('servicesPage.industries.subtitle')}
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Briefcase, title: t('servicesPage.industries.industry1'), gradient: 'from-blue-400 to-blue-500' },
              { icon: ShoppingCart, title: t('servicesPage.industries.industry2'), gradient: 'from-purple-400 to-purple-500' },
              { icon: BookOpen, title: t('servicesPage.industries.industry3'), gradient: 'from-green-400 to-green-500' },
              { icon: Scale, title: t('servicesPage.industries.industry4'), gradient: 'from-pink-400 to-pink-500' },
              { icon: TrendingUp, title: t('servicesPage.industries.industry5'), gradient: 'from-yellow-400 to-yellow-500' },
              { icon: Users, title: t('servicesPage.industries.industry6'), gradient: 'from-indigo-400 to-indigo-500' }
            ].map((industry, index) => (
              <div 
                key={index}
                className="reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-3xl p-8 card-shadow-premium text-center h-full flex flex-col items-center justify-center hover-glow group hover:scale-105 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#151249]">{industry.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-16 reveal-on-scroll">
            <p className="text-xl text-gray-700 font-medium" dangerouslySetInnerHTML={{
              __html: t('servicesPage.industries.note').replace(/same level of care and professionalism|même niveau de soin et de professionnalisme/g, '<strong class="text-[#151249]">$&</strong>')
            }} />
          </div>
        </div>
      </section>

      {/* SECTION 7: QUALITY & CONFIDENTIALITY - Our Promise */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-5xl reveal-on-scroll">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6">{t('servicesPage.quality.title')}</h2>
            <p className="text-2xl text-gray-700 font-semibold">{t('servicesPage.quality.subtitle')}</p>
          </div>

          {/* Promise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: Shield,
                title: t('servicesPage.quality.feature1Title'),
                description: t('servicesPage.quality.feature1Desc'),
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: CheckCircle2,
                title: t('servicesPage.quality.feature2Title'),
                description: t('servicesPage.quality.feature2Desc'),
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Target,
                title: t('servicesPage.quality.feature3Title'),
                description: t('servicesPage.quality.feature3Desc'),
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Clock,
                title: t('servicesPage.quality.feature4Title'),
                description: t('servicesPage.quality.feature4Desc'),
                gradient: 'from-pink-400 to-pink-500'
              }
            ].map((promise, index) => (
              <div 
                key={index}
                className="bg-soft-blue rounded-3xl p-8 border-2 border-transparent hover:border-[#00C4FF]/30 transition-all duration-300"
              >
                <div className="flex gap-6 items-start">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${promise.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <promise.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#151249] mb-3">{promise.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{promise.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center p-8 bg-gradient-to-r from-[#151249] to-[#1e1a5e] rounded-3xl">
            <p className="text-2xl text-white font-semibold leading-relaxed" dangerouslySetInnerHTML={{
              __html: t('servicesPage.quality.note').replace(/complete care and respect|soin et un respect complets/g, '<span class="text-yellow-400">$&</span>')
            }} />
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY CHOOSE US - Our Sweet Advantage */}
      <section className="section-spacing bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white px-6 md:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 world-map-pattern opacity-20"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-[#00C4FF]/15 bottom-10 left-10"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-white mb-4">{t('servicesPage.whyUs.title')}</h2>
            <p className="text-2xl text-white/80 font-semibold">{t('servicesPage.whyUs.subtitle')}</p>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Heart,
                title: t('servicesPage.whyUs.feature1Title'),
                description: t('servicesPage.whyUs.feature1Desc')
              },
              {
                icon: MessageSquare,
                title: t('servicesPage.whyUs.feature2Title'),
                description: t('servicesPage.whyUs.feature2Desc')
              },
              {
                icon: Award,
                title: t('servicesPage.whyUs.feature3Title'),
                description: t('servicesPage.whyUs.feature3Desc')
              },
              {
                icon: Zap,
                title: t('servicesPage.whyUs.feature4Title'),
                description: t('servicesPage.whyUs.feature4Desc')
              },
              {
                icon: Users,
                title: t('servicesPage.whyUs.feature5Title'),
                description: t('servicesPage.whyUs.feature5Desc')
              },
              {
                icon: Star,
                title: t('servicesPage.whyUs.feature6Title'),
                description: t('servicesPage.whyUs.feature6Desc')
              }
            ].map((advantage, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mb-6 shadow-xl">
                  <advantage.icon className="w-8 h-8 text-[#151249]" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-white/80 leading-relaxed">{advantage.description}</p>

                {/* Checkmark */}
                <div className="flex items-center gap-2 mt-6 text-green-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-semibold">{t('servicesPage.whyUs.badge')}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Statement */}
          <div className="text-center reveal-on-scroll">
            <p className="text-2xl text-white/90 font-semibold">
              {t('servicesPage.whyUs.closing')}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: CALL TO ACTION - Start Your Translation */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-5xl text-center reveal-on-scroll">
          {/* Title */}
          <h2 className="text-[#151249] mb-8">{t('servicesPage.cta.title')}</h2>

          {/* Subtitle */}
          <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            {t('servicesPage.cta.subtitle')}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl shadow-2xl hover:shadow-[0_0_60px_rgba(250,204,21,0.4)] transition-all duration-300 hover:scale-105 text-lg font-bold"
            >
              <span>{t('servicesPage.cta.button1')}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#151249] text-white rounded-xl hover:bg-[#1e1a5e] transition-all duration-300 hover:scale-105 text-lg font-bold shadow-lg"
            >
              <span>{t('servicesPage.cta.button2')}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { icon: Shield, text: t('servicesPage.cta.badge1') },
              { icon: Clock, text: t('servicesPage.cta.badge2') },
              { icon: Award, text: t('servicesPage.cta.badge3') }
            ].map((indicator, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-soft-blue border border-[#00C4FF]/20"
              >
                <indicator.icon className="w-5 h-5 text-[#00C4FF]" />
                <span className="text-sm font-semibold text-gray-700">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
