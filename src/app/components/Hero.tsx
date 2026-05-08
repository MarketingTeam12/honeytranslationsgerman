import { ArrowRight, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central Glow */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-radial from-[rgba(186,156,255,0.15)] to-transparent rounded-full blur-3xl" />
        </div>
        
        {/* Rings */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[808px] h-[808px]">
          <div className="absolute inset-0 rounded-full border border-[rgba(186,156,255,0.3)] bg-[rgba(186,156,255,0.04)]" />
        </div>
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[608px] h-[608px]">
          <div className="absolute inset-0 rounded-full border border-[rgba(186,156,255,0.3)] bg-[rgba(186,156,255,0.04)] opacity-60" />
        </div>
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[416px] h-[416px]">
          <div className="absolute inset-0 rounded-full border border-[rgba(186,156,255,0.3)] bg-[rgba(186,156,255,0.04)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4d2f8c] bg-[rgba(255,255,255,0)] backdrop-blur-sm mb-8 shadow-[0px_-7px_11px_0px_inset_rgba(164,143,255,0.12)]">
          <span className="text-sm bg-gradient-to-r from-[rgba(229,156,255,0.4)] via-[rgba(186,156,255,0.4)] to-[rgba(156,178,255,0.4)] bg-clip-text text-transparent">
            Professional Translation Services
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-7xl mb-6 font-medium bg-gradient-to-b from-white to-[rgba(255,255,255,0.7)] bg-clip-text text-transparent max-w-4xl mx-auto leading-tight">
          Bridge Languages with Precision
        </h1>

        {/* Subheading */}
        <p className="text-lg text-[rgba(239,237,253,0.7)] mb-12 max-w-2xl mx-auto">
          Premium translation services for Germany. Expert linguists, certified workflows and SEO-ready language support for Berlin, Munich, Hamburg and Frankfurt.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(60,8,126,0)] to-[rgba(60,8,126,0.32)] rounded-lg" 
                 style={{ backgroundImage: "linear-gradient(rgba(60, 8, 126, 0) 0%, rgba(60, 8, 126, 0.32) 100%), linear-gradient(90deg, rgba(113, 47, 255, 0.12) 0%, rgba(113, 47, 255, 0.12) 100%)" }} />
            <div className="absolute inset-0 border border-[#4d2f8c] rounded-lg pointer-events-none" />
            <div className="absolute inset-0 shadow-[0px_0px_12px_0px_inset_rgba(191,151,255,0.24)] pointer-events-none" />
            <span className="relative text-[#f4f0ff] z-10">Get Started</span>
            <ArrowRight className="relative w-5 h-5 text-[#f4f0ff] group-hover:translate-x-1 transition-transform z-10" />
          </button>

          <a 
            href="https://wa.me/917299005577" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-lg overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-[#25D366] rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <MessageCircle className="relative w-5 h-5 text-white z-10" />
            <span className="relative text-white z-10">WhatsApp</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Languages', value: '100+' },
            { label: 'Projects Delivered', value: '10,000+' },
            { label: 'Client Satisfaction', value: '99%' }
          ].map((stat) => (
            <div key={stat.label} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.01)] rounded-2xl border border-[rgba(255,255,255,0.05)] group-hover:border-[rgba(186,156,255,0.3)] transition-all" />
              <div className="relative p-6">
                <div className="text-4xl bg-gradient-to-r from-[#E59CFF] via-[#BA9CFF] to-[#9CB2FF] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[rgba(239,237,253,0.6)]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}