import React from 'react';
import { businessConfig } from '../../config/business';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function ServiceCard({ title, description, imageSrc }: ServiceCardProps) {
  const waLink = `https://wa.me/${businessConfig.whatsappNumber.replace(/^\+/, '')}?text=${encodeURIComponent(`Hello, I am interested in ${title} service.`)}`;
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition flex flex-col h-full">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-heading text-xl text-primary mb-2">{title}</h3>
        <p className="text-textPrimary flex-grow mb-4">{description}</p>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-outline w-full text-center">
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}
