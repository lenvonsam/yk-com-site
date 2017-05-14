import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: require('../pages/YkMain.vue')
    }, {
      path: '/contact',
      name: 'contact',
      component: require('../pages/Contact.vue')
    }, {
      path: '/intro',
      name: 'intro',
      component: require('../pages/YkIntro.vue')
    }
  ]
})
