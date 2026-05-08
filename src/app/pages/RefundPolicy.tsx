import { Link } from 'react-router-dom';
import { 
  FileText, AlertCircle, CheckCircle2, XCircle, 
  RotateCcw, Clock, Mail, HelpCircle, Shield
} from 'lucide-react';

export function RefundPolicy() {
  return (
    <div className="pt-16">
      {/* SECTION 1: HEADER - Clear & Transparent Policies */}
      <section className="relative bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white py-24 px-6 md:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 world-map-pattern opacity-10"></div>
        <div className="blur-blob w-96 h-96 bg-yellow-400/20 top-10 right-10"></div>

        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl">
              <FileText className="w-10 h-10 text-[#151249]" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-white mb-6" style={{
            fontSize: '3rem',
            lineHeight: '1.2',
            textShadow: '0px 3px 10px rgba(0,0,0,0.4)'
          }}>
            Refund & Cancellation Policy
          </h1>

          {/* Intro */}
          <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto" style={{
            textShadow: '0px 2px 6px rgba(0,0,0,0.3)'
          }}>
            At Honey Translation, we value <strong className="text-yellow-400">transparency and fairness</strong>. This policy explains how cancellations and refunds are handled for our translation services.
          </p>
        </div>
      </section>

      {/* POLICY CONTENT CONTAINER */}
      <section className="py-20 bg-white px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          
          {/* SECTION 2: SCOPE OF POLICY */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="w-5 h-5 text-[#00C4FF]" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-6" style={{ fontSize: '2rem' }}>
                  Scope of Policy
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                This policy applies to all translation and language services provided by Honey Translation, including but not limited to <strong className="text-[#151249]">document translation, website translation, localization, proofreading, and related services</strong>.
              </p>
              <p>
                By placing an order with us, you agree to the terms outlined below.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 3: ORDER CANCELLATION - Before Work Begins */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-6" style={{ fontSize: '2rem' }}>
                  Order Cancellation — Before Work Begins
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Clients may request cancellation of a service <strong className="text-[#151249]">before work has started</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    If cancellation is requested before the project begins, a <strong className="text-[#151249]">full refund may be issued</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Cancellation requests must be submitted <strong className="text-[#151249]">in writing via email or contact form</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 4: CANCELLATION AFTER WORK HAS STARTED */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0 mt-1">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-6" style={{ fontSize: '2rem' }}>
                  Cancellation After Work Has Started
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                If a cancellation request is made <strong className="text-[#151249]">after the translation work has begun</strong>:
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Refunds will be <strong className="text-[#151249]">partial</strong>, based on the amount of work completed.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Any completed or in-progress work will be <strong className="text-[#151249]">charged accordingly</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Administrative or processing costs may be deducted.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 5: NON-REFUNDABLE SITUATIONS */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <XCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-6" style={{ fontSize: '2rem' }}>
                  Non-Refundable Situations
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Refunds will <strong className="text-[#151249]">not be provided</strong> in the following cases:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Work has been <strong className="text-[#151249]">completed and delivered as agreed</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Delays caused by <strong className="text-[#151249]">incomplete or incorrect client information</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Client <strong className="text-[#151249]">changes requirements after work has begun</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Dissatisfaction due to <strong className="text-[#151249]">subjective preferences not previously specified</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 6: QUALITY CONCERNS & REVISIONS */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <RotateCcw className="w-5 h-5 text-[#00C4FF]" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-6" style={{ fontSize: '2rem' }}>
                  Quality Concerns & Revisions
                </h2>
                <p className="text-lg text-[#00C4FF] font-semibold">We're Here to Help</p>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                If you are not satisfied with the delivered translation due to quality concerns:
              </p>

              <div className="bg-blue-50 border border-[#00C4FF]/20 p-6 rounded-xl space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[#00C4FF]">1</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Please notify us <strong className="text-[#151249]">within 7 days of delivery</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[#00C4FF]">2</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    We will review the issue and provide <strong className="text-[#151249]">reasonable revisions at no additional cost</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00C4FF]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[#00C4FF]">3</span>
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Our goal is to ensure <strong className="text-[#151249]">accuracy and client satisfaction</strong>.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 7: REFUND PROCESSING */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-6" style={{ fontSize: '2rem' }}>
                  Refund Processing
                </h2>
                <p className="text-lg text-gray-600">How Refunds Are Handled</p>
              </div>
            </div>

            <div className="pl-14 space-y-4 text-lg text-gray-700 leading-relaxed">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#151249] rounded-full flex-shrink-0 mt-2"></div>
                <p>
                  Approved refunds will be processed using the <strong className="text-[#151249]">original payment method</strong>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#151249] rounded-full flex-shrink-0 mt-2"></div>
                <p>
                  Refund processing time may take <strong className="text-[#151249]">5–10 business days</strong>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#151249] rounded-full flex-shrink-0 mt-2"></div>
                <p>
                  Any transaction or processing fees charged by payment providers may be non-refundable.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 8: CLIENT RESPONSIBILITIES */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-6" style={{ fontSize: '2rem' }}>
                  Client Responsibilities
                </h2>
              </div>
            </div>

            <div className="pl-14 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                To avoid delays or disputes, clients are responsible for:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Providing <strong className="text-[#151249]">complete and accurate source content</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Communicating <strong className="text-[#151249]">requirements clearly before work begins</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 leading-relaxed">
                    Responding <strong className="text-[#151249]">promptly to queries during the project</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-16"></div>

          {/* SECTION 9: POLICY CHANGES */}
          <div className="mb-16">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertCircle className="w-5 h-5 text-gray-600" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#151249]">Policy Changes</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Honey Translation reserves the right to update or modify this policy at any time. Any changes will be posted on this page with an updated effective date.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 10: CONTACT INFORMATION */}
      <section className="py-16 bg-soft-blue px-6 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl p-10 card-shadow-premium">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C4FF] to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-[#151249] mb-3" style={{ fontSize: '2rem' }}>
                  Questions or Requests?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If you have questions regarding cancellations or refunds, please contact us:
                </p>
              </div>
            </div>

            <div className="space-y-4 pl-22">
              {/* Email */}
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

              {/* Contact Page */}
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

            {/* Bottom Statement */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-lg text-gray-700 text-center font-medium">
                We are happy to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}