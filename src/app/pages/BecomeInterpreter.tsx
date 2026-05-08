import { DollarSign, Globe, MapPin, Award, UserPlus, FileText, CheckCircle, Briefcase } from 'lucide-react';

export function BecomeInterpreter() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#151249] text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl mb-6 font-bold">Start Your Career as an Interpreter</h1>
          <p className="text-xl text-white/90 mb-8">
            Join Hanioo and help people communicate without barriers.
          </p>
          <a href="/signup?type=interpreter" className="inline-block px-8 py-4 bg-white text-[#151249] rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg">
            Apply Now
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#F7F8FC] px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl text-[#151249] text-center mb-12 font-bold">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: 'Earn flexible income' },
              { icon: Globe, title: 'Global exposure' },
              { icon: MapPin, title: 'Work from anywhere' },
              { icon: Award, title: 'Get verified & recognized' }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="w-16 h-16 rounded-full bg-[#151249] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg text-[#151249] font-semibold">{benefit.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl text-[#151249] text-center mb-12 font-bold">How to Join</h2>
          <div className="space-y-8">
            {[
              { icon: UserPlus, title: 'Sign up', description: 'Create your interpreter account with basic details' },
              { icon: FileText, title: 'Submit your documents', description: 'Provide verification documents and qualifications' },
              { icon: CheckCircle, title: 'Complete language test', description: 'Demonstrate your language proficiency' },
              { icon: Briefcase, title: 'Start receiving jobs', description: 'Get matched with customers and start earning' }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-start gap-6 bg-[#F7F8FC] p-6 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#151249] flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-6 h-6 text-[#151249]" />
                      <h3 className="text-xl text-[#151249] font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-[#1A1A1A]">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-[#F7F8FC] px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl text-[#151249] text-center mb-12 font-bold">Requirements</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <ul className="space-y-4">
              {[
                'Fluency in at least 2 languages',
                'Valid government ID',
                'Quiet workspace for calls',
                'Reliable internet connection',
                'Professional communication skills',
                'Commitment to confidentiality'
              ].map((req, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-[#1A1A1A]">
                  <CheckCircle className="w-6 h-6 text-[#2ECC71] flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#151249] to-[#2A257A] text-white px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl mb-6 font-bold">Ready to start your interpreter journey?</h2>
          <p className="text-xl mb-8 text-white/90">Join thousands of interpreters earning on Hanioo</p>
          <a href="/signup?type=interpreter" className="inline-block px-8 py-4 bg-white text-[#151249] rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
