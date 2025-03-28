import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// ใช้งาน VCalendar ทั่วทั้งแอป
Vue.use(VCalendar);

new Vue({
  render: h => h(App),
}).$mount('#app')
