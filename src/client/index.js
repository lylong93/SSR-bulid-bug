import Vue from 'vue';
import App from './App.vue';

// import store from './store';

Vue.config.productionTip = false;

export function createApp(context) {
  const app = new Vue({
  
    context,
    // store,
    render: h => h(App)
  });
  return { app };
}
