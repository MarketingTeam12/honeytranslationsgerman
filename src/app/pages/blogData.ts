export type BlogLanguage = 'EN' | 'DE';

export type BlogPost = {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

export const blogCopy = {
  EN: {
    latestUpdates: 'Latest Updates',
    title: 'Insights & Articles',
    subtitle: 'Explore expert articles on translation, languages, global communication, and industry updates.',
    featured: 'Featured',
    readMore: 'Read More',
    categories: ['All', 'Translation', 'Localization', 'Business', 'Languages', 'Culture'],
    emptyTitle: 'No Articles Found',
    emptyText: 'Try selecting a different category',
    newsletterTitle: 'Stay Updated With Language Insights',
    newsletterText: 'Get expert translation tips, industry news, and exclusive content delivered to your inbox.',
    emailPlaceholder: 'Enter your email address',
    subscribe: 'Subscribe Now',
    privacy: 'We respect your privacy. Unsubscribe at any time.',
    page: 'Page',
    of: 'of',
    backToBlog: 'Back to Blog'
  },
  DE: {
    latestUpdates: 'Neueste Updates',
    title: 'Einblicke & Artikel',
    subtitle: 'Lesen Sie Expertenartikel über Übersetzung, Sprachen, globale Kommunikation und Branchentrends.',
    featured: 'Empfohlen',
    readMore: 'Mehr lesen',
    categories: ['Alle', 'Übersetzung', 'Lokalisierung', 'Business', 'Sprachen', 'Kultur'],
    emptyTitle: 'Keine Artikel gefunden',
    emptyText: 'Wählen Sie eine andere Kategorie aus',
    newsletterTitle: 'Aktuelle Spracheinblicke erhalten',
    newsletterText: 'Erhalten Sie Übersetzungstipps, Branchennews und exklusive Inhalte direkt per E-Mail.',
    emailPlaceholder: 'E-Mail-Adresse eingeben',
    subscribe: 'Jetzt abonnieren',
    privacy: 'Wir respektieren Ihre Privatsphäre. Abmeldung jederzeit möglich.',
    page: 'Seite',
    of: 'von',
    backToBlog: 'Zurück zum Blog'
  }
};

export const featuredPosts: Record<BlogLanguage, BlogPost> = {
  EN: {
    slug: 'future-ai-professional-translation',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
    title: 'The Future of AI in Professional Translation Services',
    excerpt: 'Discover how artificial intelligence is transforming the translation industry while maintaining the human touch that ensures cultural accuracy and nuanced communication.',
    category: 'Translation',
    date: 'December 10, 2025',
    readTime: '8 min read',
    content: [
      'AI is changing how translation teams prepare, review and manage multilingual content, but professional translation still depends on human judgment.',
      'The strongest workflows use technology for speed and consistency while relying on linguists to protect meaning, culture, tone and audience expectations.',
      'For companies expanding into Germany or multilingual markets, the best result comes from combining smart tools with experienced reviewers.'
    ]
  },
  DE: {
    slug: 'zukunft-ki-professionelle-uebersetzung',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
    title: 'Die Zukunft von KI in professionellen Übersetzungsdiensten',
    excerpt: 'Erfahren Sie, wie künstliche Intelligenz die Übersetzungsbranche verändert und warum menschliche Prüfung weiterhin entscheidend bleibt.',
    category: 'Übersetzung',
    date: '10. Dezember 2025',
    readTime: '8 Min. Lesezeit',
    content: [
      'KI verändert, wie Übersetzungsteams mehrsprachige Inhalte vorbereiten, prüfen und verwalten. Professionelle Übersetzung braucht jedoch weiterhin menschliches Urteilsvermögen.',
      'Die besten Workflows nutzen Technologie für Geschwindigkeit und Konsistenz, während Linguisten Bedeutung, Kultur, Ton und Zielgruppe sichern.',
      'Für Unternehmen, die in Deutschland oder mehrsprachigen Märkten wachsen möchten, entsteht das beste Ergebnis durch die Verbindung von smarten Tools und erfahrenen Prüfern.'
    ]
  }
};

export const blogPosts: Record<BlogLanguage, BlogPost[]> = {
  EN: [
    {
      slug: 'translation-mistakes-cost-businesses',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop',
      title: 'Top 10 Translation Mistakes That Cost Businesses Millions',
      excerpt: 'Learn about the most common translation errors and how to avoid them in your international business communications.',
      category: 'Business',
      date: 'December 8, 2025',
      readTime: '6 min read',
      content: [
        'Translation mistakes can damage trust, delay launches and create legal or financial risk. The most common issues are literal translations, ignored context and inconsistent terminology.',
        'Businesses can reduce risk by preparing clear source files, sharing brand guidelines and using professional review before publication.',
        'A strong translation process protects both your message and your reputation in every market.'
      ]
    },
    {
      slug: 'legal-translation-guide',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop',
      title: 'Understanding Legal Translation: A Comprehensive Guide',
      excerpt: 'Everything you need to know about certified legal translations for international contracts, immigration, and court documents.',
      category: 'Translation',
      date: 'December 5, 2025',
      readTime: '10 min read',
      content: [
        'Legal translation requires precision, confidentiality and familiarity with legal terminology in both source and target languages.',
        'Contracts, certificates and immigration documents must preserve legal meaning, formatting and names exactly.',
        'Professional review helps ensure that translated documents are clear, reliable and suitable for official use.'
      ]
    },
    {
      slug: 'arabic-translation-cultural-nuances',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=500&fit=crop',
      title: 'Cultural Nuances in Arabic Translation',
      excerpt: 'Explore the importance of cultural sensitivity when translating content for Arabic-speaking markets.',
      category: 'Culture',
      date: 'December 3, 2025',
      readTime: '7 min read',
      content: [
        'Arabic translation involves more than replacing words. Tone, formality, region and cultural references all influence how a message is received.',
        'Content for Arabic-speaking audiences should be reviewed for clarity, respect and regional fit.',
        'Cultural sensitivity helps brands communicate with confidence and avoid misunderstandings.'
      ]
    },
    {
      slug: 'website-localization-best-practices-2025',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop',
      title: 'Website Localization Best Practices for 2025',
      excerpt: 'A complete guide to adapting your website for German audiences while maintaining brand consistency.',
      category: 'Localization',
      date: 'November 30, 2025',
      readTime: '9 min read',
      content: [
        'Website localization adapts language, user experience, SEO and cultural expectations for a local audience.',
        'Good localization reviews navigation, calls to action, forms, dates, currencies and search intent.',
        'For German audiences, clarity, trust signals and precise wording are especially important.'
      ]
    },
    {
      slug: 'choose-translation-service-provider',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=500&fit=crop',
      title: 'How to Choose the Right Translation Service Provider',
      excerpt: 'Key factors to consider when selecting a professional translation partner for your business needs.',
      category: 'Business',
      date: 'November 28, 2025',
      readTime: '5 min read',
      content: [
        'The right translation partner understands your industry, audience, deadlines and confidentiality needs.',
        'Look for clear communication, quality review, native-language expertise and scalable support.',
        'A good provider becomes a long-term language partner, not just a one-time vendor.'
      ]
    },
    {
      slug: 'remote-interpretation-services',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=500&fit=crop',
      title: 'The Rise of Remote Interpretation Services',
      excerpt: 'How video conferencing technology is revolutionizing interpretation services across Germany and internationally.',
      category: 'Translation',
      date: 'November 25, 2025',
      readTime: '6 min read',
      content: [
        'Remote interpretation gives organizations fast access to language support without requiring on-site scheduling.',
        'It is useful for meetings, consultations, customer support and cross-border collaboration.',
        'Successful remote interpretation depends on preparation, clear audio and experienced interpreters.'
      ]
    }
  ],
  DE: [
    {
      slug: 'uebersetzungsfehler-kosten-unternehmen',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop',
      title: 'Top 10 Übersetzungsfehler, die Unternehmen teuer zu stehen kommen',
      excerpt: 'Erfahren Sie, welche Übersetzungsfehler besonders häufig sind und wie Sie diese in der internationalen Kommunikation vermeiden.',
      category: 'Business',
      date: '8. Dezember 2025',
      readTime: '6 Min. Lesezeit',
      content: [
        'Übersetzungsfehler können Vertrauen beschädigen, Markteinführungen verzögern und rechtliche oder finanzielle Risiken verursachen.',
        'Häufige Ursachen sind wortwörtliche Übersetzungen, fehlender Kontext und uneinheitliche Terminologie.',
        'Ein klarer Übersetzungsprozess schützt Ihre Botschaft und Ihre Reputation in jedem Markt.'
      ]
    },
    {
      slug: 'leitfaden-rechtsuebersetzung',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop',
      title: 'Rechtsübersetzung verstehen: Ein umfassender Leitfaden',
      excerpt: 'Alles Wichtige über beglaubigte Rechtsübersetzungen für Verträge, Einwanderung und Gerichtsdokumente.',
      category: 'Übersetzung',
      date: '5. Dezember 2025',
      readTime: '10 Min. Lesezeit',
      content: [
        'Rechtsübersetzung erfordert Präzision, Vertraulichkeit und fundierte Terminologiekenntnisse in beiden Sprachen.',
        'Verträge, Urkunden und Einwanderungsdokumente müssen Bedeutung, Formatierung und Namen exakt erhalten.',
        'Professionelle Prüfung sorgt dafür, dass übersetzte Dokumente klar, zuverlässig und für offizielle Zwecke geeignet sind.'
      ]
    },
    {
      slug: 'arabische-uebersetzung-kulturelle-nuancen',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=500&fit=crop',
      title: 'Kulturelle Nuancen in der arabischen Übersetzung',
      excerpt: 'Warum kulturelle Sensibilität bei Inhalten für arabischsprachige Märkte entscheidend ist.',
      category: 'Kultur',
      date: '3. Dezember 2025',
      readTime: '7 Min. Lesezeit',
      content: [
        'Arabische Übersetzung bedeutet mehr als den Austausch einzelner Wörter. Ton, Formalität, Region und kulturelle Bezüge beeinflussen die Wirkung.',
        'Inhalte für arabischsprachige Zielgruppen sollten auf Klarheit, Respekt und regionale Passung geprüft werden.',
        'Kulturelle Sensibilität hilft Marken, sicher zu kommunizieren und Missverständnisse zu vermeiden.'
      ]
    },
    {
      slug: 'website-lokalisierung-best-practices-2025',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop',
      title: 'Website-Lokalisierung: Best Practices für 2025',
      excerpt: 'Ein Leitfaden zur Anpassung Ihrer Website für deutsche Zielgruppen bei konsistenter Markenwirkung.',
      category: 'Lokalisierung',
      date: '30. November 2025',
      readTime: '9 Min. Lesezeit',
      content: [
        'Website-Lokalisierung passt Sprache, Nutzererlebnis, SEO und kulturelle Erwartungen an eine lokale Zielgruppe an.',
        'Gute Lokalisierung prüft Navigation, Handlungsaufforderungen, Formulare, Datumsformate, Währungen und Suchintention.',
        'Für deutsche Zielgruppen sind Klarheit, Vertrauenssignale und präzise Formulierungen besonders wichtig.'
      ]
    },
    {
      slug: 'richtigen-uebersetzungsdienstleister-waehlen',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=500&fit=crop',
      title: 'So wählen Sie den richtigen Übersetzungsdienstleister',
      excerpt: 'Wichtige Kriterien bei der Auswahl eines professionellen Übersetzungspartners für Ihr Unternehmen.',
      category: 'Business',
      date: '28. November 2025',
      readTime: '5 Min. Lesezeit',
      content: [
        'Der richtige Übersetzungspartner versteht Ihre Branche, Zielgruppe, Fristen und Vertraulichkeitsanforderungen.',
        'Achten Sie auf klare Kommunikation, Qualitätsprüfung, muttersprachliche Expertise und skalierbare Unterstützung.',
        'Ein guter Anbieter wird zum langfristigen Sprachpartner und nicht nur zum einmaligen Dienstleister.'
      ]
    },
    {
      slug: 'remote-dolmetschdienste',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=500&fit=crop',
      title: 'Der Aufstieg von Remote-Dolmetschdiensten',
      excerpt: 'Wie Videokonferenztechnologie Dolmetschdienste in Deutschland und international verändert.',
      category: 'Übersetzung',
      date: '25. November 2025',
      readTime: '6 Min. Lesezeit',
      content: [
        'Remote-Dolmetschen bietet schnellen Zugang zu Sprachunterstützung ohne Vor-Ort-Terminplanung.',
        'Es eignet sich für Meetings, Beratungen, Kundensupport und internationale Zusammenarbeit.',
        'Erfolgreiches Remote-Dolmetschen braucht Vorbereitung, klare Audioqualität und erfahrene Dolmetscher.'
      ]
    }
  ]
};

export function getAllBlogPosts(language: BlogLanguage) {
  return [featuredPosts[language], ...blogPosts[language]];
}
