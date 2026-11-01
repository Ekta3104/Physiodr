import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Back Pain Physiotherapy',
    description: 'Targeted therapy to relieve chronic and acute back pain.',
    imageSrc: '/assets/services/back.jpg',
  },
  {
    title: 'Neck Pain Treatment',
    description: 'Gentle mobilization and strengthening for neck discomfort.',
    imageSrc: '/assets/services/neck.jpg',
  },
  {
    title: 'Knee Pain Rehabilitation',
    description: 'Rehabilitation programs to restore knee function and reduce pain.',
    imageSrc: '/assets/services/knee.jpg',
  },
  {
    title: 'Shoulder Pain Treatment',
    description: 'Therapies to improve shoulder mobility and alleviate pain.',
    imageSrc: '/assets/services/shoulder.jpg',
  },
  {
    title: 'Sports Injury Rehabilitation',
    description: 'Specialized recovery plans for athletes and active individuals.',
    imageSrc: '/assets/services/sports.jpg',
  },
  {
    title: 'Post‑Surgical Rehabilitation',
    description: 'Guided physiotherapy to ensure safe and effective post‑op recovery.',
    imageSrc: '/assets/services/post-surgery.jpg',
  },
  {
    title: 'Stroke Rehabilitation',
    description: 'Comprehensive neuro‑rehab to improve motor function after stroke.',
    imageSrc: '/assets/services/stroke.jpg',
  },
  {
    title: 'Neurological Physiotherapy',
    description: 'Therapies for neurological conditions such as MS, Parkinson’s, etc.',
    imageSrc: '/assets/services/neurological.jpg',
  },
  {
    title: 'Geriatric Physiotherapy',
    description: 'Tailored programs for older adults to maintain independence.',
    imageSrc: '/assets/services/geriatric.jpg',
  },
  {
    title: 'Orthopedic Rehabilitation',
    description: 'Recovery plans for orthopedic injuries and conditions.',
    imageSrc: '/assets/services/orthopedic.jpg',
  },
  {
    title: 'Balance and Mobility Training',
    description: 'Exercises to improve balance, coordination, and daily living.',
    imageSrc: '/assets/services/balance.jpg',
  },
  {
    title: 'Posture Correction',
    description: 'Assessment and exercises to correct poor posture.',
    imageSrc: '/assets/services/posture.jpg',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-lightAqua">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl text-center text-primary mb-10">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <ServiceCard key={s.title} title={s.title} description={s.description} imageSrc={s.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
}
