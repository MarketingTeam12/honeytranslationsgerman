import { Award, Target, Lightbulb, BookOpen, TrendingUp, Users, Shield } from 'lucide-react';
import { useEffect } from 'react';
import ceoImage from 'figma:asset/b0d14bd522bbad9bc3ad1bc4a715499495dbf1d0.png';

export function CEO() {
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

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-zoom');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      {/* SECTION 1: CEO HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-yellow-50/30 py-20 px-6 overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: CEO Portrait Image */}
            <div className="reveal-zoom flex justify-center lg:justify-start">
              <div className="relative group">
                {/* Gold glow border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* CEO Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{
                  boxShadow: '0 30px 60px rgba(21, 18, 73, 0.2), 0 0 0 1px rgba(250, 204, 21, 0.3)'
                }}>
                  <img 
                    src={ceoImage} 
                    alt="CEO - Honey Translation Services" 
                    className="w-full h-auto object-cover"
                    style={{ maxWidth: '500px' }}
                  />
                </div>
              </div>
            </div>

            {/* Right: CEO Title and Intro */}
            <div className="reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <div className="inline-block px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-full font-bold mb-6 shadow-lg">
                Fondateur et PDG
              </div>

              <h1 className="text-5xl md:text-6xl text-[#151249] font-black mb-6 leading-tight">
                Un message visionnaire du{' '}
                <span className="gradient-text-shine">PDG</span>
              </h1>

              <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mb-8"></div>

              <p className="text-2xl text-[#151249] font-semibold mb-6 italic leading-relaxed">
                Fondateur et PDG, Honey Translation Services
              </p>

              {/* Highlighted Quote */}
              <div className="relative bg-gradient-to-br from-yellow-50 to-white border-l-4 border-yellow-400 p-6 rounded-r-2xl shadow-lg mb-8">
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "La langue n'est pas seulement un outil de communication ; c'est un pont qui relie les cultures, favorise la compréhension et stimule le progrès mondial."
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Avec des années d'expérience dans l'industrie de la traduction, notre mission est de briser les barrières linguistiques et de créer des connexions significatives en Belgique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CEO MESSAGE (MAIN CONTENT) */}
      <section className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl text-[#151249] font-bold mb-12 text-center">
              Message du PDG
            </h2>
          </div>

          {/* Message Content with Line-by-Line Animation */}
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <div className="reveal-on-scroll" style={{ animationDelay: '100ms' }}>
              <p>
                Chers clients et partenaires,
              </p>
            </div>

            <div className="reveal-on-scroll" style={{ animationDelay: '200ms' }}>
              <p>
                La langue n'est pas seulement un outil de communication ; c'est un pont qui relie les cultures, favorise la compréhension et stimule le progrès mondial. Chez <strong>Honey Translation Services</strong>, nous nous sommes consacrés à rendre ce pont plus solide, plus fiable et accessible à tous.
              </p>
            </div>

            <div className="reveal-on-scroll" style={{ animationDelay: '300ms' }}>
              <p>
                Notre parcours a commencé avec une vision simple mais puissante : fournir des services de traduction qui vont au-delà des mots. Nous nous efforçons de transmettre le sens, le contexte et la pertinence culturelle dans chaque projet. Qu'il s'agisse d'un document juridique, d'une campagne marketing ou de contenu technique, nous traitons chaque mission avec le plus grand soin et la plus grande précision.
              </p>
            </div>

            <div className="reveal-on-scroll" style={{ animationDelay: '400ms' }}>
              <p>
                Ce qui nous distingue, c'est notre engagement inébranlable envers la qualité, l'intégrité et l'innovation. Notre équipe de traducteurs et de linguistes professionnels apporte non seulement une expertise, mais aussi un profond respect pour les langues et les cultures avec lesquelles ils travaillent. Nous croyons que chaque mot a du poids et que chaque traduction a le pouvoir de faire la différence.
              </p>
            </div>

            {/* Subtle Divider */}
            <div className="reveal-on-scroll" style={{ animationDelay: '500ms' }}>
              <div className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent my-8"></div>
            </div>

            <div className="reveal-on-scroll" style={{ animationDelay: '600ms' }}>
              <p>
                Dans le monde interconnecté d'aujourd'hui, les entreprises et les particuliers ont besoin de plus que de simples traductions précises - ils ont besoin de partenaires qui comprennent leurs objectifs et fournissent des solutions alignées sur leur vision. C'est exactement ce que nous visons à être : un partenaire de confiance dans votre parcours mondial.
              </p>
            </div>

            <div className="reveal-on-scroll" style={{ animationDelay: '700ms' }}>
              <p>
                Alors que nous continuons à croître et à évoluer, notre objectif reste constant : dépasser les attentes, relever les défis et établir de nouvelles références dans l'industrie de la traduction. Nous sommes fiers des relations que nous avons construites et de la confiance que vous nous accordez. Ensemble, nous brisons les barrières et créons des opportunités.
              </p>
            </div>

            <div className="reveal-on-scroll" style={{ animationDelay: '800ms' }}>
              <p>
                Merci de faire partie de notre parcours. Nous sommes impatients de vous servir avec excellence, dévouement et passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR COMMITMENT */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-yellow-50/20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-5xl text-[#151249] font-bold mb-4">Notre engagement</h2>
            <p className="text-xl text-gray-600">Les valeurs qui définissent notre excellence de service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Précision',
                description: 'Fournir des traductions précises et contextuellement pertinentes pour une communication claire.',
                color: 'from-yellow-400 to-yellow-500',
                delay: '100ms'
              },
              {
                icon: Users,
                title: 'Sensibilité culturelle',
                description: 'Veiller à ce que toutes les traductions soient adaptées pour refléter les nuances de chaque culture.',
                color: 'from-blue-400 to-blue-500',
                delay: '200ms'
              },
              {
                icon: Shield,
                title: 'Normes de haute qualité',
                description: 'Maintenir une qualité exceptionnelle et les meilleures pratiques mondiales.',
                color: 'from-green-400 to-green-500',
                delay: '300ms'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="reveal-on-scroll relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-white/50"
                style={{ 
                  animationDelay: item.delay,
                  boxShadow: '0 10px 40px rgba(21, 18, 73, 0.1)'
                }}
              >
                {/* Gold line accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] transition-all duration-300`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#151249] mb-4">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW WE SUSTAIN IN THE INDUSTRY */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-5xl text-[#151249] font-bold mb-4">Comment nous nous maintenons dans l'industrie</h2>
            <p className="text-xl text-gray-600">Notre avantage concurrentiel et nos stratégies de durabilité</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Apprentissage continu',
                description: 'Investir dans la formation et le développement pour rester en tête dans le paysage linguistique en évolution.',
                color: 'from-purple-400 to-purple-500',
                delay: '100ms'
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Adopter des technologies de pointe pour rationaliser les processus et améliorer la prestation de services.',
                color: 'from-orange-400 to-orange-500',
                delay: '200ms'
              },
              {
                icon: TrendingUp,
                title: 'Approche centrée sur le client',
                description: 'Construire des relations à long terme en comprenant les besoins des clients et en fournissant des solutions sur mesure.',
                color: 'from-teal-400 to-teal-500',
                delay: '300ms'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="reveal-on-scroll relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100"
                style={{ 
                  animationDelay: item.delay,
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Hover shadow expansion */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Icon with gold accent */}
                <div className="relative">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#151249] mb-4 relative">{item.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed relative">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CLOSING STATEMENT / SIGNATURE */}
      <section className="py-24 bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white px-6 relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10 reveal-on-scroll">
          <p className="text-2xl leading-relaxed mb-12 text-white/90">
            Merci d'avoir choisi <strong className="text-yellow-400">Honey Translation Services</strong>. Nous sommes honorés d'être votre partenaire pour briser les barrières linguistiques et débloquer des opportunités mondiales.
          </p>

          {/* Digital Signature Style */}
          <div className="inline-block">
            <div className="mb-6">
              <div className="h-px w-64 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-6"></div>
              <p className="text-3xl font-bold mb-2 text-yellow-400">Sibi Chakravarthy</p>
              <p className="text-lg text-white/80">Fondateur et Directeur Général</p>
              <p className="text-md text-white/60 mt-2">Honey Translation Services</p>
            </div>
          </div>

          {/* Elegant decorative element */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-yellow-400/50"></div>
            <Award className="w-6 h-6 text-yellow-400" />
            <div className="h-px w-12 bg-yellow-400/50"></div>
          </div>
        </div>
      </section>
    </div>
  );
}