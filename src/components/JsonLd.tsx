import { site, social } from '@/lib/site';

/**
 * Dentist / MedicalClinic structured data. Injected once in the root layout.
 * `url` falls back to a placeholder until the deploy domain is set via
 * NEXT_PUBLIC_SITE_URL.
 */
export default function JsonLd() {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://utkaldentalcare.in';

  const data = {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalClinic'],
    '@id': `${url}/#clinic`,
    name: site.name,
    description:
      'Multi-speciality clinic in Bhubaneswar since 2004 — dental care, dermatology, hair restoration and aesthetics.',
    foundingDate: String(site.foundedYear),
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot 166, Unit-6, Ganga Nagar, near Maa Sakti Hospital',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.2961,
      longitude: 85.8245,
    },
    areaServed: {
      '@type': 'City',
      name: 'Bhubaneswar',
    },
    telephone: '+91-8144799927',
    email: site.email,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Credit Card, Debit Card',
    url,
    logo: `${url}/logo.png`,
    image: `${url}/logo.png`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    },
    medicalSpecialty: ['Dentistry', 'Dermatology'],
    availableService: [
      { '@type': 'MedicalProcedure', name: 'Dental Implants' },
      { '@type': 'MedicalProcedure', name: 'Root Canal Treatment' },
      { '@type': 'MedicalProcedure', name: 'Braces & Aligners' },
      { '@type': 'MedicalProcedure', name: 'Hair Transplant (FUE/FUT)' },
      { '@type': 'MedicalProcedure', name: 'Skin & Laser Treatment' },
    ],
    sameAs: [social.practo, social.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
