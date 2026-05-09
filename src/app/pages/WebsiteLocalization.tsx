import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe, Languages, Monitor, Search, Shield, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const content = {
  EN: {
    badge: 'Website Localization',
    title: 'Website Localization for German and Global Audiences',
    subtitle: 'Adapt your website, landing pages and digital content so every visitor feels like your brand was built for them.',
    primary: 'Request a Quote',
    secondary: 'View Services',
    sectionsTitle: 'What We Localize',
    sections: [
      'Website pages and landing pages',
      'Navigation, buttons and microcopy',
      'Product pages and checkout flows',
      'SEO titles, metadata and search intent',
      'Blog, help center and support content',
      'German, English, French, Dutch and multilingual content'
    ],
    processTitle: 'Built for Meaning, Search and Trust',
    cards: [
      {
        title: 'Cultural Adaptation',
        description: 'We adapt tone, examples and local references so your content sounds natural to the target audience.'
      },
      {
        title: 'SEO-Friendly Localization',
        description: 'Keywords, headings and metadata are shaped around local search behavior, not literal word swaps.'
      },
      {
        title: 'UX Content Review',
        description: 'Buttons, forms and interface text are checked for clarity, consistency and user confidence.'
      }
    ],
    qualityTitle: 'Why Honey Translation',
    quality: [
      'Human translators and reviewers',
      'Consistent brand voice across languages',
      'Confidential handling of all content',
      'Remote support for teams across Germany and worldwide'
    ],
    ctaTitle: 'Ready to make your website feel local?',
    ctaText: 'Send us your website or content files and we will prepare a clear localization plan.'
  },
  DE: {
    badge: 'Website-Lokalisierung',
    title: 'Website-Lokalisierung für deutsche und internationale Zielgruppen',
    subtitle: 'Wir passen Websites, Landingpages und digitale Inhalte so an, dass Ihre Marke lokal, klar und vertrauenswürdig wirkt.',
    primary: 'Angebot anfordern',
    secondary: 'Dienstleistungen ansehen',
    sectionsTitle: 'Was wir lokalisieren',
    sections: [
      'Webseiten und Landingpages',
      'Navigation, Buttons und kurze UI-Texte',
      'Produktseiten und Checkout-Prozesse',
      'SEO-Titel, Metadaten und Suchintention',
      'Blog-, Hilfe- und Support-Inhalte',
      'Deutsch, Englisch, Französisch, Niederländisch und mehrsprachige Inhalte'
    ],
    processTitle: 'Für Bedeutung, Suche und Vertrauen',
    cards: [
      {
        title: 'Kulturelle Anpassung',
        description: 'Wir passen Ton, Beispiele und lokale Bezüge an, damit Ihre Inhalte für die Zielgruppe natürlich klingen.'
      },
      {
        title: 'SEO-freundliche Lokalisierung',
        description: 'Keywords, Überschriften und Metadaten werden auf lokales Suchverhalten ausgerichtet.'
      },
      {
        title: 'UX-Content-Prüfung',
        description: 'Buttons, Formulare und Interface-Texte werden auf Klarheit, Konsistenz und Nutzervertrauen geprüft.'
      }
    ],
    qualityTitle: 'Warum Honey Translation',
    quality: [
      'Menschliche Übersetzer und Prüfer',
      'Konsistente Markenstimme in allen Sprachen',
      'Vertrauliche Behandlung aller Inhalte',
      'Remote-Support für Teams in Deutschland und weltweit'
    ],
    ctaTitle: 'Bereit für eine Website, die lokal wirkt?',
    ctaText: 'Senden Sie uns Ihre Website oder Content-Dateien und wir erstellen einen klaren Lokalisierungsplan.'
  }
};

export function WebsiteLocalization() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] px-6 py-28 text-white">
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-white/10 px-5 py-2 text-sm font-semibold text-yellow-400">
              <Globe className="h-4 w-4" />
              {copy.badge}
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">{copy.title}</h1>
            <p className="mb-10 text-xl leading-relaxed text-white/80">{copy.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-7 py-4 font-bold text-[#151249] transition-transform hover:scale-105">
                {copy.primary}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-4 font-bold text-white transition-colors hover:border-yellow-400 hover:text-yellow-400">
                {copy.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg">
              <Monitor className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-4 text-4xl font-bold text-[#151249]">{copy.sectionsTitle}</h2>
            <p className="text-lg leading-relaxed text-gray-600">{copy.subtitle}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {copy.sections.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-gray-50 p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-blue px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#151249]">{copy.processTitle}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[Languages, Search, Users].map((Icon, index) => (
              <div key={copy.cards[index].title} className="rounded-2xl bg-white p-8 shadow-lg">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500">
                  <Icon className="h-7 w-7 text-[#151249]" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#151249]">{copy.cards[index].title}</h3>
                <p className="leading-relaxed text-gray-600">{copy.cards[index].description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="container mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-[#151249] to-[#252070] p-10 text-white shadow-2xl md:p-14">
          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-green-500">
            <Shield className="h-7 w-7 text-white" />
          </div>
          <h2 className="mb-8 text-4xl font-bold">{copy.qualityTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {copy.quality.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-white/10 p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-white px-6 py-20 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-5 text-4xl font-bold text-[#151249]">{copy.ctaTitle}</h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">{copy.ctaText}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 font-bold text-[#151249] transition-transform hover:scale-105">
            {copy.primary}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
