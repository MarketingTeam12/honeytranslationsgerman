import { Plane, FileCheck, Clock } from 'lucide-react';

export function VisaAssistance() {
  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-28 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center mx-auto mb-8 shadow-xl">
            <Plane className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl mb-8 font-bold text-[#151249]">Visa Assistance</h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Complete visa application support for work, study, and travel
          </p>
        </div>
      </section>

      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FileCheck, title: 'Documentation', description: 'Complete visa document preparation and verification' },
              { icon: Clock, title: 'Application Filing', description: 'Expert assistance with visa applications' },
              { icon: Plane, title: 'Follow-up Support', description: 'Track your application until approval' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#151249] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl mb-6 font-bold">Get Visa Assistance</h2>
          <p className="text-xl mb-10 text-white/90">Expert guidance for hassle-free visa processing</p>
          <a href="/contact" className="inline-block px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-lg hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] transition-all shadow-xl font-semibold text-lg">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
