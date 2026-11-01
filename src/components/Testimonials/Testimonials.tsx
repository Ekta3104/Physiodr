import React from 'react';

// Set to true when genuine testimonials are available
const hasTestimonials = false;

export default function Testimonials() {
  if (!hasTestimonials) return null;
  return (
    <section className="py-20 bg-lightAqua">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl text-primary mb-8">What Our Patients Say</h2>
        {/* Add testimonial carousel or grid here */}
      </div>
    </section>
  );
}
