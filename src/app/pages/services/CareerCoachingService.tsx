import { Link } from 'react-router-dom';
import { 
  Target, Briefcase, TrendingUp, CheckCircle2, Clock, Shield,
  FileText, Users, MessageSquare, Star, Mail, Phone, MessageCircle,
  Lightbulb, Award, MessageCircleMore, Compass, FileCheck, User,
  Building2, Globe, Zap, Heart, Video
} from 'lucide-react';

export function CareerCoachingService() {
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white py-28 px-6 md:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>
        <div className="blur-blob w-96 h-96 bg-blue-400/20 bottom-10 left-10"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl">
                <Target className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              Career Coaching Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Clarity, Confidence & Direction for Your Career Growth
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              At <strong className="text-white">Honey Translation</strong>, our Career Coaching Service is designed to help students, professionals, and job seekers identify the right career path, build strong profiles, and achieve long-term professional success. We provide practical, goal-oriented guidance tailored to your background and ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CAREER COACHING MATTERS */}
      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Why Career Coaching Matters
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Choosing or changing a career can be <strong className="text-[#151249]">confusing and overwhelming</strong>. With expert coaching, you gain clarity, direction, and confidence to make informed decisions.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: 'Personalized Career Guidance',
                description: 'Tailored advice for your unique journey',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Building2,
                title: 'Industry-Oriented Advice',
                description: 'Insights from real-world experience',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Zap,
                title: 'Practical, Actionable Strategies',
                description: 'Steps you can implement immediately',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Shield,
                title: 'Honest & Realistic Feedback',
                description: 'Clear expectations and genuine guidance',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Globe,
                title: 'Support for Domestic & International Careers',
                description: 'Local and global job market insights',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: TrendingUp,
                title: 'Long-Term Success Focus',
                description: 'Building sustainable career growth',
                gradient: 'from-[#00C4FF] to-blue-500'
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 card-shadow-premium hover:scale-105 transition-all duration-300 group"
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

      {/* OUR SERVICES */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Our Career Coaching Services
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Career Assessment & Guidance */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    📌 Career Assessment & Guidance
                  </h3>
                  <p className="text-gray-700 mb-4">We help you understand:</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'Your strengths & interests',
                  'Suitable career paths',
                  'Industry opportunities & trends'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume & Profile Building */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    📄 Resume & Profile Building
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'Professional resume structuring',
                  'Profile enhancement for job & academic applications',
                  'LinkedIn profile guidance'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interview Preparation */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MessageCircleMore className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    🗣 Interview Preparation
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'Mock interview sessions',
                  'Communication & confidence building',
                  'Industry-specific interview tips'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Planning for Abroad */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Globe className="w-8 h-8 text-[#151249]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    🌍 Career Planning for Abroad Opportunities
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'Career mapping aligned with study abroad plans',
                  'Course-to-career alignment guidance',
                  'Global job market insights'
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

      {/* WHO IS THIS FOR */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Who Is This Service For?
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-10 card-shadow-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Lightbulb, text: 'Students exploring career options' },
                { icon: Award, text: 'Fresh graduates' },
                { icon: Briefcase, text: 'Working professionals seeking growth' },
                { icon: TrendingUp, text: 'Career switch aspirants' },
                { icon: Globe, text: 'Candidates planning international careers' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-gradient-to-br from-soft-blue to-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 flex-1 pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Makes Our Coaching Different?
            </h2>
          </div>

          {/* Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Personalized Approach */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🤝 Personalized Approach</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every session is tailored to <strong className="text-[#151249]">your goals</strong>—no generic advice.
              </p>
            </div>

            {/* Practical & Realistic Guidance */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🔍 Practical & Realistic Guidance</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We focus on what <strong className="text-[#151249]">works in the real job market</strong>.
              </p>
            </div>

            {/* Continuous Support */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">⏱ Continuous Support</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We support you <strong className="text-[#151249]">beyond a single session</strong> when needed.
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

          <div className="bg-white rounded-3xl p-10 card-shadow-premium">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl text-gray-700 italic text-center mb-6 leading-relaxed">
              "The career guidance helped me gain clarity and confidence. I now have a clear plan for my future."
            </blockquote>

            <p className="text-center text-[#151249] font-semibold">— Career Coaching Client</p>
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
              Take the First Step Toward a Better Career
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Your career deserves expert guidance.
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
              <span>Book a Career Counseling Session</span>
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
    </div>
  );
}
