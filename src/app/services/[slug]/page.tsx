import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  IconCheck,
  IconCircleDot,
  IconStethoscope,
  IconDental,
  IconUserHeart,
  IconRosette,
  IconFlare,
  IconAdjustmentsHeart,
  IconGlass,
} from '@tabler/icons-react';
import { servicesData } from '@/lib/services';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/Eyebrow';
import Frame from '@/components/Frame';
import PageHero from '@/components/PageHero';
import CTABand from '@/components/CTABand';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData[params.slug];
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default function ServiceSubpage({ params }: Props) {
  const service = servicesData[params.slug];
  if (!service) {
    notFound();
  }

  const isDental = service.category === 'dental';
  const accentColor = isDental ? 'text-greenDk' : 'text-clayDk';
  const eyebrowTone = isDental ? 'green' : 'clay';

  // Map category to a default icon
  const getCategoryIcon = () => {
    switch (service.slug) {
      case 'dental-health':
        return <IconDental size={40} />;
      case 'hair-solution':
        return <IconUserHeart size={40} />;
      case 'skin-diseases':
        return <IconRosette size={40} />;
      case 'laser-treatment':
        return <IconFlare size={40} />;
      case 'dermal-fillers':
        return <IconAdjustmentsHeart size={40} />;
      case 'deep-peelings':
        return <IconGlass size={40} />;
      default:
        return <IconStethoscope size={40} />;
    }
  };

  const getImageSrc = () => {
    switch (service.slug) {
      case 'dental-health':
        return '/images/dental_checkup.webp';
      case 'hair-solution':
        return '/images/hair_transplant.webp';
      case 'skin-diseases':
      case 'laser-treatment':
      case 'dermal-fillers':
      case 'deep-peelings':
        return '/images/skin_clinic.webp';
      default:
        return undefined;
    }
  };

  return (
    <>
      <PageHero crumb={`Services / ${service.title}`} title={service.title}>
        {service.subtitle}
      </PageHero>

      {/* Overview Section */}
      <section className="section bg-cream">
        <div className="wrap grid grid-cols-1 gap-[54px] min-[921px]:grid-cols-[1.1fr_.9fr] items-center">
          <Reveal>
            <Eyebrow tone={eyebrowTone}>Treatment Overview</Eyebrow>
            <h2 className="mt-3 text-[clamp(28px,4vw,42px)] font-semibold">
              {service.detailsTitle}
            </h2>
            <p className="mt-6 text-[17px] text-slate leading-relaxed">
              {service.description}
            </p>
            <p className="mt-5 text-[17px] text-ink leading-relaxed font-medium">
              {service.detailsText}
            </p>
          </Reveal>

          <Reveal className="relative">
            <div className={`absolute -inset-4 rounded-[32px] opacity-20 blur-xl ${isDental ? 'bg-green' : 'bg-clay'}`} />
            <Frame
              label={service.imageLabel}
              icon={getCategoryIcon()}
              className="aspect-[4/3] rounded-[24px] shadow-soft bg-white border border-line"
              src={getImageSrc()}
            />
          </Reveal>
        </div>
      </section>

      {/* Treatments and Benefits */}
      <section className="section bg-mist border-t border-line">
        <div className="wrap grid grid-cols-1 gap-12 min-[801px]:grid-cols-2">
          {/* Left Column: Treatments List */}
          <Reveal>
            <Eyebrow tone={eyebrowTone}>Treatments &amp; Specialties</Eyebrow>
            <h3 className="mt-3 text-2xl font-semibold mb-6">Procedures We Perform</h3>
            <div className="grid gap-3.5">
              {service.treatments.map((treatment) => {
                const parts = treatment.split(' – ');
                const title = parts[0];
                const detail = parts[1];
                return (
                  <div
                    key={title}
                    className="flex gap-4 items-start rounded-xl border border-line bg-white p-4 shadow-soft-sm hover:border-slate/40 transition-colors"
                  >
                    <IconCircleDot className={`mt-1 shrink-0 ${isDental ? 'text-navy' : 'text-clay'}`} size={16} />
                    <div>
                      <span className="font-semibold text-navy block text-sm">{title}</span>
                      {detail && <span className="text-xs text-slate mt-0.5 block">{detail}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
 
          {/* Right Column: Benefits List */}
          <Reveal>
            <Eyebrow tone={eyebrowTone}>Patient Results</Eyebrow>
            <h3 className="mt-3 text-2xl font-semibold mb-6">Why Seek This Treatment</h3>
            <div className="rounded-2xl border border-line bg-white/70 p-7 backdrop-blur shadow-soft-sm">
              <p className="text-sm text-slate mb-5">
                We design treatment plans focused on long-lasting, natural-looking solutions and overall comfort:
              </p>
              <ul className="grid gap-4.5">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-chartreuse mt-0.5 shadow-sm">
                      <IconCheck size={11} stroke={3.5} />
                    </span>
                    <span className="text-ink text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        eyebrow="Take care of your health"
        title="Schedule your consultation"
        secondary="services"
      >
        Meet our medical specialists to discuss your personal plan. Consultation just ₹400.
      </CTABand>
    </>
  );
}
