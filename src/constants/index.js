export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Geri Tri Panca Tamba, CSCU,IC3',
    position: 'Co-founder Wengdev Tech & Software Developer at Wengdev Tech',
    img: 'assets/review1.png',
    review:
      'Johannes is a disciplined Programmer, Project Manager and Teacher, prioritizing systematic planning before execution, and achieving maximum targets every time, working and learning with Johannes is an extraordinary experience.',
  },
  {
    id: 2,
    name: 'Hafil Sukamto, IC3',
    position: 'Co-founder Wengdev Tech',
    img: 'assets/review2.png',
    review:
      'At first, I was hesitant to try creating a website on my own. People around me said it was complicated, difficult, and boring. But after my friend recommended this, my initial doubts faded, and I was finally able to build a website. The material was presented in a way that was engaging, interactive, and enjoyable 😄.',
  },
  {
    id: 3,
    name: 'Miftah Rizky Alamsyah, MTCNA, CSCU, IC3',
    position: 'Co-founder Wengdev Tech',
    img: 'assets/review3.png',
    review: 'Very helpful in completing my college projects. The resulting website is also very appealing.',
  },
  {
    id: 4,
    name: 'Azhar Arrozak, S.Pd.,IC3,MOS',
    position: 'Ex-Software Engineer at Wengdev Tech',
    img: 'assets/review4.png',
    review: 'Excellent service, getting more extraordinary and handsome each day 🤩🤩🤩.',
  },
];

export const myProjects = [
  {
    title: 'Sistem Informasi Kependudukan',
    desc: 'Information System for Population Management in RW 8, Cigondewah Rahayu',
    subdesc:
      'This system is designed to streamline population management processes, including data collection, record maintenance, and service facilitation for the residents of RW 8. It enables efficient handling of demographic information, improving accessibility and accuracy while supporting community administrative needs.',
    texture: '/textures/project/project1.mp4',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'PHP',
        path: '/assets/php.png',
      },
    ],
  },
  {
    title: 'Trinitas Open',
    desc: 'Information System for Trinitas Open Basketball Competition',
    subdesc:
      'This system is tailored to manage the Trinitas Open basketball competition efficiently. It facilitates team registration, match scheduling, score tracking, and result announcements. Designed to enhance user experience, it ensures seamless communication and coordination for participants, organizers, and spectators.',
    texture: '/textures/project/project2.mp4',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'PHP',
        path: '/assets/php.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'SMA Trinitas Bandung',
    pos: 'Computer Science Teacher',
    duration: '2024-Present',
    title: 'Teaching: Algorithms and Programming, Data Analysis, Computer Network, and Mobile Programming',
    icon: '/assets/smatrinitasbandung.png',
    animation: 'victory',
  },

  {
    id: 2,
    name: 'SMKN 1 Cimahi',
    pos: 'Software Engineer Teacher',
    duration: '2023 - 2023',
    title:
      'Teaching: Object-Oriented Programming with Java, Mobile Programming, C# Desktop Programming, and Java Swing Programming.',
    icon: '/assets/smkn1cimahi.png',
    animation: 'salute',
  },
];
