export interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  detailsTitle: string;
  detailsText: string;
  category: 'dental' | 'skin-hair';
  treatments: string[];
  benefits: string[];
  seoTitle: string;
  seoDescription: string;
  imageLabel: string;
}

export const servicesData: Record<string, ServiceData> = {
  'dental-health': {
    slug: 'dental-health',
    title: 'Dental Health & Surgery',
    subtitle: 'Foundation of overall well-being and confidence',
    description: 'Good dental health enhances your appearance and plays an important role in your comfort and speech. With expert diagnostics and timely treatment, we prevent major dental issues.',
    detailsTitle: 'Advanced Restorative & Family Dentistry',
    detailsText: 'Led by Dr. Satyajit Sahu (BDS, MDS, Associate Professor), we provide comprehensive oral treatments ranging from routine cleanings to advanced implant surgery.',
    category: 'dental',
    treatments: [
      'Preventive Dentistry – Routine check-ups, cleanings, and fluoride treatments',
      'Restorative Dentistry – Fillings, crowns, bridges, and dental implants',
      'Cosmetic Dentistry – Teeth whitening, veneers, and smile design',
      'Orthodontics – Braces and clear aligners for teeth alignment',
      'Pediatric Dentistry – Gentle, specialized dental care for children',
      'Oral Surgery – Precise extractions and surgical procedures'
    ],
    benefits: [
      'Prevents decay and chronic oral infections',
      'Restores chewing function and clear speech',
      'Long-lasting smile enhancements',
      'Caring, anxiety-free pediatric environment'
    ],
    seoTitle: 'Dental Health & Oral Surgery Clinic — Utkal Dental Care',
    seoDescription: 'Premium family dentistry, implants, and root canals in Bhubaneswar. Led by MDS Oral Surgeon Dr. Satyajit Sahu.',
    imageLabel: 'Dental treatment room'
  },
  'hair-solution': {
    slug: 'hair-solution',
    title: 'Hair Transplant & Solutions',
    subtitle: 'Restore your natural hair density and confidence',
    description: 'Thinning hair and receding lines can impact both men and women due to genetics, stress, or hormones. We provide advanced, permanent hair restoration treatments.',
    detailsTitle: 'Follicular Hair Restoration & PRP Care',
    detailsText: 'Healthy follicles from your own scalp donor area are extracted and transplanted into thinning areas for completely natural, permanent growth.',
    category: 'skin-hair',
    treatments: [
      'FUE Hair Transplant (Follicular Unit Extraction) – Scar-free, minimally invasive',
      'FUT Hair Transplant (Follicular Unit Transplantation) – Ideal for larger bald areas',
      'PRP Therapy (Platelet-Rich Plasma) – Natural growth factors for strengthening follicles',
      'Medically-guided hair loss prevention programs',
      'Scalp Care programs for follicle health'
    ],
    benefits: [
      'Permanent, natural hair growth results',
      'Safe, pain-free techniques with minimal downtime',
      'Restores density to receding hairlines',
      'Customized treatments for both men and women'
    ],
    seoTitle: 'Advanced FUE Hair Transplant & PRP — Utkal Dental Care',
    seoDescription: 'Permanent hair transplants and PRP hair loss solutions in Bhubaneswar. Safe, minimally invasive procedures with natural results.',
    imageLabel: 'Hair restoration clinic'
  },
  'skin-diseases': {
    slug: 'skin-diseases',
    title: 'Skin Disease Treatment',
    subtitle: 'Specialized clinical care for healthy, comfortable skin',
    description: 'Skin diseases cause irritation, discomfort, and loss of confidence. Our dermatology experts provide proper diagnostics and treatment to manage and cure skin conditions.',
    detailsTitle: 'Clinical Dermatology & Disease Management',
    detailsText: 'We treat a broad range of medical skin conditions using targeted dermatological therapies, focusing on relief and long-term prevention.',
    category: 'skin-hair',
    treatments: [
      'Acne & Pimples – Direct care to clear breakouts and prevent scarring',
      'Eczema & Psoriasis – Advanced long-term management for chronic conditions',
      'Fungal Infections – Rapid cure for ringworm, athlete\'s foot, and other infections',
      'Vitiligo & Pigmentation Disorders – Advanced care to restore even skin tone',
      'Allergies & Rashes – Relief from redness, itching, and irritation',
      'Skin Cancer Screening – Early clinical detection and preventive monitoring'
    ],
    benefits: [
      'Symptomatic relief from irritation and itching',
      'Customized dermatological prescription programs',
      'Prevents chronic scarring and skin damage',
      'Conducted in a completely hygienic environment'
    ],
    seoTitle: 'Clinical Dermatology & Skin Diseases — Utkal Dental Care',
    seoDescription: 'Expert treatment for acne, eczema, psoriasis, fungal infections, and pigmentation in Bhubaneswar. Custom medical skin care.',
    imageLabel: 'Dermatological inspection'
  },
  'laser-treatment': {
    slug: 'laser-treatment',
    title: 'Laser Skin Treatments',
    subtitle: 'FDA-approved laser technology for smooth, clear skin',
    description: 'Whether you seek permanent hair reduction, pigmentation removal, or acne scar reduction, our advanced laser systems offer lasting results with minimal discomfort.',
    detailsTitle: 'Precision Laser Skin Therapy',
    detailsText: 'State-of-the-art laser wavelengths targeted specifically to your skin type under professional medical supervision.',
    category: 'skin-hair',
    treatments: [
      'Laser Hair Removal – Permanent reduction of unwanted face/body hair',
      'Skin Rejuvenation – Collagen stimulation to restore a youthful glow',
      'Pigmentation Removal – Treatment for sunspots, dark spots, and sun damage',
      'Acne Scar Reduction – Laser resurfacing to minimize texture and marks',
      'Tattoo Removal – Safe fading and removal of permanent inks',
      'Vascular Lesion Treatment – Minimizing redness, veins, and birthmarks'
    ],
    benefits: [
      'Safe, non-invasive, and highly precise treatment',
      'Custom wavelengths calibrated for Indian skin tones',
      'Minimal downtime with rapid post-treatment recovery',
      'Noticeable improvement in skin texture'
    ],
    seoTitle: 'Laser Hair Removal & Skin Resurfacing — Utkal Dental Care',
    seoDescription: 'FDA-approved laser hair removal, pigmentation fading, and scar reduction in Bhubaneswar. Minimal downtime.',
    imageLabel: 'Laser skin procedure'
  },
  'dermal-fillers': {
    slug: 'dermal-fillers',
    title: 'Dermal Fillers',
    subtitle: 'Non-surgical anti-aging and volume restoration',
    description: 'Restore youthful volume, smooth deeper lines, and enhance your facial contours with safe injectable hyaluronic acid treatments that yield natural-looking results.',
    detailsTitle: 'Aesthetic Face Contouring & Plumping',
    detailsText: 'Hyaluronic acid is a naturally occurring compound that hydrates and adds structure, smoothing wrinkles instantly with minimal discomfort.',
    category: 'skin-hair',
    treatments: [
      'Lip Enhancement – Contouring, plumping, and symmetry correction',
      'Cheek & Under-eye Hollows – Restoring volume and reducing dark circles',
      'Nasolabial Folds – Smoothing deep smile lines around the nose and mouth',
      'Marionette Lines – Lifting drooping corners of the lips',
      'Jawline & Chin Definition – Sculpting a sharper, defined profile'
    ],
    benefits: [
      'Instant reduction of deep wrinkles and lines',
      'Restores natural facial volume and roundness',
      'Improves dermal hydration and skin elasticity',
      'Safe, FDA-approved, temporary treatments (reversible)'
    ],
    seoTitle: 'Dermal Fillers & Lip Enhancement — Utkal Dental Care',
    seoDescription: 'Non-surgical facial sculpting, wrinkle reduction, and lip plumping in Bhubaneswar. Safe hyaluronic acid injectables.',
    imageLabel: 'Dermal filler treatment'
  },
  'deep-peelings': {
    slug: 'deep-peelings',
    title: 'Deep Peelings',
    subtitle: 'Medical-grade chemical peels for skin resurfacing',
    description: 'Rejuvenate your skin, reduce persistent signs of aging, and reveal a radiant glow. Deep peelings target stubborn concerns that standard facials cannot fix.',
    detailsTitle: 'Medical-Grade Chemical Resurfacing',
    detailsText: 'Chemical solutions remove damaged outer layers of skin, stimulating collagen production and promoting healthy new skin cells.',
    category: 'skin-hair',
    treatments: [
      'Deep chemical peels customized for skin type',
      'Chemical resurfacing for persistent acne scarring',
      'Peels for hyperpigmentation, melasma, and age spots',
      'Rejuvenation treatments for fine lines and skin sagging'
    ],
    benefits: [
      'Deep resurfacing that resolves persistent texture issues',
      'Promotes significant collagen regeneration',
      'Safe, medical-grade formulations selected by skin experts',
      'Reveals brighter, uniform, and radiant skin'
    ],
    seoTitle: 'Deep Chemical Peels & Resurfacing — Utkal Dental Care',
    seoDescription: 'Medical-grade chemical peeling for acne scars, pigmentation, and deep wrinkles in Bhubaneswar. Professional skin rejuvenation.',
    imageLabel: 'Skin chemical peel'
  }
};
