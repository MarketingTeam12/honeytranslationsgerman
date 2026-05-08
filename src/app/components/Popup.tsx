import { X, Globe, FileText, Languages, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Popup({ isOpen, onClose }: PopupProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClosing, setIsClosing] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (popupRef.current) {
        const rect = popupRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 20;
        const y = (e.clientY - rect.top - rect.height / 2) / 20;
        setMousePosition({ x, y });
      }
    };

    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within 24 hours.');
    handleClose();
    setFormData({ name: '', email: '', phone: '' });
  };

  if (!isOpen && !isClosing) return null;

  return (
    <>
      {/* Backdrop with blur */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundColor: 'rgba(21, 18, 73, 0.4)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
        onClick={handleClose}
      />

      {/* Popup Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none">
        <div 
          ref={popupRef}
          className={`relative max-w-lg w-full pointer-events-auto popup-container ${
            isClosing ? 'popup-exit' : 'popup-enter'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Main Glass Panel */}
          <div 
            className="relative bg-white/95 backdrop-blur-[30px] rounded-[28px] overflow-hidden shadow-2xl border-[1.5px] border-transparent"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              boxShadow: '0 40px 100px rgba(21, 18, 73, 0.25), 0 0 0 1.5px rgba(250, 204, 21, 0.3), inset 0 1px 1px rgba(255,255,255,0.9)',
            }}
          >
            {/* Animated Gradient Border Glow */}
            <div className="absolute inset-0 rounded-[28px] pointer-events-none overflow-hidden">
              <div 
                className="absolute inset-[-2px] opacity-60"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(250, 204, 21, 0.6), transparent)',
                  animation: 'borderGlow 3s linear infinite'
                }}
              />
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[28px]">
              {/* Floating Glow Orbs */}
              <div 
                className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full opacity-20 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(250, 204, 21, 0.4) 0%, transparent 70%)',
                  animation: 'float 8s ease-in-out infinite'
                }}
              />
              <div 
                className="absolute bottom-[-100px] left-[-100px] w-[250px] h-[250px] rounded-full opacity-20 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                  animation: 'float 10s ease-in-out infinite',
                  animationDelay: '2s'
                }}
              />

              {/* Floating Decorative Shapes */}
              <div 
                className="absolute top-[15%] left-[8%] w-2 h-2 rounded-full bg-yellow-400 opacity-60"
                style={{
                  animation: 'floatSmall 4s ease-in-out infinite',
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                }}
              />
              <div 
                className="absolute top-[25%] right-[12%] w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60"
                style={{
                  animation: 'floatSmall 5s ease-in-out infinite',
                  animationDelay: '1s',
                  transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`
                }}
              />
              <div 
                className="absolute bottom-[20%] left-[15%] w-2.5 h-2.5 rounded-full bg-purple-400 opacity-50"
                style={{
                  animation: 'floatSmall 6s ease-in-out infinite',
                  animationDelay: '2s',
                  transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`
                }}
              />

              {/* Decorative Gold Lines */}
              <div 
                className="absolute top-[30%] right-[5%] w-16 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-40"
                style={{
                  animation: 'floatHorizontal 7s ease-in-out infinite'
                }}
              />
              <div 
                className="absolute bottom-[35%] left-[5%] w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40"
                style={{
                  animation: 'floatHorizontal 8s ease-in-out infinite',
                  animationDelay: '3s'
                }}
              />
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg group"
              aria-label="Close popup"
              style={{
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}
            >
              <X className="w-5 h-5 text-gray-600 group-hover:text-[#151249] transition-all group-hover:rotate-90 duration-300" />
            </button>

            {/* Content Grid - Desktop: Split Layout, Mobile: Stack */}
            <div className="grid grid-cols-1 min-h-[450px]">
              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-center relative z-10">
                {/* Sparkle Icon */}
                <div className="mb-3 sparkle-pulse">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                </div>

                {/* Title with Gradient Shine Animation */}
                <h2 
                  className="text-2xl md:text-3xl font-black mb-3 leading-tight title-slide-up"
                  style={{
                    background: 'linear-gradient(90deg, #151249 0%, #151249 40%, #FBBF24 50%, #151249 60%, #151249 100%)',
                    backgroundSize: '200% 100%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradientShine 3s linear infinite'
                  }}
                >
                  {t('popup.title').split(' ').slice(0, -1).join(' ')}{' '}
                  <span className="relative inline-block">
                    {t('popup.title').split(' ').slice(-1)}
                    <span className="absolute -top-1 -right-5 text-yellow-500 text-lg sparkle-pulse">✨</span>
                  </span>
                </h2>

                {/* Subtitle Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4 subtitle-fade-in">
                  {[
                    { label: t('popup.fast'), color: 'bg-green-500' },
                    { label: t('popup.accurate'), color: 'bg-blue-500' },
                    { label: t('popup.certified'), color: 'bg-yellow-500' }
                  ].map((badge, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/50"
                      style={{
                        animation: `fadeInScale 0.4s ease-out forwards`,
                        animationDelay: `${0.3 + idx * 0.1}s`,
                        opacity: 0
                      }}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${badge.color}`}></span>
                      <span className="text-xs font-semibold text-[#151249]">{badge.label}</span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-5 leading-relaxed content-fade-in">
                  {t('popup.description')}
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3 form-slide-in">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200/50 bg-white/60 backdrop-blur-sm focus:border-yellow-400 focus:bg-white focus:outline-none transition-all placeholder:text-gray-400 text-sm"
                      placeholder={t('popup.namePlaceholder')}
                      style={{
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                      }}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200/50 bg-white/60 backdrop-blur-sm focus:border-yellow-400 focus:bg-white focus:outline-none transition-all placeholder:text-gray-400 text-sm"
                      placeholder={t('popup.emailPlaceholder')}
                      style={{
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                      }}
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-200/50 bg-white/60 backdrop-blur-sm focus:border-yellow-400 focus:bg-white focus:outline-none transition-all placeholder:text-gray-400 text-sm"
                      placeholder={t('popup.phonePlaceholder')}
                      style={{
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                      }}
                    />
                  </div>

                  {/* CTA Button with Advanced Animation */}
                  <button
                    type="submit"
                    className="premium-cta-button group relative w-full py-3 px-6 rounded-xl font-bold text-[#151249] overflow-hidden mt-4"
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-[length:200%_100%] animate-gradientSlide" />
                    
                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-glow-animation" />
                    
                    {/* Light Sweep Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                    </div>

                    {/* Button Content */}
                    <span className="relative flex items-center justify-center gap-2">
                      {t('popup.submitButton')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </form>

                {/* Security Note */}
                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1 security-fade-in">
                  <span className="text-green-500">🔒</span>
                  {t('popup.securityNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Animations CSS */}
      <style>{`
        /* 3-Step Entry Animation */
        @keyframes popupEnter {
          0% {
            opacity: 0;
            transform: scale(0.85) translateY(20px);
          }
          70% {
            opacity: 1;
            transform: scale(1.02) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes popupExit {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
        }

        .popup-enter {
          animation: popupEnter 450ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .popup-exit {
          animation: popupExit 300ms cubic-bezier(0.4, 0, 1, 1) forwards;
        }

        /* Title Slide Up */
        @keyframes titleSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title-slide-up {
          animation: titleSlideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
          opacity: 0;
        }

        /* Gradient Shine Animation */
        @keyframes gradientShine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        /* Subtitle Fade In */
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .subtitle-fade-in {
          animation: fadeInScale 0.5s ease-out 0.3s forwards;
          opacity: 0;
        }

        .content-fade-in {
          animation: fadeInScale 0.5s ease-out 0.5s forwards;
          opacity: 0;
        }

        .form-slide-in {
          animation: titleSlideUp 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }

        .security-fade-in {
          animation: fadeInScale 0.5s ease-out 1s forwards;
          opacity: 0;
        }

        /* Floating Animations */
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }

        @keyframes floatSmall {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatHorizontal {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(15px);
          }
        }

        /* Border Glow Animation */
        @keyframes borderGlow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Button Animations */
        @keyframes gradientSlide {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }

        .animate-gradientSlide {
          animation: gradientSlide 3s linear infinite;
        }

        .border-glow-animation {
          box-shadow: 0 0 20px rgba(250, 204, 21, 0.6), inset 0 0 20px rgba(250, 204, 21, 0.2);
        }

        /* Icon Pulse */
        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 20px 40px rgba(250, 204, 21, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 25px 50px rgba(250, 204, 21, 0.5);
          }
        }

        .icon-pulse {
          animation: iconPulse 3s ease-in-out infinite;
        }

        /* Sparkle Pulse */
        @keyframes sparklePulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        .sparkle-pulse {
          animation: sparklePulse 2s ease-in-out infinite;
        }

        /* Slow Spin */
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        /* Floating Icon Hover */
        .floating-icon {
          transition: transform 0.3s ease-out;
        }

        /* Mobile Slide Up */
        @media (max-width: 1023px) {
          .popup-enter {
            animation: mobileSlideUp 450ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }

          @keyframes mobileSlideUp {
            0% {
              opacity: 0;
              transform: translateY(100%);
            }
            70% {
              opacity: 1;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </>
  );
}