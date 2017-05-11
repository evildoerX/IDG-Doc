var langs = [
  {title: '简体中文', path: '/'},
  {title: 'English', path: '/EN/'}
]

docute.init({
  nav: {
    default: [
      {title: '服务介绍', path: '/'},
      {title: '使用说明', path: '/Develop'},
      {title: '版本更新', path: '/Changes'},
      {title: '依赖', path: '/Depend'},
      {
        title: '语言', type: 'dropdown', items: langs
      }
    ]
  }
})
