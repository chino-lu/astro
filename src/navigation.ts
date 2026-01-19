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
    {
      title: 'Unternehmen',
      links: [
        { text: 'Über mich', href: '/ueber-mich' },
        { text: 'Blog', href: '/blog' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Impressum', href: '/impressum' },
    { text: 'Datenschutz', href: '/datenschutz' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: '/rss.xml' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/dein-nutzername' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="/"> HomeIQ</a> · All rights reserved.
  `,
};