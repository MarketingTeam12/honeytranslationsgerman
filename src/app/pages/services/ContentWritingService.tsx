import { Link } from 'react-router-dom';
import { 
  PenTool, FileText, BookOpen, CheckCircle2, Clock, Shield,
  MessageSquare, Star, Mail, Phone, MessageCircle, Monitor,
  Megaphone, Newspaper, Target, Zap, Heart, Users,
  Award, TrendingUp, Search, Globe, Lightbulb, Edit3,
  FileCheck, Briefcase, Type, Layout, BarChart
} from 'lucide-react';

export function ContentWritingService() {
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white py-28 px-6 md:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-blue-400/20 bottom-10 left-10"></div>

        {/* Floating Words Animation */}
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          <div className="absolute text-6xl font-bold text-white animate-float" style={{ top: '10%', left: '5%', animationDelay: '0s' }}>Create</div>
          <div className="absolute text-4xl font-bold text-white animate-float" style={{ top: '30%', right: '10%', animationDelay: '2s' }}>Engage</div>
          <div className="absolute text-5xl font-bold text-white animate-float" style={{ bottom: '20%', left: '15%', animationDelay: '4s' }}>Convert</div>
          <div className="absolute text-3xl font-bold text-white animate-float" style={{ top: '60%', right: '20%', animationDelay: '1s' }}>Impact</div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl">
                <PenTool className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              Content Writing Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Words That Inform, Engage & Convert
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              At <strong className="text-white">Honey Translation</strong>, our Content Writing Service delivers clear, compelling, and purpose-driven content tailored to your audience and goals. Whether you need website content, marketing copy, or professional documentation, we craft words that reflect your brand voice and drive results.
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-xl">
                <Edit3 className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Why Choose Our Content Writing Services?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              Strong content builds trust, visibility, and credibility. Our writers focus on clarity, relevance, and impact.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Professional & Experienced Writers',
                description: 'Skilled content creators across industries',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Search,
                title: 'SEO-Friendly & Audience-Focused',
                description: 'Optimized for search and engagement',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Briefcase,
                title: 'Industry-Specific Expertise',
                description: 'Deep knowledge of your sector',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: FileCheck,
                title: 'Original, Plagiarism-Free Content',
                description: '100% unique and authentic writing',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Type,
                title: 'Clear Tone, Structure & Messaging',
                description: 'Easy to read and understand',
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

      {/* CONTENT WRITING SERVICES */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Content Writing Services We Offer
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Website Content Writing */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                🌐 Website Content Writing
              </h3>

              <div className="space-y-3">
                {[
                  'Homepage & service pages',
                  'About us & company profiles',
                  'Landing pages',
                  'UX-friendly web copy'
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
                📢 Marketing & Promotional Content
              </h3>

              <div className="space-y-3">
                {[
                  'Brochures & flyers',
                  'Email marketing content',
                  'Ad copies & campaign content',
                  'Product & service descriptions'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business & Professional */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                📝 Business & Professional Writing
              </h3>

              <div className="space-y-3">
                {[
                  'Company documents',
                  'Proposals & reports',
                  'Corporate communication',
                  'Internal documentation'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Blog & Article Writing */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-10 card-shadow-premium hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-[#151249] mb-6 text-center" style={{ fontSize: '1.75rem' }}>
                📚 Blog & Article Writing
              </h3>

              <div className="space-y-3">
                {[
                  'SEO blogs & articles',
                  'Informative & educational content',
                  'Industry insights & thought leadership'
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

      {/* MULTILINGUAL CONTENT SUPPORT */}
      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-10 card-shadow-premium">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-xl flex-shrink-0">
                <Globe className="w-10 h-10 text-white" />
              </div>
              
              <div>
                <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                  🌍 Multilingual Content Support
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We provide content writing support aligned with translation and localization needs to maintain consistency across languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We write content for industries such as:
            </p>
          </div>

          <div className="bg-gradient-to-br from-soft-blue to-white rounded-3xl p-10 card-shadow-premium">
            <div className="flex flex-wrap justify-center gap-4 text-lg text-[#151249]">
              {[
                'Business', 'Technology', 'Legal', 'Healthcare',
                'Education', 'Finance', 'Travel', 'Media & Marketing'
              ].map((industry, idx) => (
                <span key={idx} className="font-semibold">
                  {industry}{idx < 7 ? ' •' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT WRITING PROCESS */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Our Content Writing Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                number: '1',
                title: 'Understanding your goals & audience',
                icon: Target,
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                number: '2',
                title: 'Research & content planning',
                icon: Search,
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                number: '3',
                title: 'Content creation & structuring',
                icon: PenTool,
                gradient: 'from-green-400 to-green-500'
              },
              {
                number: '4',
                title: 'Review, refinement & quality check',
                icon: FileCheck,
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                number: '5',
                title: 'Final delivery',
                icon: Award,
                gradient: 'from-pink-400 to-pink-500'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 card-shadow-premium text-center hover:scale-105 transition-transform duration-300">
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

      {/* WHAT MAKES WRITING EFFECTIVE */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Makes Our Writing Effective?
            </h2>
          </div>

          {/* Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Purpose-Driven */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🎯 Purpose-Driven Content</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every word serves <strong className="text-[#151249]">a clear objective</strong>.
              </p>
            </div>

            {/* Research-Based */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🔍 Research-Based Writing</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Content backed by <strong className="text-[#151249]">industry understanding</strong>.
              </p>
            </div>

            {/* Brand Consistency */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">✨ Brand Consistency</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-[#151249]">Tone and voice</strong> aligned with your brand identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Clients Say
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-10 card-shadow-premium">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl text-gray-700 italic text-center mb-6 leading-relaxed">
              "The content was clear, professional, and exactly aligned with our brand. It helped improve engagement on our website."
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
              Let's Create Powerful Content for Your Brand
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Tell your story the right way.
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
              <span>Request Content Writing Support</span>
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
            transform: translateY(0px);
            opacity: 0.05;
          }
          50% { 
            transform: translateY(-20px);
            opacity: 0.1;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
