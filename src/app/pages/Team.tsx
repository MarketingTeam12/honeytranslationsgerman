import { Link } from 'react-router-dom';
import {
  Users, Languages, FileCheck, GlobeIcon, Briefcase,
  Target, Shield, Heart, MessageSquare, Clock, CheckCircle2,
  Award, Eye, Sparkles, ArrowRight, Search
} from 'lucide-react';
import { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Team() {
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
              <span className="text-sm font-semibold text-white/90">{t('teamPage.hero.badge')}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-white" style={{
              fontSize: '4rem',
              lineHeight: '1.1',
              fontWeight: '900',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.1)'
            }}>
              {t('teamPage.hero.title').split(' ').slice(0, -2).join(' ')}{' '}
              <span className="gradient-text-shine">{t('teamPage.hero.title').split(' ').slice(-2).join(' ')}</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{
              fontWeight: '500',
              lineHeight: '1.7',
              textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
            }}>
              {t('teamPage.hero.subtitle')}
            </p>

            {/* Sub-line */}
            <div className="pt-2">
              <p className="text-xl font-bold text-yellow-400" style={{
                textShadow: '0 0 20px rgba(250, 204, 21, 0.5)',
                letterSpacing: '0.05em'
              }}>
                {t('teamPage.hero.tagline')}
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
                    <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">{t('teamPage.whoWeAre.badge')}</span>
                  </div>
                  <h2 className="text-[#151249]">{t('teamPage.whoWeAre.title')}</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{
                    __html: t('teamPage.whoWeAre.paragraph1').replace(/diverse team of language professionals|équipe diversifiée de professionnels de la langue/g, '<strong class="text-[#151249]">$&</strong>')
                  }} />

                  <p className="text-xl text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{
                    __html: t('teamPage.whoWeAre.paragraph2').replace(/high standards of accuracy, tone, and meaning|normes élevées de précision, de ton et de sens/g, '<strong class="text-[#151249]">$&</strong>')
                  }} />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { number: t('teamPage.whoWeAre.stat1'), label: t('teamPage.whoWeAre.stat1Label'), icon: Users },
                  { number: t('teamPage.whoWeAre.stat2'), label: t('teamPage.whoWeAre.stat2Label'), icon: Languages },
                  { number: t('teamPage.whoWeAre.stat3'), label: t('teamPage.whoWeAre.stat3Label'), icon: GlobeIcon }
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
                <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">{t('teamPage.teamStructure.badge')}</span>
              </div>
              <h2 className="text-[#151249]">{t('teamPage.teamStructure.title')}</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('teamPage.teamStructure.subtitle')}
            </p>
          </div>

          {/* Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Languages,
                title: t('teamPage.teamStructure.role1'),
                description: t('teamPage.teamStructure.role1Desc'),
                gradient: 'from-blue-400 to-blue-500',
                delay: '0ms'
              },
              {
                icon: FileCheck,
                title: t('teamPage.teamStructure.role2'),
                description: t('teamPage.teamStructure.role2Desc'),
                gradient: 'from-purple-400 to-purple-500',
                delay: '100ms'
              },
              {
                icon: Award,
                title: t('teamPage.teamStructure.role3'),
                description: t('teamPage.teamStructure.role3Desc'),
                gradient: 'from-green-400 to-green-500',
                delay: '200ms'
              },
              {
                icon: GlobeIcon,
                title: t('teamPage.teamStructure.role4'),
                description: t('teamPage.teamStructure.role4Desc'),
                gradient: 'from-pink-400 to-pink-500',
                delay: '300ms'
              },
              {
                icon: Briefcase,
                title: t('teamPage.teamStructure.role5'),
                description: t('teamPage.teamStructure.role5Desc'),
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
            <p className="text-xl text-gray-700 font-medium" dangerouslySetInnerHTML={{
              __html: t('teamPage.teamStructure.bottomText').replace(/key part in delivering reliable translations|rôle clé dans la fourniture de traductions fiables/g, '<strong class="text-[#151249]">$&</strong>')
            }} />
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR EXPERTS - Experience You Can Trust */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">{t('teamPage.ourExperts.title')}</h2>
            <p className="text-2xl text-gray-700 font-semibold">{t('teamPage.ourExperts.subtitle')}</p>
          </div>

          {/* Split Content Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Block 1 */}
            <div className="reveal-on-scroll">
              <div className="bg-soft-blue rounded-3xl p-10 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#151249] mb-4">{t('teamPage.ourExperts.block1Title')}</h3>
                <p className="text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{
                  __html: t('teamPage.ourExperts.block1Desc').replace(/expertise, language mastery, and attention to detail|expertise, de leur maîtrise de la langue et de leur attention aux détails/g, '<strong class="text-[#151249]">$&</strong>')
                }} />
              </div>
            </div>

            {/* Block 2 */}
            <div className="reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="bg-soft-blue rounded-3xl p-10 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mb-6 shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#151249] mb-4">{t('teamPage.ourExperts.block2Title')}</h3>
                <p className="text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{
                  __html: t('teamPage.ourExperts.block2Desc').replace(/business, legal, academic, and marketing translations|traductions commerciales, juridiques, académiques et marketing/g, '<strong class="text-[#151249]">$&</strong>')
                }} />
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 reveal-on-scroll">
            {[
              { label: t('teamPage.ourExperts.area1'), icon: Briefcase, color: 'from-blue-400 to-blue-500' },
              { label: t('teamPage.ourExperts.area2'), icon: Shield, color: 'from-purple-400 to-purple-500' },
              { label: t('teamPage.ourExperts.area3'), icon: Award, color: 'from-green-400 to-green-500' },
              { label: t('teamPage.ourExperts.area4'), icon: Target, color: 'from-pink-400 to-pink-500' }
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
            <h2 className="text-[#151249] mb-6">{t('teamPage.ourValues.title')}</h2>
            <p className="text-2xl text-gray-700 font-semibold">{t('teamPage.ourValues.subtitle')}</p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {[
              {
                icon: Target,
                title: t('teamPage.ourValues.value1'),
                description: t('teamPage.ourValues.value1Desc'),
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: GlobeIcon,
                title: t('teamPage.ourValues.value2'),
                description: t('teamPage.ourValues.value2Desc'),
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Heart,
                title: t('teamPage.ourValues.value3'),
                description: t('teamPage.ourValues.value3Desc'),
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: MessageSquare,
                title: t('teamPage.ourValues.value4'),
                description: t('teamPage.ourValues.value4Desc'),
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Clock,
                title: t('teamPage.ourValues.value5'),
                description: t('teamPage.ourValues.value5Desc'),
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
            <p className="text-xl text-gray-700 font-medium" dangerouslySetInnerHTML={{
              __html: t('teamPage.ourValues.bottomText').replace(/how we work together and serve our clients|la façon dont nous travaillons ensemble et servons nos clients/g, '<strong class="text-[#151249]">$&</strong>')
            }} />
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
            <span className="text-sm font-bold text-[#00C4FF] uppercase tracking-wider">{t('teamPage.collaboration.badge')}</span>
          </div>

          {/* Title */}
          <h2 className="text-[#151249] mb-10">{t('teamPage.collaboration.title')}</h2>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-2xl text-gray-700 leading-loose font-medium" dangerouslySetInnerHTML={{
              __html: t('teamPage.collaboration.paragraph1').replace(/great translations come from collaboration|les grandes traductions viennent de la collaboration/g, '<strong class="text-[#151249]">$&</strong>')
            }} />

            <p className="text-2xl text-gray-700 leading-loose font-medium" dangerouslySetInnerHTML={{
              __html: t('teamPage.collaboration.paragraph2').replace(/languages and time zones|les langues et les fuseaux horaires/g, '<strong class="text-[#151249]">$&</strong>')
            }} />
          </div>

          {/* Collaboration Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Users, label: t('teamPage.collaboration.aspect1'), color: 'from-blue-400 to-blue-500' },
              { icon: GlobeIcon, label: t('teamPage.collaboration.aspect2'), color: 'from-purple-400 to-purple-500' },
              { icon: MessageSquare, label: t('teamPage.collaboration.aspect3'), color: 'from-green-400 to-green-500' },
              { icon: Target, label: t('teamPage.collaboration.aspect4'), color: 'from-pink-400 to-pink-500' }
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
                  <span className="text-sm font-bold text-green-700 uppercase tracking-wider">{t('teamPage.qualityAssurance.badge')}</span>
                </div>

                <h2 className="text-[#151249] mb-6">{t('teamPage.qualityAssurance.title')}</h2>

                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p dangerouslySetInnerHTML={{
                    __html: t('teamPage.qualityAssurance.paragraph1').replace(/every project goes through a dedicated review process|chaque projet passe par un processus de révision dédié/g, '<strong class="text-[#151249]">$&</strong>')
                  }} />
                  <p dangerouslySetInnerHTML={{
                    __html: t('teamPage.qualityAssurance.paragraph2').replace(/accurate, culturally appropriate, and aligned with client expectations|précises, culturellement appropriées et alignées sur les attentes des clients/g, '<strong class="text-[#151249]">$&</strong>')
                  }} />
                </div>

                {/* QA Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {[
                    { icon: CheckCircle2, label: t('teamPage.qualityAssurance.step1') },
                    { icon: GlobeIcon, label: t('teamPage.qualityAssurance.step2') },
                    { icon: Target, label: t('teamPage.qualityAssurance.step3') }
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
            {t('teamPage.joinTeam.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed" style={{
            fontWeight: '500',
            textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
          }} dangerouslySetInnerHTML={{
            __html: t('teamPage.joinTeam.subtitle').replace(/skilled language professionals|professionnels de la langue qualifiés/g, '<strong class="text-yellow-400">$&</strong>')
          }} />

          <p className="text-xl text-white/80 mb-12 font-semibold">
            {t('teamPage.joinTeam.question')}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              to="/join-us"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl shadow-2xl hover:shadow-[0_0_60px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105 text-lg font-bold"
            >
              <Users className="w-6 h-6" />
              <span>{t('teamPage.joinTeam.button1')}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 text-lg font-bold"
            >
              <MessageSquare className="w-6 h-6" />
              <span>{t('teamPage.joinTeam.button2')}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center gap-6 flex-wrap">
            {[t('teamPage.joinTeam.badge1'), t('teamPage.joinTeam.badge2'), t('teamPage.joinTeam.badge3')].map((badge, index) => (
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
