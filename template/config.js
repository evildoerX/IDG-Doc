const langs = [
  { title: 'English', path: '/home', matchPath: /^\/(home|plugin|cli|changelog)/ },
  { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
  { title: '繁體中文', path: '/zh-Hant/', matchPath: /^\/zh-Hant/ },
  { title: '日本語', path: '/ja/', matchPath: /^\/ja/ }
]

docute.init({
  landing: 'landing.html',
  debug: true,
  tocVisibleDepth: 4,
  nav: {
    default: [
      {
        title: '需求文档', path: '/home'
      },
      {
        title: '技术文档', path: '/Code'
      },
      {
        title: '设计文档', path: '/Design'
      },
      {
        title: '接入文档', path: '/Access'
      }
    ]
  }
})
