// Single source of truth for NAP (name/address/phone), hours, services, doctor, stats.
// Keep every page consistent — never hardcode these values in components.

export const site = {
  name: 'Utkal Dental Care',
  tagline: 'Dental · Skin · Hair',
  positioning: 'Dental, Skin & Hair Clinic in Bhubaneswar',
  foundedYear: 2004,
  description:
    'One trusted clinic in Bhubaneswar since 2004 for dental care, dermatology and hair restoration — led by experienced specialists, near Maa Sakti Hospital.',

  // Contact — ONE consistent phone number everywhere.
  phone: {
    display: '81447 99927',
    e164: '+918144799927',
    tel: 'tel:+918144799927',
    whatsapp: 'https://wa.me/918144799927',
  },
  email: 'utkaldentalcareodisha@gmail.com',

  address: {
    street: 'Plot No. 166, Unit-6, Ganga Nagar / Ekamra Marg',
    landmark: 'near Maa Sakti Hospital',
    locality: 'Bhubaneswar',
    region: 'Odisha',
    postalCode: '751001',
    country: 'IN',
    short: 'Plot 166, Unit-6, near Maa Sakti Hospital, Bhubaneswar',
  },

  hours: {
    weekday: 'Mon–Sat 9 AM–9 PM',
    sunday: 'Sun 9 AM–1 PM',
    full: 'Mon–Sat 9 AM–9 PM · Sun 9 AM–1 PM',
  },

  rating: {
    value: '4.9',
    count: '203',
  },

  consultationFee: '₹400',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Patient Education', href: '/patient-education' },
  { label: 'Contact', href: '/contact' },
] as const;

export const bookHref = '/contact#book';
