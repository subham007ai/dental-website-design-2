import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import SectionHead from '@/components/SectionHead';
import Reveal from '@/components/Reveal';
import { IconShieldCheck } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'Patient Information & Pricing — Utkal Dental Care',
  description: 'First-visit expectations, diagnostic pricing transparency, and sterilisation safety guidelines at Utkal Dental Care, Bhubaneswar.',
};

export default function PatientInfoPage() {
  return (
    <>
      <PageHero crumb="Resources" title="Patient Information">
        Plan your visit with clear pricing brackets, sterilisation protocols, and diagnostic guides.
      </PageHero>

      {/* Sterilisation & Safety */}
      <section className="section site-texture">
        <div className="wrap">
          <Reveal>
            <SectionHead eyebrow="Safety First" title="Sterilisation Protocols" center>
              We maintain strict, medical-grade hygiene standards to protect our patients and clinical staff.
            </SectionHead>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 border-y border-line md:grid-cols-3">
            {[
              { title: 'Autoclave Sterilisation', desc: 'All surgical and dental instruments undergo 100% autoclave steam sterilisation under high pressure.' },
              { title: 'Disposable Instruments', desc: 'Surgical needles, gloves, cups, and suction tips are disposed of immediately after a single clinical use.' },
              { title: 'Air & Surface Disinfection', desc: 'All clinical surfaces and dental chairs are disinfected with medical-grade sanitisers between sessions.' }
            ].map((item, idx) => (
              <div key={idx} className="border-b border-line bg-white/55 p-7 last:border-b-0 hover:bg-white md:border-b-0 md:border-l md:first:border-l-0 sm:p-8">
                <IconShieldCheck className="mb-5 text-greenDk" size={30} />
                <h3 className="mb-2 text-[25px] font-display font-medium leading-[.95] tracking-[-.03em] text-navy">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <SectionHead eyebrow="Transparency" title="Standard Treatment Pricing" center>
              Clear pricing guidance. Actual cost details depend on individual diagnostic complexity.
            </SectionHead>
          </Reveal>
          <Reveal className="max-w-[700px] mx-auto mt-10 bg-navy text-white p-8 md:p-10 rounded-[28px] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-chartreuse/[.06]" />
            <div className="relative z-10 divide-y divide-white/10">
              {[
                { title: 'Clinical Consultation (Dental/Skin)', price: '₹300 - ₹500' },
                { title: 'Root Canal Treatment (RCT)', price: '₹2,500 - ₹5,000' },
                { title: 'Dental Implants (Single Unit)', price: '₹18,000 - ₹35,000' },
                { title: 'Skincare Chemical Peel', price: '₹1,500 - ₹3,000' },
                { title: 'PRP Hair Therapy (Per Session)', price: '₹3,500 - ₹6,000' }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between py-4 text-sm font-medium">
                  <span className="text-white">{item.title}</span>
                  <span className="text-chartreuse font-bold">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="relative z-10 text-xs text-[#9E978A] mt-6 text-center">
              * Rates shown are standard averages and do not include laboratory customisations or special surgical additions.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
