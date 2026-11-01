import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { businessConfig } from '../../config/business';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  mobile: z.string().regex(/^\+?\d{10,15}$/, 'Enter a valid phone number'),
  service: z.string().min(1, 'Select a service'),
  date: z.string().refine(v => new Date(v) >= new Date().setHours(0,0,0,0), { message: 'Date cannot be in the past' }),
  time: z.string().min(1, 'Select a time'),
  area: z.string().min(1, 'Area is required'),
  description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function BookingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const message = `Hello Doctor,%0A%0AI would like to request a home physiotherapy appointment.%0A%0APatient Name: ${data.name}%0AMobile: ${data.mobile}%0AService: ${data.service}%0APreferred Date: ${data.date}%0APreferred Time: ${data.time}%0AArea: ${data.area}%0AProblem: ${data.description ?? ''}%0A%0APlease let me know your availability.%0AThank you.`;
    const url = `https://wa.me/${businessConfig.whatsappNumber.replace(/^\+/, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-lg mx-auto">
      <input {...register('name')} placeholder="Patient Name" className="input" />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

      <input {...register('mobile')} placeholder="Mobile Number" className="input" />
      {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}

      <select {...register('service')} className="input">
        <option value="">Select Service</option>
        {/* Service options */}
        <option>Back Pain Physiotherapy</option>
        <option>Neck Pain Treatment</option>
        <option>Knee Pain Rehabilitation</option>
        <option>Shoulder Pain Treatment</option>
        <option>Sports Injury Rehabilitation</option>
        <option>Post‑Surgical Rehabilitation</option>
        <option>Stroke Rehabilitation</option>
        <option>Neurological Physiotherapy</option>
        <option>Geriatric Physiotherapy</option>
        <option>Orthopedic Rehabilitation</option>
        <option>Balance and Mobility Training</option>
        <option>Posture Correction</option>
      </select>
      {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}

      <input type="date" {...register('date')} className="input" />
      {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}

      <input type="time" {...register('time')} className="input" />
      {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}

      <input {...register('area')} placeholder="Area in Nashik" className="input" />
      {errors.area && <p className="text-red-500 text-sm">{errors.area.message}</p>}

      <textarea {...register('description')} placeholder="Short problem description (optional)" className="input" rows={3} />

      <button type="submit" className="btn-primary mt-2">Send via WhatsApp</button>
    </form>
  );
}
