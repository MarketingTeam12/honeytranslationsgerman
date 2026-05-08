import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  FileText, Globe, Shield, Clock, CheckCircle, Star,
  Upload, Languages, MessageCircle, ArrowRight, ChevronDown,
  Award, Zap, Users, Mail, Phone, MapPin, Facebook,
  Twitter, Instagram, Linkedin, Briefcase
} from 'lucide-react';

export function FrenchHome() {
  const [selectedLanguage, setSelectedLanguage] = useState('FR');
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci ! Nous vous contactons bientôt.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0f2e] via-[#2d1b4e] to-[#1a0f2e]">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a0f2e]/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Honey Translations</span>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Accueil
            </a>
            <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#tarifs" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Tarifs
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Contact
            </a>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-white text-sm hover:bg-white/20 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>{selectedLanguage}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {languageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/20 overflow-hidden min-w-[80px]">
                  {['FR', 'EN'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setLanguageDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                        selectedLanguage === lang
                          ? 'bg-purple-100 text-purple-900 font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105">
              Commencer
            </button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="accueil" className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Services de traduction
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                en Belgique
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-200 font-medium">
              La langue qui ouvre le monde
            </p>

            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Traductions certifiées pour particuliers et entreprises dans plus de 120 langues
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2">
                Commencer
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-[#25D366] text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Traduction de documents',
                description: 'Tous types de documents traduits avec précision et confidentialité'
              },
              {
                icon: Award,
                title: 'Traduction certifiée',
                description: 'Traductions officielles acceptées par les autorités et institutions'
              },
              {
                icon: Briefcase,
                title: 'Traduction professionnelle',
                description: 'Services professionnels pour entreprises et particuliers'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pourquoi nous choisir
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, label: 'Rapide' },
              { icon: Award, label: '100% certifié' },
              { icon: Shield, label: 'Sécurisé' },
              { icon: Clock, label: 'Support 24/7' }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-semibold">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES SECTION */}
      <section className="py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Langues disponibles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Français', highlighted: true },
              { name: 'Anglais', highlighted: false },
              { name: 'Espagnol', highlighted: false },
              { name: 'Arabe', highlighted: false }
            ].map((lang, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 border text-center transition-all ${
                  lang.highlighted
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 border-purple-400 shadow-lg shadow-purple-500/50'
                    : 'bg-white/10 backdrop-blur-lg border-white/10 hover:border-purple-400/50'
                }`}
              >
                <Languages className={`w-8 h-8 mx-auto mb-3 ${lang.highlighted ? 'text-white' : 'text-purple-300'}`} />
                <p className={`font-semibold ${lang.highlighted ? 'text-white' : 'text-white/80'}`}>
                  {lang.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Notre processus
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Télécharger le document',
                description: 'Envoyez-nous votre document en toute sécurité'
              },
              {
                step: '2',
                title: 'Traduction',
                description: 'Nos experts traduisent avec précision'
              },
              {
                step: '3',
                title: 'Livraison',
                description: 'Recevez votre traduction certifiée'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg shadow-purple-500/50">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                <p className="text-white/70">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Avis clients
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sophie Martin',
                text: 'Service exceptionnel ! Traduction rapide et précise de mes documents officiels.',
                rating: 5
              },
              {
                name: 'Pierre Dubois',
                text: 'Très professionnel, équipe réactive et traductions de qualité. Je recommande vivement.',
                rating: 5
              },
              {
                name: 'Marie Laurent',
                text: 'Excellent service client et livraison dans les délais. Parfait pour mes besoins professionnels.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 italic">"{testimonial.text}"</p>
                <p className="text-white font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="tarifs" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tarifs
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Standard',
                price: '29€',
                features: ['Livraison 48h', 'Traduction certifiée', 'Support email']
              },
              {
                name: 'Premium',
                price: '49€',
                features: ['Livraison 24h', 'Traduction certifiée', 'Support prioritaire', 'Révision incluse'],
                highlighted: true
              },
              {
                name: 'Express',
                price: '79€',
                features: ['Livraison 6h', 'Traduction certifiée', 'Support 24/7', 'Révision premium']
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border transition-all hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 border-purple-400 shadow-2xl shadow-purple-500/50'
                    : 'bg-white/10 backdrop-blur-lg border-white/10 hover:border-purple-400/50'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/70">/document</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/80">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-purple-500 text-white hover:bg-purple-600'
                }`}>
                  Choisir
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contactez-nous
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-medium">Nom</label>
                <input
                  type="text"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Envoyer
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-white/70 mb-4">Ou contactez-nous via WhatsApp</p>
              <button className="px-8 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-green-500/50 transition-all inline-flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Honey Translations</span>
              </div>
              <p className="text-white/60 text-sm">
                Services de traduction professionnelle en Belgique
              </p>
            </div>

            {/* Liens utiles */}
            <div>
              <h3 className="text-white font-bold mb-4">Liens utiles</h3>
              <ul className="space-y-2">
                {['Accueil', 'Services', 'Tarifs', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/60 text-sm">
                  <Mail className="w-4 h-4" />
                  sales@honeytranslations.com
                </li>
                <li className="flex items-center gap-2 text-white/60 text-sm">
                  <Phone className="w-4 h-4" />
                  +91 7299005577
                </li>
                <li className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4" />
                  Remote
                </li>
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-white font-bold mb-4">Réseaux sociaux</h3>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Honey Translations. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm">Langue:</span>
              <div className="flex gap-2">
                {['FR', 'EN'].map((lang) => (
                  <button
                    key={lang}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      selectedLanguage === lang
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
