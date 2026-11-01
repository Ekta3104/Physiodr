import React from 'react';
import { MessageCircle } from 'lucide-react';
import { businessConfig } from '../../config/business';

export default function Hero() {
  return (
    <section id="home" className="relative py-20 bg-lightAqua overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-8">
        <div className="space-y-6">
          <h1 className="font-heading text-4xl md:text-5xl text-primary">
            Expert Physiotherapy Care, Right at Your Home.
          </h1>
          <p className="text-lg text-textPrimary">
            Personalized physiotherapy and rehabilitation services delivered to your doorstep in Nashik. Get professional care in the comfort of your home.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="btn-primary">
              Book a Home Visit
            </a>
            <a
              href={`https://wa.me/${businessConfig.whatsappNumber.replace(/^\+/, '')}?text=${encodeURIComponent('Hello, I would like to book a home physiotherapy visit.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/hero-image.jpg"
            alt="Physiotherapist at home"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 bg-primary rounded-full opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full opacity-10" />
      </div>
    </section>
  );
}
