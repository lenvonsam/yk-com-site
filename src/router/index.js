import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let allRoutes = []
let keyRoutes = [{
  path: '/',
  component: require('../pages/YkMain.vue')
}, {
  path: '/contact',
  component: require('../pages/Contact.vue')
}, {
  path: '/intro',
  component: require('../pages/YkIntro.vue')
}, {
  path: '/gyhd',
  component: require('../pages/HtmlList.vue')
}, {
  path: '/csmj',
  component: require('../pages/HtmlList.vue')
}, {
  path: '/mtbd',
  component: require('../pages/HtmlList.vue')
}, {
  path: '/news',
  component: require('../pages/HtmlList.vue')
}, {
  path: '/htmlDetail',
  component: require('../pages/HtmlDetail.vue')
}, {
  path: '/qrcodeList',
  component: require('../pages/QrcodeList.vue')
}, {
  path: '/imgQrcodeList',
  component: require('../pages/ImgQrcodeList.vue')
}, {
  path: '/slide3dList',
  component: require('../pages/Slide3dList.vue')
}, {
  path: '/ykRecruit',
  component: require('../pages/YkRecruit.vue')
}]

keyRoutes.map((m) => {
  allRoutes.push(m)
  let copyPath = {path: `/yeacom${m.path}`, redirect: m.path}
  allRoutes.push(copyPath)
})

export default new Router({
  mode: 'history',
  routes: allRoutes
  // [
  //   {
  //     path: '/',
  //     component: require('../pages/YkMain.vue')
  //   }, {
  //     path: '/contact',
  //     component: require('../pages/Contact.vue')
  //   }, {
  //     path: '/intro',
  //     component: require('../pages/YkIntro.vue')
  //   },
  //   {
  //     path: '/yeacom', redirect: '/'
  //   },
  //   {
  //     path: '/yeacom/contact', redirect: '/contact'
  //   }
  // ]
})
