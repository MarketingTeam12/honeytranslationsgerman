import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'EN' | 'DE';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return saved === 'DE' ? 'DE' : 'EN';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'DE' ? 'de' : 'en';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string) => {
    const translations = language === 'DE' ? translationsDE : translationsEN;
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translationsEN = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    blog: 'Blog',
    getQuote: 'Get Quote'
  },
  about: {
    ceo: 'CEO',
    aboutUs: 'About Us',
    service: 'Service',
    joinUs: 'Join Us',
    missionVision: 'Mission and Vision',
    refundPolicy: 'Refund and Cancellation policy',
    ourTeam: 'Our Team',
    pricing: 'Pricing',
    testimonials: 'Testimonials',
    terms: 'Terms & Condition',
    privacy: 'Privacy & Policy'
  },
  services: {
    translation: 'Translation Service',
    interpretation: 'Interpretation Service',
    apostille: 'Apostille Service',
    proofReading: 'Proof Reading Service',
    dtpTyping: 'DTP & Typing Service',
    attestation: 'Attestation Service',
    overseasEducation: 'Overseas Educational Consultant Service',
    carrierCoaching: 'Carrier Coaching Service',
    visaAssistance: 'Visa Assistance',
    studyAbroad: 'Study Abroad Service',
    languageTraining: 'Language Training Service',
    contentWriting: 'Content Writing Service',
    localization: 'Localization Service',
    voiceOverDubbing: 'Voice Over & Dubbing',
    graphicDesign: 'Graphic Designing Service',
    transcription: 'Transcription Service',
    subtitling: 'Subtitling Service'
  },
  home: {
    hero: {
      title: 'Certified Translation Services for Germany',
      subtitle: 'Professional certified translation services for individuals, companies and institutions across Germany.',
      getStarted: 'Get Started',
      whatsapp: 'WhatsApp'
    },
    faq: {
      question1: 'What languages do you support in Germany?',
      answer1: 'We provide certified translation services in English, French, Dutch, German, Arabic, Spanish and 120+ languages for clients in Berlin, Munich, Hamburg, Frankfurt and across Germany.',
      question2: 'How long does certified translation take in Germany?',
      answer2: 'Most standard documents are delivered within 24-48 hours. Express certified translation is available for urgent German administrative, legal, academic and business deadlines.',
      question3: 'Are your translations accepted in Germany?',
      answer3: 'Yes, our certified translations are prepared for use with German authorities, courts, universities, employers and official institutions.',
      question4: 'How much does translation cost?',
      answer4: 'Pricing depends on language pair, document type, word count and urgency. Contact us for a Germany-focused translation quote tailored to your document.',
      question5: 'Is my information secure?',
      answer5: 'Absolutely. We maintain strict confidentiality and use secure systems to protect your documents and personal information.'
    },
    process: {
      title: 'Our Working Process',
      subtitle: 'A clear workflow for certified translation projects in Germany',
      step1Title: 'Submit Your Document',
      step1Desc: 'Send your document securely and tell us the required German authority, city, language pair and deadline.',
      step2Title: 'Expert Translation',
      step2Desc: 'Your document is translated by qualified linguists with subject expertise in German legal, business, academic and administrative terminology.',
      step3Title: 'Quality Assurance',
      step3Desc: 'Each translation is checked for terminology, formatting, accuracy and German language usage.',
      step4Title: 'Secure Delivery',
      step4Desc: 'Receive your completed translation on time, ready for professional, academic or official use in Germany.',
      ctaText: 'Ready to experience our seamless process?',
      ctaButton: 'Start Your Germany Translation'
    },
    industries: {
      title: 'Industries We Serve',
      subtitle: 'Specialized expertise across multiple sectors',
      legal: 'Legal',
      medical: 'Medical',
      corporate: 'Corporate',
      education: 'Education',
      marketing: 'Marketing'
    },
    whyUs: {
      title: 'Why Choose Us',
      subtitle: 'Germany-focused translation services you can trust',
      feature1Title: 'Accurate & Certified Translators',
      feature1Desc: 'Our translators combine professional credentials with experience in German administrative, legal, medical, corporate and academic content.',
      feature2Title: 'Fast and Reliable',
      feature2Desc: '24-48 hour delivery for many standard documents, with express options for urgent Berlin, Munich, Hamburg and Frankfurt requests.',
      feature3Title: 'Secure & Confidential',
      feature3Desc: 'Your documents are handled securely and confidentially, from German certificates to business records.'
    },
    aboutCompany: {
      title: 'Your Trusted Translation Partner in Germany',
      description: "We help people and organizations communicate clearly in Germany's multilingual market. Our mission is to provide accurate certified translations, localization and language support for Berlin, Bavaria, North Rhine-Westphalia and beyond.",
      clients: 'Clients',
      languages: 'Languages',
      experience: 'Years Experience'
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Trusted by clients across Germany',
      client1Name: 'Sophie Janssens',
      client1Location: 'ðŸ‡ºðŸ‡¸ United States',
      client1Text: 'Excellent certified translation service in Berlin. My legal documents were translated quickly, accurately and accepted without issues.',
      client2Name: 'Karim Benali',
      client2Location: 'Munich, Germany',
      client2Text: 'Fast and reliable translation support for our Munich business documents. The terminology and formatting were spot on.',
      client3Name: 'Marie Laurent',
      client3Location: '🇪🇸 Spain',
      client3Text: 'Outstanding quality for website localization in Germany. Our content now sounds natural to local customers.'
    },
    contactForm: {
      title: 'Get Your Translation Started Today',
      subtitle: 'Fast, accurate and certified translations for Germany in 120+ languages.',
      feature1: 'Certified Translators',
      feature1Desc: 'German-market linguists with professional credentials',
      feature2: 'Fast Turnaround',
      feature2Desc: '24-48 hour delivery with rush options',
      feature3: 'Secure & Confidential',
      feature3Desc: 'Secure handling for personal, legal and business documents',
      isoCertified: 'ISO Certified',
      clients: '10K+ Projects',
      support: '24/7 Support',
      getQuote: 'Get Quote',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      languagePair: 'Select Language Pair',
      enToAr: 'English → Arabic',
      arToEn: 'Arabic → English',
      enToDe: 'English → German',
      deToEn: 'German → English',
      enToFr: 'English → French',
      enToEs: 'English → Spanish',
      enToCn: 'English → Chinese',
      enToHi: 'English → Hindi',
      otherPair: 'Other Language Pair',
      uploadText: 'Drop your document here or click to browse',
      uploadFormat: 'PDF, DOC, DOCX, JPG (Max 10MB)',
      additionalNotes: 'Additional Notes (Optional)',
      securityNote: 'Your information is secure and confidential'
    },
    cta: {
      title: 'Ready to Get Started?',
      subtitle: 'Get your documents translated by certified professionals for Germany today',
      button: 'Request a Quote'
    }
  },
  contact: {
    hero: {
      badge: 'Available 24/7',
      title: 'Get in Touch With Us',
      subtitle: "We're here to help with certified translation, interpretation and localization needs across Germany."
    },
    form: {
      title: 'Send Us a Message',
      subtitle: "Fill out the form below and we'll get back to you promptly",
      fullName: 'Full Name *',
      email: 'Email Address *',
      phone: 'Phone Number',
      language: 'Select Language',
      languagePlaceholder: 'Choose language pair',
      uploadDoc: 'Upload Document (Optional)',
      uploadText: 'Drop your file here or click to browse',
      uploadFormat: 'PDF, DOC, DOCX, JPG, PNG (Max 10MB)',
      uploadSuccess: 'File uploaded successfully',
      message: 'Message / Description *',
      messagePlaceholder: 'Tell us which German authority, city, language pair or business goal your translation is for...',
      sendButton: 'Send Message',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'john@example.com',
      phonePlaceholder: '+49 30 XXX XXXX'
    },
    faq: {
      title: 'Quick Questions',
      subtitle: 'Common questions about our services',
      question1: 'How long does certified translation take in Germany?',
      answer1: 'Standard translations are delivered within 24-48 hours. Express services are available for urgent needs with delivery in 4-6 hours.',
      question2: 'Do you offer certified translations?',
      answer2: 'Yes, our certified translations are prepared for use with German authorities, courts, universities, employers and official institutions.',
      question3: 'How many languages do you support?',
      answer3: 'We provide professional translation services in 120+ languages with certified linguists for Berlin, Munich, Hamburg, Frankfurt and all of Germany.',
      question4: 'What are your rates?',
      answer4: 'Pricing varies based on language pair, document type, and urgency. Contact us for a free personalized quote.'
    },
    contactDetails: {
      title: 'Other Ways to Reach Us',
      subtitle: "We're available through multiple channels",
      emailTitle: 'Email Support',
      emailAddress: 'sales@honeytranslations.com',
      emailNote: 'We reply within one German business day',
      phoneTitle: 'Phone / WhatsApp',
      phoneNumber: '+32 2 XXX XXXX',
      phoneNote: 'Available 9AM-6PM CET',
      locationTitle: 'Office Location',
      locationAddress: 'Berlin, Germany',
      locationNote: 'Germany-wide support by appointment and online',
      hoursTitle: 'Business Hours',
      hoursWeekday: 'Mon-Fri: 9AM-6PM',
      hoursSunday: 'Weekend: By appointment'
    },
    map: {
      title: 'Visit Our Office',
      subtitle: 'Serving Berlin and all major German cities',
      location: 'Berlin, Germany',
      center: 'German Translation Services Center'
    },
    cta: {
      title: 'Need Help with a Translation?',
      subtitle: 'Our expert team is ready to assist you with professional translation services',
      button: 'Talk to Our Team'
    }
  },
  servicesPage: {
    hero: {
      badge: 'Professional Translation Solutions',
      title: 'Translation That Feels Natural',
      subtitle: "Professional translation services designed for Germany's multilingual business, legal, academic and public-sector environment.",
      tagline: 'Accurate. Certified. Germany-focused.'
    },
    overview: {
      paragraph1: 'Honey Translation offers professional language solutions for individuals, companies, institutions and organizations across Germany.',
      paragraph2: 'We preserve meaning, tone and local relevance for German- and English-speaking audiences.',
      paragraph3: 'Our services are flexible, scalable and tailored to official, commercial and digital communication needs in Germany.'
    },
    core: {
      title: 'Core Services',
      subtitle: 'What We Translate',
      service1Title: 'Business & Corporate Translation Germany',
      service1Desc: 'Reports, presentations, emails, proposals and internal documents translated for German companies, startups, NGOs and EU-facing teams.',
      service2Title: 'Website & Digital Content Localization Germany',
      service2Desc: 'Websites, landing pages, apps and online content localized for French-speaking, Dutch-speaking and English-speaking audiences in Germany.',
      service3Title: 'Marketing & Brand Translation',
      service3Desc: 'Brochures, ads, campaigns and brand messaging adapted for German customers in Berlin and across Germany.',
      service4Title: 'Legal & Official Translation Germany',
      service4Desc: 'Contracts, certificates, agreements and official documents translated with strict confidentiality for German administrative and legal use.',
      service5Title: 'Academic & Personal Translation',
      service5Desc: 'Diplomas, transcripts, research papers, CVs, residence documents and personal records for German universities, employers and authorities.',
      service6Title: 'Technical Documentation',
      service6Desc: 'Manuals, specifications and technical content translated with precise terminology for German engineering, medical, IT and industrial sectors.'
    },
    specialized: {
      title: 'Specialized Solutions',
      subtitle: 'Beyond Translation',
      intro: 'In addition to translation, we provide language support services to ensure clarity and consistency.',
      service1Title: 'Proofreading & Editing',
      service1Desc: 'Refine and perfect your translated content',
      service2Title: 'Localization Services',
      service2Desc: 'Adaptation for German French, Dutch and English audiences',
      service3Title: 'Content Adaptation',
      service3Desc: 'Rewrite content for Germany-specific search intent and local context',
      service4Title: 'Multilingual Content Review',
      service4Desc: 'Quality checks across languages',
      outro: 'These services ensure your message sounds natural and professional.'
    },
    workflow: {
      title: 'Our Workflow',
      subtitle: 'How We Work',
      step1Title: 'Content Review',
      step1Desc: 'We assess your content, purpose, and target audience.',
      step2Title: 'Expert Translation',
      step2Desc: 'Professional translators handle your project with precision.',
      step3Title: 'Quality Assurance',
      step3Desc: 'Multiple checks for accuracy, tone, and clarity.',
      step4Title: 'Final Delivery',
      step4Desc: 'On-time delivery with post-delivery support if needed.'
    },
    industries: {
      title: 'Industries We Serve',
      subtitle: "We work with clients across Germany's key industries",
      industry1: 'German Companies & Startups',
      industry2: 'E-commerce',
      industry3: 'Education & Research',
      industry4: 'Legal, Government & Communes',
      industry5: 'Marketing & Media',
      industry6: 'Residents, Expats & Freelancers',
      note: 'Every industry receives the same level of care and professionalism.'
    },
    quality: {
      title: 'Quality & Confidentiality',
      subtitle: 'Our Promise to You',
      feature1Title: 'Strict Confidentiality',
      feature1Desc: 'All documents are handled with complete privacy and security, from German identity documents and certificates to business contracts and medical files.',
      feature2Title: 'Human-Reviewed Translations',
      feature2Desc: 'Every translation is reviewed by native speakers to ensure authenticity and natural flow.',
      feature3Title: 'German Cultural & Linguistic Accuracy',
      feature3Desc: 'We preserve meaning, tone and local language usage for French, Dutch, German and English communication in Germany.',
      feature4Title: 'Commitment to Deadlines',
      feature4Desc: 'On-time delivery guaranteed. We respect your timeline and work accordingly.',
      note: 'Your content is handled with complete care and respect.'
    },
    whyUs: {
      title: 'Why Choose Honey Translation Germany',
      subtitle: 'Our Sweet Advantage',
      feature1Title: 'Human-Centered Approach',
      feature1Desc: 'We prioritize meaning and context over word-for-word translation.',
      feature2Title: 'Clear Communication',
      feature2Desc: 'Transparent process with updates throughout your project.',
      feature3Title: 'Consistent Quality',
      feature3Desc: 'Every project meets our rigorous standards for excellence.',
      feature4Title: 'Flexible Service Options',
      feature4Desc: 'Scalable solutions for individuals, SMEs, legal firms, healthcare providers, universities and German market expansion.',
      feature5Title: 'Client-Focused Support',
      feature5Desc: 'Dedicated support for Germany translation requests, deadlines, formats and delivery requirements.',
      feature6Title: 'Long-Term Partnerships',
      feature6Desc: 'We build long-term partnerships with clients who need reliable language support in Germany.',
      badge: 'Guaranteed',
      closing: 'We build long-term Germany language partnerships, not just translations.'
    },
    specialized: {
      title: 'Specialized Solutions',
      subtitle: 'Beyond Translation',
      intro: 'In addition to translation, we provide language support services to ensure clarity and consistency.',
      service1: 'Proofreading & Editing',
      service1Desc: 'Refine and perfect your translated content',
      service2: 'Localization Services',
      service2Desc: 'Adaptation for German French, Dutch and English audiences',
      service3: 'Content Adaptation',
      service3Desc: 'Rewrite content for Germany-specific search intent and local context',
      service4: 'Multilingual Content Review',
      service4Desc: 'Quality checks across languages',
      outro: 'These services ensure your message sounds natural and professional.'
    },
    workflow: {
      title: 'Our Workflow',
      subtitle: 'How We Work',
      step1: 'Content Review',
      step1Desc: 'We assess your content, purpose, and target audience.',
      step2: 'Expert Translation',
      step2Desc: 'Professional translators handle your project with precision.',
      step3: 'Quality Assurance',
      step3Desc: 'Multiple checks for accuracy, tone, and clarity.',
      step4: 'Final Delivery',
      step4Desc: 'On-time delivery with post-delivery support if needed.'
    },
    industries: {
      title: 'Industries We Serve',
      subtitle: "We work with clients across Germany's key industries",
      industry1: 'German Companies & Startups',
      industry2: 'E-commerce',
      industry3: 'Education & Research',
      industry4: 'Legal, Government & Communes',
      industry5: 'Marketing & Media',
      industry6: 'Residents, Expats & Freelancers',
      note: 'Every industry receives the same level of care and professionalism.'
    },
    quality: {
      title: 'Quality & Confidentiality',
      subtitle: 'Our Promise to You',
      feature1: 'Strict Confidentiality',
      feature1Desc: 'All documents are handled with complete privacy and security, from German identity documents and certificates to business contracts and medical files.',
      feature2: 'Human-Reviewed Translations',
      feature2Desc: 'Every translation is reviewed by native speakers to ensure authenticity and natural flow.',
      feature3: 'German Cultural & Linguistic Accuracy',
      feature3Desc: 'We preserve meaning, tone and local language usage for French, Dutch, German and English communication in Germany.',
      feature4: 'Commitment to Deadlines',
      feature4Desc: 'On-time delivery guaranteed. We respect your timeline and work accordingly.',
      note: 'Your content is handled with complete care and respect.'
    },
    whyUs: {
      title: 'Why Choose Honey Translation Germany',
      subtitle: 'Our Sweet Advantage',
      feature1: 'Human-Centered Approach',
      feature1Desc: 'We prioritize meaning and context over word-for-word translation.',
      feature2: 'Clear Communication',
      feature2Desc: 'Transparent process with updates throughout your project.',
      feature3: 'Consistent Quality',
      feature3Desc: 'Every project meets our rigorous standards for excellence.',
      feature4: 'Flexible Service Options',
      feature4Desc: 'Scalable solutions for individuals, SMEs, legal firms, healthcare providers, universities and German market expansion.',
      feature5: 'Client-Focused Support',
      feature5Desc: 'Dedicated support for Germany translation requests, deadlines, formats and delivery requirements.',
      feature6: 'Long-Term Partnerships',
      feature6Desc: 'We build long-term partnerships with clients who need reliable language support in Germany.',
      badge: 'Guaranteed',
      closing: 'We build long-term Germany language partnerships, not just translations.'
    },
    cta: {
      title: 'Ready to Make Your Message Global?',
      subtitle: 'Let Honey Translation handle your Germany translation, localization and multilingual content needs with clarity and confidence.',
      button1: 'Request a Quote',
      button2: 'Contact Us',
      badge1: 'Secure & Confidential',
      badge2: 'Fast Turnaround',
      badge3: 'Quality Guaranteed'
    }
  },
  footer: {
    tagline: 'Certified Translation Services for Germany',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About',
    services: 'Services',
    industries: 'Industries',
    contact: 'Contact',
    faqs: 'FAQs',
    servicesTitle: 'Services',
    docTranslation: 'Document Translation',
    legalTranslation: 'Legal Translation',
    medicalTranslation: 'Medical Translation',
    technicalTranslation: 'Technical Translation',
    subtitles: 'Subtitles & Transcription',
    websiteLocalization: 'Website Localization',
    contactTitle: 'Contact',
    phone: 'Phone',
    phoneNumber: '7299005577',
    email: 'Email',
    emailAddress: 'sales@honeytranslations.com',
    location: 'Location',
    officeLocation: 'Remote',
    copyright: 'Â© 2026 Honey Translations Germany. All Rights Reserved.'
  },
  popup: {
    title: 'Get Your Translation Done Today',
    fast: 'Fast',
    accurate: 'Accurate',
    certified: 'Certified',
    description: 'Fill in your details and our expert team will contact you within 24 hours with a personalized quote.',
    namePlaceholder: 'Your Full Name',
    emailPlaceholder: 'your@email.com',
    phonePlaceholder: '+32 4XX XX XX XX',
    submitButton: 'Get Translation',
    securityNote: 'Your information is secure and confidential'
  },
  common: {
    loading: 'Loading...',
    submit: 'Submit',
    cancel: 'Cancel',
    close: 'Close',
    readMore: 'Read More',
    learnMore: 'Learn More',
    viewAll: 'View All',
    backToHome: 'Back to Home',
    required: 'Required',
    optional: 'Optional'
  },
  aboutPage: {
    hero: {
      badge: 'About Honey Translation Germany',
      title: 'Clarity That Speaks Every Language',
      subtitle: 'We make communication simple, accurate, and human. Honey Translation helps individuals, companies and institutions in Germany communicate across French, Dutch, German, English and 120+ languages with precision, care and cultural understanding.',
      tagline: 'Sweet Clarity. Global Reach.'
    },
    whoWeAre: {
      badge: 'Who We Are',
      title: 'Human-Centered Translation',
      paragraph1: 'Honey Translation Germany is a professional language service provider focused on accurate certified translation, localization and multilingual content for the German market.',
      paragraph2: 'We believe translation is more than words â€” it\'s meaning, tone, and intent.',
      paragraph3: 'Our team works closely with clients to ensure every message feels natural, clear, and authentic in the target language.',
      stat1: '120+',
      stat1Label: 'Languages',
      stat2: '10K+',
      stat2Label: 'Projects',
      stat3: '15+',
      stat3Label: 'Years'
    },
    whatMakesUsDifferent: {
      badge: 'What Makes Us Different',
      title: 'Our Sweet Advantage',
      subtitle: 'We don\'t just translate â€” we adapt your message for real people.',
      feature1: 'Human-Reviewed Translations',
      feature1Desc: 'Every translation is reviewed by native speakers to ensure authenticity and accuracy.',
      feature2: 'Cultural Accuracy',
      feature2Desc: 'Not just literal meaning â€” we capture tone, context, and cultural nuances.',
      feature3: 'Fast Turnaround',
      feature3Desc: 'Quick delivery without compromising quality or attention to detail.',
      feature4: 'Clear Communication',
      feature4Desc: 'Transparent process with regular updates and open dialogue throughout.',
      feature5: 'Trusted by Professionals',
      feature5Desc: 'Used by growing brands, SMEs, professionals, students and residents across Germany.',
      feature6: 'Quality Guaranteed',
      feature6Desc: 'Every project meets our rigorous standards for excellence and precision.',
      verifiedAdvantage: 'Verified Advantage'
    },
    ourServices: {
      badge: 'Our Services',
      title: 'What We Translate',
      subtitle: 'Every project is handled with confidentiality and care.',
      service1: 'Business & Corporate Documents',
      service1Desc: 'Professional translation of contracts, reports, proposals, presentations and internal communications for German and EU-facing business operations.',
      service2: 'Websites & Digital Content',
      service2Desc: 'Localization of websites, apps, software interfaces, and digital platforms to engage audiences in their native language.',
      service3: 'Marketing & Brand Materials',
      service3Desc: 'Culturally adapted marketing content, social media content, ads, and brand messaging that resonates locally.',
      service4: 'Legal & Official Documents',
      service4Desc: 'Certified translation of legal contracts, certificates, immigration documents, and official records accepted by authorities.',
      service5: 'Personal & Academic Translations',
      service5Desc: 'Accurate translation of academic transcripts, research papers, personal documents, and educational materials.'
    },
    ourProcess: {
      title: 'Our Process',
      subtitle: 'Simple. Clear. Reliable.',
      step1: 'Understanding Your Needs',
      step1Desc: 'We analyze your content, audience, and goals.',
      step2: 'Professional Translation',
      step2Desc: 'Expert translators work on your project with precision.',
      step3: 'Review & Quality Check',
      step3Desc: 'Every translation is checked for accuracy and tone.',
      step4: 'Delivery & Support',
      step4Desc: 'On-time delivery with ongoing support if needed.'
    },
    ourMission: {
      badge: 'Our Mission',
      title: 'Why We Exist',
      paragraph1: 'Our mission is to eliminate language barriers and help people communicate freely across borders.',
      paragraph2: 'We aim to provide translations that feel natural, respectful, and meaningful â€” just like a conversation in your native language.'
    },
    ourVision: {
      badge: 'Our Vision',
      title: 'Where We\'re Going',
      paragraph1: 'We envision a world where language is never a limitation.',
      paragraph2: 'Honey Translation strives to be a trusted Germany translation partner for businesses and individuals seeking clear, honest and high-quality language services.'
    },
    whatWeStandFor: {
      title: 'What We Stand For',
      subtitle: 'Every translation reflects our values.',
      value1: 'Accuracy',
      value1Desc: 'Precision in every word and phrase',
      value2: 'Integrity',
      value2Desc: 'Honest and transparent service',
      value3: 'Confidentiality',
      value3Desc: 'Your data is always protected',
      value4: 'Cultural Respect',
      value4Desc: 'Honoring every language and culture',
      value5: 'Client Satisfaction',
      value5Desc: 'Your success is our priority'
    },
    cta: {
      title: 'Let\'s Translate Together',
      subtitle: 'You have content that needs to speak clearly across languages? We\'re here to help.',
      button1: 'Contact Us',
      button2: 'View Services',
      badge1: 'ISO Certified',
      badge2: 'Trusted by 10,000+ Clients',
      badge3: '24/7 Support'
    }
  },
  teamPage: {
    hero: {
      badge: 'Meet Our Team',
      title: 'The People Behind the Words',
      subtitle: 'Meet the professionals who bring clarity, precision, and cultural understanding to every translation.',
      tagline: 'Human Expertise. Global Perspective.'
    },
    whoWeAre: {
      badge: 'Who We Are',
      title: 'A Global Language Team',
      paragraph1: "Honey Translation is powered by a diverse team of language professionals serving Germany's multilingual regions and cross-border communication needs.",
      paragraph2: 'Our translators, editors, and reviewers collaborate to ensure every project meets high standards of accuracy, tone, and meaning.',
      stat1: '200+',
      stat1Label: 'Professionals',
      stat2: '80+',
      stat2Label: 'Languages',
      stat3: '40+',
      stat3Label: 'Countries'
    },
    teamStructure: {
      badge: 'Our Team Structure',
      title: 'How We Work Together',
      subtitle: 'Our team includes specialized roles that collaborate seamlessly',
      role1: 'Professional Translators',
      role1Desc: 'Native speakers with domain expertise translating with accuracy and cultural sensitivity.',
      role2: 'Proofreaders & Editors',
      role2Desc: 'Quality specialists ensuring precision, consistency, and grammatical excellence.',
      role3: 'Language Specialists',
      role3Desc: 'Experts in technical, legal, medical, and industry-specific specialized translations.',
      role4: 'Localization Experts',
      role4Desc: 'Cultural consultants adapting content for regional and cultural relevance.',
      role5: 'Project Coordinators',
      role5Desc: 'Dedicated managers ensuring smooth workflow and on-time delivery.',
      bottomText: 'Every role plays a key part in delivering reliable translations.'
    },
    ourExperts: {
      title: 'Our Experts',
      subtitle: 'Experience You Can Trust',
      block1Title: 'Rigorous Selection Process',
      block1Desc: 'Our team members are selected based on their expertise, language mastery, and attention to detail.',
      block2Title: 'Domain Expertise',
      block2Desc: 'Many of our professionals have experience in business, legal, academic, and marketing translations â€” ensuring domain-specific accuracy.',
      area1: 'Business',
      area2: 'Legal',
      area3: 'Academic',
      area4: 'Marketing'
    },
    ourValues: {
      title: 'Our Values as a Team',
      subtitle: 'What Guides Us',
      value1: 'Accuracy & Quality',
      value1Desc: 'Precision in every word',
      value2: 'Cultural Awareness',
      value2Desc: 'Context and nuance',
      value3: 'Respect & Collaboration',
      value3Desc: 'Working together',
      value4: 'Clear Communication',
      value4Desc: 'Open dialogue',
      value5: 'Commitment to Deadlines',
      value5Desc: 'On-time delivery',
      bottomText: 'These values shape how we work together and serve our clients.'
    },
    collaboration: {
      badge: 'Collaboration & Culture',
      title: 'How We Work',
      paragraph1: 'We believe that great translations come from collaboration.',
      paragraph2: 'Our team works closely across German language communities and client schedules, maintaining open communication and consistent quality throughout every project.',
      aspect1: 'Cross-Functional',
      aspect2: 'German Network',
      aspect3: 'Open Communication',
      aspect4: 'Shared Goals'
    },
    qualityAssurance: {
      badge: 'Quality Assurance',
      title: 'Our Final Check',
      paragraph1: 'Before delivery, every project goes through a dedicated review process.',
      paragraph2: 'Our quality assurance team ensures translations are accurate, culturally appropriate, and aligned with client expectations.',
      step1: 'Accuracy Check',
      step2: 'Cultural Review',
      step3: 'Client Alignment'
    },
    joinTeam: {
      title: 'Join Our Team',
      subtitle: 'We are always open to working with skilled language professionals who share our commitment to quality.',
      question: 'Interested in joining Honey Translation Germany?',
      button1: 'Join Us',
      button2: 'Contact Us',
      badge1: 'Global Team',
      badge2: 'Expert Professionals',
      badge3: 'Collaborative Culture'
    }
  }
};

