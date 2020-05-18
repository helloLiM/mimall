<template>
    <div>
        order
        <order-header></order-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import orderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
export default {
    name:'order',
    components:{
        orderHeader,
        NavFooter
    }
}
</script>