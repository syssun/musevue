import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
Vue.use(MuseUI);
Vue.use(Message);

import Toast from 'muse-ui-toast';
var config={
	  position: 'top',               // 弹出的位置
	  time: 1000,                       // 显示的时长
	  closeIcon: 'close',               // 关闭的图标
	  close: true,                      // 是否显示关闭按钮
	  successIcon: 'check_circle',      // 成功信息图标
	  infoIcon: 'info',                 // 信息信息图标
	  warningIcon: 'priority_high',     // 提醒信息图标
	  errorIcon: 'warning'              // 错误信息图标
}

Vue.use(Toast,config);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
