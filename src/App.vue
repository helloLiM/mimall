<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
    }
  },
  mounted(){
    this.getUser();
    this.getCartCount();
    // storage.setItem('a',1)   //给user加一个同级的a:1
    // storage.setItem('user',{a:1})    给user写入{a:1}，这样做会覆盖掉原来的user
    // storage.setItem("赛利亚","{你好啊}",'user')   这样写才会为user添加”赛利亚：你好啊“
    // storage.setItem('abc',{a:10},'user')
    // storage.clear('a')   删除和user同级的a
    // storage.clear('a','user')   删除user下的a

    //使用json方式mock数据，数据源就在本地文件夹中，但是这种方法有弊端，要改动代码，比如main.js中的baseUrl不能再使用/api了
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res
    // })

    //使用mockjs方式mock数据
    // this.axios.get('user/login').then((res)=>{
    //   this.res = res
    // })
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res)=>{
      this.$store.dispatch('saveUserName',res.username);//login组件中已分发actions，但用户名在刷新之后就会丢失，
      //这里我们在app.vue中存储一遍,推测原因可能是刷新时并没有进入login组件页面。所以也就没有触发这段代码，没有重新分发actions
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
