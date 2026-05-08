import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import logoImage from 'figma:asset/182c9d47d28e3d07fa51b6c27cff0220d624e2f3.png';
import {
  FileText, Globe, BookOpen, GraduationCap, Map, Type,
  Headphones, Subtitles, Users, DollarSign, MessagesSquare,
  FileCheck, Scale, ShieldCheck, User, Info, Handshake,
  Target, RefreshCw, File, Briefcase, Languages, Mic,
  PenTool, Image as ImageIcon, ScrollText, ClipboardList
} from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../../contexts/LanguageContext';

interface HeaderProps {
  onOpenPopup?: () => void;
}

export function Header({ onOpenPopup }: HeaderProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth scroll to top when location changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  // Helper function to handle navigation with smooth scroll
  const handleNavigation = (path: string) => {
    navigate(path);
    // Small delay to ensure navigation happens first
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);
  };

  // Helper function to check if a menu item is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Handle About dropdown with delay
  const handleAboutMouseEnter = () => {
    if (aboutTimeoutRef.current) {
      clearTimeout(aboutTimeoutRef.current);
    }
    setAboutDropdownOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

  // Handle Services dropdown with delay
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  // About menu with icons - 2 columns
  const aboutMenuItems = [
    // Column 1
    [
      { label: t('about.ceo'), path: '/ceo', icon: User },
      { label: t('about.aboutUs'), path: '/about', icon: Info },
      { label: t('about.service'), path: '/services', icon: Briefcase },
      { label: t('about.joinUs'), path: '/join-us', icon: Handshake },
      { label: t('about.missionVision'), path: '/mission-vision', icon: Target },
      { label: t('about.refundPolicy'), path: '/refund-policy', icon: RefreshCw }
    ],
    // Column 2
    [
      { label: t('about.ourTeam'), path: '/team', icon: Users },
      { label: t('about.pricing'), path: '/pricing', icon: DollarSign },
      { label: t('about.testimonials'), path: '/testimonials', icon: MessagesSquare },
      { label: t('about.terms'), path: '/terms', icon: FileCheck },
      { label: t('about.privacy'), path: '/privacy', icon: ShieldCheck }
    ]
  ];

  // Services menu with icons - 3 columns
  const servicesMenuItems = [
    // Column 1
    [
      { label: t('services.translation'), path: '/services/translation', icon: Languages },
      { label: t('services.proofReading'), path: '/services/proof-reading', icon: FileText },
      { label: t('services.overseasEducation'), path: '/services/overseas-education', icon: GraduationCap },
      { label: t('services.studyAbroad'), path: '/services/study-abroad', icon: Globe },
      { label: t('services.localization'), path: '/services/localization', icon: Map },
      { label: t('services.transcription'), path: '/services/transcription', icon: ScrollText }
    ],
    // Column 2
    [
      { label: t('services.interpretation'), path: '/services/interpretation', icon: Headphones },
      { label: t('services.dtpTyping'), path: '/services/dtp-typing', icon: Type },
      { label: t('services.carrierCoaching'), path: '/services/carrier-coaching', icon: BookOpen },
      { label: t('services.languageTraining'), path: '/services/language-training', icon: GraduationCap },
      { label: t('services.voiceOverDubbing'), path: '/services/voice-over-dubbing', icon: Mic },
      { label: t('services.subtitling'), path: '/services/subtitling', icon: Subtitles }
    ],
    // Column 3
    [
      { label: t('services.apostille'), path: '/services/apostille', icon: File },
      { label: t('services.attestation'), path: '/services/attestation', icon: ClipboardList },
      { label: t('services.visaAssistance'), path: '/services/visa-assistance', icon: FileCheck },
      { label: t('services.contentWriting'), path: '/services/content-writing', icon: PenTool },
      { label: t('services.graphicDesign'), path: '/services/graphic-design', icon: ImageIcon }
    ]
  ];

  // Flatten for mobile menu
  const aboutMenuFlat = aboutMenuItems.flat();
  const servicesMenuFlat = servicesMenuItems.flat();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200" style={{ boxShadow: '0 2px 12px rgba(21, 18, 73, 0.08)' }}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={logoImage} 
            alt="Honey Translations" 
            className="h-[50px] w-auto"
          />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          {/* Home Link */}
          <Link
            to="/"
            className={`relative pb-1 transition-all font-semibold ${
              isActive('/') && location.pathname === '/'
                ? 'text-yellow-600 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                : 'text-gray-700 hover:text-yellow-600'
            }`}
          >
            {t('nav.home')}
            {isActive('/') && location.pathname === '/' && (
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.6)]"></span>
            )}
          </Link>
          
          {/* About Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleAboutMouseEnter}
            onMouseLeave={handleAboutMouseLeave}
          >
            <button 
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className={`relative pb-1 flex items-center gap-2 transition-all font-semibold ${
                isActive('/about') || isActive('/ceo') || isActive('/team') || isActive('/mission-vision') || 
                isActive('/join-us') || isActive('/testimonials') || isActive('/pricing') || 
                isActive('/terms') || isActive('/privacy') || isActive('/refund-policy')
                  ? 'text-yellow-600 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              <span>{t('nav.about')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                aboutDropdownOpen ? 'rotate-180' : 'rotate-0'
              } ${
                isActive('/about') || isActive('/ceo') || isActive('/team') || isActive('/mission-vision') || 
                isActive('/join-us') || isActive('/testimonials') || isActive('/pricing') || 
                isActive('/terms') || isActive('/privacy') || isActive('/refund-policy')
                  ? 'text-yellow-600'
                  : ''
              }`} />
              {(isActive('/about') || isActive('/ceo') || isActive('/team') || isActive('/mission-vision') || 
                isActive('/join-us') || isActive('/testimonials') || isActive('/pricing') || 
                isActive('/terms') || isActive('/privacy') || isActive('/refund-policy')) && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.6)]"></span>
              )}
            </button>
            
            {aboutDropdownOpen && (
              <div 
                className="glassmorphism-dropdown dropdown-slide-down absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-2xl p-6 z-50"
                style={{ width: '550px' }}
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
              >
                <div className="grid grid-cols-2 gap-4">
                  {aboutMenuItems.map((column, colIndex) => (
                    <div key={colIndex} className="space-y-2">
                      {column.map((item, index) => {
                        const Icon = item.icon;
                        const isItemActive = location.pathname === item.path;
                        return (
                          <Link
                            key={index}
                            to={item.path}
                            className={`dropdown-item-stagger flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative ${
                              isItemActive
                                ? 'bg-gradient-to-r from-yellow-50 to-yellow-100/50 text-yellow-700 font-semibold active-gold-bar shadow-lg shadow-yellow-100'
                                : 'text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50/50 hover:to-transparent hover:text-[#151249]'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 icon-shine-hover ${
                              isItemActive
                                ? 'bg-gradient-to-br from-[#151249] to-[#2A257A] text-white shadow-lg'
                                : 'bg-[#151249] text-white group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-yellow-500 group-hover:shadow-lg'
                            }`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button 
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`relative pb-1 flex items-center gap-2 transition-all font-semibold ${
                isActive('/services')
                  ? 'text-yellow-600 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
            >
              <span>{t('nav.services')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                servicesDropdownOpen ? 'rotate-180' : 'rotate-0'
              } ${
                isActive('/services') ? 'text-yellow-600' : ''
              }`} />
              {isActive('/services') && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.6)]"></span>
              )}
            </button>
            
            {servicesDropdownOpen && (
              <div 
                className="glassmorphism-dropdown dropdown-slide-down absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-2xl p-6 z-50 max-h-[70vh] overflow-y-auto"
                style={{ width: '850px' }}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="grid grid-cols-3 gap-4">
                  {servicesMenuItems.map((column, colIndex) => (
                    <div key={colIndex} className="space-y-2">
                      {column.map((item, index) => {
                        const Icon = item.icon;
                        const isItemActive = location.pathname === item.path;
                        return (
                          <Link
                            key={index}
                            to={item.path}
                            className={`dropdown-item-stagger flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative ${
                              isItemActive
                                ? 'bg-gradient-to-r from-yellow-50 to-yellow-100/50 text-yellow-700 font-semibold active-gold-bar shadow-lg shadow-yellow-100'
                                : 'text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50/50 hover:to-transparent hover:text-[#151249]'
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 icon-shine-hover ${
                              isItemActive
                                ? 'bg-gradient-to-br from-[#151249] to-[#2A257A] text-white shadow-lg'
                                : 'bg-[#151249] text-white group-hover:bg-gradient-to-br group-hover:from-yellow-400 group-hover:to-yellow-500 group-hover:shadow-lg'
                            }`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Link */}
          <Link
            to="/contact"
            className={`relative pb-1 transition-all font-semibold ${
              isActive('/contact')
                ? 'text-yellow-600 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                : 'text-gray-700 hover:text-yellow-600'
            }`}
          >
            {t('nav.contact')}
            {isActive('/contact') && (
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.6)]"></span>
            )}
          </Link>

          {/* Blog Link */}
          <Link
            to="/blog"
            className={`relative pb-1 transition-all font-semibold ${
              isActive('/blog')
                ? 'text-yellow-600 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                : 'text-gray-700 hover:text-yellow-600'
            }`}
          >
            {t('nav.blog')}
            {isActive('/blog') && (
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.6)]"></span>
            )}
          </Link>

          <LanguageSwitcher />

          <button
            onClick={(e) => {
              e.preventDefault();
              if (onOpenPopup) {
                onOpenPopup();
              }
            }}
            className="px-6 py-2.5 bg-[#151249] text-white rounded-lg hover:bg-[#2A257A] transition-all shadow-md hover:-translate-y-0.5"
          >
            {t('nav.getQuote')}
          </button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#151249]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-6 space-y-4">
            <Link
              to="/"
              className={`transition-all font-semibold ${
                isActive('/') && location.pathname === '/'
                  ? 'text-yellow-600 pl-3 border-l-4 border-yellow-500'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            
            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`flex items-center justify-between w-full transition-all font-semibold ${
                  isActive('/about') || isActive('/ceo') || isActive('/team') || isActive('/mission-vision') ||
                  isActive('/join-us') || isActive('/testimonials') || isActive('/pricing') ||
                  isActive('/terms') || isActive('/privacy') || isActive('/refund-policy')
                    ? 'text-yellow-600 pl-3 border-l-4 border-yellow-500'
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                {t('nav.about')}
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAboutOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {aboutMenuFlat.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={index}
                        to={item.path}
                        className={`flex items-center gap-2 py-2 text-sm transition-all ${
                          location.pathname === item.path
                            ? 'text-yellow-600 font-semibold pl-3 border-l-2 border-yellow-500'
                            : 'text-gray-600 hover:text-yellow-600'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`flex items-center justify-between w-full transition-all font-semibold ${
                  isActive('/services')
                    ? 'text-yellow-600 pl-3 border-l-4 border-yellow-500'
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                {t('nav.services')}
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 ml-4 space-y-2 max-h-80 overflow-y-auto">
                  {servicesMenuFlat.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={index}
                        to={item.path}
                        className={`flex items-center gap-2 py-2 text-sm transition-all ${
                          location.pathname === item.path
                            ? 'text-yellow-600 font-semibold pl-3 border-l-2 border-yellow-500'
                            : 'text-gray-600 hover:text-yellow-600'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className={`transition-all font-semibold ${
                isActive('/contact')
                  ? 'text-yellow-600 pl-3 border-l-4 border-yellow-500'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>

            <Link
              to="/blog"
              className={`transition-all font-semibold ${
                isActive('/blog')
                  ? 'text-yellow-600 pl-3 border-l-4 border-yellow-500'
                  : 'text-gray-700 hover:text-yellow-600'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.blog')}
            </Link>

            <div className="pt-2 border-t border-gray-200">
              <LanguageSwitcher />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                if (onOpenPopup) {
                  onOpenPopup();
                }
              }}
              className="px-6 py-2.5 bg-[#151249] text-white rounded-lg hover:bg-[#2A257A] transition-all text-center"
            >
              {t('nav.getQuote')}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}