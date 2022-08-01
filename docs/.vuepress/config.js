module.exports = {
  base:'/docs/',
  title: "TheOtherOne",
  description: "TheOtherOne",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { rel: 'author', content: 'TheOtherOne' }],
    ['meta', { rel: 'keywords', content: 'TheOtherOne' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
    logo: '/assets/img/hero.png',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/about'
      },
      {
        text: 'External',
        items: [
          { text: 'Group1', items: [{
            text: 'Home',
            link: '/'
          },
          {
            text: 'Guide',
            link: '/about'
          }] },
          { text: 'Group2', items: [{
            text: 'Home',
            link: '/'
          },
          {
            text: 'Guide',
            link: '/about'
          }] }
        ]
      },
    ],
    sidebar: [
      '',
      'about',
      'about1'
    ]
  }
}
