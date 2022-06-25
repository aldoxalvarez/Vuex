import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import snackbarComponent from './components/Snackbar'

Vue.config.productionTip = false

//Componente Snackbar
Vue.component('snackbarComponent',snackbarComponent);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
