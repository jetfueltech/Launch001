import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is included in a standard cleaning?',
    answer: 'Our standard cleaning includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, and general tidying. We focus on high-traffic areas and ensure all visible surfaces are cleaned thoroughly.'
  },
  {
    question: 'How do you price your cleaning services?',
    answer: 'Our pricing is based on the size of your space, type of cleaning required, and frequency of service. We offer competitive rates and custom quotes for each client.'
  },
  {
    question: 'Are your cleaning products eco-friendly?',
    answer: 'Yes, we use environmentally friendly cleaning products that are safe for your family and pets while being effective at cleaning and sanitizing.'
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'No, you don\'t need to be home. Many of our clients provide a key or access code. We are fully bonded and insured for your peace of mind.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our cleaning services
        </p>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-500" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}