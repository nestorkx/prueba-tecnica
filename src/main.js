import $ from 'jquery';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './bootstrap';
import './registerServiceWorker';

window.$ = $;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
