import { Link } from 'react-router-dom';
import { 
  GraduationCap, Globe, Award, CheckCircle2, Clock, Shield,
  FileText, Users, Target, MessageSquare, MapPin, Star,
  Mail, Phone, MessageCircle, Heart, Lightbulb, TrendingUp,
  FileCheck, Briefcase
} from 'lucide-react';

export function OverseasEducationService() {
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
                <GraduationCap className="w-10 h-10 text-[#151249]" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white mb-6" style={{
              fontSize: '3.5rem',
              lineHeight: '1.2',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
            }}>
              Overseas Educational Consultant Service
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-yellow-400 mb-8 font-semibold">
              Guiding Your Global Education Journey with Confidence
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
              textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
            }}>
              At <strong className="text-white">Honey Translation</strong>, our Overseas Educational Consultant Service helps students make informed decisions about studying abroad. From choosing the right course and country to application support and documentation, we guide you at every step of your international education journey.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[#151249] mb-6" style={{ fontSize: '2.75rem' }}>
              Why Choose Our Overseas Education Consulting?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Studying abroad is a <strong className="text-[#151249]">life‑changing decision</strong>. Our experts simplify the process and help you avoid costly mistakes.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Experienced Education Counselors',
                description: 'Expert advisors with proven track records',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Target,
                title: 'Personalized Guidance',
                description: 'Tailored advice based on your unique profile',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Lightbulb,
                title: 'Transparent Process & Honest Advice',
                description: 'Clear expectations and realistic outcomes',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: CheckCircle2,
                title: 'End‑to‑End Application Support',
                description: 'Complete assistance from start to finish',
                gradient: 'from-yellow-400 to-yellow-500'
              },
              {
                icon: FileText,
                title: 'Documentation Support',
                description: 'Translation, attestation & visa processes',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: Clock,
                title: 'Timely Assistance',
                description: 'Meet deadlines without stress',
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
              Our Education Consulting Services
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Course & Country Selection */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    📌 Course & Country Selection
                  </h3>
                  <p className="text-gray-700 mb-4">We help you choose the right:</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'Country & university',
                  'Course aligned with your career goals',
                  'Budget‑friendly and high‑ROI options'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* University Application Support */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    📝 University Application Support
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  'University shortlisting',
                  'Application filing & follow‑ups',
                  'Statement of Purpose (SOP) guidance',
                  'Recommendation letter support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documentation & Translation */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    📄 Documentation & Translation Support
                  </h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  'Academic document review',
                  'Certified translation of certificates',
                  'Apostille & attestation assistance'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-r-xl">
                <p className="text-gray-700 italic text-sm">
                  *All services are handled under one roof for your convenience.
                </p>
              </div>
            </div>

            {/* Visa Guidance */}
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-10 card-shadow-premium">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Briefcase className="w-8 h-8 text-[#151249]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#151249] mb-4" style={{ fontSize: '1.75rem' }}>
                    🛂 Visa Guidance (Support Service)
                  </h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  'Visa documentation checklist',
                  'Interview preparation guidance',
                  'Application support'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-xl">
                <p className="text-gray-700 italic text-sm">
                  *Final visa decisions are made by embassies; we assist with preparation only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDY DESTINATIONS */}
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
              Study Destinations We Support
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
                'Italy', 'Ireland', 'Netherlands', 'New Zealand', 'Singapore', 'and more'
              ].map((country, idx) => (
                <span key={idx} className="font-semibold">
                  {country}{idx < 11 ? ' •' : ''}
                </span>
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
              What Makes Us Different?
            </h2>
          </div>

          {/* Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Student-First Approach */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🤝 Student‑First Approach</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We recommend what's best for <strong className="text-[#151249]">you</strong>, not what's easiest.
              </p>
            </div>

            {/* Accurate & Honest Guidance */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">🔍 Accurate & Honest Guidance</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Clear expectations, realistic outcomes, <strong className="text-[#151249]">no false promises</strong>.
              </p>
            </div>

            {/* Continuous Support */}
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#151249] mb-4">⏰ Continuous Support</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We support you from <strong className="text-[#151249]">inquiry to departure</strong>.
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
              "The guidance was clear and honest. Honey Translation helped me choose the right university and prepare my documents smoothly."
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
              Take the first step toward your global education dream.
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
