import { Shield, Clock, Award, Users2 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Certified Quality',
    description: 'ISO-certified translation services with rigorous quality control and native-speaking linguists.'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Express delivery options available without compromising quality. 24/7 support for urgent projects.'
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Specialized translators with deep knowledge in legal, medical, technical, and business domains.'
  },
  {
    icon: Users2,
    title: 'Dedicated Support',
    description: 'Personal project managers ensure seamless communication and timely delivery of your projects.'
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[rgba(186,156,255,0.08)] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4d2f8c] bg-[rgba(255,255,255,0)] backdrop-blur-sm mb-6 shadow-[0px_-7px_11px_0px_inset_rgba(164,143,255,0.12)]">
            <span className="text-sm bg-gradient-to-r from-[rgba(229,156,255,0.4)] via-[rgba(186,156,255,0.4)] to-[rgba(156,178,255,0.4)] bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-5xl mb-4 bg-gradient-to-b from-white to-[rgba(255,255,255,0.7)] bg-clip-text text-transparent">
            Excellence in Every Translation
          </h2>
          <p className="text-[rgba(239,237,253,0.7)] max-w-2xl mx-auto">
            Combining human expertise with advanced technology to deliver translations that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl"
              >
                {/* Background with border */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.01)] rounded-2xl border border-[rgba(255,255,255,0.1)] group-hover:border-[rgba(186,156,255,0.3)] transition-all" />
                <div className="absolute inset-0 shadow-[0px_0px_0px_9px_inset_rgba(255,255,255,0.03)] rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E59CFF] via-[#BA9CFF] to-[#9CB2FF] flex items-center justify-center shadow-lg shadow-[rgba(186,156,255,0.3)]">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                    <p className="text-[rgba(239,237,253,0.6)] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
