<template>
    <div>
        <!-- <order-header :title=" title ">
            <template >
                <span>{{ tip }}</span>   由于在子路由中跳转不会触发mounted方法，所以要将他们分别写入子组件中
            </template>
        </order-header> -->
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavFooter from './../components/NavFooter'
import ServiceBar from './../components/ServiceBar'
export default {
    name:'order',
    data(){
        return {
            title:'',
            tip:'',
        }
    },
    components:{
        NavFooter,
        ServiceBar
    },
    mounted(){
        let path = this.$route.path;
        if(path == '/order/confirm'){
            this.title = '订单确认';
            this.tip = '温馨提示：请认真填写收货地址'
        }else if(path == '/order/list'){
            this.title = '订单列表';
            this.tip = '温馨提示：清谨防钓鱼链接或诈骗电话'
        }else if(path == '/order/pay'){
            this.title = '订单支付';
            this.tip = '温馨提示：清谨防钓鱼链接或诈骗电话'
        }
    }
}
</script>