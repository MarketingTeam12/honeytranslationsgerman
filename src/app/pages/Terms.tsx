import { Link } from 'react-router-dom';
import { 
  FileText, Shield, CheckCircle2, AlertCircle, Clock, 
  Mail, DollarSign, Users, Lock, Award, XCircle, Scale,
  RefreshCw, Info
} from 'lucide-react';

export function Terms() {
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
              <FileText className="w-10 h-10 text-[#151249]" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-white mb-6" style={{
            fontSize: '3.5rem',
            lineHeight: '1.2',
            textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
          }}>
            Terms & Conditions
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-4 font-semibold">Honey Translation</p>

          {/* Intro */}
          <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto" style={{
            textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
          }}>
            These Terms & Conditions govern your use of Honey Translation's website and services. By accessing our website or placing an order, you agree to be bound by these terms. Please read them carefully.
          </p>

          {/* Last Updated */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Clock className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/80">Last Updated: January 2025</span>
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section className="py-12 bg-blue-50 px-6 md:px-8 border-y border-blue-200">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#151249] mb-2">Important Notice</h3>
              <p className="text-gray-700 leading-relaxed">
                Please read these terms and conditions carefully before using our translation services. By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - ALL SECTIONS */}
      <section className="py-20 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          
          {/* SECTION 1: DEFINITIONS */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Info className="w-5 h-5 text-[#00C4FF]" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  1. Definitions
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <div>
                  <span className="font-bold text-[#151249]">"Company," "We," "Us"</span>
                  <span className="text-gray-700"> refers to Honey Translation.</span>
                </div>
                <div>
                  <span className="font-bold text-[#151249]">"Client," "You"</span>
                  <span className="text-gray-700"> refers to any individual or entity using our services.</span>
                </div>
                <div>
                  <span className="font-bold text-[#151249]">"Services"</span>
                  <span className="text-gray-700"> refers to translation, localization, proofreading, and related language services provided by Honey Translation.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 2: SCOPE OF SERVICES */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Award className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  2. Scope of Services
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Honey Translation provides <strong className="text-[#151249]">professional language services</strong> as agreed upon in writing with the client.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#151249] rounded-full flex-shrink-0 mt-2"></div>
                  <span>Services are delivered based on the information and materials provided by the client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#151249] rounded-full flex-shrink-0 mt-2"></div>
                  <span>Any additional requests outside the agreed scope may require revised pricing or timelines.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 3: ORDERS & ACCEPTANCE */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  3. Orders & Acceptance
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    All orders must be <strong className="text-[#151249]">confirmed in writing via email or approved quotation</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    An order is considered accepted once <strong className="text-[#151249]">payment (full or partial, as agreed) is received</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    We reserve the right to <strong className="text-[#151249]">decline any order at our discretion</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 4: PRICING & PAYMENTS */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0 mt-1">
                <DollarSign className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  4. Pricing & Payments
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Prices are <strong className="text-[#151249]">provided in advance through a quotation</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Payment terms must be completed before delivery</strong> unless otherwise agreed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Late or non-payment may result in <strong className="text-[#151249]">suspension or cancellation of services</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 5: DELIVERY & TURNAROUND TIME */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  5. Delivery & Turnaround Time
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Delivery timelines are <strong className="text-[#151249]">estimates based on project scope and client responsiveness</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Delays caused by <strong className="text-[#151249]">incomplete or late client input</strong> are not the responsibility of Honey Translation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    We are not liable for delays caused by <strong className="text-[#151249]">factors beyond our reasonable control</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 6: REVISIONS & QUALITY ASSURANCE */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <RefreshCw className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  6. Revisions & Quality Assurance
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Reasonable revisions are included for <strong className="text-[#151249]">quality-related issues if requested within 7 days</strong> of delivery.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Revisions due to <strong className="text-[#151249]">changes in source content or new requirements</strong> may incur additional charges.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 7: REFUNDS & CANCELLATIONS */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <XCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  7. Refunds & Cancellations
                </h2>
              </div>
            </div>

            <div className="pl-14">
              <div className="bg-blue-50 border-l-4 border-[#00C4FF] p-6 rounded-r-xl">
                <p className="text-lg text-gray-700 leading-relaxed mb-3">
                  Refunds and cancellations are governed by our <strong className="text-[#151249]">Refund & Cancellation Policy</strong>.
                </p>
                <Link 
                  to="/refund-policy"
                  className="inline-flex items-center gap-2 text-[#00C4FF] hover:text-[#151249] font-semibold transition-colors"
                >
                  <span>View Refund Policy</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 8: CLIENT RESPONSIBILITIES */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  8. Client Responsibilities
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Clients agree to:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Provide <strong className="text-[#151249]">accurate, complete, and lawful content</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Ensure they have the <strong className="text-[#151249]">right to use and submit provided materials</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Review deliverables promptly</strong> and communicate concerns clearly.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 9: CONFIDENTIALITY */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Lock className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  9. Confidentiality
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    All client materials are <strong className="text-[#151249]">treated as confidential</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    We do not share files or information with third parties <strong className="text-[#151249]">except as required to deliver services or by law</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Confidentiality obligations <strong className="text-[#151249]">remain in effect after project completion</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 10: INTELLECTUAL PROPERTY */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Award className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  10. Intellectual Property
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Upon <strong className="text-[#151249]">full payment, translated content becomes the property of the client</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Honey Translation retains the right to use <strong className="text-[#151249]">anonymized samples for portfolio purposes</strong> unless otherwise agreed.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 11: LIMITATION OF LIABILITY */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  11. Limitation of Liability
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Honey Translation's liability is <strong className="text-[#151249]">limited to the amount paid for the services</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    We are <strong className="text-[#151249]">not liable for indirect, incidental, or consequential damages</strong>.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 12: TERMINATION */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gray-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <XCircle className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  12. Termination
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Either party may <strong className="text-[#151249]">terminate services with written notice</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#151249]">Fees for completed or in-progress work remain payable</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 13: GOVERNING LAW */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Scale className="w-5 h-5 text-[#00C4FF]" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  13. Governing Law
                </h2>
              </div>
            </div>

            <div className="pl-14">
              <p className="text-lg text-gray-700 leading-relaxed">
                These Terms & Conditions shall be governed by and interpreted in accordance with the <strong className="text-[#151249]">laws of Germany</strong>.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 14: CHANGES TO THESE TERMS */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0 mt-1">
                <RefreshCw className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  14. Changes to These Terms
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                We reserve the right to <strong className="text-[#151249]">update these Terms & Conditions at any time</strong>.
              </p>
              <p>
                Updates will be posted on this page with an <strong className="text-[#151249]">effective date</strong>.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 15: CONTACT INFORMATION */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-4" style={{ fontSize: '2rem' }}>
                  15. Contact Information
                </h2>
              </div>
            </div>

            <div className="pl-14">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you have questions about these Terms & Conditions, please contact us:
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

      {/* ACCEPTANCE FOOTER */}
      <section className="py-12 bg-gradient-to-br from-[#151249] to-[#1e1a5e] text-white px-6 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-6 h-6 text-yellow-400" />
            <p className="text-lg font-semibold">By using our services, you acknowledge that you have read, understood, and agree to these Terms & Conditions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
