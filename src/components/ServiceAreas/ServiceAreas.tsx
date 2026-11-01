import { businessConfig } from '../../config/business';

export default function ServiceAreas() {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl text-primary mb-6">Home Physiotherapy Services Across Buldhana</h2>
        <p className="text-textPrimary mb-8">We currently serve the following areas (editable):</p>
        <ul className="flex flex-wrap justify-center gap-4">
          {businessConfig.serviceAreas.map(area => (
            <li key={area} className="bg-primary text-white px-4 py-2 rounded-full">
              {area}
            </li>
          ))}
        </ul>
        {/* Google Maps placeholder – replace with real embed when available */}
        {/* <iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </section>
  );
}
