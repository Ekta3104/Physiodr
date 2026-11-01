import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const items = [
  { q: 'What is home physiotherapy?', a: 'Home physiotherapy brings certified therapists to your residence to assess and treat musculoskeletal and neurological conditions.' },
  { q: 'How can I book an appointment?', a: 'Use the contact form below or click any WhatsApp button to start a conversation.' },
  { q: 'Which areas of Buldhana do you cover?', a: 'We currently provide home visits in Buldhana City. Please contact us to confirm availability for your address.' },
  { q: 'What should I prepare before a home visit?', a: 'A clear space for treatment, a stable chair or mat, and any relevant medical documents.' },
  { q: 'How can I contact the physiotherapist?', a: 'Phone, email, or WhatsApp – see the Contact section.' },
  { q: 'What are the consultation charges?', a: 'Charges are discussed individually; please ask via WhatsApp for a quote.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-heading text-3xl text-center text-primary mb-8">Frequently Asked Questions</h2>
        {items.map((item, i) => (
          <div key={i} className="border-b py-4">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="font-medium text-textPrimary">{item.q}</span>
              {openIndex === i ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === i && <p className="mt-2 text-textPrimary">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
