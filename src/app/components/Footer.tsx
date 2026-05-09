import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from 'figma:asset/182c9d47d28e3d07fa51b6c27cff0220d624e2f3.png';
import { useLanguage } from '../../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-[#0a0828] via-[#151249] to-[#0d0a3a] text-white relative overflow-hidden">
      {/* Decorative glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 pt-20 pb-8 relative z-10">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="Honey Translations" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
              {t('footer.tagline')}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="group w-11 h-11 rounded-xl border border-yellow-400/20 hover:border-yellow-400 flex items-center justify-center transition-all hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-white">{t('footer.quickLinks')}</h3>
            <div className="h-px bg-gradient-to-r from-yellow-400 via-yellow-400/50 to-transparent mb-6 w-12"></div>
            <ul className="space-y-3.5">
              {[
                { label: t('footer.home'), to: '/' },
                { label: t('footer.about'), to: '/about' },
                { label: t('footer.services'), to: '/services' },
                { label: t('footer.industries'), to: '/services' },
                { label: t('footer.contact'), to: '/contact' },
                { label: t('footer.faqs'), to: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-yellow-400 transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/0 group-hover:bg-yellow-400 transition-all"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-white">{t('footer.servicesTitle')}</h3>
            <div className="h-px bg-gradient-to-r from-yellow-400 via-yellow-400/50 to-transparent mb-6 w-12"></div>
            <ul className="space-y-3.5">
              {[
                { label: t('footer.docTranslation'), to: '/services' },
                { label: t('footer.legalTranslation'), to: '/services' },
                { label: t('footer.medicalTranslation'), to: '/services' },
                { label: t('footer.technicalTranslation'), to: '/services' },
                { label: t('footer.subtitles'), to: '/services' },
                { label: t('footer.websiteLocalization'), to: '/website-localization' }
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.to} 
                    className="text-gray-400 hover:text-yellow-400 transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/0 group-hover:bg-yellow-400 transition-all group-hover:shadow-[0_0_8px_rgba(250,204,21,0.6)]"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-bold mb-6 text-lg text-white">{t('footer.contactTitle')}</h3>
            <div className="h-px bg-gradient-to-r from-yellow-400 via-yellow-400/50 to-transparent mb-6 w-12"></div>

            {/* Premium Contact Box */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/10 hover:border-yellow-400/30 transition-all">
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-yellow-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">{t('footer.phone')}</div>
                    <a href="tel:+917299005577" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                      {t('footer.phoneNumber')}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-yellow-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">{t('footer.email')}</div>
                    <a href="mailto:sales@honeytranslations.com" className="text-sm text-gray-300 hover:text-yellow-400 transition-colors break-all">
                      {t('footer.emailAddress')}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-yellow-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">{t('footer.location')}</div>
                    <div className="text-sm text-gray-300">
                      {t('footer.officeLocation')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
