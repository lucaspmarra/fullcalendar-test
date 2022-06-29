import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import modal from 'vue-js-modal'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(modal, {
  dialog: true,
  dynamic: true
})

new Vue({
  router,
  store,
  BootstrapVue,
  IconsPlugin,
  render: h => h(App)
}).$mount('#app')