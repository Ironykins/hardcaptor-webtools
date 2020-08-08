import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'purecss/build/pure-min.css'
import 'purecss/build/grids-responsive-min.css'
import './globals.css'
import 'css.gg/icons/css/trash.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
