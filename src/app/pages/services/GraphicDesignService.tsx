import { Link } from 'react-router-dom';
import { 
  Palette, Layers, Pen, CheckCircle2, Clock, Shield,
  MessageSquare, Star, Mail, Phone, MessageCircle, Monitor,
  Megaphone, FileText, Target, Zap, Heart, Users,
  Award, Image, Layout, Sparkles, Brush, Grid3x3,
  FileCheck, Briefcase, Presentation, Globe, TrendingUp
} from 'lucide-react';

export function GraphicDesignService() {
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white py-28 px-6 md:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-pink-400/20 bottom-10 left-10"></div>

        {/* Floating Design Elements */}
        <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
          <div className="absolute w-32 h-32 border-4 border-yellow-400 rounded-full" style={{ top: '15%', left: '10%', animation: 'float 8s ease-in-out infinite' }}></div>
          <div className="absolute w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl" style={{ top: '60%', right: '15%', animation: 'float 6s ease-in-out infinite 2s' }}></div>
          <div className="absolute w-40 h-40 border-4 border-blue-400" style={{ bottom: '25%', left: '20%', animation: 'float 10s ease-in-out infinite 1s' }}></div>
          <div className="absolute w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400" style={{ top: '40%', right: '25%', animation: 'float 7s ease-in-out infinite 3s', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl animate-pulse">
                <Palette className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              Graphic Designing Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Creative Designs That Communicate, Engage & Inspire
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              At <strong className="text-white">Honey Translation</strong>, our Graphic Designing Service helps businesses and individuals visually communicate their message with clarity and impact. We create professional, creative, and brand-consistent designs that strengthen your identity and leave a lasting impression.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center shadow-xl">
                <Brush className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Why Choose Our Graphic Designing Services?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              Good design is more than visuals—it's communication. Our designers focus on creativity, usability, and brand alignment.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Creative & Experienced Designers',
                description: 'Skilled professionals with design expertise',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Target,
                title: 'Brand-Focused Design Approach',
                description: 'Designs aligned with your brand identity',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Sparkles,
                title: 'Clean, Modern & Professional',
                description: 'Visually appealing and impactful',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: FileCheck,
                title: 'Print-Ready & Digital-Ready',
                description: 'Delivered in all required formats',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Zap,
                title: 'Fast Turnaround & Reliable Support',
                description: 'Quick delivery with quality assurance',
                gradient: 'from-pink-400 to-pink-500'
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 card-shadow-premium hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#151249] mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN SERVICES */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Graphic Design Services We Offer
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Corporate & Business Design */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                🏢 Corporate & Business Design
              </h3>

              <div className="space-y-3">
                {[
                  'Company profiles',
                  'Business presentations',
                  'Reports & corporate documents',
                  'Letterheads & stationery'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing & Promotional */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center shadow-lg">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                📢 Marketing & Promotional Design
              </h3>

              <div className="space-y-3">
                {[
                  'Brochures & flyers',
                  'Posters & banners',
                  'Social media creatives',
                  'Advertisement designs'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Digital & Web Design */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                🌐 Digital & Web Design Support
              </h3>

              <div className="space-y-3">
                {[
                  'Website visuals & banners',
                  'UI elements & graphics',
                  'Landing page creatives',
                  'Email marketing visuals'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Educational & Informational */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                  <Image className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                🎓 Educational & Informational Design
              </h3>

              <div className="space-y-3">
                {[
                  'Training materials',
                  'Infographics',
                  'E-learning visuals',
                  'Instructional content'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MULTILINGUAL DESIGN SUPPORT */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Multilingual Design Support
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We specialize in multilingual graphic design, ensuring:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Correct Fonts & Language Compatibility',
                description: 'Proper typography for all languages'
              },
              {
                icon: Layout,
                title: 'Layout Balance Across Languages',
                description: 'Consistent design across translations'
              },
              {
                icon: FileCheck,
                title: 'Design Consistency for Translated Content',
                description: 'Unified visual identity everywhere'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 card-shadow-premium text-center hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#151249] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 card-shadow-premium">
            <p className="text-lg text-gray-700 text-center italic">
              💡 Ideal for brochures, reports, and marketing materials used across regions.
            </p>
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Our Design Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                number: '1',
                title: 'Understanding your brand & requirements',
                icon: Target,
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                number: '2',
                title: 'Concept creation & layout planning',
                icon: Layers,
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                number: '3',
                title: 'Design development',
                icon: Palette,
                gradient: 'from-green-400 to-green-500'
              },
              {
                number: '4',
                title: 'Review & revisions',
                icon: FileCheck,
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                number: '5',
                title: 'Final delivery in required formats',
                icon: Award,
                gradient: 'from-pink-400 to-pink-500'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-soft-blue rounded-2xl p-6 card-shadow-premium text-center hover:scale-105 transition-transform duration-300">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#151249] mb-2">{step.number}️⃣</div>
                <p className="text-gray-700 leading-relaxed">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES DESIGNS EFFECTIVE */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Makes Our Designs Effective?
            </h2>
          </div>

          {/* Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Visual Clarity */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🎨 Visual Clarity</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Designs that <strong className="text-[#151249]">communicate instantly</strong>.
              </p>
            </div>

            {/* Brand Consistency */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Grid3x3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🧩 Brand Consistency</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Aligned <strong className="text-[#151249]">colors, fonts, and tone</strong>.
              </p>
            </div>

            {/* Global Readiness */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🌍 Global Readiness</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Designs adapted for <strong className="text-[#151249]">multilingual & international</strong> use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Clients Say
            </h2>
          </div>

          <div className="bg-gradient-to-br from-soft-blue to-white rounded-3xl p-10 card-shadow-premium">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl text-gray-700 italic text-center mb-6 leading-relaxed">
              "The designs were clean, professional, and perfectly aligned with our brand. Excellent attention to detail."
            </blockquote>

            <p className="text-center text-[#151249] font-semibold">Business Client</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-[#151249] to-[#1e1a5e] text-white px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 bottom-10 right-10"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-white mb-6" style={{ fontSize: '2.75rem' }}>
              Let's Design Something Great Together
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Bring your ideas to life with creative design support.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="tel:+3220000000"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>

            <a 
              href="https://wa.me/917299005577"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-green-500 text-white font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>

            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-[#151249] font-bold hover:scale-105 transition-transform shadow-xl"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Request a Design Quote</span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <a href="mailto:sales@honeytranslations.com" className="text-white hover:text-yellow-400 transition-colors font-semibold">
                    sales@honeytranslations.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Support</p>
                  <p className="text-white font-semibold">24/7 Assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg);
          }
          25% { 
            transform: translate(10px, -10px) rotate(5deg);
          }
          50% { 
            transform: translate(-10px, -20px) rotate(-5deg);
          }
          75% { 
            transform: translate(-5px, -10px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
}
