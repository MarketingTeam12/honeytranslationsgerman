import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How do I book an interpreter?',
    answer: 'Create an account → Choose language → Connect instantly.'
  },
  {
    question: 'Can I become an interpreter?',
    answer: 'Yes! Complete verification and start earning.'
  },
  {
    question: 'Are the services secure?',
    answer: 'Yes. All communication is encrypted.'
  },
  {
    question: 'Do you offer urgent interpretation?',
    answer: 'Yes, 24/7 instant availability.'
  },
  {
    question: 'What documents can you translate?',
    answer: 'All government, legal, academic, and personal certificates.'
  },
  {
    question: 'How much do your services cost?',
    answer: 'Pricing varies based on language pair and service type. View our transparent pricing after signing up.'
  },
  {
    question: 'How are interpreters verified?',
    answer: 'All interpreters go through document verification, language proficiency tests, and background checks.'
  },
  {
    question: 'Can I schedule an interpretation session in advance?',
    answer: 'Yes, you can book interpreters for future dates and times based on availability.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit/debit cards, UPI, net banking, and digital wallets.'
  },
  {
    question: 'Is there a minimum session duration?',
    answer: 'Minimum session duration varies by service type. Check details when booking.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#151249] text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl mb-6 font-bold">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90">
            Find answers to common questions about Hanioo
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-white px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F7F8FC] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#E3E4EE] transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#151249] text-white flex items-center justify-center font-semibold text-sm">
                      Q{index + 1}
                    </span>
                    <span className="text-lg text-[#151249] font-semibold">
                      {faq.question}
                    </span>
                  </div>
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[#151249] flex-shrink-0 ml-4" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#151249] flex-shrink-0 ml-4" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pl-[4.5rem]">
                    <p className="text-[#1A1A1A] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-[#F7F8FC] px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-[#151249] mb-4 font-bold">Still have questions?</h2>
          <p className="text-[#B8B9C9] mb-8">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#151249] text-white rounded-lg hover:bg-[#2A257A] transition-all font-semibold shadow-lg"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
