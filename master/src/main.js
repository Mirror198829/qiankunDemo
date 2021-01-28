import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import { registerMicroApps, start } from 'qiankun'
import nlComponentLib from './nlComponentLib'

import 'element-ui/lib/theme-chalk/index.css';


import actions from './shared'
Vue.prototype.$act = actions
let props = {
  getGlobalState:actions.getGlobalState
}//props必须是个{}对象类型，不能使用字符串、数值类型

registerMicroApps([
  {
    name: 'vueApp', // app name registered
    entry: '//localhost:3000',
    container: '#subContainer', 
    activeRule: '#/micr',
    props:props
  }
]);
start({
  singular: false
});

Vue.use(ElementUI);
Vue.use(nlComponentLib)

import nlTitle from './nlComponentLib/nlTitle'
window.commonComponent = { nlTitle };

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
