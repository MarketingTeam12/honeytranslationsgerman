import { Globe as GlobeIcon } from 'lucide-react';
import { useState } from 'react';

interface OrbitAnimationProps {
  items: Array<{
    angle: number;
    text: string;
    label: string;
    id: number;
  }>;
}

export function OrbitAnimation({ items }: OrbitAnimationProps) {
  const [isOrbitPaused, setIsOrbitPaused] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  // Asymmetric angle offsets for premium feel (more pronounced)
  const asymmetricOffsets = [0, 8, -6, 4, -7, 5];

  return (
    <div className="relative h-[300px] sm:h-[350px] md:h-[420px] lg:h-[500px] w-full">
      {/* Floating light particles around orbit for depth */}
      {[...Array(16)].map((_, i) => {
        const duration = 3 + Math.random() * 5;
        const delay = i * 0.2;
        const angle = (i * 22.5) * Math.PI / 180;
        const radius = 45 + Math.random() * 15;
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        return (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
              top: `${y}%`,
              left: `${x}%`,
              background: 'radial-gradient(circle, rgba(227, 181, 82, 0.8), rgba(255, 255, 255, 0.4))',
              animation: `particleFloat ${duration}s ease-in-out ${delay}s infinite`,
              filter: 'blur(1.5px)',
              opacity: 0.6,
              boxShadow: '0 0 8px rgba(227, 181, 82, 0.6)'
            }}
          />
        );
      })}

      {/* Central Enhanced Globe - FIXED (No Rotation) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48">
          {/* Stronger radial glow layers - yellow light spread */}
          <div className="absolute -inset-8 sm:-inset-12 md:-inset-16 lg:-inset-20 rounded-full" style={{
            background: 'radial-gradient(circle, rgba(250, 204, 21, 0.5) 0%, rgba(250, 204, 21, 0.3) 30%, rgba(250, 204, 21, 0.15) 50%, transparent 70%)',
            filter: 'blur(25px)',
            animation: 'pulseGlow 3s ease-in-out infinite'
          }}></div>
          <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 lg:-inset-10 rounded-full" style={{
            background: 'radial-gradient(circle, rgba(250, 204, 21, 0.6) 0%, rgba(250, 204, 21, 0.4) 40%, transparent 70%)',
            filter: 'blur(20px)',
            animation: 'pulseGlow 3s ease-in-out infinite 0.5s'
          }}></div>
          <div className="absolute inset-0 rounded-full animate-ping-slow" style={{
            background: 'radial-gradient(circle, rgba(250, 204, 21, 0.4) 0%, transparent 70%)',
            filter: 'blur(15px)'
          }}></div>

          {/* Light particles around globe */}
          {[...Array(8)].map((_, i) => {
            const delay = i * 0.3;
            return (
              <div
                key={`globe-particle-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  top: `${50 + 40 * Math.sin((i * 45) * Math.PI / 180)}%`,
                  left: `${50 + 40 * Math.cos((i * 45) * Math.PI / 180)}%`,
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(250, 204, 21, 0.6))',
                  filter: 'blur(1px)',
                  boxShadow: '0 0 6px rgba(250, 204, 21, 0.8)',
                  animation: `orbitParticle 5s ease-in-out ${delay}s infinite`
                }}
              />
            );
          })}

          {/* Subtle highlight overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 via-transparent to-transparent" style={{ clipPath: 'circle(50% at 30% 30%)' }}></div>

          {/* Inner core with enhanced depth and shadow */}
          <div className="absolute inset-2 sm:inset-4 md:inset-6 lg:inset-8 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 flex items-center justify-center" style={{
            boxShadow: '0 0 60px rgba(250, 204, 21, 0.8), 0 0 100px rgba(250, 204, 21, 0.5), 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 15px rgba(255,255,255,0.4), inset 0 -2px 10px rgba(0,0,0,0.1)',
            animation: 'corePulse 3s ease-in-out infinite'
          }}>
            <GlobeIcon className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-16 lg:h-16 text-[#151249]" style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.3))' }} />
          </div>
        </div>
      </div>

      {/* ORBIT GROUP - Mobile (240px) with Strong Glowing Ring */}
      <div
        className="absolute top-1/2 left-1/2 w-[240px] h-[240px] sm:hidden"
        style={{
          transform: 'translate(-50%, -50%)',
          transformOrigin: 'center center',
          animation: isOrbitPaused ? 'none' : 'orbitRotation 24s linear infinite'
        }}
      >
        {/* Multi-layer soft glowing ring */}
        <div className="absolute -inset-4 rounded-full" style={{
          background: 'radial-gradient(circle, transparent 45%, rgba(227, 181, 82, 0.15) 48%, rgba(227, 181, 82, 0.25) 50%, rgba(227, 181, 82, 0.15) 52%, transparent 55%)',
          filter: 'blur(12px)'
        }}></div>
        <div className="absolute inset-0 rounded-full" style={{
          background: 'conic-gradient(from 0deg, rgba(227, 181, 82, 0.3), rgba(0, 196, 255, 0.25), rgba(168, 85, 247, 0.2), rgba(227, 181, 82, 0.3))',
          filter: 'blur(10px)',
          opacity: 0.8
        }}></div>
        <div className="absolute inset-[2px] rounded-full border-2" style={{
          borderColor: 'rgba(227, 181, 82, 0.4)',
          boxShadow: '0 0 30px rgba(227, 181, 82, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.08), 0 0 60px rgba(227, 181, 82, 0.2)'
        }}></div>

        {items.map((lang, index) => {
          const radius = 120;
          const orbitRadius = 115; // Slightly reduced to account for larger card size
          const adjustedAngle = lang.angle + asymmetricOffsets[index];
          const angleRad = (adjustedAngle - 90) * (Math.PI / 180);
          const x = radius + Math.cos(angleRad) * orbitRadius;
          const y = radius + Math.sin(angleRad) * orbitRadius;

          return (
            <div
              key={lang.id}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => {
                setIsOrbitPaused(true);
                setHoveredIcon(lang.id);
              }}
              onMouseLeave={() => {
                setIsOrbitPaused(false);
                setHoveredIcon(null);
              }}
            >
              <div
                className="pointer-events-auto"
                style={{
                  animation: isOrbitPaused ? 'none' : 'counterRotation 24s linear infinite'
                }}
              >
                {/* Enhanced Glassmorphism card - Bigger size (70px) */}
                <div
                  className={`relative rounded-2xl transition-all duration-300 ${
                    hoveredIcon === lang.id ? 'scale-110' : ''
                  }`}
                  style={{
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(16px)',
                    border: '2px solid rgba(227, 181, 82, 0.5)',
                    boxShadow: hoveredIcon === lang.id
                      ? '0 12px 40px rgba(227, 181, 82, 0.6), 0 0 30px rgba(255, 255, 255, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 10px rgba(255, 255, 255, 0.15)'
                      : '0 8px 24px rgba(0, 0, 0, 0.2), 0 0 20px rgba(227, 181, 82, 0.3), 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 8px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="text-[22px] leading-none font-extrabold text-white tracking-wide text-center" style={{ textShadow: '0 3px 10px rgba(0,0,0,0.5), 0 0 20px rgba(227, 181, 82, 0.3)' }}>{lang.text}</div>
                  <div className="text-[9px] leading-none text-white/90 mt-2 whitespace-nowrap font-semibold text-center" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>{lang.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ORBIT GROUP - Tablet (300px) with Strong Glowing Ring */}
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] hidden sm:block md:hidden"
        style={{
          transform: 'translate(-50%, -50%)',
          transformOrigin: 'center center',
          animation: isOrbitPaused ? 'none' : 'orbitRotation 20s linear infinite'
        }}
      >
        {/* Multi-layer soft glowing ring */}
        <div className="absolute -inset-4 rounded-full" style={{
          background: 'radial-gradient(circle, transparent 45%, rgba(227, 181, 82, 0.15) 48%, rgba(227, 181, 82, 0.25) 50%, rgba(227, 181, 82, 0.15) 52%, transparent 55%)',
          filter: 'blur(14px)'
        }}></div>
        <div className="absolute inset-0 rounded-full" style={{
          background: 'conic-gradient(from 0deg, rgba(227, 181, 82, 0.3), rgba(0, 196, 255, 0.25), rgba(168, 85, 247, 0.2), rgba(227, 181, 82, 0.3))',
          filter: 'blur(12px)',
          opacity: 0.8
        }}></div>
        <div className="absolute inset-[2px] rounded-full border-2" style={{
          borderColor: 'rgba(227, 181, 82, 0.4)',
          boxShadow: '0 0 35px rgba(227, 181, 82, 0.4), inset 0 0 35px rgba(255, 255, 255, 0.08), 0 0 70px rgba(227, 181, 82, 0.2)'
        }}></div>

        {items.map((lang, index) => {
          const radius = 150;
          const orbitRadius = 143; // Slightly reduced to account for larger card size
          const adjustedAngle = lang.angle + asymmetricOffsets[index];
          const angleRad = (adjustedAngle - 90) * (Math.PI / 180);
          const x = radius + Math.cos(angleRad) * orbitRadius;
          const y = radius + Math.sin(angleRad) * orbitRadius;

          return (
            <div
              key={lang.id}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => {
                setIsOrbitPaused(true);
                setHoveredIcon(lang.id);
              }}
              onMouseLeave={() => {
                setIsOrbitPaused(false);
                setHoveredIcon(null);
              }}
            >
              <div
                className="pointer-events-auto"
                style={{
                  animation: isOrbitPaused ? 'none' : 'counterRotation 20s linear infinite'
                }}
              >
                {/* Enhanced Glassmorphism card - Bigger size (75px) */}
                <div
                  className={`relative rounded-2xl transition-all duration-300 ${
                    hoveredIcon === lang.id ? 'scale-110' : ''
                  }`}
                  style={{
                    width: '75px',
                    height: '75px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(16px)',
                    border: '2px solid rgba(227, 181, 82, 0.5)',
                    boxShadow: hoveredIcon === lang.id
                      ? '0 12px 40px rgba(227, 181, 82, 0.6), 0 0 30px rgba(255, 255, 255, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 10px rgba(255, 255, 255, 0.15)'
                      : '0 8px 24px rgba(0, 0, 0, 0.2), 0 0 20px rgba(227, 181, 82, 0.3), 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 8px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="text-2xl leading-none font-extrabold text-white tracking-wide text-center" style={{ textShadow: '0 3px 10px rgba(0,0,0,0.5), 0 0 20px rgba(227, 181, 82, 0.3)' }}>{lang.text}</div>
                  <div className="text-[10px] leading-none text-white/90 mt-2 whitespace-nowrap font-semibold text-center" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>{lang.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ORBIT GROUP - Desktop (400px) with Strong Glowing Ring */}
      <div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] hidden md:block"
        style={{
          transform: 'translate(-50%, -50%)',
          transformOrigin: 'center center',
          animation: isOrbitPaused ? 'none' : 'orbitRotation 18s linear infinite'
        }}
      >
        {/* Multi-layer soft glowing ring */}
        <div className="absolute -inset-6 rounded-full" style={{
          background: 'radial-gradient(circle, transparent 45%, rgba(227, 181, 82, 0.18) 48%, rgba(227, 181, 82, 0.3) 50%, rgba(227, 181, 82, 0.18) 52%, transparent 55%)',
          filter: 'blur(16px)'
        }}></div>
        <div className="absolute inset-0 rounded-full" style={{
          background: 'conic-gradient(from 0deg, rgba(227, 181, 82, 0.35), rgba(0, 196, 255, 0.28), rgba(168, 85, 247, 0.22), rgba(227, 181, 82, 0.35))',
          filter: 'blur(14px)',
          opacity: 0.85
        }}></div>
        <div className="absolute inset-[3px] rounded-full border-2" style={{
          borderColor: 'rgba(227, 181, 82, 0.5)',
          boxShadow: '0 0 40px rgba(227, 181, 82, 0.5), inset 0 0 40px rgba(255, 255, 255, 0.1), 0 0 80px rgba(227, 181, 82, 0.25)'
        }}></div>

        {items.map((lang, index) => {
          const radius = 200;
          const orbitRadius = 190; // Slightly reduced to account for larger card size
          const adjustedAngle = lang.angle + asymmetricOffsets[index];
          const angleRad = (adjustedAngle - 90) * (Math.PI / 180);
          const x = radius + Math.cos(angleRad) * orbitRadius;
          const y = radius + Math.sin(angleRad) * orbitRadius;

          return (
            <div
              key={lang.id}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => {
                setIsOrbitPaused(true);
                setHoveredIcon(lang.id);
              }}
              onMouseLeave={() => {
                setIsOrbitPaused(false);
                setHoveredIcon(null);
              }}
            >
              <div
                className="pointer-events-auto"
                style={{
                  animation: isOrbitPaused ? 'none' : 'counterRotation 18s linear infinite'
                }}
              >
                {/* Enhanced Glassmorphism card - Bigger size (80px) */}
                <div
                  className={`relative rounded-2xl transition-all duration-300 ${
                    hoveredIcon === lang.id ? 'scale-110' : ''
                  }`}
                  style={{
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(16px)',
                    border: '2px solid rgba(227, 181, 82, 0.5)',
                    boxShadow: hoveredIcon === lang.id
                      ? '0 12px 40px rgba(227, 181, 82, 0.6), 0 0 30px rgba(255, 255, 255, 0.3), 0 8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 10px rgba(255, 255, 255, 0.15)'
                      : '0 8px 24px rgba(0, 0, 0, 0.2), 0 0 20px rgba(227, 181, 82, 0.3), 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 8px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="text-[28px] leading-none font-extrabold text-white tracking-wide text-center" style={{ textShadow: '0 3px 10px rgba(0,0,0,0.5), 0 0 20px rgba(227, 181, 82, 0.3)' }}>{lang.text}</div>
                  <div className="text-[10px] leading-none text-white/90 mt-2 whitespace-nowrap font-semibold text-center" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>{lang.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Soft Connecting Light Lines - Mobile (240px) */}
      <div
        className="absolute top-1/2 left-1/2 w-[240px] h-[240px] pointer-events-none sm:hidden"
        style={{
          transform: 'translate(-50%, -50%)',
          animation: isOrbitPaused ? 'none' : 'orbitRotation 24s linear infinite'
        }}
      >
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
          {items.filter((_, idx) => [0, 2, 4].includes(idx)).map((lang, index) => {
            const adjustedAngle = lang.angle + asymmetricOffsets[lang.id];
            const angleRad = (adjustedAngle - 90) * (Math.PI / 180);
            const x = 120 + Math.cos(angleRad) * 115;
            const y = 120 + Math.sin(angleRad) * 115;

            return (
              <line
                key={index}
                x1="120"
                y1="120"
                x2={x}
                y2={y}
                stroke="url(#lightGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ filter: 'blur(1.5px)' }}
              />
            );
          })}

          <defs>
            <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#E3B552', stopOpacity: 0.6 }} />
              <stop offset="50%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#00C4FF', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Soft Connecting Light Lines - Tablet (300px) */}
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] pointer-events-none hidden sm:block md:hidden"
        style={{
          transform: 'translate(-50%, -50%)',
          animation: isOrbitPaused ? 'none' : 'orbitRotation 20s linear infinite'
        }}
      >
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.35 }}>
          {items.filter((_, idx) => [0, 2, 4].includes(idx)).map((lang, index) => {
            const adjustedAngle = lang.angle + asymmetricOffsets[lang.id];
            const angleRad = (adjustedAngle - 90) * (Math.PI / 180);
            const x = 150 + Math.cos(angleRad) * 143;
            const y = 150 + Math.sin(angleRad) * 143;

            return (
              <line
                key={index}
                x1="150"
                y1="150"
                x2={x}
                y2={y}
                stroke="url(#lightGradientTablet)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ filter: 'blur(2px)' }}
              />
            );
          })}

          <defs>
            <linearGradient id="lightGradientTablet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#E3B552', stopOpacity: 0.6 }} />
              <stop offset="50%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#00C4FF', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Soft Connecting Light Lines - Desktop (400px) */}
      <div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] pointer-events-none hidden md:block"
        style={{
          transform: 'translate(-50%, -50%)',
          animation: isOrbitPaused ? 'none' : 'orbitRotation 18s linear infinite'
        }}
      >
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }}>
          {items.filter((_, idx) => [0, 2, 4].includes(idx)).map((lang, index) => {
            const adjustedAngle = lang.angle + asymmetricOffsets[lang.id];
            const angleRad = (adjustedAngle - 90) * (Math.PI / 180);
            const x = 200 + Math.cos(angleRad) * 190;
            const y = 200 + Math.sin(angleRad) * 190;

            return (
              <line
                key={index}
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="url(#lightGradientDesktop)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ filter: 'blur(2.5px)' }}
              />
            );
          })}

          <defs>
            <linearGradient id="lightGradientDesktop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#E3B552', stopOpacity: 0.7 }} />
              <stop offset="50%" style={{ stopColor: '#FFFFFF', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#00C4FF', stopOpacity: 0.4 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px) scale(1.15);
            opacity: 0.8;
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes orbitParticle {
          0%, 100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(0.9);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.3);
          }
        }

        @keyframes corePulse {
          0%, 100% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.08);
            filter: brightness(1.1);
          }
        }
      `}</style>
    </div>
  );
}
