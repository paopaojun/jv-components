import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(ElementUI);

import components from './components';

for(let key in components){
  Vue.component(key,components[key]);
}

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
