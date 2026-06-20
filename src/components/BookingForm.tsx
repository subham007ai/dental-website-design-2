'use client';

import { useState } from 'react';
import { IconCalendarPlus, IconCircleCheck } from '@tabler/icons-react';
import { site } from '@/lib/site';

const needs = {
  Dental: [
    'Routine check-up / cleaning',
    'Tooth pain / emergency',
    'Dental implants',
    'Root canal',
    'Braces / aligners',
  ],
  'Skin & Hair': [
    'Hair transplant / PRP',
    'Skin / acne treatment',
    'Laser treatment',
    'Dermal fillers',
    'Chemical peel',
  ],
};

const field =
  'w-full rounded-sm border border-line bg-paper px-3.5 py-3 text-sm text-navy transition-colors placeholder:text-slate/70 focus:border-greenDk focus:bg-white focus:outline-none';
const labelCls = 'mb-1.5 mt-4 block text-[10px] font-bold uppercase tracking-[.14em] text-slate';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const time = String(data.get('time') ?? '');
    const need = String(data.get('need') ?? '');

    const message =
      `Hi Utkal Dental Care, I'd like to book an appointment.%0A` +
      `%0AName: ${encodeURIComponent(name)}` +
      `%0APhone: ${encodeURIComponent(phone)}` +
      `%0APreferred time: ${encodeURIComponent(time)}` +
      `%0AFor: ${encodeURIComponent(need)}`;

    setSubmitted(true);
    // Open WhatsApp with the request prefilled.
    window.open(`${site.phone.whatsapp}?text=${message}`, '_blank', 'noopener');
  }

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="border border-line bg-white p-8 text-center shadow-soft">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky text-greenDk">
          <IconCircleCheck size={30} />
        </div>
        <h3 className="font-display text-[22px] font-semibold">Almost there!</h3>
        <p className="mt-2 text-slate">
          We’ve opened WhatsApp with your request — just hit send and we’ll
          confirm your time. Prefer to talk?{' '}
          <a href={site.phone.tel} className="font-semibold text-greenDk">
            Call {site.phone.display}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-semibold text-greenDk underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-white p-7 shadow-soft sm:p-9">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-greenDk">Appointment request</p>
      <h3 className="mb-6 font-display text-[30px] font-medium leading-[.95] tracking-[-.035em]">
        Request your appointment
      </h3>

      <label className={labelCls} htmlFor="bf-name">
        Full name
      </label>
      <input
        id="bf-name"
        name="name"
        type="text"
        required
        placeholder="Your name"
        className={field}
      />

      <div className="grid grid-cols-1 gap-3 min-[481px]:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="bf-phone">
            Phone
          </label>
          <input
            id="bf-phone"
            name="phone"
            type="tel"
            required
            placeholder="Mobile number"
            className={field}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="bf-time">
            Preferred time
          </label>
          <select id="bf-time" name="time" className={field}>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>
      </div>

      <label className={labelCls} htmlFor="bf-need">
        What do you need?
      </label>
      <select id="bf-need" name="need" className={field}>
        {Object.entries(needs).map(([group, options]) => (
          <optgroup key={group} label={group}>
            {options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </optgroup>
        ))}
      </select>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-[9px] rounded-md bg-chartreuse px-[26px] py-[14px] text-[11px] font-bold uppercase tracking-[.14em] text-navy shadow-md transition hover:-translate-y-0.5 hover:bg-clayDk"
      >
        <IconCalendarPlus size={18} /> Request Appointment
      </button>
      <p className="mt-3 text-center text-xs text-slate">
        Sends via WhatsApp — no account needed, we reply fast.
      </p>
    </form>
  );
}
