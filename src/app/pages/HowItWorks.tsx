import { UserPlus, Search, Users, MessageCircle, CreditCard } from 'lucide-react';

export function HowItWorks() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#151249] text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl mb-6 font-bold">How It Works</h1>
          <p className="text-xl text-white/90">
            Get started in 5 simple steps
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-[#151249] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  1
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <UserPlus className="w-8 h-8 text-[#151249]" />
                  <h2 className="text-3xl text-[#151249] font-bold">Create Your Account</h2>
                </div>
                <p className="text-lg text-[#1A1A1A]">
                  Sign up as a customer or interpreter with simple onboarding.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-[#151249] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Search className="w-8 h-8 text-[#151249]" />
                  <h2 className="text-3xl text-[#151249] font-bold">Choose Your Language Need</h2>
                </div>
                <p className="text-lg text-[#1A1A1A]">
                  Select the language pair you need help with.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-[#151249] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-8 h-8 text-[#151249]" />
                  <h2 className="text-3xl text-[#151249] font-bold">Get Instant Match</h2>
                </div>
                <p className="text-lg text-[#1A1A1A]">
                  Our system instantly matches you with the best available interpreter.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-[#151249] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  4
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="w-8 h-8 text-[#151249]" />
                  <h2 className="text-3xl text-[#151249] font-bold">Start Communicating</h2>
                </div>
                <p className="text-lg text-[#1A1A1A]">
                  Begin a call, chat, or send documents to translate.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-[#151249] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  5
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <CreditCard className="w-8 h-8 text-[#151249]" />
                  <h2 className="text-3xl text-[#151249] font-bold">Pay Securely</h2>
                </div>
                <p className="text-lg text-[#1A1A1A]">
                  Safe and transparent pricing with no hidden charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Strip */}
      <section className="py-12 bg-[#F7F8FC] px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl text-[#151249] font-semibold">
            It's that simple! Start connecting with interpreters today.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#151249] to-[#2A257A] text-white px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl mb-6 font-bold">Ready to break language barriers?</h2>
          <a href="/signup" className="inline-block px-8 py-4 bg-white text-[#151249] rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg">
            Create Your Account
          </a>
        </div>
      </section>
    </div>
  );
}
