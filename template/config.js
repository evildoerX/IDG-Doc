var langs = [
  {title: '简体中文', path: '/'},
  {title: 'English', path: '/EN/'}
]

docute.init({
  nav: {
    default: [
      {title: '需求文档', path: '/'},
      {title: '使用说明', path: '/SOP'},
      {title: '版本更新', path: '/Changes'},
      {title: '开发者', type: 'dropdown', items: [
        {title: '接入指南', path: '/Develop'},
        {title: 'API接口文档', path: '/API'},
        {title: '数据库设计文档', path: '/DATA'}
      ]},
      {title: '示例', path: '/Example'},
      {title: '依赖', path: '/Depend'},
      {
        title: '语言', type: 'dropdown', items: langs
      }
    ]
  }
})
