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

export const doctor = {
  name: 'Dr. Satyajit Sahu',
  role: 'BDS, MDS · Associate Professor · Oral & Implant Surgeon',
  yearsExperience: 17,
} as const;

export const stats = [
  { to: 21, suffix: '+', label: 'Years since 2004' },
  { to: 1, suffix: ' Lakh+', label: 'Patients treated' },
  { to: 7000, suffix: '+', label: 'Implants placed' },
  { value: '4.9', star: true, label: 'Patient rating' },
] as const;

export const faqs = [
  {
    q: 'How often should I visit the dentist?',
    a: 'For most people a check-up and professional cleaning every 6 months is ideal. Routine visits let us catch cavities, gum disease and other problems early — before they need bigger, costlier treatment.',
  },
  {
    q: 'Do you treat skin and hair as well as teeth?',
    a: 'Yes. Utkal Dental Care is a multi-speciality clinic. Alongside complete family dentistry, our dermatology and aesthetic specialists handle skin conditions, laser, fillers, chemical peels and hair restoration (FUE/FUT and PRP).',
  },
  {
    q: 'What should I do in a dental emergency?',
    a: 'Call us straight away on 81447 99927. For a knocked-out tooth, keep it in milk and come in as soon as possible. We keep room for same-day emergencies during clinic hours.',
  },
  {
    q: 'How much does a consultation cost?',
    a: 'A consultation is just ₹400. After examining you, we explain your options with transparent pricing so you can decide at your own pace — no pressure and no unnecessary treatment.',
  },
  {
    q: 'Are dental implants painful?',
    a: 'Implant placement is done under local anaesthetic, so you should not feel pain during the procedure. Most patients manage afterwards with simple painkillers and are surprised how comfortable modern implant surgery is.',
  },
] as const;

export const social = {
  practo:
    'https://www.practo.com/bhubaneswar/clinic/utkal-dental-care-airport',
  facebook: 'https://www.facebook.com/UtkalDentalCare/',
} as const;

export const mapEmbed =
  'https://www.google.com/maps?q=Utkal+Dental+Care+Maa+Sakti+Hospital+Bhubaneswar&output=embed';

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Results', href: '/gallery' },
  { label: 'Patient Info', href: '/patient-info' },
  { label: 'Care Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const bookHref = '/contact#book';
