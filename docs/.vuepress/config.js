module.exports = {
  title: "TheOtherOne",
  description: "TheOtherOne_小韩的blog",
  base: '/docs/',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['meta', {
      rel: 'author',
      content: 'TheOtherOne'
    }],
    ['meta', {
      rel: 'keywords',
      content: 'TheOtherOne'
    }]
  ],
  theme: 'melodydl',
  themeConfig: {
    title: "TheOtherOne",
    logo: '/favicon.ico',
    personalInfo: {
      name: 'TheOtherOne',
      avatar: '/head.png',
      headerBackgroundImg: '/head.png',
      description: 'In me the tiger sniffs the rose<br/>心有猛虎，细嗅蔷薇',
      email: 'h1306979892@163.com',
      location: 'Beijing, China'
    },
    header: {
      home: {
        title: "Han's Blog",
        subtitle: '好好生活，慢慢相遇',
        headerImage: '/bg1.png'
      },
      tags: {
        title: 'Tags',
        subtitle: '遇见你花光了我所有的运气',
        headerImage: '/bg1.png'
      },
      postHeaderImg: '/bg1.png',
    },
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Tags',
        link: '/tags/'
      },
    ],
    sns: {
      csdn: {
        account: 'csdn',
        link: 'https://blog.csdn.net/weixin_44002432',
      },
      weibo: {
        account: 'weibo',
        link: 'https://weibo.com/u/5656925978',
      },
      juejin: {
        account: 'juejin',
        link: 'https://juejin.im/user/3843548382238791'
      },
      zhihu: {
        account: 'zhihu',
        link: 'https://www.zhihu.com/people/sheng-tang-de-xing-kong'
      },
      github: {
        account: 'github',
        link: 'https://github.com/youdeliang'
      }
    },
    footer: {
      gitbtn: {
        repository: "https://ghbtns.com/github-btn.html?user=youdeliang&repo=vuepress-theme-top&type=star&count=true",
        frameborder: 0,
        scrolling: 0,
        width: "80px",
        height: "20px"
      },
      custom: `Copyright &copy; Top Blog 2020 <br /> 
        Theme By <a href="https://www.vuepress.cn/" target="_blank">VuePress</a>
        | <a href="https://www.github.com/youdeliang/" target="_blank">youdeliang</a>`
    },
    pagination: {
      perPage: 5,
    },
    // vssue 评论配置, 如果不需要，可以设置 comments: false
    comments: {
      owner: 'youdeliang',
      repo: 'vuepress-theme-melodydl',
      clientId: 'dfba8ecad544784fec1f',
      clientSecret: '1358ac11bc8face24f598601991083e27372988d',
      autoCreateIssue: false,
    },
  }
}
