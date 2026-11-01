import React from 'react';
import { businessConfig } from '../../config/business';

export default function AboutDoctor() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img
          src={businessConfig.profileImage}
          alt="Doctor portrait"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
        <div className="space-y-4">
          <h2 className="font-heading text-3xl text-primary">{businessConfig.doctorName}</h2>
          <p className="text-textPrimary">
            {businessConfig.qualification} – {businessConfig.experience}
          </p>
          <p className="text-textPrimary">Registration No.: {businessConfig.registrationNumber}</p>
          <p className="text-textPrimary">
            Specialized in neuro‑rehabilitation, sports injuries, post‑surgical recovery, and geriatric care.
          </p>
          <p className="text-textPrimary">
            My treatment philosophy focuses on individualized care, evidence‑based techniques, and empowering patients to regain mobility.
          </p>
          <a href="#contact" className="btn-primary mt-4 inline-block">Book an Appointment</a>
        </div>
      </div>
    </section>
  );
}
