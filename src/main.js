import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import store from './store/index'
import vueLazyLoad from 'vue-lazyload'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import require from 'require.js'
Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(Message)
Vue.prototype.$message = Message;//将Message挂载到Vue的原型上
Vue.use(vueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg' //引用图片懒加载，并指定懒加载方式
})

// import jsonData from './mock/api'
// let jsonData = import('./mock/api');

//mockjs中mock接口的开关
// const mock =true;
// if(mock){
// // jsonData
//   require('./mock/api')
// }

//根据前端的跨域方式做调整。cors或代理形式
// axios.defaults.baseURL = ' https://easy-mock.com/mock/5ec890be440ed31bb5bea40a/mimall';
//设置超时时间
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 5000;
//接口错误拦截
axios.interceptors.response.use(
  function(response){
    let res = response.data;
    let path = location.hash;
    if(res.status== 0){
      return res.data;
    }else if(res.status == 10) {
      if(path != '#/index'){
      window.location.href = '/#/login';
    }return Promise.reject(res)
    }else{
      // alert (res.msg);
      Message.warning(res.msg);
      return Promise.reject(res)
    }
  } 
)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
