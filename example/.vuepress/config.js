module.exports = {
  title: 'VuePress Portfolio Example',
  description: 'This is a portfolio example built by VuePress',
  theme: require.resolve('../../'), // replace it with ==> theme: 'modern-blog' to use this example project as a boilerplate.
  summaryLength: 700,
  themeConfig: {
    // translations: {
    //   read_more: 'Keep reading!',
    //   read_this_post: 'Read this post now!',
    // },

    // cookies: {
    //   theme: 'dark-lime',
    //   buttonText: 'Got it!',
    //   message: 'We use cookies!',
    // },

    showHeaderNav: false,
    postsheader: 'Experiences',
    // nav: [
    //   {
    //     text: 'Home',
    //     link: '/',
    //     icon: 'el-icon-house',
    //   },
    //   {
    //     text: 'Projects',
    //     link: '/projects/',
    //     icon: 'el-icon-folder',
    //   },
    // ],

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
        title: 'Vue',
        icon: 'Vue',
        link: '',
      },
      {
        title: 'Javascript',
        icon: 'Javascript',
        link: '',
      },
      {
        title: 'Python',
        icon: 'Python',
        link: '',
      },
    ],

    about: {
      fullName: 'GIUSEPPE NAPOLETANO',
      lightText: true, 
      bio: 'I am a passionate Software Engineer, I love Vue.js ♥ ...',
      image: 'https://source.unsplash.com/random/150x150',
      headerColor: '#6C5B7B',
    },
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/',
        },
        {
          type: 'instagram',
          link: 'https://instagram.com',
        },
        {
          type: 'linkedin',
          link: 'https://linkedin.com',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
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
