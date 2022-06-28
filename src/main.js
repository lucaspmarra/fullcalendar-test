import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* =--------------------
Fullcalendar css imports
----------------------= */
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
