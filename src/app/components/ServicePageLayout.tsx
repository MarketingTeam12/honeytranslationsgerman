import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Clock3,
  FileSearch,
  FileText,
  Globe,
  HeartPulse,
  Languages,
  Layers,
  LockKeyhole,
  Map,
  MonitorSmartphone,
  PenTool,
  PlaySquare,
  Scale,
  SearchCheck,
  Settings,
  Shield,
  Sparkles,
  Star,
  Target,
  Users,
  Zap
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ServicePageLayoutProps {
  serviceBase: string;
  icon: React.ElementType;
  iconGradient?: string;
}

type TopicTheme = {
  accent: string;
  glow: string;
  soft: string;
  line: string;
  iconBg: string;
  chips: string[];
  visualTitle: string;
  visualSubtitle: string;
  workflow: string[];
  stats: Array<{ value: string; label: string }>;
  badges: string[];
};

const topicThemes: Record<string, TopicTheme> = {
  'servicePages.documentTranslation': {
    accent: 'from-sky-500 to-blue-600',
    glow: 'bg-sky-400/20',
    soft: 'bg-sky-50 text-sky-700',
    line: 'from-sky-400 via-blue-500 to-cyan-400',
    iconBg: 'bg-sky-100 text-sky-700',
    chips: ['Certified files', 'Format matching', 'Authority ready'],
    visualTitle: 'Document clarity hub',
    visualSubtitle: 'Files move from review to polished delivery with every detail preserved.',
    workflow: ['Upload', 'Review', 'Translate', 'Check', 'Deliver'],
    stats: [
      { value: '99.8%', label: 'Accuracy' },
      { value: '24-48h', label: 'Delivery' },
      { value: '120+', label: 'Languages' }
    ],
    badges: ['Certificates', 'Reports', 'Academic records']
  },
  'servicePages.legalTranslation': {
    accent: 'from-emerald-500 to-teal-600',
    glow: 'bg-emerald-400/20',
    soft: 'bg-emerald-50 text-emerald-700',
    line: 'from-emerald-400 via-teal-500 to-green-400',
    iconBg: 'bg-emerald-100 text-emerald-700',
    chips: ['Legal terms', 'Secure review', 'Court-ready'],
    visualTitle: 'Confidential legal path',
    visualSubtitle: 'Terminology, structure and intent stay aligned from intake to delivery.',
    workflow: ['Assess', 'Assign', 'Translate', 'Review', 'Certify'],
    stats: [
      { value: 'NDA', label: 'Secure' },
      { value: '100%', label: 'Human' },
      { value: '5-step', label: 'Review' }
    ],
    badges: ['Contracts', 'Affidavits', 'Court files']
  },
  'servicePages.medicalTranslation': {
    accent: 'from-rose-500 to-pink-600',
    glow: 'bg-rose-400/20',
    soft: 'bg-rose-50 text-rose-700',
    line: 'from-rose-400 via-pink-500 to-red-400',
    iconBg: 'bg-rose-100 text-rose-700',
    chips: ['Clinical terms', 'Patient clarity', 'Private handling'],
    visualTitle: 'Care-focused review',
    visualSubtitle: 'Sensitive healthcare content is checked for meaning, readability and privacy.',
    workflow: ['Intake', 'Terminology', 'Translate', 'Clinical QA', 'Deliver'],
    stats: [
      { value: 'HIPAA', label: 'Aware' },
      { value: '100%', label: 'Private' },
      { value: '24/7', label: 'Support' }
    ],
    badges: ['Reports', 'Records', 'Insurance']
  },
  'servicePages.technicalTranslation': {
    accent: 'from-indigo-500 to-violet-600',
    glow: 'bg-indigo-400/20',
    soft: 'bg-indigo-50 text-indigo-700',
    line: 'from-indigo-400 via-violet-500 to-blue-400',
    iconBg: 'bg-indigo-100 text-indigo-700',
    chips: ['Terminology base', 'Manual-ready', 'System clarity'],
    visualTitle: 'Technical precision grid',
    visualSubtitle: 'Complex instructions become consistent, usable documentation.',
    workflow: ['Analyze', 'Glossary', 'Translate', 'Validate', 'Publish'],
    stats: [
      { value: '100%', label: 'Consistent' },
      { value: 'QA', label: 'Validated' },
      { value: 'Multi', label: 'Format' }
    ],
    badges: ['Manuals', 'Software', 'Engineering']
  },
  'servicePages.subtitlesTranscription': {
    accent: 'from-amber-400 to-orange-500',
    glow: 'bg-amber-300/25',
    soft: 'bg-amber-50 text-amber-700',
    line: 'from-amber-300 via-orange-500 to-yellow-400',
    iconBg: 'bg-amber-100 text-amber-700',
    chips: ['Time-coded', 'Readable captions', 'Platform-ready'],
    visualTitle: 'Media timing studio',
    visualSubtitle: 'Audio and video become clear subtitles, transcripts and multilingual assets.',
    workflow: ['Upload', 'Transcribe', 'Time-code', 'Review', 'Export'],
    stats: [
      { value: 'SRT', label: 'Ready' },
      { value: '100%', label: 'Readable' },
      { value: 'Multi', label: 'Channel' }
    ],
    badges: ['Subtitles', 'Transcripts', 'Training media']
  },
  'servicePages.websiteLocalization': {
    accent: 'from-fuchsia-500 to-purple-600',
    glow: 'bg-fuchsia-400/20',
    soft: 'bg-fuchsia-50 text-fuchsia-700',
    line: 'from-fuchsia-400 via-purple-500 to-sky-400',
    iconBg: 'bg-fuchsia-100 text-fuchsia-700',
    chips: ['UX copy', 'SEO intent', 'Local trust'],
    visualTitle: 'Localization launch map',
    visualSubtitle: 'Website copy, interface text and SEO signals are adapted for local users.',
    workflow: ['Audit', 'Map', 'Localize', 'Review', 'Launch'],
    stats: [
      { value: 'SEO', label: 'Adapted' },
      { value: 'UX', label: 'Natural' },
      { value: 'Global', label: 'Ready' }
    ],
    badges: ['Web pages', 'UI text', 'Product copy']
  }
};

