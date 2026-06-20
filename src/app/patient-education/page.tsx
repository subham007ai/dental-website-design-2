import type { Metadata } from 'next';
import EduCard, { type EduItem } from '@/components/EduCard';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Patient Education — Utkal Dental Care, Bhubaneswar',
  description:
    'Simple, practical tips from Utkal Dental Care to keep your teeth and gums healthy — daily care, diet, warning signs and after-treatment advice.',
  alternates: { canonical: '/patient-education' },
};

const cards: EduItem[] = [
  {
    n: 1,
    title: 'Daily oral care matters',
    points: [
      'Brush twice a day for 2 minutes with fluoride toothpaste.',
      'Clean your tongue — it reduces bad breath and bacteria.',
      "Floss once daily to reach where your brush can't.",
    ],
  },
  {
    n: 2,
    title: 'Diet affects your teeth',
    points: [
      'Limit sugary snacks and drinks that feed cavity bacteria.',
      'Drink water after meals to wash away food particles.',
      'Add calcium-rich foods like milk, yogurt and cheese.',
    ],
  },
  {
    n: 3,
    title: 'Regular visits save teeth',
    points: [
      'Visit every 6 months for a check-up and cleaning.',
      'Early detection prevents costly treatment later.',
      'Routine X-rays catch problems before you feel pain.',
    ],
  },
  {
    n: 4,
    title: 'Warning signs to watch',
    warn: true,
    points: [
      'Bleeding gums may indicate gum disease.',
      'Persistent bad breath can mean infection or decay.',
      'Sensitivity to hot or cold is an early cavity sign.',
    ],
  },
  {
    n: 5,
    title: 'After-treatment care',
    points: [
      'After an extraction, avoid straws and smoking.',
      'For root canal/implants, follow medication and follow-ups.',
      'Call us if you notice swelling, severe pain or bleeding.',
    ],
  },
  {
    n: 6,
    title: 'Oral health = whole health',
    points: [
      'Poor oral hygiene raises risk of heart disease and diabetes.',
      'Healthy gums support a healthier body overall.',
      "Oral care isn't just your smile — it's your whole health.",
    ],
  },
];

export default function PatientEducationPage() {
  return (
    <>
      <PageHero
        crumb="Patient Education"
        title={
          <>
            Keep your smile
            <br />
            healthy at home
          </>
        }
      >
        A well-informed patient makes the best decisions for their health.
        Here’s what every patient should know.
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="grid grid-cols-1 gap-[22px] min-[921px]:grid-cols-2">
            {cards.map((c) => (
              <EduCard key={c.n} item={c} />
            ))}
          </div>
        </div>
      </section>

      <CTABand eyebrow="Due for a check-up?" title="Book your 6-month visit">
        A quick check-up now saves bigger problems later. Consultation just{' '}
        {site.consultationFee}.
      </CTABand>
    </>
  );
}
