import { Mail, Phone, MapPin, Clock, Send, Upload, X, ChevronDown, Globe, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: '',
    message: ''
  });

  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  const faqs = [
    {
      question: t('contact.faq.question1'),
      answer: t('contact.faq.answer1')
    },
    {
      question: t('contact.faq.question2'),
      answer: t('contact.faq.answer2')
    },
    {
      question: t('contact.faq.question3'),
      answer: t('contact.faq.answer3')
    },
    {
      question: t('contact.faq.question4'),
      answer: t('contact.faq.answer4')
    }
  ];

  return (
    <div className="pt-16">
      {/* SECTION 1: HERO */}
      <section className="relative bg-gradient-blue-purple pattern-dots py-28 px-6 overflow-hidden">
        {/* Decorative world pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' stroke='%23151249' stroke-width='2' fill='none'/%3E%3Cpath d='M10 50 Q30 30 50 50 T90 50' stroke='%23151249' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white rounded-full shadow-md border border-gray-100 mb-8">
            <Globe className="w-4 h-4 text-[#151249]" />
            <span className="text-sm font-medium text-gray-700">{t('contact.hero.badge')}</span>
          </div>

          <h1 className="text-6xl md:text-7xl mb-8 font-bold text-[#151249]">
            {t('contact.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t('contact.hero.subtitle')}
          </p>

          {/* World icons */}
          <div className="flex justify-center gap-3 mt-10">
            {['🌍', '🌎', '🌏'].map((icon, index) => (
              <div 
                key={index} 
                className="text-4xl hover:scale-125 transition-transform cursor-pointer"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Gradient shapes */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* SECTION 2: CONTACT FORM */}
      <section className="py-32 bg-white px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-white to-gray-50 p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl text-[#151249] mb-4 font-bold">{t('contact.form.title')}</h2>
              <p className="text-gray-600">{t('contact.form.subtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-[#151249] mb-3 font-semibold">
                  {t('contact.form.fullName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-all text-lg"
                  style={{
                    boxShadow: focusedField === 'name' ? '0 0 0 4px rgba(250,204,21,0.1)' : 'none'
                  }}
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-[#151249] mb-3 font-semibold">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-all text-lg"
                    style={{
                      boxShadow: focusedField === 'email' ? '0 0 0 4px rgba(250,204,21,0.1)' : 'none'
                    }}
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#151249] mb-3 font-semibold">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-all text-lg"
                    style={{
                      boxShadow: focusedField === 'phone' ? '0 0 0 4px rgba(250,204,21,0.1)' : 'none'
                    }}
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>
              </div>

              {/* Select Language */}
              <div>
                <label htmlFor="language" className="block text-[#151249] mb-3 font-semibold">
                  {t('contact.form.language')}
                </label>
                <select
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('language')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-all text-lg"
                  style={{
                    boxShadow: focusedField === 'language' ? '0 0 0 4px rgba(250,204,21,0.1)' : 'none'
                  }}
                >
                  <option value="">{t('contact.form.languagePlaceholder')}</option>
                  <option value="english-arabic">{t('home.contactForm.enToAr')}</option>
                  <option value="arabic-english">{t('home.contactForm.arToEn')}</option>
                  <option value="english-german">{t('home.contactForm.enToDe')}</option>
                  <option value="german-english">{t('home.contactForm.deToEn')}</option>
                  <option value="english-french">{t('home.contactForm.enToFr')}</option>
                  <option value="english-spanish">{t('home.contactForm.enToEs')}</option>
                  <option value="english-chinese">{t('home.contactForm.enToCn')}</option>
                  <option value="other">{t('home.contactForm.otherPair')}</option>
                </select>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-[#151249] mb-3 font-semibold">
                  {t('contact.form.uploadDoc')}
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="file"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="file"
                    className="flex flex-col items-center justify-center w-full px-6 py-10 border-2 border-dashed border-gray-300 rounded-xl hover:border-yellow-400 hover:bg-yellow-50/30 transition-all cursor-pointer group"
                  >
                    {uploadedFile ? (
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#151249] font-medium">{uploadedFile}</p>
                          <p className="text-sm text-gray-500">{t('contact.form.uploadSuccess')}</p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setUploadedFile(null);
                          }}
                          className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <X className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Upload className="w-8 h-8 text-[#151249]" />
                        </div>
                        <p className="text-[#151249] font-medium mb-1">{t('contact.form.uploadText')}</p>
                        <p className="text-sm text-gray-500">{t('contact.form.uploadFormat')}</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[#151249] mb-3 font-semibold">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-all resize-none text-lg"
                  style={{
                    boxShadow: focusedField === 'message' ? '0 0 0 4px rgba(250,204,21,0.1)' : 'none'
                  }}
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:-translate-y-1 transition-all font-bold text-lg shadow-lg"
              >
                <Send className="w-6 h-6" />
                {t('contact.form.sendButton')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONTACT DETAILS BOXES */}
      <section className="py-32 bg-gradient-gold-light pattern-dots px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl text-[#151249] mb-4 font-bold">{t('contact.contactDetails.title')}</h2>
            <p className="text-xl text-gray-600">{t('contact.contactDetails.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mail,
                title: t('contact.contactDetails.emailTitle'),
                content: t('contact.contactDetails.emailAddress'),
                subtext: t('contact.contactDetails.emailNote'),
                gradient: 'from-blue-400 to-blue-500'
              },
              {
                icon: Phone,
                title: t('contact.contactDetails.phoneTitle'),
                content: t('contact.contactDetails.phoneNumber'),
                subtext: t('contact.contactDetails.phoneNote'),
                gradient: 'from-green-400 to-green-500'
              },
              {
                icon: MapPin,
                title: t('contact.contactDetails.locationTitle'),
                content: t('contact.contactDetails.locationAddress'),
                subtext: t('contact.contactDetails.locationNote'),
                gradient: 'from-purple-400 to-purple-500'
              },
              {
                icon: Clock,
                title: t('contact.contactDetails.hoursTitle'),
                content: t('contact.contactDetails.hoursWeekday'),
                subtext: t('contact.contactDetails.hoursSunday'),
                gradient: 'from-orange-400 to-orange-500'
              }
            ].map((contact, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-2xl shadow-lg hover-glow animate-fadeInScale animate-delay-${index * 100 + 100}`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center mb-6 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#151249] mb-3">{contact.title}</h3>
                <p className="text-gray-700 font-medium mb-2">{contact.content}</p>
                <p className="text-sm text-gray-500">{contact.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: GOOGLE MAP PREVIEW */}
      <section className="py-32 bg-soft-blue px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl text-[#151249] mb-4 font-bold">{t('contact.map.title')}</h2>
            <p className="text-xl text-gray-600">{t('contact.map.subtitle')}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_rgba(21,18,73,0.2)] transition-all duration-500 animate-fadeInScale">
            <div className="aspect-video bg-gradient-to-br from-[#151249] to-[#2A257A] rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* Map illustration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M10 30h40M30 10v40' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
                }}></div>
              </div>

              <div className="relative z-10 text-center text-white">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <MapPin className="w-10 h-10 text-[#151249]" />
                </div>
                <h3 className="text-[#efb100] text-3xl font-bold mb-2">{t('contact.map.location')}</h3>
                <p className="text-xl text-white/80">{t('contact.map.center')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ SHORT SECTION */}
      <section className="py-32 bg-gradient-grey-light pattern-grid px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl text-[#151249] mb-4 font-bold">{t('contact.faq.title')}</h2>
            <p className="text-xl text-gray-600">{t('contact.faq.subtitle')}</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-yellow-400 transition-all shadow-sm hover:shadow-md animate-fadeInUp animate-delay-${index * 100 + 100}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#151249] to-[#2A257A] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <span className="font-semibold text-[#151249] text-lg">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-[#151249] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pl-20 text-gray-700 leading-relaxed animate-in slide-in-from-top duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA - FINAL ACTION */}
      <section className="py-32 bg-gradient-to-br from-[#151249] via-[#1e1a5e] to-[#151249] text-white px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 opacity-10 animate-pulse">
          <Globe className="w-40 h-40" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>
          <MessageCircle className="w-32 h-32" />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fadeInScale">
          <h2 className="text-[#efb100] text-5xl md:text-6xl mb-8 font-bold">{t('contact.cta.title')}</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            {t('contact.cta.subtitle')}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[#151249] rounded-xl hover:shadow-[0_0_50px_rgba(250,204,21,0.7)] hover:-translate-y-1 transition-all shadow-2xl font-bold text-lg hover-glow-gold"
            style={{ boxShadow: '0 0 30px rgba(250,204,21,0.4)' }}
          >
            <MessageCircle className="w-6 h-6" />
            {t('contact.cta.button')}
          </button>

          {/* World icons */}
          <div className="flex justify-center gap-6 mt-12">
            <div className="text-4xl">🌍</div>
            <div className="text-4xl">💬</div>
            <div className="text-4xl">✨</div>
          </div>
        </div>
      </section>
    </div>
  );
}