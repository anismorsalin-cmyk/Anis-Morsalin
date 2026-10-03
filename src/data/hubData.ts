export interface SpaceZone {
  id: string;
  name: string;
  pillar: 'STUDY' | 'CONNECT' | 'CREATE' | 'BELONG';
  tagline: string;
  description: string;
  noiseLevel: string;
  capacity: string;
  availableSeats: number;
  totalSeats: number;
  highlightSpecs: string[];
  imageUrl: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'drinks' | 'bites';
  price: string;
  description: string;
  tag?: string;
}

export interface HubPerk {
  id: string;
  iconName: 'coffee' | 'users' | 'wifi' | 'package' | 'credit-card' | 'clock';
  title: string;
  subtitle: string;
  description: string;
}

export const HUB_PERKS: HubPerk[] = [
  {
    id: 'perk-1',
    iconName: 'coffee',
    title: 'Specialty Coffee & Drinks',
    subtitle: 'Craft Barista Bar',
    description: 'Single-origin espresso, matcha lattes, cold brew, and functional elixirs crafted for stamina without sugar crashes.'
  },
  {
    id: 'perk-2',
    iconName: 'users',
    title: 'Study & Meet Spaces',
    subtitle: 'Quiet & Group Zones',
    description: 'Dedicated whisper-quiet solo study desks, 4-8 person brainstorming booths, and collaborative lounges.'
  },
  {
    id: 'perk-3',
    iconName: 'wifi',
    title: 'High-Speed WiFi',
    subtitle: '1.0 Gbps Symmetrical',
    description: 'Enterprise gigabit Wi-Fi 6 with redundant campus network failover. Zero lag on video calls or file uploads.'
  },
  {
    id: 'perk-4',
    iconName: 'package',
    title: 'Amazon Package Pick-Up & Returns',
    subtitle: 'Secure 24/7 Lockers',
    description: 'Never miss a package because dorm mailrooms close at 4 PM. Safe 24/7 locker pickup and prepaid return drop-off.'
  },
  {
    id: 'perk-5',
    iconName: 'credit-card',
    title: 'Student Membership Perks',
    subtitle: 'Affordable Passes',
    description: 'Discounts on drinks and food, free printing credits, locker access, and flexible student ID payment options.'
  },
  {
    id: 'perk-6',
    iconName: 'clock',
    title: 'Open 24/7',
    subtitle: '365 Days a Year',
    description: 'Your campus doesn’t stop at 5 PM, neither do we. Safe keycard access, bright paths, and warm coffee around the clock.'
  }
];

