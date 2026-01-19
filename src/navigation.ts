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
export const footerData = {
  links: [
    {
      title: 'Leistungen',
      links: [
        { text: 'Planung', href: '/planung' },
        { text: 'Integration', href: '/integration' },
        { text: 'Wartung', href: '/wartung' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Impressum', href: '/impressum' },
    { text: 'Datenschutz', href: '/datenschutz' },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/dein-nutzername' },
  ],
  footNote: `© ${new Age().getFullYear()} HomeIQ · Alle Rechte vorbehalten.`,
};