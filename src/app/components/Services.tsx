import { FileText, Globe2, Briefcase, Users, BookOpen, Video } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Document Translation',
    description: 'Legal, medical, technical, and business documents translated with precision and confidentiality.'
  },
  {
    icon: Globe2,
    title: 'Website Localization',
    description: 'Adapt your digital presence for Germany with culturally relevant German and English localization.'
  },
  {
    icon: Briefcase,
    title: 'Business Translation',
    description: 'Corporate communications, contracts, and presentations translated by industry experts.'
  },
  {
    icon: Users,
    title: 'Interpretation Services',
    description: 'Simultaneous and consecutive interpretation for conferences, meetings, and events.'
  },
  {
    icon: BookOpen,
    title: 'Content Translation',
    description: 'Marketing materials, articles, and creative content adapted for your target audience.'
  },
  {
    icon: Video,
    title: 'Multimedia Translation',
    description: 'Subtitling, dubbing, and voiceover services for videos and multimedia content.'
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4d2f8c] bg-[rgba(255,255,255,0)] backdrop-blur-sm mb-6 shadow-[0px_-7px_11px_0px_inset_rgba(164,143,255,0.12)]">
            <span className="text-sm bg-gradient-to-r from-[rgba(229,156,255,0.4)] via-[rgba(186,156,255,0.4)] to-[rgba(156,178,255,0.4)] bg-clip-text text-transparent">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl mb-4 bg-gradient-to-b from-white to-[rgba(255,255,255,0.7)] bg-clip-text text-transparent">
            Comprehensive Translation Solutions
          </h2>
          <p className="text-[rgba(239,237,253,0.7)] max-w-2xl mx-auto">
            From documents to multimedia, we provide end-to-end translation services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)] hover:border-[rgba(186,156,255,0.3)] transition-all duration-300 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(186,156,255,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(113,47,255,0.2)] to-[rgba(113,47,255,0.05)] border border-[rgba(186,156,255,0.2)] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#BA9CFF]" />
                  </div>
                  <h3 className="text-xl text-white mb-3">{service.title}</h3>
                  <p className="text-[rgba(239,237,253,0.6)] leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
