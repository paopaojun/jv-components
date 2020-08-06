import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(ElementUI);

import testCommon from './components';
Vue.component('testCommon', testCommon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')