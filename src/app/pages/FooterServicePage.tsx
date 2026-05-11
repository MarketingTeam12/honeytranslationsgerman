import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Globe, HeartPulse, Languages, Scale, Settings, Subtitles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

type FooterServiceKey =
  | 'documentTranslation'
  | 'legalTranslation'
  | 'medicalTranslation'
  | 'technicalTranslation'
  | 'subtitlesTranscription'
  | 'websiteLocalization';

type FooterServicePageProps = {
  serviceKey: FooterServiceKey;
};

const icons = {
  documentTranslation: FileText,
  legalTranslation: Scale,
  medicalTranslation: HeartPulse,
  technicalTranslation: Settings,
  subtitlesTranscription: Subtitles,
  websiteLocalization: Globe
};

export function FooterServicePage({ serviceKey }: FooterServicePageProps) {
  const { t } = useLanguage();
  const Icon = icons[serviceKey];
  const list = (key: string) => t(key) as unknown as string[];
  const serviceBase = `servicePages.${serviceKey}`;

  const details = list(`${serviceBase}.details`);
  const benefits = list(`${serviceBase}.benefits`);
  const process = list(`${serviceBase}.process`);
  const supportedLanguages = list('servicePages.common.supportedLanguages');

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] px-6 py-24 text-white">
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="absolute right-10 top-10 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl"></div>
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 px-5 py-2 text-sm font-semibold text-yellow-400">
              <Icon className="h-4 w-4" />
              {t(`${serviceBase}.badge`)}
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">{t(`${serviceBase}.title`)}</h1>
            <p className="mb-8 text-xl leading-relaxed text-white/80">{t(`${serviceBase}.subtitle`)}</p>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/70">{t(`${serviceBase}.description`)}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-7 py-4 font-bold text-[#151249] transition-transform hover:scale-105">
                {t('servicePages.common.cta')}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-4 font-bold text-white transition-colors hover:border-yellow-400 hover:text-yellow-400">
                {t('servicePages.common.back')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="container mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg">
              <Languages className="h-7 w-7 text-white" />
            </div>
            <h2 className="mb-6 text-4xl font-bold text-[#151249]">{t('servicePages.common.details')}</h2>
            <div className="space-y-4">
              {details.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-gray-50 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg">
              <Globe className="h-7 w-7 text-[#151249]" />
            </div>
            <h2 className="mb-6 text-4xl font-bold text-[#151249]">{t('servicePages.common.benefits')}</h2>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-soft-blue p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-600" />
                  <span className="font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft-blue px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-4xl font-bold text-[#151249]">{t('servicePages.common.languages')}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {supportedLanguages.map((language) => (
              <span key={language} className="rounded-full border border-[#151249]/10 bg-white px-5 py-3 font-semibold text-[#151249] shadow-sm">
                {language}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#151249]">{t('servicePages.common.process')}</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="rounded-2xl bg-gradient-to-br from-soft-blue to-white p-6 text-center shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 font-black text-[#151249]">
                  {index + 1}
                </div>
                <p className="font-semibold leading-relaxed text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="container mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#151249] to-[#252070] p-10 text-center text-white shadow-2xl">
          <h2 className="mb-4 text-4xl font-bold">{t('servicePages.common.ctaTitle')}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80">{t('servicePages.common.ctaText')}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 font-bold text-[#151249] transition-transform hover:scale-105">
            {t('servicePages.common.cta')}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
