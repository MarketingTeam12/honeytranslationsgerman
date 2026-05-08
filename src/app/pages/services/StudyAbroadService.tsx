import { Link } from 'react-router-dom';
import { 
  BookOpen, Globe, Award, CheckCircle2, Clock, Shield,
  FileText, Users, Target, MessageSquare, MapPin, Star,
  Mail, Phone, MessageCircle, TrendingUp, Lightbulb,
  FileCheck, Briefcase, Plane, Home, Info
} from 'lucide-react';

export function StudyAbroadService() {
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
                <BookOpen className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              Study Abroad Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Turn Your Dream of Studying Abroad into Reality
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              At <strong className="text-white">Honey Translation</strong>, our Study Abroad Service is designed to support students at every stage of their international education journey. From planning and applications to documentation and pre-departure support, we make studying abroad simple, transparent, and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* WHY STUDY ABROAD WITH US */}
      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Why Study Abroad with Honey Translation?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Studying abroad opens doors to <strong className="text-[#151249]">global exposure, quality education, and better career opportunities</strong>. Our role is to guide you clearly and honestly through the process.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Student-Focused Guidance',
                description: 'Your success is our priority',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Globe,
                title: 'Country & University-Specific Support',
                description: 'Expert knowledge for each destination',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: FileCheck,
                title: 'Documentation Under One Roof',
                description: 'Translation, attestation & more',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Clock,
                title: 'Clear Timelines & Realistic Advice',
                description: 'Transparent process from start to finish',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: Shield,
                title: 'Continuous Support',
                description: 'We\'re with you until departure',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: TrendingUp,
                title: 'Career-Oriented Approach',
                description: 'Focus on your long-term goals',
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
              Our Study Abroad Services
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Profile Evaluation */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    📌 Profile Evaluation & Counseling
                  </h3>
                  <p className="text-gray-700 mb-4">We assess your:</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {[
                  'Academic background',
                  'Career goals',
                  'Budget & preferences'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 italic text-sm">
                And recommend suitable countries, courses, and universities.
              </p>
            </div>

            {/* University & Course Selection */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    📝 University & Course Selection
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'Shortlisting universities',
                  'Course comparison & guidance',
                  'Application strategy planning'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application & Documentation */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    📄 Application & Documentation Support
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'Application filing assistance',
                  'SOP & document guidance',
                  'Certified translation of academic documents',
                  'Apostille & attestation services'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visa Assistance */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Briefcase className="w-8 h-8 text-[#151249]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    🛂 Visa Assistance (Support)
                  </h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  'Visa documentation checklist',
                  'Application preparation support',
                  'Interview guidance'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-xl">
                <p className="text-gray-700 italic text-sm">
                  *Visa approvals are subject to embassy decisions. We assist with preparation only.
                </p>
              </div>
            </div>

            {/* Pre-Departure Guidance */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-10 card-shadow-premium md:col-span-2">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    ✈️ Pre-Departure Guidance
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Travel & accommodation tips',
                  'Country-specific dos and don\'ts',
                  'Basic cultural & lifestyle guidance'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="py-24 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center shadow-xl">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Popular Study Destinations
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              We assist students planning to study in:
            </p>
          </div>

          {/* Countries Grid */}
          <div className="bg-white rounded-3xl p-10 card-shadow-premium">
            <div className="flex flex-wrap justify-center gap-4 text-lg text-[#151249]">
              {[
                'USA', 'UK', 'Canada', 'Australia', 'Germany', 'France',
                'Ireland', 'Netherlands', 'New Zealand', 'Singapore', 'and more'
              ].map((country, idx) => (
                <span key={idx} className="font-semibold">
                  {country}{idx < 10 ? ' •' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO CAN APPLY */}
      <section className="py-24 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Who Can Apply?
            </h2>
          </div>

          <div className="bg-gradient-to-br from-soft-blue to-white rounded-3xl p-10 card-shadow-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: BookOpen, text: 'Students seeking undergraduate programs' },
                { icon: Award, text: 'Postgraduate & master\'s aspirants' },
                { icon: FileText, text: 'Diploma & certification course applicants' },
                { icon: Globe, text: 'Students planning language or pathway programs' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
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

      {/* TESTIMONIAL */}
      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              What Students Say
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-10 card-shadow-premium">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl text-gray-700 italic text-center mb-6 leading-relaxed">
              "The team guided me step by step and helped with my documents and applications. The process felt smooth and clear."
            </blockquote>

            <p className="text-center text-[#151249] font-semibold">— Study Abroad Student</p>
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
              Start Your Study Abroad Journey Today
            </h2>
            <p className="text-2xl text-yellow-400 mb-10 font-semibold">
              Your global education journey starts with the right guidance.
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
              <span>Book a Free Consultation</span>
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