import React from 'react';
import { Heart, Home, Users, CalendarCheck, CheckCircle, Smile } from 'lucide-react';

const points = [
  { icon: <Home size={32} />, text: 'Convenient home visits' },
  { icon: <Users size={32} />, text: 'Individual attention' },
  { icon: <Heart size={32} />, text: 'Personalized treatment plans' },
  { icon: <CalendarCheck size={32} />, text: 'Flexible appointment enquiries' },
  { icon: <CheckCircle size={32} />, text: 'Patient‑focused care' },
  { icon: <Smile size={32} />, text: 'Comfortable home environment' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl text-primary mb-8">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((p, i) => (
            <div key={i} className="flex flex-col items-center p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-primary mb-3">{p.icon}</div>
              <p className="text-textPrimary">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
