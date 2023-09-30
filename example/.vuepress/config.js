module.exports = {
  title: 'VuePress Blog Example',
  description: 'This is a blog example built by VuePress',
  theme: require.resolve('../../'), // replace it with ==> theme: 'modern-blog' to use this example project as a boilerplate.
  summaryLength: 700,
  themeConfig: {
    translations: {
      read_more: 'Keep reading!',
      read_this_post: 'Read this post now!',
    },

    // cookies: {
    //   theme: 'dark-lime',
    //   buttonText: 'Got it!',
    //   message: 'We use cookies!',
    // },

    summary: true,

    // Example of advanced summary usage
    /*
    summary: {
      // Use the first two paragraphs
      paragraphs: 2,

      // Let's assume that a paragraph is anything that ends with "..." and a new line
      paragraphsSeparator: "...\n",

      // And let's assume that we want to join back the extracted paragraphs with an empty space.
      paragraphsJoiner: "",

      // If we didn't want to use the "paragraphs" functionality, and instead we
      // want to extract a summary up until the first occurrence of a text, we'd
      // use the "stopSymbol" functionality. Let's assume that we want to get
      // all the text up until the first ";" followed by a new line appears in
      // our text.
      stopSymbol: ";\n",

      // How about we add an emoji at the beginning of our summary?
      prepend: "🔈",

      // ... what about at the end?
      append: "📖",
    },
    */
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'el-icon-house',
      },
      // {
      //   text: 'Projects',
      //   link: '/projects/',
      //   icon: 'el-icon-folder',
      // },
    ],

    about: {
      fullName: 'Giuseppe Napoletano',
      bio: 'I am a passionate Software Engineer, I love Vue.js ♥ ...',
      image: 'https://source.unsplash.com/random/800x600',
    },
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/z3by',
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
    'social-share',
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
      //   hostname: 'https://vp-modern.z3by.com',
      // },
    ],
  ],
}
