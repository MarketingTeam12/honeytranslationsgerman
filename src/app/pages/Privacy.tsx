import { Link } from 'react-router-dom';
import { 
  Shield, Lock, Eye, UserCheck, FileText, AlertCircle, Clock,
  Mail, Database, Share2, Cookie, Globe, Users, RefreshCw, Info
} from 'lucide-react';

export function Privacy() {
  return (
    <div className="pt-16">
      {/* HEADER SECTION */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white py-24 px-6 md:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl">
              <Shield className="w-10 h-10 text-[#151249]" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-white mb-6" style={{
            fontSize: '3.5rem',
            lineHeight: '1.2',
            textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
          }}>
            Privacy Policy
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-4 font-semibold">Honey Translation</p>

          {/* Intro */}
          <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
            textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
          }}>
            At Honey Translation, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our website or services.
          </p>
        </div>
      </section>

      {/* KEY PRINCIPLES */}
      <section className="py-16 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: 'Data Protection',
                description: 'Your information is encrypted and securely stored with industry-standard measures.'
              },
              {
                icon: Eye,
                title: 'Transparency',
                description: 'Clear information about how we collect, use, and protect your data.'
              },
              {
                icon: UserCheck,
                title: 'Your Rights',
                description: 'Full control over your personal information and data preferences.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl card-shadow-premium text-center hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#151249] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - ALL SECTIONS */}
      <section className="py-20 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          
          {/* SECTION 1: INFORMATION WE COLLECT */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Database className="w-5 h-5 text-[#00C4FF]" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  1. Information We Collect
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                We may collect the following types of information:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00C4FF] rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Personal information</strong> (name, email address, contact details)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00C4FF] rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Project-related content</strong> submitted for translation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00C4FF] rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Communication records</strong> (emails, contact forms)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00C4FF] rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Payment and billing information</strong> (processed securely by third-party providers)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00C4FF] rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Technical data</strong> such as IP address, browser type, and usage data
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 2: HOW WE USE YOUR INFORMATION */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  2. How We Use Your Information
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                We use your information to:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Provide and deliver</strong> our translation services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Communicate with you</strong> regarding projects or inquiries
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Process payments</strong> and issue invoices
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Improve our website and services</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Comply with legal or regulatory obligations</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 3: LEGAL BASIS FOR PROCESSING */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  3. Legal Basis for Processing
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We process personal data based on one or more of the following:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">Your consent</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">Performance of a contract</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">Compliance with legal obligations</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">Legitimate business interests</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 4: DATA CONFIDENTIALITY & SECURITY */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Lock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  4. Data Confidentiality & Security
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    All client files and personal data are treated as <strong className="text-[#151249]">strictly confidential</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    We implement appropriate <strong className="text-[#151249]">technical and organizational measures</strong> to protect your data.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Access to data is <strong className="text-[#151249]">limited to authorized personnel only</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 5: SHARING OF INFORMATION */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Share2 className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  5. Sharing of Information
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl mb-4">
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  We do not sell or rent your personal data.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Information may be shared only:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    With <strong className="text-[#151249]">trusted translators or partners</strong> solely for service delivery
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    With <strong className="text-[#151249]">payment processors</strong> for transaction handling
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    When <strong className="text-[#151249]">required by law or legal authorities</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 6: DATA RETENTION */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  6. Data Retention
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    We retain personal data only for <strong className="text-[#151249]">as long as necessary to fulfill service purposes</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Project files may be <strong className="text-[#151249]">deleted upon request</strong> unless retention is legally required.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 7: COOKIES & WEBSITE ANALYTICS */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Cookie className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  7. Cookies & Website Analytics
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our website may use cookies or similar technologies to:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Cookie className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Improve user experience</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Cookie className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Analyze website traffic</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Cookie className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Understand visitor behavior</strong>
                  </span>
                </li>
              </ul>

              <div className="bg-pink-50 border border-pink-200 p-4 rounded-xl mt-4">
                <p className="text-base text-gray-700">
                  You may disable cookies through your browser settings.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 8: YOUR RIGHTS */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <UserCheck className="w-5 h-5 text-[#00C4FF]" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  8. Your Rights
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Depending on your location, you may have the right to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Access your personal data',
                  'Request correction or deletion',
                  'Withdraw consent',
                  'Object to data processing',
                  'Request data portability',
                  'Lodge a complaint'
                ].map((right, index) => (
                  <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <UserCheck className="w-5 h-5 text-[#00C4FF] flex-shrink-0 mt-0.5" />
                    <span className="text-base text-gray-700 font-medium">{right}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-700 leading-relaxed font-semibold mt-6">
                To exercise your rights, please contact us.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 9: THIRD-PARTY LINKS */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  9. Third-Party Links
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Our website may contain links to third-party websites.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are <strong className="text-[#151249]">not responsible for the privacy practices</strong> of those sites.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 10: CHANGES TO THIS PRIVACY POLICY */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gray-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <RefreshCw className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  10. Changes to This Privacy Policy
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time.
              </p>
              <p>
                Any changes will be posted on this page with an <strong className="text-[#151249]">updated effective date</strong>.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 11: CONTACT US */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  11. Contact Us
                </h2>
              </div>
            </div>

            <div className="pl-14">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you have questions or concerns about this Privacy Policy or how your data is handled, please contact us:
              </p>

              <div className="bg-soft-blue rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#00C4FF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:sales@honeytranslations.com" className="text-lg text-[#00C4FF] hover:text-[#151249] transition-colors font-semibold">
                      sales@honeytranslations.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#00C4FF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider mb-1">Contact Page</p>
                    <Link to="/contact" className="text-lg text-[#00C4FF] hover:text-[#151249] transition-colors font-semibold">
                      Visit Our Contact Page →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COMMITMENT FOOTER */}
      <section className="py-12 bg-gradient-to-br from-[#151249] to-[#1e1a5e] text-white px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-yellow-400" />
            <p className="text-lg font-semibold">Your privacy and data security are our top priorities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}