export const headerData = {
  links: [
    {
      text: 'Startseite',
      href: '/',
    },
    {
      text: 'Leistungen',
      links: [
        {
          text: 'Planung',
          href: '/planung',
        },
        {
          text: 'Integration',
          href: '/integration',
        },
        {
          text: 'Wartung & Service',
          href: '/wartung',
        },
      ],
    },
    {
      text: 'Energie',
      href: '/energie',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Über mich',
      href: '/ueber-mich',
    },
  ],
  actions: [
    { 
      variant: 'primary', 
      text: 'Termin buchen', 
      href: '/kontakt#termin', // Führt zum Cal.com Bereich
    },
  ],
};