import {
  IconDroplet,
  IconFeather,
  IconAmbulance,
  IconCreditCard,
  IconFriends,
} from '@tabler/icons-react';

const items = [
  { icon: IconDroplet, label: 'Strict sterilisation' },
  { icon: IconFeather, label: 'Gentle, painless care' },
  { icon: IconAmbulance, label: 'Same-day emergencies' },
  { icon: IconCreditCard, label: 'Cards & UPI accepted' },
  { icon: IconFriends, label: 'Family & kids welcome' },
];

export default function Badges() {
  return (
    <div className="border-y border-line bg-white">
      <div className="wrap flex flex-wrap justify-between gap-x-[30px] gap-y-[18px] py-[22px]">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-[11px] text-sm font-medium"
          >
            <Icon size={22} className="text-greenDk" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
