// therapyCenters.ts

export interface TherapyCenter {
    position: [number, number];
    name: string;
    address: string;
    type: 'Adult' | 'Underaged' | 'Mixed';
    email: string[];
    phone: string[];
    website: string;
    activities: string[];
    conditions: string[];
  }
  
  export const therapyCenters: TherapyCenter[] = [
    {
      position: [42.9362, 23.0474], // coordinates for с. Бракьовци, Софийска област
      name: 'Терапевтична общност „Феникс”',
      address: 'с. Бракьовци, община Годеч, Софийска област',
      type: 'Underaged',
      email: ['contact@phoenixhouse.bg'],
      phone: ['0898 209 175'],
      website: 'http://phoenixhouse.bg/',
      activities: [
        'лечение и рехабилитация на зависими от психоактивни вещества (наркотици, алкохол) или хазарт, както и на хора с хранителни разстройства',
        'групова терапевтична работа',
        'превенция на рецидив',
        'ресоциализация',
      ],
      conditions: [
        'диагностицирана зависимост към психоактивни вещества',
        'приемат се мъже и жени',
        'приемат се и клиенти с двойна диагноза',
        'не се приемат младежи с антисоциално личностово разстройство',
      ],
    },
    {
        position: [43.2364, 27.9524], // Coordinates for Varna, Vinitsa
        name: 'Православната терапевтична общност „Св. Боян-Енравота“',
        address: 'гр. Варна, кв. "Виница"',
        type: 'Adult', // Since they accept people over 18
        phone: [
          '0899 982 435', // Phone for inquiries and consultations
          '0879 113 065'  // Anastass Anastassov (Manager)
        ],
        email: ['info@otvoriochi.org', 'pcdon2004@gmail.com'],
        website: 'https://otvoriochi.org/',
        activities: [
          'лечение и рехабилитация на зависими към психоактивни вещества (наркотици и алкохол) и техните близки',
          'ресоциализация',
          'психосоциална рехабилитация',
          'духовна грижа на основата на православното християнство'
        ],
        conditions: [
          'приемат се мъже и жени, навършили 18 г.',
          'програмата е резидентна (24 часова)',
          'включва два модула: рехабилитация (9-12 месеца) и ресоциализация (3-6 месеца)',
          'мултидисциплинарен екип от психолози, социални работници, психиатър и лекари-специалисти'
        ]
      }
    // Add more therapy centers here
  ];
  