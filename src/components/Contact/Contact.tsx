import React from 'react';
import { businessConfig } from '../../config/business';
import BookingForm from './BookingForm';
import { Phone, MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-lightAqua">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl text-primary mb-6">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
          <div className="flex items-center space-x-2">
            <Phone size={20} />
            <span>{businessConfig.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle size={20} />
            <a href={`https://wa.me/${businessConfig.whatsappNumber.replace(/^\+/, '')}`} target="_blank" rel="noopener noreferrer">{businessConfig.whatsappNumber}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={20} />
            <a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a>
          </div>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
