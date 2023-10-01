module.exports = {
  title: 'Giuseppe Napoletano',
  description: "Giuseppe Napoletano's portfolio",
  theme: require.resolve('../../'),
  summaryLength: 700,
  themeConfig: {
    showHeaderNav: false,
    postsheader: {
      title: 'Currently employed at',
      light: true
    },

    background: {
      imageUrl: '',
      primaryColor: '#1decc599',
      secondaryColor: '#5b0ed699 100%',
      fallbackColor: '#a18cd1',
    },

    languages: [
      'it',
      'gb',
      'es',
    ],

    skills: [
      {
        title: 'VueJs',
        icon: 'Vue',
        link: '',
      },
      {
        title: 'C#',
        icon: 'Csharp',
        link: '',
      },
      {
        title: 'C',
        icon: 'C',
        link: '',
      },
      {
        title: 'Java',
        icon: 'Java',
        link: '',
      },
      {
        title: 'Php',
        icon: 'Php',
        link: '',
      },
      {
        title: 'ASP.NET',
        icon: 'Gear',
        link: '',
      },
      {
        title: 'GNU/Linux',
        icon: 'Linux',
        link: '',
      },
      {
        title: 'Git',
        icon: 'Git',
        link: '',
      },
      {
        title: 'HTML',
        icon: 'Html',
        link: '',
      },
      {
        title: 'Css',
        icon: 'Css',
        link: '',
      },
      {
        title: 'Docker',
        icon: 'Docker',
        link: '',
      },
      {
        title: 'Javascript',
        icon: 'Javascript',
        link: '',
      },
      {
        title: 'SQL',
        icon: 'SQL',
        link: '',
      },
    ],

    about: {
      fullName: 'GIUSEPPE NAPOLETANO',
      lightText: true,
      bio: "Software engineer and tech enthusiast. When I'm not immersed in lines of code, you'll find me chasing the checkered flag in the world of motorsport. 🏁",
      image: '/images/me.jpg',
      headerColor: '#6C5B7B',
    },
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/giu-napoletano29',
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/giuseppe-napoletano/',
        },
        {
          type: 'mail',
          link: 'mailto:me@giuseppenapoletano.dev',
        },
      ],
      copyright: [
        {
          text: 'Designed by Giuseppe Napoletano',
          link: '',
        },
      ],
    },
  },
  plugins: [
    'crisp',
    'seo',
    'smooth-scroll',
    'reading-progress',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    '@vuepress/google-analytics',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      // 'sitemap',
      // {
      //   hostname: 'https://site.com',
      // },
    ],
  ],
}
