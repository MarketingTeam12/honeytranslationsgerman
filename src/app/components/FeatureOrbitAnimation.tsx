import { Languages, FileText, Award, Globe as GlobeIcon, Clock, Shield, Users, LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface FeatureItem {
  angle: number;
  icon: LucideIcon;
  label: string;
  color: string;
  borderColor: string;
  id: number;
}

interface FeatureOrbitAnimationProps {
  items: FeatureItem[];
}

export function FeatureOrbitAnimation({ items }: FeatureOrbitAnimationProps) {
  const [isOrbitPaused, setIsOrbitPaused] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="relative w-full h-full">
      {/* Central Glowing Circle - FIXED */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56">
          {/* Pulsing glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/30 to-yellow-500/30 animate-ping-slow"></div>
          
          {/* Counter-rotating inner glow ring (PREMIUM EFFECT) */}
          <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-r from-blue-400/20 via-transparent to-purple-400/20 animate-counter-spin-slow"></div>
          
          {/* Static outer ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/10 to-blue-500/10"></div>
          
          {/* Inner core with icon - FIXED with periodic pulse */}
          <div className="absolute inset-3 sm:inset-5 md:inset-8 lg:inset-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl animate-core-pulse" style={{ boxShadow: '0 0 50px rgba(250, 204, 21, 0.4), 0 0 60px rgba(250, 204, 21, 0.3)' }}>
            <Languages className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-[#151249]" />
          </div>
        </div>
      </div>

      {/* ORBIT GROUP - Mobile (260px) */}
      <div 
        className="absolute top-1/2 left-1/2 w-[260px] h-[260px] sm:hidden"
        style={{
          transform: 'translate(-50%, -50%)',
          transformOrigin: 'center center',
          animation: isOrbitPaused ? 'none' : 'orbitRotation 24s linear infinite'
        }}
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-[#E3B552]/10"></div>
        
        {items.map((feature) => {
          const radius = 130;
          const angleRad = (feature.angle - 90) * (Math.PI / 180);
          const x = radius + Math.cos(angleRad) * radius;
          const y = radius + Math.sin(angleRad) * radius;
          const IconComponent = feature.icon;
          
          return (
            <div
              key={feature.id}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => {
                setIsOrbitPaused(true);
                setHoveredFeature(feature.id);
              }}
              onMouseLeave={() => {
                setIsOrbitPaused(false);
                setHoveredFeature(null);
              }}
            >
              <div 
                className="pointer-events-auto"
                style={{
                  animation: isOrbitPaused ? 'none' : 'counterRotation 24s linear infinite'
                }}
              >
                <div 
                  className={`bg-white rounded-xl p-3 card-shadow-premium transition-all duration-300 ${
                    hoveredFeature === feature.id ? 'scale-105 shadow-glow-gold' : ''
                  }`}
                  style={{ 
                    border: `1px solid ${feature.borderColor}20`
                  }}
                >
                  <IconComponent className={`w-7 h-7 text-${feature.color} mb-1`} />
                  <div className="text-[9px] font-semibold text-[#151249] whitespace-nowrap">{feature.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ORBIT GROUP - Tablet (340px) */}
      <div 
        className="absolute top-1/2 left-1/2 w-[340px] h-[340px] hidden sm:block md:hidden"
        style={{
          transform: 'translate(-50%, -50%)',
          transformOrigin: 'center center',
          animation: isOrbitPaused ? 'none' : 'orbitRotation 20s linear infinite'
        }}
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-[#E3B552]/10"></div>
        
        {items.map((feature) => {
          const radius = 170;
          const angleRad = (feature.angle - 90) * (Math.PI / 180);
          const x = radius + Math.cos(angleRad) * radius;
          const y = radius + Math.sin(angleRad) * radius;
          const IconComponent = feature.icon;
          
          return (
            <div
              key={feature.id}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => {
                setIsOrbitPaused(true);
                setHoveredFeature(feature.id);
              }}
              onMouseLeave={() => {
                setIsOrbitPaused(false);
                setHoveredFeature(null);
              }}
            >
              <div 
                className="pointer-events-auto"
                style={{
                  animation: isOrbitPaused ? 'none' : 'counterRotation 20s linear infinite'
                }}
              >
                <div 
                  className={`bg-white rounded-xl p-4 card-shadow-premium transition-all duration-300 ${
                    hoveredFeature === feature.id ? 'scale-105 shadow-glow-gold' : ''
                  }`}
                  style={{ 
                    border: `1px solid ${feature.borderColor}20`
                  }}
                >
                  <IconComponent className={`w-9 h-9 text-${feature.color} mb-1.5`} />
                  <div className="text-[10px] font-semibold text-[#151249] whitespace-nowrap">{feature.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ORBIT GROUP - Desktop (440px) */}
      <div 
        className="absolute top-1/2 left-1/2 w-[440px] h-[440px] hidden md:block"
        style={{
          transform: 'translate(-50%, -50%)',
          transformOrigin: 'center center',
          animation: isOrbitPaused ? 'none' : 'orbitRotation 18s linear infinite'
        }}
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-[#E3B552]/10"></div>
        
        {items.map((feature) => {
          const radius = 220;
          const angleRad = (feature.angle - 90) * (Math.PI / 180);
          const x = radius + Math.cos(angleRad) * radius;
          const y = radius + Math.sin(angleRad) * radius;
          const IconComponent = feature.icon;
          
          return (
            <div
              key={feature.id}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => {
                setIsOrbitPaused(true);
                setHoveredFeature(feature.id);
              }}
              onMouseLeave={() => {
                setIsOrbitPaused(false);
                setHoveredFeature(null);
              }}
            >
              <div 
                className="pointer-events-auto"
                style={{
                  animation: isOrbitPaused ? 'none' : 'counterRotation 18s linear infinite'
                }}
              >
                <div 
                  className={`bg-white rounded-2xl p-6 card-shadow-premium transition-all duration-300 ${
                    hoveredFeature === feature.id ? 'scale-105 shadow-glow-gold' : ''
                  }`}
                  style={{ 
                    border: `1px solid ${feature.borderColor}20`
                  }}
                >
                  <IconComponent className={`w-12 h-12 text-${feature.color} mb-2`} />
                  <div className="text-xs font-semibold text-[#151249] whitespace-nowrap">{feature.label}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dotted Connection Lines - Mobile (260px) */}
      <div 
        className="absolute top-1/2 left-1/2 w-[260px] h-[260px] pointer-events-none sm:hidden"
        style={{
          transform: 'translate(-50%, -50%)',
          animation: isOrbitPaused ? 'none' : 'orbitRotation 24s linear infinite'
        }}
      >
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.12 }}>
          {items.map((feature, index) => {
            const angleRad = (feature.angle - 90) * (Math.PI / 180);
            const x = 130 + Math.cos(angleRad) * 130;
            const y = 130 + Math.sin(angleRad) * 130;
            
            return (
              <line
                key={index}
                x1="130"
                y1="130"
                x2={x}
                y2={y}
                stroke="url(#gradientOrbit2Mobile)"
                strokeWidth="1.5"
                strokeDasharray="4,4"
              />
            );
          })}
          
          <defs>
            <linearGradient id="gradientOrbit2Mobile" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#E3B552', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#60A5FA', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Dotted Connection Lines - Tablet (340px) */}
      <div 
        className="absolute top-1/2 left-1/2 w-[340px] h-[340px] pointer-events-none hidden sm:block md:hidden"
        style={{
          transform: 'translate(-50%, -50%)',
          animation: isOrbitPaused ? 'none' : 'orbitRotation 20s linear infinite'
        }}
      >
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
          {items.map((feature, index) => {
            const angleRad = (feature.angle - 90) * (Math.PI / 180);
            const x = 170 + Math.cos(angleRad) * 170;
            const y = 170 + Math.sin(angleRad) * 170;
            
            return (
              <line
                key={index}
                x1="170"
                y1="170"
                x2={x}
                y2={y}
                stroke="url(#gradientOrbit2Tablet)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            );
          })}
          
          <defs>
            <linearGradient id="gradientOrbit2Tablet" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#E3B552', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#60A5FA', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Dotted Connection Lines - Desktop (440px) */}
      <div 
        className="absolute top-1/2 left-1/2 w-[440px] h-[440px] pointer-events-none hidden md:block"
        style={{
          transform: 'translate(-50%, -50%)',
          animation: isOrbitPaused ? 'none' : 'orbitRotation 18s linear infinite'
        }}
      >
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
          {items.map((feature, index) => {
            const angleRad = (feature.angle - 90) * (Math.PI / 180);
            const x = 220 + Math.cos(angleRad) * 220;
            const y = 220 + Math.sin(angleRad) * 220;
            
            return (
              <line
                key={index}
                x1="220"
                y1="220"
                x2={x}
                y2={y}
                stroke="url(#gradientOrbit2Desktop)"
                strokeWidth="2"
                strokeDasharray="6,6"
              />
            );
          })}
          
          <defs>
            <linearGradient id="gradientOrbit2Desktop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#E3B552', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#60A5FA', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400 animate-ping" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400 animate-ping" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 animate-ping" style={{ animationDelay: '1.5s', animationDuration: '3s' }}></div>
    </div>
  );
}
