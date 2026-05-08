import { Link } from 'react-router-dom';
import { 
  Star, Quote, Heart, Award, Shield, Clock, CheckCircle2, 
  Sparkles, ArrowRight, MessageSquare, Mail, Phone, Users,
  Briefcase, Scale, FileText, Building
} from 'lucide-react';
import { useEffect } from 'react';

export function Testimonials() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      {/* SECTION 1: HERO + INTRO - What Our Clients Say */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white section-spacing px-6 md:px-8 overflow-hidden radial-glow-overlay">
        {/* Blur Blobs */}
        <div className="blur-blob w-96 h-96 bg-yellow-400/30 top-10 right-10" style={{ animationDelay: '0s' }}></div>
        <div className="blur-blob w-80 h-80 bg-[#00C4FF]/20 bottom-20 left-20" style={{ animationDelay: '5s' }}></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 world-map-pattern"></div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="space-y-8 animate-fadeInUp">
            {/* Star Rating */}
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-10 h-10 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Heart className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-white/90">Client Testimonials</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-white" style={{ 
              fontSize: '4rem',
              lineHeight: '1.1',
              fontWeight: '900',
              textShadow: '0px 3px 10px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.1)'
            }}>
              What Our <span className="gradient-text-shine">Clients Say</span>
            </h1>

            {/* Intro Text */}
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed" style={{
                fontWeight: '500',
                lineHeight: '1.7',
                textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
              }}>
                At Honey Translation, client satisfaction is at the heart of everything we do. Here's what our clients say about working with us.
              </p>

              <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
                We've helped <strong className="text-yellow-400">individuals, startups, and businesses</strong> communicate clearly across languages. Our testimonials reflect our commitment to quality, accuracy, and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED TESTIMONIALS - 3 Premium Cards */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">Featured Testimonials</h2>
            <p className="text-xl text-gray-700">What our clients are saying</p>
          </div>

          {/* Featured Testimonial Cards */}
          <div className="space-y-10">
            {/* Testimonial 1 - Sarah M. */}
            <div className="reveal-on-scroll">
              <div className="bg-gradient-to-br from-soft-blue to-white rounded-3xl p-12 card-shadow-premium hover-glow">
                <div className="max-w-5xl mx-auto">
                  {/* Star Rating */}
                  <div className="flex justify-center gap-2 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8">
                    <Quote className="absolute -top-4 -left-4 w-20 h-20 text-yellow-400/20" />
                    <blockquote className="text-2xl text-gray-800 leading-relaxed text-center italic font-medium pl-8">
                      "Honey Translation delivered accurate and professional translations ahead of schedule. Communication was smooth, and the quality exceeded our expectations."
                    </blockquote>
                  </div>

                  {/* Author */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#151249] text-lg">Sarah M.</p>
                        <p className="text-gray-600">Marketing Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - David R. */}
            <div className="reveal-on-scroll" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-to-br from-soft-blue to-white rounded-3xl p-12 card-shadow-premium hover-glow">
                <div className="max-w-5xl mx-auto">
                  {/* Star Rating */}
                  <div className="flex justify-center gap-2 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8">
                    <Quote className="absolute -top-4 -left-4 w-20 h-20 text-purple-400/20" />
                    <blockquote className="text-2xl text-gray-800 leading-relaxed text-center italic font-medium pl-8">
                      "We needed website localization for multiple languages, and Honey Translation handled everything flawlessly. Highly recommended."
                    </blockquote>
                  </div>

                  {/* Author */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center shadow-lg">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#151249] text-lg">David R.</p>
                        <p className="text-gray-600">Startup Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Lina K. */}
            <div className="reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-soft-blue to-white rounded-3xl p-12 card-shadow-premium hover-glow">
                <div className="max-w-5xl mx-auto">
                  {/* Star Rating */}
                  <div className="flex justify-center gap-2 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8">
                    <Quote className="absolute -top-4 -left-4 w-20 h-20 text-green-400/20" />
                    <blockquote className="text-2xl text-gray-800 leading-relaxed text-center italic font-medium pl-8">
                      "Clear pricing, fast turnaround, and excellent quality. Their attention to detail really stood out."
                    </blockquote>
                  </div>

                  {/* Author */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center shadow-lg">
                        <Scale className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#151249] text-lg">Lina K.</p>
                        <p className="text-gray-600">Legal Consultant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INDUSTRY-SPECIFIC FEEDBACK */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">Industry-Specific Feedback</h2>
            <p className="text-xl text-gray-700">What professionals in different sectors are saying</p>
          </div>

          {/* Industry Feedback Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Business & Marketing */}
            <div className="reveal-on-scroll">
              <div className="bg-white rounded-3xl p-10 card-shadow-premium hover-glow h-full">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mb-6 shadow-lg">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300 mb-6">
                  <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">Business & Marketing</span>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-12 h-12 text-blue-400/20" />
                  <blockquote className="text-xl text-gray-800 leading-relaxed italic pl-8">
                    "Professional tone, culturally accurate translations, and great responsiveness."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Legal & Technical */}
            <div className="reveal-on-scroll" style={{ animationDelay: '100ms' }}>
              <div className="bg-white rounded-3xl p-10 card-shadow-premium hover-glow h-full">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mb-6 shadow-lg">
                  <Scale className="w-10 h-10 text-white" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-300 mb-6">
                  <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">Legal & Technical</span>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-12 h-12 text-purple-400/20" />
                  <blockquote className="text-xl text-gray-800 leading-relaxed italic pl-8">
                    "Precise terminology and reliable delivery timelines."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Personal Documents */}
            <div className="reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="bg-white rounded-3xl p-10 card-shadow-premium hover-glow h-full">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mb-6 shadow-lg">
                  <FileText className="w-10 h-10 text-white" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-300 mb-6">
                  <span className="text-sm font-bold text-green-700 uppercase tracking-wider">Personal Documents</span>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-12 h-12 text-green-400/20" />
                  <blockquote className="text-xl text-gray-800 leading-relaxed italic pl-8">
                    "Helpful, friendly service with excellent results."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CLIENTS TRUST HONEY TRANSLATION */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-[#151249] mb-6">Why Clients Trust Honey Translation</h2>
          </div>

          {/* Trust Factors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: Award,
                title: 'Experienced Professional Translators',
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Users,
                title: 'Native-Language Expertise',
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: CheckCircle2,
                title: 'Quality Review Process',
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: Shield,
                title: 'Confidential Handling of Documents',
                gradient: 'from-pink-400 to-pink-500'
              },
              {
                icon: Clock,
                title: 'On-Time Delivery',
                gradient: 'from-yellow-400 to-yellow-500'
              }
            ].map((factor, index) => (
              <div 
                key={index}
                className="reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${factor.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 hover:rotate-6 transition-all duration-500`}>
                    <factor.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="font-bold text-[#151249] text-lg leading-tight">{factor.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CLIENT LOGOS / SOCIAL PROOF */}
      <section className="section-spacing bg-soft-blue px-6 md:px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00C4FF]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-400/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center reveal-on-scroll">
            <h2 className="text-[#151249] mb-12">Trusted by Organizations Worldwide</h2>

            {/* Placeholder for Client Logos */}
            <div className="bg-white rounded-3xl p-16 card-shadow-premium">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
                {[
                  { name: 'Global Corp', icon: Building },
                  { name: 'Tech Solutions', icon: Sparkles },
                  { name: 'Legal Associates', icon: Scale },
                  { name: 'Medical Center', icon: Heart }
                ].map((client, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <client.icon className="w-12 h-12 text-gray-500" />
                    </div>
                    <p className="text-sm font-semibold text-gray-600">{client.name}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 italic mt-12">
                Logos or company names can be displayed here to strengthen credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: LEAVE A REVIEW - Share Your Experience */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-5xl text-center reveal-on-scroll">
          <div className="bg-gradient-to-br from-[#151249] to-[#1e1a5e] rounded-3xl p-16 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C4FF]/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-2xl">
                  <MessageSquare className="w-12 h-12 text-[#151249]" />
                </div>
              </div>

              <h2 className="text-white mb-6">Share Your Experience</h2>

              <p className="text-xl text-white/90 mb-4 leading-relaxed">
                Have you worked with Honey Translation?
              </p>

              <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                We'd love to hear your feedback. Your review helps us improve and helps others choose with confidence.
              </p>

              {/* CTA Button */}
              <Link 
                to="/contact"
                className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl shadow-2xl hover:shadow-[0_0_60px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105 text-xl font-bold"
              >
                <Star className="w-6 h-6" />
                <span>Leave a Review</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CALL TO ACTION - Ready to Work With Us? */}
      <section className="section-spacing bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white px-6 md:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 world-map-pattern opacity-20"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/30 top-10 left-1/4"></div>
        <div className="blur-blob w-96 h-96 bg-[#00C4FF]/20 bottom-10 right-1/4"></div>

        <div className="container mx-auto max-w-5xl text-center relative z-10 reveal-on-scroll">
          <h2 className="text-white mb-8" style={{
            fontSize: '3.5rem',
            textShadow: '0px 3px 12px rgba(0,0,0,0.4)'
          }}>
            Ready to Work With Us?
          </h2>

          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed" style={{
            fontWeight: '500',
            textShadow: '0px 2px 8px rgba(0,0,0,0.3)'
          }}>
            Join our <strong className="text-yellow-400">satisfied clients</strong> and experience clear, professional translation services.
          </p>

          {/* CTA Button */}
          <Link 
            to="/contact"
            className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl shadow-2xl hover:shadow-[0_0_60px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105 text-xl font-bold"
          >
            <Sparkles className="w-6 h-6" />
            <span>Request a Quote</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>

          {/* Trust Indicators */}
          <div className="flex justify-center gap-6 flex-wrap mt-12">
            {['Professional Service', 'Fast Turnaround', 'Quality Guaranteed'].map((badge, index) => (
              <div 
                key={index}
                className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                <span className="text-sm font-semibold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CONTACT INFORMATION */}
      <section className="section-spacing bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-5xl text-center reveal-on-scroll">
          <h2 className="text-[#151249] mb-8">Questions or Want to Discuss Your Project?</h2>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <a 
              href="mailto:sales@honeytranslations.com"
              className="group bg-soft-blue rounded-3xl p-10 card-shadow-premium hover-glow transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#151249] mb-2">Email Us</h3>
              <p className="text-[#00C4FF] font-semibold">sales@honeytranslations.com</p>
            </a>

            {/* Contact Page */}
            <Link 
              to="/contact"
              className="group bg-soft-blue rounded-3xl p-10 card-shadow-premium hover-glow transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#151249] mb-2">Contact Page</h3>
              <p className="text-[#00C4FF] font-semibold flex items-center gap-2 justify-center">
                Visit Contact Page
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </p>
            </Link>
          </div>

          <p className="text-xl text-gray-700 font-medium">
            We're happy to help.
          </p>
        </div>
      </section>
    </div>
  );
}