const translationsDE = {
  nav: {
    home: 'Startseite',
    about: 'Über uns',
    services: 'Dienstleistungen',
    contact: 'Kontakt',
    blog: 'Blog',
    getQuote: 'Angebot anfordern'
  },
  about: {
    ceo: 'CEO',
    aboutUs: 'Über uns',
    service: 'Service',
    joinUs: 'Mitmachen',
    missionVision: 'Mission und Vision',
    refundPolicy: 'Rückerstattungs- und Stornierungsbedingungen',
    ourTeam: 'Unser Team',
    pricing: 'Preise',
    testimonials: 'Testimonials',
    terms: 'AGB',
    privacy: 'Datenschutz'
  },
  services: {
    translation: 'Übersetzungsdienst',
    interpretation: 'Dolmetschdienst',
    apostille: 'Apostille-Service',
    proofReading: 'Korrekturlesen',
    dtpTyping: 'DTP- & Tippservice',
    attestation: 'Beglaubigungsdienst',
    overseasEducation: 'Auslandsstudienberatung',
    carrierCoaching: 'Karrierecoaching',
    visaAssistance: 'Visaunterstützung',
    studyAbroad: 'Auslandsstudium-Service',
    languageTraining: 'Sprachtraining',
    contentWriting: 'Texterstellung',
    localization: 'Lokalisierungsdienst',
    voiceOverDubbing: 'Voice-Over & Synchronisation',
    graphicDesign: 'Grafikdesign',
    transcription: 'Transkriptionsdienst',
    subtitling: 'Untertitelung'
  },
  home: {
    hero: {
      title: 'Zertifizierte Übersetzungsdienste für Deutschland',
      subtitle: 'Professionelle zertifizierte Übersetzungsdienste für Privatpersonen, Unternehmen und Institutionen in ganz Deutschland.',
      getStarted: 'Jetzt starten',
      whatsapp: 'WhatsApp'
    },
    faq: {
      question1: 'Welche Sprachen unterstützen wir in Deutschland?',
      answer1: 'Wir bieten zertifizierte Übersetzungsdienste in Englisch, Deutsch, Spanisch, Arabisch und über 120 weiteren Sprachen für Kunden in Berlin, München, Hamburg, Frankfurt und ganz Deutschland.',
      question2: 'Wie lange dauert eine zertifizierte Übersetzung in Deutschland?',
      answer2: 'Die meisten Standarddokumente werden innerhalb von 24-48 Stunden geliefert. Expresszertifizierungen sind für dringende deutsche Behörden-, Rechts-, Studien- und Geschäftstermine möglich.',
      question3: 'Werden Ihre Übersetzungen in Deutschland akzeptiert?',
      answer3: 'Ja, unsere zertifizierten Übersetzungen sind für deutsche Behörden, Gerichte, Universitäten, Arbeitgeber und offizielle Institutionen vorbereitet.',
      question4: 'Was kostet eine Übersetzung?',
      answer4: 'Die Preise hängen von Sprachpaar, Dokumenttyp, Wortanzahl und Dringlichkeit ab. Fordern Sie ein auf Deutschland zugeschnittenes Angebot an.',
      question5: 'Sind meine Informationen sicher?',
      answer5: 'Absolut. Wir gewährleisten strenge Vertraulichkeit und verwenden sichere Systeme zum Schutz Ihrer Dokumente und persönlichen Daten.'
    },
    process: {
      title: 'Unser Arbeitsprozess',
      subtitle: 'Ein klarer Ablauf für zertifizierte Übersetzungsprojekte in Deutschland',
      step1Title: 'Dokument einreichen',
      step1Desc: 'Senden Sie Ihr Dokument sicher und teilen Sie uns die zuständige deutsche Behörde, Stadt, Sprachkombination und Frist mit.',
      step2Title: 'Fachkundige Übersetzung',
      step2Desc: 'Ihr Dokument wird von qualifizierten Linguisten mit Fachwissen in deutschen Rechts-, Wirtschafts-, akademischen und Verwaltungsinhalten übersetzt.',
      step3Title: 'Qualitätssicherung',
      step3Desc: 'Jede Übersetzung wird auf Terminologie, Formatierung, Genauigkeit und deutsche Sprache geprüft.',
      step4Title: 'Sichere Lieferung',
      step4Desc: 'Erhalten Sie Ihre fertige Übersetzung pünktlich, bereit für professionelle, akademische oder offizielle Verwendung in Deutschland.',
      ctaText: 'Bereit für unseren reibungslosen Ablauf?',
      ctaButton: 'Ihre deutsche Übersetzung starten'
    },
    industries: {
      title: 'Branchen, die wir bedienen',
      subtitle: 'Spezialisiertes Fachwissen in verschiedenen Sektoren',
      legal: 'Recht',
      medical: 'Medizin',
      corporate: 'Unternehmen',
      education: 'Bildung',
      marketing: 'Marketing'
    },
    whyUs: {
      title: 'Warum uns wählen',
      subtitle: 'Deutschlands vertrauenswürdiger Übersetzungsdienst',
      feature1Title: 'Genau & zertifiziert',
      feature1Desc: 'Unsere Übersetzer verbinden professionelle Qualifikationen mit Erfahrung in deutschen Rechts-, Unternehmens-, medizinischen und akademischen Inhalten.',
      feature2Title: 'Schnell und zuverlässig',
      feature2Desc: 'Lieferung in 24-48 Stunden für viele Standarddokumente, mit Expressoptionen für dringende Anfragen aus Berlin, München, Hamburg und Frankfurt.',
      feature3Title: 'Sicher & vertraulich',
      feature3Desc: 'Ihre Dokumente werden sicher und vertraulich behandelt, von deutschen Urkunden bis zu Geschäftsdokumenten.'
    },
    aboutCompany: {
      title: 'Ihr vertrauenswürdiger Übersetzungspartner in Deutschland',
      description: 'Wir unterstützen Menschen und Organisationen dabei, in Deutschlands mehrsprachigem Markt klar zu kommunizieren. Unsere Mission ist es, präzise zertifizierte Übersetzungen, Lokalisierung und Sprachunterstützung für Berlin, Bayern, Nordrhein-Westfalen und ganz Deutschland bereitzustellen.',
      clients: 'Kunden',
      languages: 'Sprachen',
      experience: 'Jahre Erfahrung'
    },
    testimonials: {
      title: 'Was unsere Kunden sagen',
      subtitle: 'Vertraut von Kunden in ganz Deutschland',
      client1Name: 'Sophie Janssens',
      client1Location: '🇺🇸 Vereinigte Staaten',
      client1Text: 'Ausgezeichneter zertifizierter Übersetzungsservice in Berlin. Meine Rechtsdokumente wurden schnell, genau und problemlos akzeptiert.',
      client2Name: 'Karim Benali',
      client2Location: 'München, Deutschland',
      client2Text: 'Schnelle und zuverlässige Übersetzungsunterstützung für unsere Münchner Geschäftsdokumente. Terminologie und Formatierung waren perfekt.',
      client3Name: 'Marie Laurent',
      client3Location: '🇪🇸 Spanien',
      client3Text: 'Hervorragende Qualität für Website-Lokalisierung in Deutschland. Unsere Inhalte wirken jetzt natürlich für deutsche Kunden.'
    },
    contactForm: {
      title: 'Starten Sie Ihre Übersetzung noch heute',
      subtitle: 'Schnelle, genaue und zertifizierte Übersetzungen für Deutschland in über 120 Sprachen.',
      feature1: 'Zertifizierte Übersetzer',
      feature1Desc: 'Deutschmarkt-Linguisten mit professionellen Qualifikationen',
      feature2: 'Schnelle Bearbeitung',
      feature2Desc: '24-48 Stunden Lieferung mit Eiloptionen',
      feature3: 'Sicher & vertraulich',
      feature3Desc: 'Sichere Bearbeitung für persönliche, rechtliche und Geschäftsdokumente',
      isoCertified: 'ISO-zertifiziert',
      clients: '10K+ Projekte',
      support: '24/7 Support',
      getQuote: 'Angebot anfragen',
      fullName: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      languagePair: 'Sprachpaar auswählen',
      enToAr: 'Englisch → Arabisch',
      arToEn: 'Arabisch → Englisch',
      enToDe: 'Englisch → Deutsch',
      deToEn: 'Deutsch → Englisch',
      enToFr: 'Englisch → Französisch',
      enToEs: 'Englisch → Spanisch',
      enToCn: 'Englisch → Chinesisch',
      enToHi: 'Englisch → Hindi',
      otherPair: 'Anderes Sprachpaar',
      uploadText: 'Ziehen Sie Ihr Dokument hierher oder klicken Sie, um zu durchsuchen',
      uploadFormat: 'PDF, DOC, DOCX, JPG (Max. 10 MB)',
      additionalNotes: 'Zusätzliche Hinweise (optional)',
      securityNote: 'Ihre Informationen sind sicher und vertraulich'
    },
    cta: {
      title: 'Bereit loszulegen?',
      subtitle: 'Lassen Sie Ihre Dokumente heute von zertifizierten Experten übersetzen',
      button: 'Angebot anfordern'
    }
  },
  contact: {
    hero: {
      badge: 'Rund um die Uhr verfügbar',
      title: 'Nehmen Sie Kontakt mit uns auf',
      subtitle: 'Wir helfen Ihnen bei zertifizierten Übersetzungen, Dolmetschen und Lokalisierung in ganz Deutschland.'
    },
    form: {
      title: 'Senden Sie uns eine Nachricht',
      subtitle: 'Füllen Sie das Formular aus und wir melden uns schnell zurück',
      fullName: 'Vollständiger Name *',
      email: 'E-Mail-Adresse *',
      phone: 'Telefonnummer',
      language: 'Sprache auswählen',
      languagePlaceholder: 'Wählen Sie das Sprachpaar',
      uploadDoc: 'Dokument hochladen (optional)',
      uploadText: 'Ziehen Sie Ihre Datei hierher oder klicken Sie, um zu durchsuchen',
      uploadFormat: 'PDF, DOC, DOCX, JPG, PNG (Max. 10 MB)',
      uploadSuccess: 'Datei erfolgreich hochgeladen',
      message: 'Nachricht / Beschreibung *',
      messagePlaceholder: 'Teilen Sie uns mit, für welche deutsche Behörde, Stadt, Sprachpaar oder welches Geschäftsziel Ihre Übersetzung bestimmt ist...',
      sendButton: 'Nachricht senden',
      namePlaceholder: 'Max Mustermann',
      emailPlaceholder: 'max@beispiel.de',
      phonePlaceholder: '+49 30 XXX XXXX'
    },
    faq: {
      title: 'Schnelle Fragen',
      subtitle: 'Häufige Fragen zu unseren Dienstleistungen',
      question1: 'Wie lange dauert eine zertifizierte Übersetzung in Deutschland?',
      answer1: 'Standardübersetzungen werden innerhalb von 24-48 Stunden geliefert. Expressdienste sind für dringende Anforderungen mit Lieferung in 4-6 Stunden verfügbar.',
      question2: 'Bieten Sie zertifizierte Übersetzungen an?',
      answer2: 'Ja, unsere zertifizierten Übersetzungen sind für deutsche Behörden, Gerichte, Universitäten, Arbeitgeber und offizielle Institutionen vorbereitet.',
      question3: 'Wie viele Sprachen unterstützen Sie?',
      answer3: 'Wir bieten professionelle Übersetzungsdienste in über 120 Sprachen mit zertifizierten Linguisten für Berlin, München, Hamburg, Frankfurt und ganz Deutschland.',
      question4: 'Wie sind Ihre Preise?',
      answer4: 'Die Preise variieren je nach Sprachpaar, Dokumenttyp und Dringlichkeit. Kontaktieren Sie uns für ein kostenloses individuelles Angebot.'
    },
    contactDetails: {
      title: 'Weitere Kontaktmöglichkeiten',
      subtitle: 'Wir sind über mehrere Kanäle erreichbar',
      emailTitle: 'E-Mail-Support',
      emailAddress: 'sales@honeytranslations.com',
      emailNote: 'Wir antworten innerhalb eines Werktages',
      phoneTitle: 'Telefon / WhatsApp',
      phoneNumber: '+49 30 XXX XXXX',
      phoneNote: 'Verfügbar 9–18 Uhr MEZ',
      locationTitle: 'Standort',
      locationAddress: 'Berlin, Deutschland',
      locationNote: 'Deutschlandweit verfügbar per Termin und online',
      hoursTitle: 'Öffnungszeiten',
      hoursWeekday: 'Mo-Fr: 9–18 Uhr',
      hoursSunday: 'Wochenende: Nach Vereinbarung'
    },
    map: {
      title: 'Besuchen Sie unser Büro',
      subtitle: 'Wir betreuen Berlin und alle wichtigen deutschen Städte',
      location: 'Berlin, Deutschland',
      center: 'Deutsches Übersetzungszentrum'
    },
    cta: {
      title: 'Benötigen Sie Hilfe bei einer Übersetzung?',
      subtitle: 'Unser Expertenteam steht bereit, um Ihnen professionelle Übersetzungen zu liefern',
      button: 'Sprechen Sie mit unserem Team'
    }
  },
  servicesPage: {
    hero: {
      badge: 'Professionelle Übersetzungslösungen',
      title: 'Übersetzung, die sich natürlich anfühlt',
      subtitle: 'Professionelle Übersetzungsdienste für Deutschlands mehrsprachiges Wirtschafts-, Rechts-, Bildungs- und Behördenumfeld.',
      tagline: 'Genau. Zertifiziert. Deutschland-orientiert.'
    },
    overview: {
      paragraph1: 'Honey Translation bietet professionelle Sprachlösungen für Privatpersonen, Unternehmen, Institutionen und Organisationen in ganz Deutschland.',
      paragraph2: 'Wir erhalten Bedeutung, Ton und lokale Relevanz für deutsch- und englischsprachige Zielgruppen.',
      paragraph3: 'Unsere Dienstleistungen sind flexibel, skalierbar und auf offizielle, kommerzielle und digitale Kommunikationsbedürfnisse in Deutschland zugeschnitten.'
    },
    core: {
      title: 'Kernservices',
      subtitle: 'Was wir übersetzen',
      service1Title: 'Business- & Unternehmensübersetzungen Deutschland',
      service1Desc: 'Berichte, Präsentationen, E-Mails, Angebote und interne Dokumente für deutsche Unternehmen, Startups, NGOs und EU-Teams.',
      service2Title: 'Website- & digitale Lokalisierung Deutschland',
      service2Desc: 'Websites, Landingpages, Apps und Online-Inhalte für Zielgruppen in Deutschland lokalisiert.',
      service3Title: 'Marketing- & Markenübersetzung',
      service3Desc: 'Broschüren, Anzeigen, Kampagnen und Markenbotschaften für deutsche Kunden angepasst.',
      service4Title: 'Rechts- & offizielle Übersetzung Deutschland',
      service4Desc: 'Verträge, Zertifikate, Vereinbarungen und offizielle Dokumente vertraulich für deutsche Behörden und Gerichte übersetzt.',
      service5Title: 'Akademische & persönliche Übersetzung',
      service5Desc: 'Diplome, Zeugnisse, wissenschaftliche Arbeiten, Lebensläufe, Aufenthaltsdokumente und persönliche Unterlagen für deutsche Universitäten, Arbeitgeber und Behörden.',
      service6Title: 'Technische Dokumentation',
      service6Desc: 'Handbücher, Spezifikationen und technische Inhalte mit präziser Terminologie für deutsche Industrie- und IT-Sektoren.'
    },
    specialized: {
      title: 'Spezialisierte Lösungen',
      subtitle: 'Mehr als Übersetzung',
      intro: 'Neben Übersetzungen bieten wir Sprachdienstleistungen, die Klarheit und Konsistenz sicherstellen.',
      service1Title: 'Korrekturlesen & Redaktion',
      service1Desc: 'Verfeinern und perfektionieren Sie Ihre übersetzten Inhalte',
      service2Title: 'Lokalisierungsdienste',
      service2Desc: 'Anpassung für deutschsprachige Zielgruppen',
      service3Title: 'Content-Anpassung',
      service3Desc: 'Inhalte für deutsche Suchanfragen und lokalen Kontext umschreiben',
      service4Title: 'Mehrsprachige Inhaltsprüfung',
      service4Desc: 'Qualitätsprüfung über mehrere Sprachen',
      outro: 'Diese Leistungen sorgen dafür, dass Ihre Botschaft natürlich und professionell klingt.'
    },
    workflow: {
      title: 'Unser Workflow',
      subtitle: 'Wie wir arbeiten',
      step1Title: 'Inhaltsprüfung',
      step1Desc: 'Wir prüfen Ihren Inhalt, Zweck und Ihre Zielgruppe.',
      step2Title: 'Fachübersetzung',
      step2Desc: 'Professionelle Übersetzer bearbeiten Ihr Projekt präzise.',
      step3Title: 'Qualitätssicherung',
      step3Desc: 'Mehrere Kontrollen für Genauigkeit, Ton und Klarheit.',
      step4Title: 'Endlieferung',
      step4Desc: 'Pünktliche Lieferung mit Unterstützung nach der Übergabe.'
    },
    industries: {
      title: 'Branchen, die wir bedienen',
      subtitle: 'Wir arbeiten mit Kunden aus wichtigen deutschen Branchen',
      industry1: 'Deutsche Unternehmen & Startups',
      industry2: 'E-Commerce',
      industry3: 'Bildung & Forschung',
      industry4: 'Recht, Verwaltung & Behörden',
      industry5: 'Marketing & Medien',
      industry6: 'Privatpersonen, Expats & Freiberufler',
      note: 'Jede Branche erhält die gleiche Sorgfalt und Professionalität.'
    },
    quality: {
      title: 'Qualität & Vertraulichkeit',
      subtitle: 'Unser Versprechen',
      feature1Title: 'Strenge Vertraulichkeit',
      feature1Desc: 'Alle Dokumente werden privat und sicher behandelt, von deutschen Ausweisdokumenten bis zu Geschäftspapieren.',
      feature2Title: 'Menschlich überprüfte Übersetzungen',
      feature2Desc: 'Jede Übersetzung wird von Muttersprachlern geprüft, um Authentizität und natürlichen Fluss sicherzustellen.',
      feature3Title: 'Deutsche kulturelle & sprachliche Genauigkeit',
      feature3Desc: 'Wir bewahren Bedeutung, Ton und lokale Sprachgewohnheiten für deutsche Kommunikation.',
      feature4Title: 'Termintreue',
      feature4Desc: 'Pünktliche Lieferung garantiert. Wir respektieren Ihren Zeitplan.',
      note: 'Ihre Inhalte werden mit größter Sorgfalt behandelt.'
    },
    whyUs: {
      title: 'Warum Honey Translation Deutschland',
      subtitle: 'Unser süßer Vorteil',
      feature1Title: 'Menschenzentrierter Ansatz',
      feature1Desc: 'Wir setzen Bedeutung und Kontext über wortwörtliche Übersetzung.',
      feature2Title: 'Klare Kommunikation',
      feature2Desc: 'Transparenter Prozess mit Updates während Ihres Projekts.',
      feature3Title: 'Konstante Qualität',
      feature3Desc: 'Jedes Projekt erfüllt unsere hohen Qualitätsstandards.',
      feature4Title: 'Flexible Serviceoptionen',
      feature4Desc: 'Skalierbare Lösungen für Einzelpersonen, KMUs, Rechtskanzleien, Gesundheitsanbieter, Universitäten und deutsche Marktexpansion.',
      feature5Title: 'Kundenorientierter Support',
      feature5Desc: 'Dedizierte Unterstützung für deutsche Übersetzungsanforderungen, Fristen, Formate und Lieferungen.',
      feature6Title: 'Langfristige Partnerschaften',
      feature6Desc: 'Wir bauen langfristige Partnerschaften mit Kunden auf, die zuverlässige Sprachunterstützung in Deutschland benötigen.',
      badge: 'Garantiert',
      closing: 'Wir bauen langfristige Sprachpartnerschaften in Deutschland, nicht nur Übersetzungen.'
    },
    cta: {
      title: 'Bereit, Ihre Botschaft global zu machen?',
      subtitle: 'Lassen Sie Honey Translation Ihre deutschen Übersetzungs-, Lokalisierungs- und mehrsprachigen Inhaltsbedürfnisse mit Klarheit und Vertrauen bearbeiten.',
      button1: 'Angebot anfordern',
      button2: 'Kontakt aufnehmen',
      badge1: 'Sicher & vertraulich',
      badge2: 'Schnelle Bearbeitung',
      badge3: 'Qualität garantiert'
    }
  },
  footer: {
    tagline: 'Zertifizierte Übersetzungsdienste für Deutschland',
    quickLinks: 'Schnellzugriff',
    home: 'Startseite',
    about: 'Über uns',
    services: 'Dienstleistungen',
    industries: 'Branchen',
    contact: 'Kontakt',
    faqs: 'FAQs',
    servicesTitle: 'Dienstleistungen',
    docTranslation: 'Dokumentenübersetzung',
    legalTranslation: 'Rechtsübersetzung',
    medicalTranslation: 'Medizinübersetzung',
    technicalTranslation: 'Technische Übersetzung',
    subtitles: 'Untertitel & Transkription',
    websiteLocalization: 'Website-Lokalisierung',
    contactTitle: 'Kontakt',
    phone: 'Telefon',
    phoneNumber: '7299005577',
    email: 'E-Mail',
    emailAddress: 'sales@honeytranslations.com',
    location: 'Standort',
    officeLocation: 'Remote',
    copyright: '© 2026 Honey Translations Germany. Alle Rechte vorbehalten.'
  },
  popup: {
    title: 'Lassen Sie Ihre Übersetzung noch heute erledigen',
    fast: 'Schnell',
    accurate: 'Genau',
    certified: 'Zertifiziert',
    description: 'Geben Sie Ihre Daten ein und unser Expertenteam kontaktiert Sie innerhalb von 24 Stunden mit einem persönlichen Angebot.',
    namePlaceholder: 'Ihr vollständiger Name',
    emailPlaceholder: 'Ihre E-Mail-Adresse',
    phonePlaceholder: '+49 30 XXX XXXX',
    submitButton: 'Übersetzung anfordern',
    securityNote: 'Ihre Informationen sind sicher und vertraulich'
  },
  common: {
    loading: 'Lädt...',
    submit: 'Absenden',
    cancel: 'Abbrechen',
    close: 'Schließen',
    readMore: 'Mehr lesen',
    learnMore: 'Mehr erfahren',
    viewAll: 'Alle anzeigen',
    backToHome: 'Zurück zur Startseite',
    required: 'Erforderlich',
    optional: 'Optional'
  },
  aboutPage: {
    hero: {
      badge: 'Über Honey Translation Deutschland',
      title: 'Klarheit, die jede Sprache spricht',
      subtitle: 'Wir machen Kommunikation einfach, genau und menschlich. Honey Translation hilft Privatpersonen, Unternehmen und Institutionen in Deutschland, über 120 Sprachen präzise, aufmerksam und kulturell sensibel zu verstehen.',
      tagline: 'Süße Klarheit. Weltweite Reichweite.'
    },
    whoWeAre: {
      badge: 'Wer wir sind',
      title: 'Menschliche Übersetzung',
      paragraph1: 'Honey Translation Deutschland ist ein professioneller Sprachdienstleister, der sich auf genaue zertifizierte Übersetzungen, Lokalisierung und mehrsprachige Inhalte für den deutschen Markt konzentriert.',
      paragraph2: 'Wir glauben, dass Übersetzung mehr als Worte ist — es geht um Bedeutung, Ton und Absicht.',
      paragraph3: 'Unser Team arbeitet eng mit Kunden zusammen, damit jede Botschaft im Zieltext natürlich, klar und authentisch wirkt.',
      stat1: '120+',
      stat1Label: 'Sprachen',
      stat2: '10K+',
      stat2Label: 'Projekte',
      stat3: '15+',
      stat3Label: 'Jahre'
    },
    whatMakesUsDifferent: {
      badge: 'Was uns unterscheidet',
      title: 'Unser süßer Vorteil',
      subtitle: 'Wir übersetzen nicht nur — wir passen Ihre Botschaft für echte Menschen an.',
      feature1: 'Menschlich überprüfte Übersetzungen',
      feature1Desc: 'Jede Übersetzung wird von Muttersprachlern geprüft, um Authentizität und Genauigkeit zu gewährleisten.',
      feature2: 'Kulturelle Genauigkeit',
      feature2Desc: 'Nicht nur wörtliche Bedeutung — wir erfassen Ton, Kontext und kulturelle Nuancen.',
      feature3: 'Schnelle Lieferung',
      feature3Desc: 'Schnelle Lieferung ohne Abstriche bei Qualität oder Detailgenauigkeit.',
      feature4: 'Klare Kommunikation',
      feature4Desc: 'Transparenter Prozess mit regelmäßigen Updates und offenem Dialog.',
      feature5: 'Von Profis vertraut',
      feature5Desc: 'Verwendet von Marken, KMUs, Fachleuten, Studierenden und Einwohnern in Deutschland.',
      feature6: 'Qualität garantiert',
      feature6Desc: 'Jedes Projekt erfüllt unsere strengen Standards für Exzellenz und Präzision.',
      verifiedAdvantage: 'Verifizierter Vorteil'
    },
    ourServices: {
      badge: 'Unsere Dienstleistungen',
      title: 'Was wir übersetzen',
      subtitle: 'Jedes Projekt wird vertraulich und sorgfältig behandelt.',
      service1: 'Business- & Unternehmensdokumente',
      service1Desc: 'Professionelle Übersetzung von Verträgen, Berichten, Angeboten, Präsentationen und interner Kommunikation für deutsche und EU-orientierte Geschäftsprozesse.',
      service2: 'Websites & digitale Inhalte',
      service2Desc: 'Lokalisierung von Websites, Apps, Software-Oberflächen und digitalen Plattformen, um Zielgruppen in ihrer Muttersprache anzusprechen.',
      service3: 'Marketing- & Markenmaterial',
      service3Desc: 'Kulturell angepasste Marketinginhalte, Social-Media-Posts, Anzeigen und Markenbotschaften, die lokal wirken.',
      service4: 'Rechts- & Offizielle Dokumente',
      service4Desc: 'Zertifizierte Übersetzung von Rechtsdokumenten, Urkunden, Einwanderungsunterlagen und offiziellen Akten, die von Behörden akzeptiert werden.',
      service5: 'Persönliche & akademische Übersetzungen',
      service5Desc: 'Genaue Übersetzung von Zeugnissen, Forschungsarbeiten, persönlichen Dokumenten und Bildungsunterlagen.'
    },
    ourProcess: {
      title: 'Unser Prozess',
      subtitle: 'Einfach. Klar. Zuverlässig.',
      step1: 'Bedarf verstehen',
      step1Desc: 'Wir analysieren Ihren Inhalt, Ihre Zielgruppe und Ihre Ziele.',
      step2: 'Professionelle Übersetzung',
      step2Desc: 'Fachübersetzer arbeiten präzise an Ihrem Projekt.',
      step3: 'Prüfung & Qualitätssicherung',
      step3Desc: 'Jede Übersetzung wird auf Genauigkeit und Ton überprüft.',
      step4: 'Lieferung & Support',
      step4Desc: 'Pünktliche Lieferung mit fortlaufender Unterstützung, falls benötigt.'
    },
    ourMission: {
      badge: 'Unsere Mission',
      title: 'Warum wir existieren',
      paragraph1: 'Unsere Mission ist es, Sprachbarrieren zu beseitigen und Menschen die freie Kommunikation über Grenzen hinweg zu ermöglichen.',
      paragraph2: 'Wir möchten Übersetzungen liefern, die sich natürlich, respektvoll und bedeutungsvoll anfühlen — wie ein Gespräch in Ihrer Muttersprache.'
    },
    ourVision: {
      badge: 'Unsere Vision',
      title: 'Wohin wir wollen',
      paragraph1: 'Wir stellen uns eine Welt vor, in der Sprache nie eine Einschränkung ist.',
      paragraph2: 'Honey Translation strebt danach, ein vertrauenswürdiger deutscher Übersetzungspartner für Unternehmen und Privatpersonen zu sein, die klare, ehrliche und hochwertige Sprachdienstleistungen suchen.'
    },
    whatWeStandFor: {
      title: 'Wofür wir stehen',
      subtitle: 'Jede Übersetzung spiegelt unsere Werte wider.',
      value1: 'Genauigkeit',
      value1Desc: 'Präzision in jedem Wort und Satz',
      value2: 'Integrität',
      value2Desc: 'Ehrlicher und transparenter Service',
      value3: 'Vertraulichkeit',
      value3Desc: 'Ihre Daten sind immer geschützt',
      value4: 'Kultureller Respekt',
      value4Desc: 'Respekt gegenüber jeder Sprache und Kultur',
      value5: 'Kundenzufriedenheit',
      value5Desc: 'Ihr Erfolg ist unsere Priorität'
    },
    cta: {
      title: 'Lassen Sie uns zusammen übersetzen',
      subtitle: 'Sie haben Inhalte, die klar sprechen müssen? Wir helfen Ihnen.',
      button1: 'Kontakt aufnehmen',
      button2: 'Dienstleistungen ansehen',
      badge1: 'ISO-zertifiziert',
      badge2: 'Vertrauen von 10.000+ Kunden',
      badge3: '24/7 Support'
    }
  },
  teamPage: {
    hero: {
      badge: 'Treffen Sie unser Team',
      title: 'Die Menschen hinter den Worten',
      subtitle: 'Lernen Sie die Fachleute kennen, die Klarheit, Präzision und kulturelles Verständnis in jede Übersetzung bringen.',
      tagline: 'Menschliche Expertise. Globale Perspektive.'
    },
    whoWeAre: {
      badge: 'Wer wir sind',
      title: 'Ein globales Sprachteam',
      paragraph1: 'Honey Translation wird von einem vielfältigen Team sprachlicher Fachkräfte unterstützt, das die Bedürfnisse Deutschlands und grenzüberschreitende Kommunikation bedient.',
      paragraph2: 'Unsere Übersetzer, Redakteure und Prüfer arbeiten zusammen, um sicherzustellen, dass jedes Projekt hohe Standards an Genauigkeit, Ton und Bedeutung erfüllt.',
      stat1: '200+',
      stat1Label: 'Fachleute',
      stat2: '80+',
      stat2Label: 'Sprachen',
      stat3: '40+',
      stat3Label: 'Länder'
    },
    teamStructure: {
      badge: 'Unsere Teamstruktur',
      title: 'Wie wir zusammenarbeiten',
      subtitle: 'Unser Team umfasst spezialisierte Rollen, die nahtlos zusammenarbeiten',
      role1: 'Professionelle Übersetzer',
      role1Desc: 'Muttersprachler mit Fachwissen, die präzise und kultur­sensibel übersetzen.',
      role2: 'Korrektoren & Redakteure',
      role2Desc: 'Qualitätsspezialisten, die Präzision, Konsistenz und Grammatik perfektionieren.',
      role3: 'Sprachspezialisten',
      role3Desc: 'Experten für technische, rechtliche, medizinische und branchenspezifische Spezialübersetzungen.',
      role4: 'Lokalisierungsprofis',
      role4Desc: 'Kulturberater, die Inhalte regional und kulturell relevant anpassen.',
      role5: 'Projektkoordinatoren',
      role5Desc: 'Engagierte Manager sorgen für einen reibungslosen Ablauf und pünktliche Lieferung.',
      bottomText: 'Jede Rolle trägt entscheidend zur zuverlässigen Lieferung bei.'
    },
    ourExperts: {
      title: 'Unsere Experten',
      subtitle: 'Erfahrung, der Sie vertrauen können',
      block1Title: 'Strenger Auswahlprozess',
      block1Desc: 'Unsere Teammitglieder werden nach Expertise, Sprachkompetenz und Liebe zum Detail ausgewählt.',
      block2Title: 'Fachwissen',
      block2Desc: 'Viele unserer Fachkräfte haben Erfahrung in Business-, Rechts-, akademischen und Marketingübersetzungen — für branchenspezifische Genauigkeit.',
      area1: 'Business',
      area2: 'Recht',
      area3: 'Akademisch',
      area4: 'Marketing'
    },
    ourValues: {
      title: 'Unsere Werte als Team',
      subtitle: 'Was uns leitet',
      value1: 'Genauigkeit & Qualität',
      value1Desc: 'Präzision in jedem Wort',
      value2: 'Kulturelles Bewusstsein',
      value2Desc: 'Kontext und Nuance',
      value3: 'Respekt & Zusammenarbeit',
      value3Desc: 'Gemeinsam arbeiten',
      value4: 'Klare Kommunikation',
      value4Desc: 'Offener Dialog',
      value5: 'Termintreue',
      value5Desc: 'Pünktliche Lieferung',
      bottomText: 'Diese Werte prägen unsere Zusammenarbeit und Kundenbeziehung.'
    },
    collaboration: {
      badge: 'Zusammenarbeit & Kultur',
      title: 'Wie wir arbeiten',
      paragraph1: 'Wir glauben, dass gute Übersetzungen aus Zusammenarbeit entstehen.',
      paragraph2: 'Unser Team arbeitet eng über deutsche Sprachgemeinschaften und Kundenpläne hinweg, mit offener Kommunikation und konstanter Qualität in jedem Projekt.',
      aspect1: 'Abteilungsübergreifend',
      aspect2: 'Deutsches Netzwerk',
      aspect3: 'Offene Kommunikation',
      aspect4: 'Gemeinsame Ziele'
    },
    qualityAssurance: {
      badge: 'Qualitätssicherung',
      title: 'Unsere abschließende Prüfung',
      paragraph1: 'Vor der Lieferung durchläuft jedes Projekt einen dedizierten Prüfprozess.',
      paragraph2: 'Unser Qualitätsteam stellt sicher, dass Übersetzungen genau, kulturell passend und im Einklang mit Kundenerwartungen sind.',
      step1: 'Genauigkeitsprüfung',
      step2: 'Kulturelle Überprüfung',
      step3: 'Kundenabstimmung'
    },
    joinTeam: {
      title: 'Werden Sie Teil unseres Teams',
      subtitle: 'Wir freuen uns immer über erfahrene Sprachprofis, die unsere Qualitätsorientierung teilen.',
      question: 'Interessiert, bei Honey Translation Deutschland mitzuarbeiten?',
      button1: 'Jetzt beitreten',
      button2: 'Kontakt aufnehmen',
      badge1: 'Globales Team',
      badge2: 'Experten',
      badge3: 'Kollaborative Kultur'
    }
  }
};