const fallbackTheme = topicThemes['servicePages.documentTranslation'];
const cardAccents = [
  'from-sky-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-rose-500 to-pink-600',
  'from-amber-400 to-orange-500',
  'from-indigo-500 to-violet-600',
  'from-cyan-500 to-sky-600',
  'from-slate-700 to-slate-900',
  'from-fuchsia-500 to-purple-600'
];
const expertiseIcons = [Scale, HeartPulse, BadgeCheck, FileText, ClipboardCheck, Globe, Settings, PlaySquare];
const professionalIcons = [Target, Languages, Users, Clock3, LockKeyhole, SearchCheck, Award, Sparkles];
const whyIcons = [Users, Award, Shield, Zap, BadgeCheck, Globe];
const processIcons = [FileSearch, BookOpen, Languages, SearchCheck, CheckCircle2];
const languageMarks = ['EN', 'DE', 'FR', 'NL', 'ES', 'HI', '120+'];

export function ServicePageLayout({ serviceBase, icon: Icon, iconGradient = 'from-yellow-400 to-yellow-500' }: ServicePageLayoutProps) {
  const { t } = useLanguage();
  const list = (key: string) => t(key) as unknown as string[];
  const localized = <T,>(key: string, fallback: T) => {
    const value = t(key) as unknown;
    return value === key ? fallback : (value as T);
  };
  const theme = topicThemes[serviceBase] || fallbackTheme;

  const serviceTag = t(`${serviceBase}.badge`);
  const title = t(`${serviceBase}.title`);
  const subtitle = t(`${serviceBase}.subtitle`);
  const description = t(`${serviceBase}.description`);
  const heroFeatures = list(`${serviceBase}.heroFeatures`);
  const heroStats = list(`${serviceBase}.heroStats`);
  const details = list(`${serviceBase}.details`);
  const benefits = list(`${serviceBase}.benefits`);
  const process = list(`${serviceBase}.process`);
  const supportedLanguages = list('servicePages.common.supportedLanguages');
  const commonWhyChooseCards = t('servicePages.common.whyChooseCards') as unknown as Array<{ title: string; description: string }>;
  const commonExpertiseCards = t('servicePages.common.expertiseCards') as unknown as Array<{ title: string; description: string }>;
  const commonProfessionalCards = t('servicePages.common.professionalCards') as unknown as Array<{ title: string; description: string }>;
  const commonHumanBlocks = t('servicePages.common.humanTranslationBlocks') as unknown as Array<{ title: string; description: string }>;
  const commonTestimonial = t('servicePages.common.testimonial') as unknown as { quote: string; author: string; role?: string };
  const whyChooseCards = localized(`${serviceBase}.whyChooseCards`, commonWhyChooseCards);
  const expertiseCards = localized(`${serviceBase}.expertiseCards`, commonExpertiseCards);
  const professionalCards = localized(`${serviceBase}.professionalCards`, commonProfessionalCards);
  const humanBlocks = localized(`${serviceBase}.humanTranslationBlocks`, commonHumanBlocks);
  const testimonial = localized(`${serviceBase}.testimonial`, commonTestimonial);
  const visualTitle = localized(`${serviceBase}.visualTitle`, title);
  const visualSubtitle = localized(`${serviceBase}.visualSubtitle`, description);
  const statLabels = list('servicePages.common.statLabels');
  const trustBadges = [...details.slice(0, 3), t('servicePages.common.nativeTeams')].slice(0, 4);

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0b1026_0%,#172554_48%,#0f172a_100%)] px-6 pb-16 text-white md:px-8 lg:pb-20">
        <div className={`pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full ${theme.glow} blur-3xl`}></div>
        <div className="pointer-events-none absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl"></div>
        <div className="container mx-auto grid gap-10 pt-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              {serviceTag}
            </span>
            <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="max-w-2xl text-lg leading-8 text-white/82">{subtitle}</p>
            <p className="max-w-2xl text-base leading-7 text-slate-200/90">{description}</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {heroFeatures.map((feature, index) => (
                <div key={index} className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-sm font-medium text-slate-100 shadow-[0_18px_50px_-35px_rgba(0,0,0,0.7)] backdrop-blur">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className={`absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br ${theme.accent} opacity-20 blur-2xl`}></div>
            <div className="relative rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className={`inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br ${iconGradient} text-white shadow-2xl`}>
                  <Icon className="h-10 w-10" />
                </div>
                <div className="grid gap-2 text-right">
                  {heroFeatures.map((chip) => (
                    <span key={chip} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 grid gap-4">
                {heroStats.map((stat, index) => (
                  <div key={index} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-300">{statLabels[index] || t('servicePages.common.valueLabel')}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{stat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7faff] px-6 py-16 md:px-8 lg:py-20">
        <div className="container mx-auto">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-[#151249] sm:text-4xl">{t('servicePages.common.whyChooseTitle')}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-600">{t('servicePages.common.whyChooseSubtitle')}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {whyChooseCards.map((card, index) => {
              const CardIcon = whyIcons[index % whyIcons.length];
              return (
                <div key={index} className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_60px_-42px_rgba(15,23,42,0.32)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_28px_80px_-45px_rgba(15,23,42,0.38)]">
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${cardAccents[index % cardAccents.length]} text-white shadow-lg`}>
                    <CardIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#151249]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-8 lg:py-20">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{t('servicePages.common.expertiseTitle')}</span>
              <h2 className="mt-4 text-3xl font-bold text-[#151249] sm:text-4xl">{t('servicePages.common.expertiseSubtitle')}</h2>
            </div>
            <div className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${theme.soft}`}>
              <Globe className="h-4 w-4" />
              {serviceTag}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertiseCards.map((card, index) => {
              const ExpertiseIcon = expertiseIcons[index % expertiseIcons.length];
              return (
                <div key={index} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.28)] transition duration-300 hover:-translate-y-1 hover:border-slate-300">
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${cardAccents[index % cardAccents.length]} text-white shadow-lg`}>
                    <ExpertiseIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#151249]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8fbff] px-6 py-20 md:px-8">
        <div className={`pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full ${theme.glow} blur-3xl`}></div>
        <div className="container mx-auto">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_340px_minmax(0,1fr)] xl:items-center">
            <div className="space-y-7">
              <div className={`inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold ${theme.soft}`}>
                <Shield className="h-4 w-4" />
                {t('servicePages.common.details')}
              </div>
              <h2 className="text-3xl font-bold text-[#151249] sm:text-4xl">{t('servicePages.common.benefits')}</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-600">{t('servicePages.common.detailsDescription')}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {details.map((item, index) => (
                  <div key={index} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className={`absolute left-1/2 top-8 hidden h-[80%] w-1 -translate-x-1/2 rounded-full bg-gradient-to-b ${theme.line} opacity-40 xl:block`}></div>
              <div className="relative rounded-[2rem] border border-white bg-white p-5 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.35)]">
                <div className={`rounded-[1.5rem] bg-gradient-to-br ${theme.accent} p-5 text-white`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/75">{t('servicePages.common.workflowLabel')}</p>
                      <h3 className="mt-2 text-2xl font-bold">{visualTitle}</h3>
                    </div>
                    <Globe className="h-12 w-12 text-white/80" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/82">{visualSubtitle}</p>
                </div>
                <div className="mt-5 grid gap-3">
                  {process.map((step, index) => (
                    <div key={step} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#f8fbff] p-3">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${theme.accent} text-xs font-bold text-white`}>{index + 1}</span>
                      <span className="text-sm font-semibold text-slate-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {benefits.map((benefit, index) => (
                <div key={index} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_55px_-40px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-42px_rgba(15,23,42,0.3)]">
                  <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.accent} text-white`}>
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-base font-semibold leading-6 text-[#111827]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-8">
        <div className="container mx-auto">
          <div className="mb-12 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{t('servicePages.common.professionalTitle')}</span>
            <h2 className="mt-4 text-3xl font-bold text-[#151249] sm:text-4xl">{t('servicePages.common.professionalSubtitle')}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {professionalCards.map((card, index) => {
              const ProfessionalIcon = professionalIcons[index % professionalIcons.length];
              return (
                <div key={index} className="group rounded-2xl border border-slate-200 bg-[#fbfdff] p-6 shadow-[0_22px_70px_-48px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-white">
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${cardAccents[(index + 2) % cardAccents.length]} text-white shadow-lg`}>
                    <ProfessionalIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#151249]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0b1026_0%,#172554_48%,#111827_100%)] px-6 py-24 text-white md:px-8">
        <div className={`pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full ${theme.glow} blur-3xl`}></div>
        <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"></div>
        <div className="container mx-auto grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-white">
              <Users className="h-4 w-4 text-yellow-300" />
              {t('servicePages.common.humanTranslationTitle')}
            </span>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">{t('servicePages.common.humanTranslationSubtitle')}</h2>
            <p className="text-base leading-7 text-white/85">{t('servicePages.common.humanTranslationDescription')}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {humanBlocks.map((block, index) => {
                const BlockIcon = [Globe, HeartPulse, Sparkles][index % 3];
                return (
                  <div key={index} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                    <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${cardAccents[index]} text-white`}>
                      <BlockIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/82">{block.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/8 p-5 shadow-[0_40px_120px_-65px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-7 lg:grid-cols-[1fr_0.9fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-6">
                <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:38px_38px]"></div>
                <div className={`absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br ${theme.accent} opacity-30 blur-xl`}></div>
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <Map className="h-7 w-7 text-white" />
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                      {serviceTag}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {heroStats.map((stat, index) => (
                      <div key={stat} className="rounded-2xl border border-white/10 bg-white/12 p-4 text-center">
                        <p className="text-xl font-bold text-white">{stat}</p>
                        <p className="mt-1 text-xs text-slate-300">{statLabels[index] || t('servicePages.common.valueLabel')}</p>
                      </div>
                    ))}
                    <div className="rounded-2xl border border-white/10 bg-white/12 p-4 text-center">
                      <p className="text-2xl font-bold text-white">QA</p>
                      <p className="mt-1 text-xs text-slate-300">Review</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                {trustBadges.slice(0, 3).map((badge, index) => (
                  <div key={badge} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cardAccents[(index + 4) % cardAccents.length]} text-white`}>
                        <Star className="h-5 w-5" />
                      </span>
                      <p className="font-semibold text-white">{badge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#151249] sm:text-4xl">{t('servicePages.common.process')}</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{t('servicePages.common.processDescription')}</p>
            </div>
            <div className={`w-fit rounded-full px-4 py-2 text-sm font-semibold ${theme.soft}`}>{t('servicePages.common.processBadge')}</div>
          </div>
          <div className="relative">
            <div className={`absolute left-8 top-0 h-full w-px bg-gradient-to-b ${theme.line} opacity-35 lg:left-0 lg:top-16 lg:h-px lg:w-full`}></div>
            <div className="relative grid gap-5 lg:grid-cols-5">
              {process.map((step, index) => {
                const StepIcon = processIcons[index % processIcons.length];
                return (
                  <div key={index} className={`group relative rounded-2xl border border-slate-200 bg-[#fbfdff] p-6 shadow-[0_18px_55px_-40px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_75px_-45px_rgba(15,23,42,0.35)] ${index % 2 === 1 ? 'lg:mt-10' : ''}`}>
                    <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.accent} text-white shadow-lg`}>
                      <StepIcon className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">0{index + 1}</p>
                    <p className="mt-2 text-lg font-semibold leading-6 text-[#111827]">{step}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f5f9ff] px-6 py-20 md:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_32%)]"></div>
        <div className="container relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className={`mb-6 inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold ${theme.soft}`}>
                <Globe className="h-4 w-4" />
                {t('servicePages.common.languages')}
              </div>
              <h2 className="text-3xl font-bold text-[#151249] sm:text-4xl">{t('servicePages.common.languagesTitle')}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{t('servicePages.common.languagesSubtitle')}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {supportedLanguages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${theme.iconBg}`}>
                      <span className="text-xs font-bold">{languageMarks[index] || lang.slice(0, 2)}</span>
                    </div>
                    <p className="text-sm font-semibold text-[#111827]">{lang}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <div key={stat} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-xl font-bold text-[#111827]">{stat}</p>
                    <p className="text-sm text-slate-500">{statLabels[index] || t('servicePages.common.valueLabel')}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_-48px_rgba(15,23,42,0.28)]">
                <div className={`relative min-h-[340px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${theme.accent} p-6 text-white`}>
                  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_25%,white_0_2px,transparent_3px),radial-gradient(circle_at_75%_35%,white_0_2px,transparent_3px),radial-gradient(circle_at_45%_68%,white_0_2px,transparent_3px)]"></div>
                  <div className="absolute left-8 right-8 top-1/2 h-px bg-white/30"></div>
                  <div className="absolute left-1/2 top-8 bottom-8 w-px bg-white/25"></div>
                  <div className="relative flex h-full min-h-[292px] flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="rounded-2xl bg-white/15 p-3">
                        <Globe className="h-8 w-8" />
                      </div>
                      <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">{t('servicePages.common.coverageBadge')}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {trustBadges.slice(0, 3).map((badge) => (
                        <div key={badge} className="rounded-2xl border border-white/15 bg-white/15 p-4 backdrop-blur">
                          <CircleDot className="mb-3 h-5 w-5 text-white/85" />
                          <p className="text-sm font-semibold">{badge}</p>
                        </div>
                      ))}
                      <div className="rounded-2xl border border-white/15 bg-white/15 p-4 backdrop-blur">
                        <CircleDot className="mb-3 h-5 w-5 text-white/85" />
                        <p className="text-sm font-semibold">{t('servicePages.common.nativeTeams')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101735] px-6 py-20 text-white md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-white/12 bg-white/8 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.75)] backdrop-blur-xl sm:p-10">
            <div className="mb-8 flex items-start gap-5">
              <div className={`mt-1 rounded-2xl bg-gradient-to-br ${theme.accent} p-4 text-white`}>
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/70">{t('servicePages.common.testimonialEyebrow')}</p>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{t('servicePages.common.testimonialTitle')}</h2>
              </div>
            </div>
            <p className="text-xl leading-8 text-white">"{testimonial.quote}"</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-white/72">{testimonial.role || ''}</p>
              </div>
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/12 px-4 py-3 text-sm font-semibold text-white shadow-sm">
                <span className="text-yellow-300">★★★★★</span>
                <span>{t('servicePages.common.trustedQuality')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#111827_0%,#172554_48%,#0f172a_100%)] px-6 py-20 text-white md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{t('servicePages.common.ctaTitle')}</h2>
          <p className="mb-8 text-lg text-white/80">{t('servicePages.common.ctaText')}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/contact" className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r ${theme.accent} px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110`}>
              {t('servicePages.common.cta')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/10">
              {t('servicePages.common.back')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
