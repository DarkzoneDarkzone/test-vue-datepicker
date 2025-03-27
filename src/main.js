import Vue from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar';

Vue.config.productionTip = false


// ใช้งาน VCalendar ทั่วทั้งแอป
Vue.use(VCalendar);

new Vue({
  render: h => h(App),
}).$mount('#app')
