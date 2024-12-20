// therapyCenters.ts

export interface TherapyCenter {
    position: [number, number];
    name: string;
    address: string;
    type: 'Терапевтични общности' | 'Програми за непълнолетни' | 'Дневни центрове' | 'Вечерни програми';
    email: string[];
    phone: string[];
    website: string;
    activities?: string[];
    conditions?: string[];
    workingHours?: string[];
    mapLink: string;
  }
  
  export const therapyCenters: TherapyCenter[] = [
    {
      position: [43.060401, 23.156919],
      name: '🏡 Терапевтична общност „Феникс”',
      address: 'ул. „Рилски езера“ 16, 1407 София',
      type: 'Терапевтични общности',
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
      mapLink: 'https://maps.app.goo.gl/Lnipz6UkNh1jtQ969',
    },
    {
        position: [43.18043278820592, 27.890681996865286],
        name: '🏡 Православната терапевтична общност „Св. Боян-Енравота“',
        address: 'Аспарухово, ул. „Места“ 38А, 9003 Варна',
        type: 'Терапевтични общности',
        phone: [
          '0899 982 435',
          '0879 113 065'
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
        ],
        mapLink: 'https://maps.app.goo.gl/NC6FumSJwXB6ucNNA',
      },
      {
        position: [42.72267491892441, 23.082577825677703], // Coordinates for Bankya, Sofia region
        name: '🏡 БИЛАНИ - Терапевтична общност',
        address: 'ул. „Панорама“, 1320 Клисура',
        type: 'Терапевтични общности', // Therapy Community
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
        ],
        mapLink: 'https://maps.app.goo.gl/vjnSXAWXemkGYCEq7',
      },
      {
        position: [42.69000435051601, 23.34404942753094], // Coordinates for the central part of Sofia
        name: '🏡 Терапевтичен рехабилитационен център „ЖИВА – насока в живота“',
        address: 'ж.к. Яворов, ул. „Мизия“ 7, 1124 София',
        type: 'Терапевтични общности', // Therapy Community
        phone: ['0877 677 834', '0889 119 221'],
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
        ],
        mapLink: 'https://maps.app.goo.gl/9C8hxDJFyVF89SAT9',
      },
      {
        position: [42.89983596214844, 25.271083662917437], // Approximate coordinates for с. Поповци, near Габрово
        name: '🏡 Терапевтичен център „Св. Илия“',
        address: 'улица Знаме на мира 3, 5345 Габрово',
        type: 'Терапевтични общности',
        phone: ['0876 945 908'],
        email: ['in.help.iz@gmail.com'],
        website: 'http://v-pomosht-na-zavisimite.com/',
        activities: [
          'Рестарт програма – резидентна терапевтична програма за лечение на зависимости (алкохол, наркотици, хазарт, хранителни разстройства)',
          'Индивидуална и групова терапия',
          'Арт-терапия и трудова терапия',
          'Рехабилитация чрез спорт и здравословен начин на живот',
          'Образователни и социални модули за реинтеграция'
        ],
        conditions: [
          'Лица над 18 години',
          'Преминала детоксикация и оценка на здравословното състояние',
          'Доброволно участие и подписване на договор'
        ],
        mapLink: 'https://maps.app.goo.gl/j1bque8fbyw47t3N9',
      },
      {
        position: [43.21781921001815, 27.908103885055628], // Approximate coordinates for кк "Златни пясъци"
        name: '🏡 Център за лечение на зависимости "Само днес"',
        address: 'Варна ЦентърОдесос, ул. „Доктор Петър Берон“ 26, 9000 Варна',
        type: 'Терапевтични общности',
        phone: ['0877 84 38 54'],
        email: ['samo.dnes.info@gmail.com'],
        website: 'https://samodnes.bg/',
        activities: [
          'Детоксикация – безболезнено преминаване през абстинентните кризи',
          'Рехабилитация на четири нива: биологично, психологическо, социално, духовно',
          'Индивидуална и групова терапия',
          'Ресоциализация – интеграция в обществото'
        ],
        conditions: [
          'Доброволно участие',
          'Центърът е отворен за пълнолетни мъже и жени'
        ],
        mapLink: 'https://maps.app.goo.gl/QvebQ8BS7LMpyC1C9',
      },
      {
        position: [42.5773, 23.3519], 
        name: '🏡 Център за рехабилитация на зависими „I A.M. WAY“',
        address: 'с. Бистрица, област София-град',
        type: 'Терапевтични общности',
        phone: ['0876 451 525'],
        email: ['office.iamway@gmail.com'],
        website: 'https://iamway.bg/',
        activities: [
          'Високопрагова програма за терапия, рехабилитация и резидентна грижа',
          'Индивидуална и групова психотерапия',
          'Тренинги, семинари и психодрама работилници',
          'Четири етапа на рехабилитация: адаптация, активно възстановяване, ри-ентри, ресоциализация'
        ],
        conditions: [
          'Прием на пълнолетни лица (мъже и жени) в кризисна ситуация или със зависимост',
          'Заявление по образец до Управителя на Дружеството за ползване на социални услуги',
          'Предварително интервю за изясняване на мотивацията'
        ],
        mapLink: 'https://maps.app.goo.gl/5555555555555555',
      },
      {
        position: [42.141976732001915, 24.755869925647495], // Approximate coordinates for гр. Пловдив
        name: '🏡 Програма „Път към свободата“',
        address: '4000 гр. Пловдив, ул. Добри Войников 46',
        type: 'Терапевтични общности',
        phone: ['0877 900 381'],
        email: ['svobodnisme@gmail.com'],
        website: 'https://www.vsvoboda.com/',
        activities: [
          '12 стъпки „Път към свободата“ (духовно образование и дневен режим)',
          'Терапия със заетост (възпитателен труд и домакинска помощ)',
          'Спортна терапия (гимнастика, спортни съревнования)',
          'Арт терапия (театър, стихове, рисуване)',
          'Развитие на личността (тренинги, семинари, изучаване на чужди езици)'
        ],
        conditions: [
          'Прием на мъже и жени на възраст от 18 до 50 г.',
          'Мъжете и жените се настаняват отделно',
          'При необходимост се провежда детоксикация',
          'Прием на зависими с двойни диагнози по преценка след консултация'
        ],
        mapLink: 'https://maps.app.goo.gl/https://maps.app.goo.gl/sjVdAsKa9Lq2WFer6',
      },
      {
        position: [42.68594723553615, 23.28965878149375], // Approximate coordinates for с. Невестино, област Кюстендил
        name: '🏡 Програма за психосоциална рехабилитация „Отново Аз“',
        address: 'София 1795 ж.к. Младост Бл.85 вх. А ап.2',
        type: 'Терапевтични общности',
        phone: ['0899 803 330', '0879 998 917'],
        email: ['charlievariysky@gmail.com', 'minavarsano@gmail.com'],
        website: 'https://otnovoaz.com/',
        activities: [
          'Лечение на зависимости от алкохол, наркотици и хазарт',
          'Конфронтационни групи (асертивност, обратни връзки)',
          'Фокус групи (актуални проблеми на резидентите)',
          'Трудотерапия',
          'Помощ на зависими при търсене на работа',
          'Помощ на съзависими (онлайн и живи групи, индивидуални консултации)'
        ],
        conditions: [
          'Навършени 18 години',
          'Прием след премината детоксификация е желателен'
        ],
        mapLink: 'https://maps.app.goo.gl/ZFCMRV81yYW1maQr7',
      },


      
      {
        position: [42.704111382127984, 23.332290093539374], // Approximate coordinates for the address in Sofia
        name: '🎒 Дневен консултативен център за деца, юноши и родители',
        address: 'София, бул. “Сливница”, бл. 212, вход Г /на гърба на сградата/',
        type: 'Програми за непълнолетни', // Programs for minors
        phone: ['02 931 1202'],
        email: ['info@sofiamca.org'],
        website: 'http://www.sofiamca.org/',
        activities: [
          'промоция на здравословен начин на живот',
          'изграждане на позитивни нагласи чрез креативни дейности',
          'идентифициране и справяне с проблемно поведение',
          'индивидуално консултиране',
          'креативно ателие',
          'културни и спортни дейности',
          'работа с родители и семейно консултиране',
          'образователно-информационни семинари',
          'услуги за работа на терен и ранни интервенции'
        ],
        conditions: [
          'Консултациите се извършват след предварително записан час.',
          'Предоставяните услуги са безплатни.'
        ],
        mapLink: 'https://maps.app.goo.gl/X1eRuk853wuq6p5bA',
      },
      {
        position: [42.70506572732815, 23.136408623821957], // Approximate coordinates for the address in Sofia, кв. „Редута“
        name: '🎒 Терапевтичен център "ТРАМПЛИН"',
        address: 'гр. София, кв. "Редута", ул. „Острец“ № 31, ап. 6',
        type: 'Програми за непълнолетни', // Programs for minors
        phone: ['0886 018 005'],
        email: ['you@tramplincenter.com'],
        website: 'https://tramplincentar.com/',
        activities: [
          'арт терапия – фототерапия, приказки и разкази, изобразителни и приложни изкуства',
          'терапия чрез спорт – тренировки по КУДО',
          'подготовка за училище и обучителни семинари',
          'ресоциализация в дневния център',
          'групова терапия и индивидуална психологическа помощ',
          'работа със семейството и близките на младежите',
          'превенция и личностно развитие',
          'интеграция на деца и юноши застрашени от употреба на наркотици'
        ],
        conditions: [
          'Приемат се деца и младежи от 12 до 18 години или до завършване на средно образование.',
          'Оценка на здравословното състояние от лекар и психиатър.',
          'Изследвания за ХИВ, хепатит и други.',
          'Социална оценка.',
          'Участие в 4 отворени групи и тренировки в рамките на един месец.',
          'Подписване на договор от родител.',
          'Тестове: ЕВРО-АСИ, ЛЮШЕР, “КЪЩА, ЧОВЕК, ДЪРВО“, тест на Кетел, тест на Купър.'
        ],
        mapLink: 'https://maps.app.goo.gl/4xk6NsWwtAURwKCA6',
      },
      {
        position: [42.65563493185881, 27.703489626981497], // Approximate coordinates for the address in Несебър, кв. "Черно море"
        name: '🎒 Дневен център „ТРАМПЛИН СКАЙ“',
        address: 'гр. Несебър, кв. "Черно море", ул. 115',
        type: 'Програми за непълнолетни', // Programs for minors
        phone: ['0886 018 005'],
        email: ['you@tramplicenter.com'],
        website: 'https://tramplincentar.com/',
        activities: [
          'психо-социална рехабилитация',
          'личностно развитие',
          'социална адаптация на тийнейджъри с рисково поведение',
          'превенция на употреба на психоактивни вещества'
        ],
        conditions: [
          'Деца и тийнейджъри на възраст 10-18 години.'
        ],
        mapLink: 'https://maps.app.goo.gl/oQEncgKe2F45pppi6',
      },
      {
        position: [43.2460, 27.9806], // Approximate coordinates for Varna
        name: '🎒 Програма за непълнолетни "Св. Стилиян"',
        address: 'гр. Варна, кв. Виница',
        type: 'Програми за непълнолетни', // Programs for minors
        phone: ['0879 113 065'],
        email: ['info@otvoriochi.org', 'pcdon2004@gmail.com'],
        website: 'https://otvoriochi.org/',
        activities: [
          'Рехабилитация и терапия на лица под 18 г.',
          'Лечение на зависимост към психоактивни вещества',
          'Подпомагане при проблемно поведение'
        ],
        mapLink: 'https://maps.app.goo.gl/G7tjuUemsDnn63Ps6',
      },



      {
        position: [42.70381240430415, 23.322510312185948], // Approximate coordinates for ул. "Георг Вашингтон" 42, София
        name: '🌞 Терапевтичен център „Октава“',
        address: 'гр. София 1202, ул. "Георг Вашингтон" 42',
        type: 'Дневни центрове',
        phone: ['0889 133 486'],
        email: ['oktavabg@mail.bg'],
        website: 'https://www.facebook.com/oktava2008',
        activities: [
          'Терапевтични групи за хора с различни зависимости',
          'Групи за родители и близки на зависими',
          'Индивидуална работа'
        ],
        mapLink: 'https://maps.app.goo.gl/N4Y9tLkWamUKwXmY8',
      },
      {
        position: [42.66962188027769, 23.389541008251424], // Approximate coordinates for ж.к. "Дружба 1", ул. 5038, бл. 97 Б, София
        name: '🌞 Дневен стационар „Живот на чисто”',
        address: 'София 1592, ж.к. "Дружба 1", ул. 5038, бл. 97 Б, кабинети 3 и 4',
        type: 'Дневни центрове',
        phone: ['02 822 92 99', '0879 880 871'],
        email: ['contact@dpblna.org'],
        website: 'http://www.dpblna.org/',
        activities: [
          'Индивидуално консултиране',
          'Групова психотерапия',
          'Включване на клиенти в занимателни мероприятия',
          'Дългосрочна програма за ресоциализация',
          'Фамилни консултации'
        ],
        conditions: [
          'Установена зависимост към алкохол, наркотици или хазарт',
          'Навършени 18 години',
          'Успешна детоксификация',
          'Подкрепяща семейна среда',
          'Успешни предходни нива на лечение',
          'Участието в програмата е безплатно!'
        ],
        mapLink: 'https://maps.app.goo.gl/6tunR5QZ5WnmaHxDA',
      },
      {
        position: [43.2037, 27.9126], // Approximate coordinates for Варна
        name: '🌞 Център за социална рехабилитация и интеграция – Варна',
        address: 'гр. Варна',
        type: 'Дневни центрове',
        phone: ['0888 088 155', '0887 488 596'],
        email: ['zhivot_bez_alcohol@abv.bg'],
        website: 'https://www.socialnideinosti-varna.com/bg/subcategory/socialni-uslugi-za-pylnoletni-lica/sdrujenie-jivot-bez-alkohol/',
        activities: [
          'Мотивационно интервю',
          'Индивидуално психологическо консултиране',
          'Индивидуално психиатрично консултиране',
          'Индивидуално токсикологично консултиране',
          'Индивидуално консултиране с рехабилитатор, социален работник, трудотерапевт',
          'Групова работа',
          'План за социална интеграция – обучение в умения',
          'Работа с близки',
          'Социална интеграция чрез прекарване на свободното време заедно',
          'Рехабилитация – на двигателни дефицити, психологична и социална'
        ],
        conditions: [
          'Включването в услугата става след попълване на молба',
          'Пълнолетни лица с алкохолна злоупотреба и зависимост',
          'Приемат се и лица, злоупотребяващи с или зависими към наркотици',
          'Родители (близки)',
          'Дейностите се финансират от Община Варна'
        ],
        mapLink: 'https://maps.app.goo.gl/5555555555555555',
      },
      {
        position: [43.08506117821877, 25.632016869878868], // Approximate coordinates for Велико Търново
        name: '🌞 Програма за психосоциална рехабилитация на зависимости',
        address: 'гр. Велико Търново, ул. "Бузлуджа" 1',
        type: 'Дневни центрове',
        phone: ['0878 593 895', '062/62 56 97'],
        email: ['cpz.ppsr@abv.bg'],
        website: 'http://tcentarpzvt.com/',
        activities: [
          'Дългосрочна програма за ресоциализация',
          '8 месечна програма',
          '5 дни седмично от 08:30 до 16:00 ч.'
        ],
        conditions: [
          'Навършени 18 години',
          'Документ за самоличност',
          'Липса на актуални досъдебни и съдебни процедури',
          'Липса на психотично разстройство в момента на приемане в програмата',
          'Диагноза, потвърждаваща наличието на клинични белези, удовлетворяващи специфичното разстройство, класифицирано в МКБ-10',
          'Възможност за ежедневно посещение на програмата и на подкрепяща социална среда извън нея',
          'Заявено съгласие с философията, принципите, целите на програмата, програмните схеми, основните правила и последствията от нарушението им, степента и лимита на конфиденциалност'
        ],
        mapLink: 'https://maps.app.goo.gl/r82tqg1MLgSBggSq8',
      },
      {
        position: [42.13680103633148, 24.714580222978253], // Approximate coordinates for Пловдив
        name: '🌞 Лечебно рехабилитационна програма „Дневни грижи“',
        address: 'гр. Пловдив, бул. "Пещерско шосе" 68',
        type: 'Дневни центрове',
        phone: ['032 642 376'],
        email: ['psihodis@abv.bg'],
        website: 'https://cpz-plovdiv.com/',
        mapLink: 'https://maps.app.goo.gl/C9E5qwPvzR3eFkBH7',
      },
      {
        position: [43.866821570918646, 25.98862305086477], // Approximate coordinates for Русе
        name: '🌞 Програма за „Дневен център“',
        address: 'гр. Русе, ул. "Тутракан" 20',
        type: 'Дневни центрове',
        phone: ['082 845 356', '082 845 379'],
        email: ['odpzs_rs@mail.bg'],
        website: 'https://cpz-rs.org/',
        mapLink: 'https://maps.app.goo.gl/vv3FN8cuZoLfXxaa8',
      },
      {
        position: [43.562931534456695, 27.817976139212877], // Approximate coordinates for Добрич
        name: '🌞 Програма за рехабилитация и социално включване',
        address: 'гр. Добрич, ул. "Панайот Хитов" 24',
        type: 'Дневни центрове',
        phone: ['058/60 26 55'],
        email: ['odpzs_dobrich@abv.bg'],
        website: 'http://cpz-dobrich.com/',
        mapLink: 'https://maps.app.goo.gl/UJpsSZxuq1kjotAZ6',
      },



        {
    position: [42.684513393017376, 23.322660810330163], // Approximate coordinates for София
    name: '🌑 Вечерна програма за хазартно зависими',
    address: 'гр. София, ул. "Карнеги" 18',
    type: 'Вечерни програми',
    phone: ['02 971 99 20', '0884 38 99 30'],
    email: ['info@solidarnost-bg.org'],
    website: 'https://www.solidarnost-bg.org/vecherna-programa/',
    activities: [
      'група за превенция на рецидив',
      'индивидуално консултиране',
      'фамилно консултиране'
    ],
      workingHours: ['Групата за превенция на рецидив се осъществява един път седмично вечер.',
                    'Денят и часът се определят от нейните участници и екипа.',
                    'Консултациите се провеждат в допълнително договорени ден и час.',
                    'Заявки за прием в програмата се приемат всеки работен ден между 10:00 и 17:00 часа на посочените телефони.'
                    ],
        mapLink: 'https://maps.app.goo.gl/w7zCow4XXth5yXET7',
      },
      {
        position: [42.684513393017376, 23.322660810330163], // Approximate coordinates for София
        name: '🌑 Вечерна програма за работещи с различни зависимости',
        address: 'гр. София, ул. "Карнеги" 18',
        type: 'Вечерни програми',
        phone: ['02 971 99 20', '0884 38 99 30'],
        email: ['info@solidarnost-bg.org'],
        website: 'https://www.solidarnost-bg.org/rehabilitatsionna-programa/',
        activities: [
          'група за превенция на рецидив',
          'индивидуално консултиране',
          'фамилно консултиране',
          'уринно тестване за употреба на алкохол и наркотици'
        ],
        workingHours: ['Групата за превенция на рецидив се осъществява един път седмично вечер.',
                      'Денят и часът се определят от нейните участници и екипа.',
                      'Консултациите се провеждат в допълнително договорени ден и час.',
                      'Заявки за прием в програмата се приемат всеки работен ден между 10:00 и 17:00 часа на посочените телефони.'
        ],
        mapLink: 'https://maps.app.goo.gl/w7zCow4XXth5yXET7',
      }
    ];  
    // Add more therapy centers here
  
  