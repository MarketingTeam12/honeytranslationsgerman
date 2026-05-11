import { Link } from 'react-router-dom';
import { FileText, Scale, Globe as GlobeIcon, Stethoscope, Award, Subtitles, Building2, GraduationCap, Briefcase, TrendingUp, Shield, Clock, Lock, Star, ChevronDown, Users, Languages, Calendar, MessageSquare, MapPin, FileCheck, MessageCircle, ArrowRight, Upload, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { OrbitAnimation } from '../components/OrbitAnimation';
import { FeatureOrbitAnimation } from '../components/FeatureOrbitAnimation';
import { useLanguage } from '../../contexts/LanguageContext';

export function Home() {
  const { t } = useLanguage();
  const heroTitle = t('home.hero.title');
  const heroTitleHighlight = heroTitle.includes(' for ')
    ? heroTitle.substring(heroTitle.lastIndexOf(' for ') + 1)
    : heroTitle.split(' ').slice(-2).join(' ');
  const heroTitleMain = heroTitle.endsWith(heroTitleHighlight)
    ? heroTitle.slice(0, -heroTitleHighlight.length).trim()
    : heroTitle;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [counters, setCounters] = useState({ clients: 0, languages: 0, years: 0 });
  const [hasCountedUp, setHasCountedUp] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: '',
    message: ''
  });
  const [fileName, setFileName] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-zoom');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Count-up animation for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCountedUp) {
            setHasCountedUp(true);
            
            // Animate clients counter
            let clientCount = 0;
            const clientInterval = setInterval(() => {
              clientCount += 200;
              if (clientCount >= 10000) {
                clientCount = 10000;
                clearInterval(clientInterval);
              }
              setCounters(prev => ({ ...prev, clients: clientCount }));
            }, 20);

            // Animate languages counter
            let langCount = 0;
            const langInterval = setInterval(() => {
              langCount += 2;
              if (langCount >= 120) {
                langCount = 120;
                clearInterval(langInterval);
              }
              setCounters(prev => ({ ...prev, languages: langCount }));
            }, 15);

            // Animate years counter
            let yearsCount = 0;
            const yearsInterval = setInterval(() => {
              yearsCount += 1;
              if (yearsCount >= 15) {
                yearsCount = 15;
                clearInterval(yearsInterval);
              }
              setCounters(prev => ({ ...prev, years: yearsCount }));
            }, 80);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasCountedUp]);

  const faqs = [
    {
      question: t('home.faq.question1'),
      answer: t('home.faq.answer1')
    },
    {
      question: t('home.faq.question2'),
      answer: t('home.faq.answer2')
    },
    {
      question: t('home.faq.question3'),
      answer: t('home.faq.answer3')
    },
    {
      question: t('home.faq.question4'),
      answer: t('home.faq.answer4')
    },
    {
      question: t('home.faq.question5'),
      answer: t('home.faq.answer5')
    }
  ];

  return (
    <div className="pt-16">
      {/* SECTION 1: HERO - Enhanced with blur blobs and premium animations */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white section-spacing px-6 md:px-8 overflow-hidden radial-glow-overlay">
        {/* Blur Blob 1 - Gold */}
        <div className="blur-blob w-96 h-96 bg-yellow-400/30 top-10 right-10" style={{ animationDelay: '0s' }}></div>
        
        {/* Blur Blob 2 - Blue (Accent Color) */}
        <div className="blur-blob w-80 h-80 bg-[#00C4FF]/20 bottom-20 left-20" style={{ animationDelay: '5s' }}></div>
        
        {/* Blur Blob 3 - Purple */}
        <div className="blur-blob w-64 h-64 bg-purple-400/20 top-40 left-1/3" style={{ animationDelay: '10s' }}></div>

        {/* Background Pattern with world map dots */}
        <div className="absolute inset-0 world-map-pattern"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="animate-fadeInUp text-white" style={{
                animationDelay: '0ms',
                textShadow: '0px 3px 10px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.1)'
              }}>
                {heroTitleMain}{' '}
                <span className="gradient-text-shine" style={{
                  textShadow: '0px 3px 10px rgba(0,0,0,0.3)'
                }}>
                  {heroTitleHighlight}
                </span>
              </h1>
              <p className="animate-fadeInUp" style={{
                animationDelay: '200ms',
                fontSize: '1.25rem',
                lineHeight: '1.8',
                color: '#FFFFFF',
                fontWeight: '500',
                textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
              }}>
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                <Link
                  to="/contact"
                  className="btn-premium-gradient btn-glow-gold inline-flex items-center gap-2 justify-center"
                >
                  <span>{t('home.hero.getStarted')}</span>
                </Link>
                <a
                  href="https://wa.me/917299005577"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#25D366] border-2 border-[#25D366] text-white rounded-xl hover:bg-[#128C7E] hover:border-[#128C7E] transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 justify-center"
                  style={{
                    fontWeight: '700',
                    textShadow: '0px 2px 6px rgba(0,0,0,0.2)',
                    boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3), 0 0 40px rgba(37, 211, 102, 0.15)'
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('home.hero.whatsapp')}</span>
                </a>
              </div>
            </div>

            {/* Right - Orbital Animation System */}
            <OrbitAnimation items={[
              { angle: 0, text: 'ZH', label: 'Chinese', id: 0 },
              { angle: 60, text: 'FR', label: 'French', id: 1 },
              { angle: 120, text: 'ES', label: 'Spanish', id: 2 },
              { angle: 180, text: 'DE', label: 'German', id: 3 },
              { angle: 240, text: 'HI', label: 'Hindi', id: 4 },
              { angle: 300, text: 'JP', label: 'Japanese', id: 5 }
            ]} />
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR WORKING PROCESS - LIGHT SECTION (Breathing Space) */}
      <section className="py-32 bg-soft-blue px-6 relative overflow-hidden gradient-edge-bottom">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20 pattern-dots"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 animate-fadeInUp">
            <div className="inline-block mb-6">
              <h2 className="text-5xl md:text-6xl text-[#151249] font-bold">{t('home.process.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E3B552] to-[#F4D03F] rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('home.process.subtitle')}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector Lines (Desktop only) */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" 
              style={{
                animation: 'flowLine 3s ease-in-out infinite'
              }}
            ></div>

            {[
              {
                step: '01',
                icon: Upload,
                title: t('home.process.step1Title'),
                description: t('home.process.step1Desc'),
                gradient: 'from-blue-400/10 to-blue-500/10',
                iconGradient: 'from-blue-400 to-blue-500',
                accentColor: 'border-blue-400/30',
                glowColor: 'shadow-blue-400/20'
              },
              {
                step: '02',
                icon: Languages,
                title: t('home.process.step2Title'),
                description: t('home.process.step2Desc'),
                gradient: 'from-purple-400/10 to-purple-500/10',
                iconGradient: 'from-purple-400 to-purple-500',
                accentColor: 'border-purple-400/30',
                glowColor: 'shadow-purple-400/20'
              },
              {
                step: '03',
                icon: FileCheck,
                title: t('home.process.step3Title'),
                description: t('home.process.step3Desc'),
                gradient: 'from-yellow-400/10 to-yellow-500/10',
                iconGradient: 'from-yellow-400 to-yellow-500',
                accentColor: 'border-yellow-400/30',
                glowColor: 'shadow-yellow-400/20'
              },
              {
                step: '04',
                icon: CheckCircle2,
                title: t('home.process.step4Title'),
                description: t('home.process.step4Desc'),
                gradient: 'from-green-400/10 to-green-500/10',
                iconGradient: 'from-green-400 to-green-500',
                accentColor: 'border-green-400/30',
                glowColor: 'shadow-green-400/20'
              }
            ].map((process, index) => (
              <div 
                key={index}
                className="relative group"
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 150}ms`,
                  opacity: 0
                }}
              >
                {/* Card */}
                <div className={`relative bg-white rounded-3xl p-8 card-shadow-premium card-accent-top border ${process.accentColor} transition-all duration-500 h-full flex flex-col items-center text-center group-hover:scale-105 group-hover:-translate-y-2 hover-glow`}
                >
                  {/* Gold corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-3xl rounded-tr-3xl"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>

                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg border-4 border-white z-20">
                    <span className="text-[#151249] font-black text-lg">{process.step}</span>
                  </div>

                  {/* Icon with gradient background */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${process.iconGradient} flex items-center justify-center mb-6 mt-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    style={{
                      animation: `iconPulse 2s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    <process.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#151249] mb-4 leading-tight">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ lineHeight: '1.6' }}>
                    {process.description}
                  </p>

                  {/* Bottom glow line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${process.iconGradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>

                {/* Arrow connector (Desktop only) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-30">
                    <ArrowRight className="w-8 h-8 text-yellow-400/60 animate-pulse" 
                      style={{
                        animationDelay: `${index * 0.3}s`
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 animate-fadeInUp" style={{ animationDelay: '800ms', opacity: 0 }}>
            <p className="text-lg text-gray-600 mb-6">{t('home.process.ctaText')}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-all duration-300 hover:scale-105 group shadow-xl font-bold text-lg"
            >
              <span>{t('home.process.ctaButton')}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Animation Styles */}
        <style>{`
          @keyframes iconPulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          @keyframes flowLine {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.8;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* SECTION 3: INDUSTRIES WE SERVE - PURE WHITE (Clarity & Trust) */}
      <section className="py-24 bg-white pattern-grid px-6 gradient-edge-top gradient-edge-bottom">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4">
              <h2 className="text-5xl text-[#151249] font-bold">{t('home.industries.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E3B552] to-[#F4D03F] rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-gray-600">{t('home.industries.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Scale, title: t('home.industries.legal'), iconColor: 'text-[#00C4FF]', bgGradient: 'from-[#00C4FF]/10 to-[#00C4FF]/5' },
              { icon: Stethoscope, title: t('home.industries.medical'), iconColor: 'text-[#E3B552]', bgGradient: 'from-[#E3B552]/10 to-[#F4D03F]/5' },
              { icon: Building2, title: t('home.industries.corporate'), iconColor: 'text-[#151249]', bgGradient: 'from-[#151249]/10 to-[#2B3B90]/5' },
              { icon: GraduationCap, title: t('home.industries.education'), iconColor: 'text-[#00C4FF]', bgGradient: 'from-[#00C4FF]/10 to-[#00C4FF]/5' },
              { icon: TrendingUp, title: t('home.industries.marketing'), iconColor: 'text-[#E3B552]', bgGradient: 'from-[#E3B552]/10 to-[#F4D03F]/5' }
            ].map((industry, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-2xl text-center card-shadow-premium hover-glow cursor-pointer animate-fadeInScale animate-delay-${(index % 5) * 100 + 100}`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.bgGradient} flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className={`w-8 h-8 ${industry.iconColor}`} />
                </div>
                <h3 className="font-semibold text-[#151249]">{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US - LIGHT TINT (Visual Rhythm) */}
      <section className="py-24 bg-light-tint px-6 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#E3B552]/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-20 pattern-dots"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4">
              <h2 className="text-5xl text-[#151249] font-bold">{t('home.whyUs.title')}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E3B552] to-[#F4D03F] rounded-full mx-auto mt-4"></div>
            </div>
            <p className="text-xl text-gray-600">{t('home.whyUs.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: t('home.whyUs.feature1Title'),
                description: t('home.whyUs.feature1Desc'),
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Clock,
                title: t('home.whyUs.feature2Title'),
                description: t('home.whyUs.feature2Desc'),
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Lock,
                title: t('home.whyUs.feature3Title'),
                description: t('home.whyUs.feature3Desc'),
                gradient: 'from-green-400 to-green-500'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`relative bg-white p-10 rounded-3xl card-shadow-premium card-accent-top hover-glow group overflow-hidden animate-fadeInScale animate-delay-${index * 100 + 100}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(250,204,21,0.05) 0%, rgba(59,130,246,0.05) 100%)',
                  }}
                ></div>
                <div className="relative z-10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#151249] mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: ABOUT COMPANY - SOFT BLUE (Breathing Space) */}
      <section className="py-24 bg-soft-blue px-6 gradient-edge-top">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Orbital Animation System - Features */}
            <div className="flex justify-center animate-slideInLeft relative h-[300px] sm:h-[350px] md:h-[420px] lg:h-[500px]">
              <FeatureOrbitAnimation items={[
                { angle: 0, icon: FileText, label: 'Documents', color: 'blue-500', borderColor: '#00C4FF', id: 0 },
                { angle: 60, icon: Award, label: 'Certified', color: 'green-500', borderColor: '#10B981', id: 1 },
                { angle: 120, icon: GlobeIcon, label: '120+ Languages', color: 'purple-500', borderColor: '#A855F7', id: 2 },
                { angle: 180, icon: Clock, label: '24-48 Hours', color: '[#00C4FF]', borderColor: '#00C4FF', id: 3 },
                { angle: 240, icon: Shield, label: 'Secure', color: '[#E3B552]', borderColor: '#E3B552', id: 4 },
                { angle: 300, icon: Users, label: '10K+ Clients', color: 'pink-500', borderColor: '#EC4899', id: 5 }
              ]} />
            </div>

            {/* Mission & Stats */}
            <div className="animate-slideInRight">
              <div className="mb-6">
                <h2 className="text-4xl text-[#151249] font-bold">{t('home.aboutCompany.title')}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#E3B552] to-[#F4D03F] rounded-full mt-4"></div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-10">
                {t('home.aboutCompany.description')}
              </p>

              <div className="grid grid-cols-3 gap-6" ref={statsRef}>
                {[
                  { value: counters.clients, label: t('home.aboutCompany.clients') },
                  { value: counters.languages, label: t('home.aboutCompany.languages') },
                  { value: counters.years, label: t('home.aboutCompany.experience') }
                ].map((stat, index) => (
                  <div key={index} className={`text-center bg-white p-6 rounded-2xl card-shadow-premium hover-glow animate-fadeInScale animate-delay-${index * 100 + 200}`}>
                    <div className="text-4xl font-bold text-accent-blue mb-2">{stat.value}+</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS - DARK GRADIENT (Emotion & Impact) */}
      <section className="py-24 bg-gradient-dark-primary px-6 relative overflow-hidden radial-glow-overlay">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00C4FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/8 rounded-full blur-3xl"></div>
        
        {/* Section Divider */}
        <div className="section-divider-gold absolute top-0 left-0 right-0"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fadeInUp relative z-10">
            <h2 className="text-5xl text-white mb-4 font-bold">{t('home.testimonials.title')}</h2>
            <p className="text-xl text-on-dark-muted">{t('home.testimonials.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: t('home.testimonials.client1Name'),
                country: t('home.testimonials.client1Location'),
                rating: 5,
                text: t('home.testimonials.client1Text')
              },
              {
                name: t('home.testimonials.client2Name'),
                country: t('home.testimonials.client2Location'),
                rating: 5,
                text: t('home.testimonials.client2Text')
              },
              {
                name: t('home.testimonials.client3Name'),
                country: t('home.testimonials.client3Location'),
                rating: 5,
                text: t('home.testimonials.client3Text')
              }
            ].map((testimonial, index) => (
              <div key={index} className={`bg-white p-8 rounded-3xl card-shadow-premium card-accent-top hover-glow animate-fadeInUp animate-delay-${index * 100 + 100} relative z-10`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#151249] to-[#2A257A] flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#151249]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: PREMIUM CONTACT FORM - LIGHT (Clarity & Trust) */}
      <section className="py-24 bg-soft-blue px-6 relative overflow-hidden reveal-on-scroll gradient-edge-top">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - Content */}
            <div className="space-y-8 reveal-on-scroll" style={{ animationDelay: '100ms' }}>
              {/* Title */}
              <div>
                <div className="mb-4">
                  <h2 className="text-5xl md:text-6xl text-[#151249] font-black leading-tight">
                    {t('home.contactForm.title').split(' ').slice(0, -1).join(' ')}{' '}
                    <span className="gradient-text-shine">{t('home.contactForm.title').split(' ').slice(-1)}</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#E3B552] to-[#F4D03F] rounded-full mt-4"></div>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {t('home.contactForm.subtitle')}
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: t('home.contactForm.feature1'),
                    description: t('home.contactForm.feature1Desc'),
                    color: 'from-[#E3B552] to-[#F4D03F]'
                  },
                  {
                    icon: Clock,
                    title: t('home.contactForm.feature2'),
                    description: t('home.contactForm.feature2Desc'),
                    color: 'from-[#00C4FF] to-[#0099CC]'
                  },
                  {
                    icon: Shield,
                    title: t('home.contactForm.feature3'),
                    description: t('home.contactForm.feature3Desc'),
                    color: 'from-[#E3B552] to-[#F4D03F]'
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 group"
                    style={{
                      animation: `fadeInLeft 0.6s ease-out forwards`,
                      animationDelay: `${200 + index * 100}ms`,
                      opacity: 0
                    }}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#151249] mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[t('home.contactForm.isoCertified'), t('home.contactForm.clients'), t('home.contactForm.support')].map((badge, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 rounded-full bg-white card-shadow-premium border border-gray-200"
                    style={{
                      animation: `fadeInScale 0.5s ease-out forwards`,
                      animationDelay: `${500 + index * 100}ms`,
                      opacity: 0
                    }}
                  >
                    <span className="text-sm font-semibold text-[#151249] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - Premium Form */}
            <div 
              className="reveal-on-scroll"
              style={{ animationDelay: '300ms' }}
            >
              <div className="relative bg-white rounded-3xl p-8 md:p-10 card-shadow-gold card-accent-top-gold border border-yellow-400/10">
                {/* Form Title */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-[#151249] mb-2">{t('home.contactForm.getQuote')}</h3>
                  <p className="text-gray-600">{t('popup.description')}</p>
                </div>

                {/* Form */}
                <form 
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you! We will contact you soon.');
                  }}
                >
                  {/* Full Name */}
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${
                        focusedField === 'name'
                          ? 'border-yellow-400 shadow-lg shadow-yellow-100'
                          : 'border-gray-200 hover:border-gray-300'
                      } bg-white/80 backdrop-blur-sm focus:outline-none pt-6`}
                      placeholder=" "
                    />
                    <label
                      className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                        focusedField === 'name' || formData.name
                          ? 'top-2 text-xs text-yellow-600 font-semibold'
                          : 'top-4 text-gray-500'
                      }`}
                    >
                      {t('home.contactForm.fullName')}
                    </label>
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${
                        focusedField === 'email'
                          ? 'border-yellow-400 shadow-lg shadow-yellow-100'
                          : 'border-gray-200 hover:border-gray-300'
                      } bg-white/80 backdrop-blur-sm focus:outline-none pt-6`}
                      placeholder=" "
                    />
                    <label
                      className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                        focusedField === 'email' || formData.email
                          ? 'top-2 text-xs text-yellow-600 font-semibold'
                          : 'top-4 text-gray-500'
                      }`}
                    >
                      {t('home.contactForm.email')}
                    </label>
                  </div>

                  {/* Phone Number */}
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${
                        focusedField === 'phone'
                          ? 'border-yellow-400 shadow-lg shadow-yellow-100'
                          : 'border-gray-200 hover:border-gray-300'
                      } bg-white/80 backdrop-blur-sm focus:outline-none pt-6`}
                      placeholder=" "
                    />
                    <label
                      className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                        focusedField === 'phone' || formData.phone
                          ? 'top-2 text-xs text-yellow-600 font-semibold'
                          : 'top-4 text-gray-500'
                      }`}
                    >
                      {t('home.contactForm.phone')}
                    </label>
                  </div>

                  {/* Select Language */}
                  <div className="relative">
                    <select
                      required
                      value={formData.language}
                      onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                      onFocus={() => setFocusedField('language')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${
                        focusedField === 'language'
                          ? 'border-yellow-400 shadow-lg shadow-yellow-100'
                          : 'border-gray-200 hover:border-gray-300'
                      } bg-white/80 backdrop-blur-sm focus:outline-none appearance-none cursor-pointer`}
                    >
                      <option value="">{t('home.contactForm.languagePair')}</option>
                      <option value="english-french">{t('home.contactForm.enToFr')}</option>
                      <option value="english-spanish">{t('home.contactForm.enToEs')}</option>
                      <option value="english-chinese">{t('home.contactForm.enToCn')}</option>
                      <option value="english-hindi">{t('home.contactForm.enToHi')}</option>
                      <option value="other">{t('home.contactForm.otherPair')}</option>
                    </select>
                    <Languages className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Upload Document */}
                  <div className="relative">
                    <label 
                      className={`w-full px-5 py-4 rounded-xl border-2 border-dashed transition-all duration-300 ${
                        focusedField === 'file'
                          ? 'border-yellow-400 bg-yellow-50/50'
                          : 'border-gray-300 hover:border-gray-400 bg-gray-50/50'
                      } flex flex-col items-center justify-center cursor-pointer group`}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setFocusedField('file');
                      }}
                      onDragLeave={() => setFocusedField(null)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setFocusedField(null);
                        const file = e.dataTransfer.files[0];
                        if (file) setFileName(file.name);
                      }}
                    >
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) setFileName(file.name);
                        }}
                        onFocus={() => setFocusedField('file')}
                        onBlur={() => setFocusedField(null)}
                      />
                      <Upload className={`w-8 h-8 mb-2 transition-colors ${
                        focusedField === 'file' ? 'text-yellow-500' : 'text-gray-400 group-hover:text-gray-600'
                      }`} />
                      <span className="text-sm font-semibold text-gray-700">
                        {fileName || t('home.contactForm.uploadText')}
                      </span>
                      <span className="text-xs text-gray-500 mt-1">{t('home.contactForm.uploadFormat')}</span>
                    </label>
                  </div>

                  {/* Message / Notes */}
                  <div className="relative">
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${
                        focusedField === 'message'
                          ? 'border-yellow-400 shadow-lg shadow-yellow-100'
                          : 'border-gray-200 hover:border-gray-300'
                      } bg-white/80 backdrop-blur-sm focus:outline-none pt-6 resize-none`}
                      placeholder=" "
                    />
                    <label
                      className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                        focusedField === 'message' || formData.message
                          ? 'top-2 text-xs text-yellow-600 font-semibold'
                          : 'top-4 text-gray-500'
                      }`}
                    >
                      {t('home.contactForm.additionalNotes')}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#00C4FF] text-white font-bold text-lg btn-glow-blue transition-all duration-300 hover:scale-[1.02] hover:bg-[#00B4EF] group relative overflow-hidden"
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                    </div>
                    
                    <span className="relative flex items-center justify-center gap-2">
                      {t('home.contactForm.getQuote')}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>

                  {/* Security Note */}
                  <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" />
                    {t('home.contactForm.securityNote')}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style>{`
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </section>

      {/* CTA Section - DARK GRADIENT (Final Call to Action) */}
      <section className="py-24 bg-gradient-dark-primary text-white px-6 relative overflow-hidden radial-glow-overlay">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 pattern-dots"></div>
        </div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#00C4FF]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fadeInScale">
          <h2 className="mb-6" style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            color: '#FFFFFF',
            textShadow: '0px 3px 12px rgba(0,0,0,0.4), 0 0 40px rgba(255,255,255,0.15)'
          }}>{t('home.cta.title')}</h2>
          <p className="mb-10" style={{
            fontSize: '1.375rem',
            color: '#FFFFFF',
            fontWeight: '600',
            textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
          }}>
            {t('home.cta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-[#00C4FF] text-white rounded-xl btn-glow-blue hover:bg-[#00B4EF] transition-all hover:scale-105"
            style={{
              fontWeight: '800',
              fontSize: '1.125rem'
            }}
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
