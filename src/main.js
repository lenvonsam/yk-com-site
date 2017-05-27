// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'animate.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import './common.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import VueScrollTo from 'vue-scrollto'
import VueTouch from 'vue2-touch'
import AMap from 'vue-amap'
import mixins from './mixins'
import {Pagination} from 'vue-pagination-2'
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false
Vue.use(VueTouch)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1500,
  easing: 'ease',
  offset: 0
})
Vue.component('pagination', Pagination)
Vue.use(infiniteScroll)
Vue.mixin(mixins)
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: '5a6dd19f8f5f7ead848e6668c585a466',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

router.beforeEach((to, from, next) => {
  let routes = ['/', '/intro', '/news', '/industry', '/teams', '/responsibility', '/culture', '/contact']
  let currentPath = to.path
  let routeIndex = routes.findIndex(item => item === currentPath)
  if (routeIndex < 0) {
    store.state.topTabIndex = 0
  } else {
    store.state.topTabIndex = routeIndex
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
