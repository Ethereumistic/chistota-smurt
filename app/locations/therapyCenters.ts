// therapyCenters.ts

export interface TherapyCenter {
    position: [number, number];
    name: string;
    address: string;
    type: 'Терапевтична общност' | 'Програми за непълнолетни' | 'Частни Клиники';
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
      type: 'Терапевтична общност',
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
        type: 'Терапевтична общност',
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
      },
      {
        position: [42.7024, 23.1925], // Coordinates for Bankya, Sofia region
        name: 'БИЛАНИ - Терапевтична общност',
        address: 'София област, гр. Банкя, община Клисура, ул. Панорама № 9',
        type: 'Терапевтична общност', // Therapy Community
        phone: ['0893 685 999'],
        email: ['info@bilani.bg'],
        website: 'http://bilani.bg/',
        activities: [
          'социално-рехабилитационни програми за поведенческа модификация',
          'участие в културни и публични мероприятия',
          'опазване на общественото здраве чрез отказ от употреба на психоактивни вещества',
          'промоция на здравословен начин на живот и повишаване на информираността на обществото',
          'ангажиране на институции за подкрепа на ресоциализацията',
          'промяна на общественото мнение за наркоманиите и хроничните зависимости'
        ],
        conditions: [
          'приемат се мъже над 18 години',
          'преминал детоксификация или под лекарски контрол в процес на детоксификация',
          'диагностицирана зависимост',
          'оценка на здравословното състояние от лекар',
          'подписване на договор и информирано съгласие',
          'консултация с психиатър за двойна диагноза'
        ]
      },
      {
        position: [42.6983, 23.3291], // Coordinates for the central part of Sofia
        name: 'Терапевтичен рехабилитационен център „ЖИВА – насока в живота“',
        address: 'гр. София 1000, ул. „Тракия“ № 54',
        type: 'Терапевтична общност', // Therapy Community
        phone: ['+359 877 677 834', '+359 889 119 221'],
        email: ['info@centrejiva.com'],
        website: 'http://centrejiva.com/',
        activities: [
          'групова терапия',
          'превенция на рецидив',
          'индивидуална терапия',
          'Change & Grow групи',
          'подкрепа за семейството и близките',
          'литература и уъркшопи',
          'писмени работи'
        ],
        conditions: [
          'навършени 18 години',
          'приемат се мъже и жени',
          'успешна детоксификация'
        ]
      },
    ];  
    // Add more therapy centers here
  
  