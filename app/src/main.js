import Vue from 'vue'
import Electron from 'vue-electron'
import Router from 'vue-router'

import App from './App'
import routes from './routes'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


import '../node_modules/normalize-css/normalize.css'
import './assets/app.css'

Vue.use(Electron);
Vue.use(Router);
Vue.use(Element);
Vue.config.debug = true;

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app');