export const SPACE_ZONES: SpaceZone[] = [
  {
    id: 'study',
    name: 'The Study Sanctuary',
    pillar: 'STUDY',
    tagline: 'Deep Focus & Thesis Prep',
    description: 'Engineered for uninterrupted academic concentration. Acoustic wool baffling, ergonomic chairs, and dual 27-inch 4K USB-C monitors at every bay.',
    noiseLevel: 'Silent (0 dB)',
    capacity: '48 Desks',
    availableSeats: 16,
    totalSeats: 48,
    highlightSpecs: [
      'Strict zero-whisper quiet policy',
      'Dual 4K Type-C charging displays',
      'Dimmable 2700K amber task lamps'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'connect',
    name: 'Collaborative Commons',
    pillar: 'CONNECT',
    tagline: 'Group Projects & Case Competitions',
    description: 'Interactive breakout tables and acoustic meeting booths for group discussions, peer tutoring, and team sprint presentations.',
    noiseLevel: 'Low Murmur (< 40 dB)',
    capacity: '36 Seats in 6 Booths',
    availableSeats: 8,
    totalSeats: 36,
    highlightSpecs: [
      'Full magnetic dry-erase whiteboard walls',
      '65" 4K wireless presentation casting',
      'Universal power outlets on every table'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'create',
    name: 'The Creators Loft',
    pillar: 'CREATE',
    tagline: 'Ideation, Podcasts & Tech Sprints',
    description: 'Equipped for creative students, coders, and startup teams. Acoustic recording pods, standing brainstorming desks, and maker tools.',
    noiseLevel: 'Moderate (< 45 dB)',
    capacity: '24 Workstations',
    availableSeats: 9,
    totalSeats: 24,
    highlightSpecs: [
      'Soundproof audio/Zoom podcast booth',
      'High-speed wireless laser print & binding',
      'Hardware lending desk (MagSafe, Type-C cables)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'belong',
    name: 'Community Lounge & Café Bar',
    pillar: 'BELONG',
    tagline: 'More than a café. A place to belong.',
    description: 'The social heartbeat of Study Hub. Pull up a leather armchair, meet fellow university scholars, grab a late-night pour-over, or pick up your Amazon parcels.',
    noiseLevel: 'Warm Cafe Ambiance',
    capacity: '40 Lounge Seats',
    availableSeats: 12,
    totalSeats: 40,
    highlightSpecs: [
      'La Marzocco craft espresso bar',
      'Amazon 24/7 Locker pickup & returns kiosk',
      'Warm nourishing meals served past midnight'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'c1',
    name: 'Study Hub Single-Origin Pour-Over',
    category: 'coffee',
    price: '$4.20',
    description: 'Hand-dripped Kalita Wave. Rotates weekly between Ethiopian Guji and Colombian Geisha.',
    tag: 'Direct Trade'
  },
  {
    id: 'c2',
    name: 'Signature Flat White',
    category: 'coffee',
    price: '$4.60',
    description: 'Double ristretto shot with micro-textured velvety oat milk or organic whole milk.',
    tag: 'House Favorite'
  },
  {
    id: 'c3',
    name: '24-Hour Nitro Cold Brew',
    category: 'coffee',
    price: '$4.80',
    description: 'Slow cold-steeped on tap with creamy nitrogen head. High clarity, zero sugar.',
    tag: 'On Tap'
  },
  {
    id: 'd1',
    name: 'Lion’s Mane & Cacao Nootropic Latte',
    category: 'drinks',
    price: '$5.50',
    description: 'Raw Peruvian cacao, 1000mg Lion’s Mane mushroom extract, espresso, steamed oat milk.',
    tag: 'Brain Fuel'
  },
  {
    id: 'd2',
    name: 'Ceremonial Uji Matcha Tonic',
    category: 'drinks',
    price: '$5.20',
    description: 'Kyoto first-harvest matcha whisked with fresh yuzu citrus spritz and sparkling spring water.',
    tag: 'Clean Focus'
  },
  {
    id: 'b1',
    name: 'Truffled Sourdough Melt',
    category: 'bites',
    price: '$7.80',
    description: 'Country sourdough, aged gruyère, caramelized shallots, served warm with sea salt crisps.',
    tag: 'Warm Bite'
  },
  {
    id: 'b2',
    name: 'Midnight Artisan Shoyu Ramen',
    category: 'bites',
    price: '$8.20',
    description: 'Rich dashi broth, fresh noodles, soft ajitsuke egg, scallions. Served 10 PM – 5 AM.',
    tag: 'Night Exclusive'
  },
  {
    id: 'b3',
    name: 'Warm Pain au Chocolat',
    category: 'bites',
    price: '$4.20',
    description: 'Freshly baked French flaky pastry layered with Valrhona 66% dark chocolate.',
    tag: 'Fresh Daily'
  }
];

export const HUB_PLANS = [
  {
    id: 'day-pass',
    name: 'Day Scholar Pass',
    price: '$14',
    period: 'per day pass',
    duration: '12-hour session',
    desc: 'Flexible 12-hour workstation access in any zone with high-speed Wi-Fi.',
    perks: [
      '1 Specialty beverage included ($5.50 value)',
      'Unlimited batch brew drip coffee refills',
      'Dual 4K monitors & quiet pods',
      '$5 Wireless printing credit'
    ],
    highlight: true,
    cta: 'Claim Day Pass'
  },
  {
    id: 'night-owl',
    name: 'Night Owl Sprint',
    price: '$12',
    period: '9:00 PM – 7:00 AM',
    duration: '9:00 PM – 7:00 AM',
    desc: 'Engineered for night study marathons when campus libraries close early.',
    perks: [
      'All-night guaranteed quiet desk reservation',
      'Continuous fresh coffee & herbal tea station',
      'Complimentary midnight snack token',
      '24/7 Security keycard escort service'
    ],
    highlight: false,
    cta: 'Book Night Sprint'
  },
  {
    id: 'membership',
    name: 'Hub Semester Member',
    price: '$79',
    period: 'per month',
    duration: 'Full Semester',
    desc: 'The complete university pass with package locker, storage, and 24/7 entry.',
    perks: [
      'Unlimited 24/7/365 biometric tap access',
      'Dedicated personal lockable storage locker',
      '24/7 Amazon Package Locker receiving',
      '20% off all cafe coffee, food & drinks'
    ],
    highlight: false,
    cta: 'Join The Hub'
  }
];

export const PRICING_PLANS = HUB_PLANS;

export const FAQ_ITEMS = [
  {
    question: 'How does university ID card access work after hours?',
    answer: 'After 9:00 PM, entry turnstiles require a student ID tap or verified digital pass QR code. Campus security monitors common areas 24/7.',
    category: 'access'
  },
  {
    question: 'Can I pay using my University Student ID card or Dining Dollars?',
    answer: 'Yes! All specialty espresso, functional drinks, and food items can be purchased directly using your university dining card balance or Apple Pay.',
    category: 'access'
  },
  {
    question: 'What is the noise policy between zones?',
    answer: 'The Silent Sanctuary is strictly 0 dB whisper-free. The Collaborative Commons permits group conversations, team discussions, and screen casting.',
    category: 'academic'
  },
  {
    question: 'How does 24/7 Amazon Package Locker pickup work?',
    answer: 'Simply select Study Hub East Quad Locker as your Amazon delivery point. You receive a pickup code you can scan at our locker bank 24 hours a day, even at 3 AM.',
    category: 'amenities'
  }
];

export const HRD_VENTURE_METRICS = [
  {
    label: 'Student Jobs Created',
    value: '34',
    subtext: 'Part-time roles with $19.50/hr average wage + healthcare stipend'
  },
  {
    label: 'Break-Even Timeline',
    value: '14 Mo',
    subtext: 'Conservative financial forecast based on 62% average seat utilization'
  },
  {
    label: 'Campus Library Relief',
    value: '+450',
    subtext: 'Daily peak-hour seats added to campus academic ecosystem'
  },
  {
    label: 'Student Satisfaction',
    value: '98.4%',
    subtext: 'Based on 420-student pilot survey during Spring 2026 Finals'
  }
];
