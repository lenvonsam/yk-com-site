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
  path: '/news',
  component: require('../pages/News.vue')
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
