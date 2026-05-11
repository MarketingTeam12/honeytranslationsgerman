export function Languages() {
  const languages = [
    'English', 'Tamil', 'Telugu', 'Hindi', 'Malayalam', 'French', 'German', 
    'Spanish', 'Chinese', 'Japanese', 'Korean', 'Portuguese', 'Russian', 'Italian',
    'Dutch', 'Turkish', 'Polish', 'Swedish', 'Danish', 'Norwegian', 'Finnish',
    'Greek', 'Hebrew', 'Thai', 'Vietnamese', 'Indonesian', 'Malay', 'Bengali',
    'Urdu', 'Punjabi', 'Marathi', 'Gujarati', 'Kannada', 'Odia', 'Assamese'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#151249] text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl mb-6 font-bold">Supported Languages</h1>
          <p className="text-xl text-white/90">
            Choose from 140+ languages for Germany and international projects.
          </p>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {languages.map((language, index) => (
              <div
                key={index}
                className="bg-[#F7F8FC] p-4 rounded-lg text-center hover:bg-[#151249] hover:text-white transition-all cursor-pointer"
              >
                <p className="font-medium">{language}</p>
              </div>
            ))}
          </div>

          {/* And More */}
          <div className="mt-12 text-center">
            <p className="text-xl text-[#B8B9C9]">
              And many more...
            </p>
            <p className="text-[#151249] mt-4">
              Don't see your language? <a href="/contact" className="underline hover:no-underline">Contact us</a>
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#F7F8FC] px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '140+', label: 'Languages Supported' },
              { value: '10,000+', label: 'Active Interpreters' },
              { value: '50+', label: 'Countries Served' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="text-5xl text-[#151249] font-bold mb-2">{stat.value}</div>
                <div className="text-[#B8B9C9]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#151249] to-[#2A257A] text-white px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl mb-6 font-bold">Need an interpreter?</h2>
          <p className="text-xl mb-8 text-white/90">Connect with verified interpreters in minutes</p>
          <a href="/signup" className="inline-block px-8 py-4 bg-white text-[#151249] rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-lg">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
