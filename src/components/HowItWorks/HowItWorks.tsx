import React from 'react';
import { User, Mail, Calendar, CheckCircle } from 'lucide-react';

const steps = [
  { icon: <User size={40} />, title: 'Contact the physiotherapist' },
  { icon: <Mail size={40} />, title: 'Share your requirements' },
  { icon: <Calendar size={40} />, title: 'Confirm appointment timing' },
  { icon: <CheckCircle size={40} />, title: 'Receive physiotherapy at home' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-lightAqua">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl text-primary mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              {s.icon}
              <p className="mt-2 font-medium text-textPrimary">{s.title}</p>
              {i < steps.length - 1 && (
                <div className="w-1 h-12 bg-gray-300 my-2 md:my-0 md:w-12 md:h-1" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
