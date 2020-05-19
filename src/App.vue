<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'
export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {

    }
  },
  mounted(){
    storage.setItem('a',1)   //给user加一个同级的a:1
    // storage.setItem('user',{a:1})    给user写入{a:1}，这样做会覆盖掉原来的user
    // storage.setItem("赛利亚","{你好啊}",'user')   这样写才会为user添加”赛利亚：你好啊“
    // storage.setItem('abc',{a:10},'user')
    // storage.clear('a')   删除和user同级的a
    // storage.clear('a','user')   删除user下的a
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
