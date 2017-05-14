const state = {
  vtoMark: '',
  topTabIndex: 0,
  rightTitles: [{
    name: '首页',
    url: {
      path: '/'
    },
    type: 'text',
    vto: '#mainContainer'
  }, {
    name: '关于怡康',
    vto: '.intro',
    type: 'dropdown',
    url: {
      path: '/intro'
    },
    subTitles: [{
      name: '企业简介',
      vto: '.comp-summary'
    }, {
      name: '发展历程',
      vto: '.comp-process'
    }, {
      name: '荣誉墙',
      vto: '.comp-honour'
    }]
  }, {
    name: '新闻中心',
    vto: '.special',
    type: 'text'
  }, {
    name: '怡康产业',
    vto: '.team',
    type: 'text'
  }, {
    name: '怡康团队',
    vto: '.service',
    type: 'text'
  }, {
    name: '社会责任',
    vto: '.contact',
    type: 'text'
  }, {
    name: '企业文化',
    vto: 'xx',
    type: 'text'
  }, {
    name: '联系我们',
    vto: 'xxx',
    type: 'text',
    url: {
      path: '/contact'
    }
  }]
}

export default state
