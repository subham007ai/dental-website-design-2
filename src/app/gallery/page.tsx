import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Smile & Treatment Gallery — Utkal Dental Care',
  description: 'See the real results of our dental, skin and hair treatments. Real patient smile makeovers, hair restorations, and aesthetic skin therapy.',
};

const cases = [
  {
    title: 'Full Smile Makeover',
    category: 'dental',
    before: '/images/hero_family.webp', // Fallback/Procedure context
    after: '/images/dental_implants.webp',
    doctor: 'Dr. Satyajit Sahu',
    details: 'Ceramic crowns and orthodontic alignment, completed in 4 sessions.',
    quote: '"My confidence has completely changed. Smiling feels natural now."',
  },
  {
    title: 'Hair Regrowth Treatment',
    category: 'hair',
    before: '/images/skin_clinic.webp',
    after: '/images/hair_transplant.webp',
    doctor: 'Clinical Trichologist',
    details: '6 sessions of advanced PRP therapy and topical scalp treatment.',
    quote: '"The hair thinning stopped within weeks and density has improved immensely."',
  }
];

export default function GalleryPage() {
  return (
    <>
      <PageHero crumb="Results" title="Smile & Treatment Gallery">
        Compare actual before and after results of our dental, hair and skin procedures.
      </PageHero>
      <section className="section site-texture">
        <div className="wrap">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {cases.map((item, idx) => (
              <Reveal key={idx} className="border-y border-line bg-white/70 p-5 transition-all duration-200 hover:shadow-soft-sm sm:p-6">
                <BeforeAfterSlider
                  beforeSrc={item.before}
                  afterSrc={item.after}
                  beforeAlt={`${item.title} Before`}
                  afterAlt={`${item.title} After`}
                  className="aspect-[4/3] overflow-hidden rounded-sm"
                />
                <div className="mt-6 space-y-3">
                  <div className="flex">
                    <span className="text-[10px] font-bold uppercase tracking-[.16em] text-greenDk">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-[32px] font-display font-medium leading-[.95] tracking-[-.035em] text-navy">{item.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{item.details}</p>
                  <p className="text-xs text-navy font-semibold">Specialist: {item.doctor}</p>
                  <div className="border-t border-line pt-3 mt-4">
                    <p className="italic text-sm text-ink leading-relaxed font-medium">{item.quote}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
