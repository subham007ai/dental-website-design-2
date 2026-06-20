import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oral & Skincare Health Blog — Utkal Dental Care',
  description: 'Expert medical articles and tips on maintaining oral hygiene, hair growth, and clinical skin rejuvenation treatments.',
};

const posts = [
  {
    title: '5 Steps to Choose Between Braces and Clear Aligners',
    category: 'Dental',
    date: 'June 18, 2026',
    summary: 'A detailed comparative guide looking at comfort, treatment duration, visibility, and cost of modern orthodontic solutions.',
    src: '/images/dental_checkup.webp',
  },
  {
    title: 'Understanding PRP Hair Restoration Therapy',
    category: 'Hair',
    date: 'June 10, 2026',
    summary: 'How platelet-rich plasma works to stimulate dormant hair follicles, what to expect, and session timeline details.',
    src: '/images/hair_transplant.webp',
  },
  {
    title: 'Daily Skincare Routine: Tips from Dermatologists',
    category: 'Skin',
    date: 'May 28, 2026',
    summary: 'Cleanse, hydrate, protect. The simple three-step clinical guideline to prevent acne, pigmentation and early aging.',
    src: '/images/skin_clinic.webp',
  }
];

export default function BlogPage() {
  return (
    <>
      <PageHero crumb="Care Blog" title="Oral & Skincare Resource Hub">
        Clinical tips and expert advice written by Utkal Dental Care specialists.
      </PageHero>
      <section className="section site-texture">
        <div className="wrap">
          <div className="grid grid-cols-1 border-y border-line md:grid-cols-3">
            {posts.map((post, idx) => (
              <Reveal key={idx} className="flex h-full flex-col border-b border-line bg-white/45 last:border-b-0 transition-all duration-200 hover:bg-white md:border-b-0 md:border-l md:first:border-l-0">
                <div className="relative aspect-[16/10] w-full bg-white">
                  <Image src={post.src} alt={post.title} fill unoptimized className="object-cover" />
                </div>
                <div className="flex flex-grow flex-col justify-between p-7 sm:p-8">
                  <div className="space-y-3">
                    <div className="flex">
                      <span className="text-[9px] font-bold uppercase tracking-[.16em] text-greenDk">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-[28px] font-display font-medium leading-[.95] tracking-[-.035em] text-navy">{post.title}</h3>
                    <p className="text-slate text-[10px] font-bold uppercase tracking-[.13em]">{post.date}</p>
                    <p className="text-ink text-sm leading-relaxed">{post.summary}</p>
                  </div>
                  <div className="border-t border-line pt-4 mt-6">
                    <Link href="/contact/" className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[.12em] text-navy transition-colors hover:text-greenDk">
                      Consult a specialist ↗
                    </Link>
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
