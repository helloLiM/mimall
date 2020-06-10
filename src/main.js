import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import require from 'require.js'
Vue.use(VueAxios,axios)

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
    if(res.status== 0){
      return res.data;
    }else if(res == 10) {
      window.location.href = '/#/login';
    }else{
      alert (res.msg);
    }
  } 
)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
