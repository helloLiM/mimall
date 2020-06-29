<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="#">小米商城</a>
                    <a href="#">MUI</a>
                    <a href="#">云服务</a>
                    <a href="#">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript" v-if = "username">{{username}}</a>
                    <a href="" v-if = "!username" @click="login">登录</a>
                    <!-- <a href="javascript" v-if = "!username">注册</a> -->
                    <a href="javascript" v-if = "username">我的订单</a>
                    <a href="javascript" class="my-cart" @click="goToCart"> <span class="icon-cart"></span> 购物车({{ cartCount }})</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product/' + item.id" target="_blank">
                                        <div class="pro-img"><img :src="item.mainImage" :alt="item.subtitle"></div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children">
                                <ul>
                                    <li class="product">
                                        <a href="" target="_blank">
                                            <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                            <div class="pro-name">小米CC9</div>
                                            <div class="pro-price">1799元</div>
                                        </a>
                                    </li>
                                    <li class="product">
                                        <a href="" target="_blank">
                                            <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                            <div class="pro-name">小米CC9</div>
                                            <div class="pro-price">1799元</div>
                                        </a>
                                    </li>
                                    <li class="product">
                                        <a href="" target="_blank">
                                            <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                            <div class="pro-name">小米CC9</div>
                                            <div class="pro-price">1799元</div>
                                        </a>
                                    </li>
                                    <li class="product">
                                        <a href="" target="_blank">
                                            <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                            <div class="pro-name">小米CC9</div>
                                            <div class="pro-price">1799元</div>
                                        </a>
                                    </li>
                                    <li class="product">
                                        <a href="" target="_blank">
                                            <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                            <div class="pro-name">小米CC9</div>
                                            <div class="pro-price">1799元</div>
                                        </a>
                                    </li>
                                    <li class="product">
                                        <a href="" target="_blank">
                                            <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                            <div class="pro-name">小米CC9</div>
                                            <div class="pro-price">1799元</div>
                                        </a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                    <li class="product">
                                        <a href="" target="_blank">
                                            <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                            <div class="pro-name">小米CC9</div>
                                            <div class="pro-price">1799元</div>
                                        </a>
                                    </li>
                                    <li class="product">
                                        <a href="" target="_blank">
                                            <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                            <div class="pro-name">小米CC9</div>
                                            <div class="pro-price">1799元</div>
                                        </a>
                                    </li>
                                    <li class="product">
                                        <a href="" target="_blank">
                                            <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                            <div class="pro-name">小米CC9</div>
                                            <div class="pro-price">1799元</div>
                                        </a>
                                    </li>
                                    <li class="product">
                                        <a href="" target="_blank">
                                            <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                            <div class="pro-name">小米CC9</div>
                                            <div class="pro-price">1799元</div>
                                        </a>
                                    </li>
                                    <li class="product">
                                        <a href="" target="_blank">
                                            <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                            <div class="pro-name">小米CC9</div>
                                            <div class="pro-price">1799元</div>
                                        </a>
                                    </li>
                                    <li class="product">
                                        <a href="" target="_blank">
                                            <div class="pro-img"><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90" alt=""></div>
                                            <div class="pro-name">小米CC9</div>
                                            <div class="pro-price">1799元</div>
                                        </a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div class="item-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    data(){
        return{
            phoneList:[]
        }
    },
    filters:{
        currency(val){
            if(!val)return '0.00'
            return '¥' + val.toFixed(2) + '元'
        }
    },
    mounted(){
        this.getProductList()
    },
    computed:{
        username(){
            return this.$store.state.username//因为app.vue加载时，它的方法中还没有取到username的值，所以会出现刷新页面不出现
            //用户名的现象，这是我们吧用户名写在navheader的计算属性中，通过缓存，就不会出现刷新页面不出现用户名的现象了
        },
        cartCount(){
            return this.$store.state.cartCount//原理同上
        }
    },
    methods:{
        login(){
            this.$router.push('/login')
        },
        // getProductList(){
        //     this.axios.get('/products',{
        //     params:{
        //         categoryId:'100012',
        //         pageSize:6
        //     }
        //     }).then((res)=>{
        //     this.phoneList = res.list;
        //     })
        // },
        getProductList(){
            this.axios.get('/products',{
                    params:{
                        categoryId:'100012'
                    }
                }).then((res)=>{   //这里我们截取获取过来的六条数据
                    if(res.list.length>6){
                        this.phoneList = res.list.slice(0,6)
                    }
            })
        },
        goToCart(){
            this.$router.push('/cart')
        }
    },
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .header{
        .nav-topbar{
            height:39px;
            line-height:39px;
            background-color:#333333;
            color:#B0B0B0;
            .container{
                display:flex;
                justify-content:space-between;
                align-items:center;
                width: 1226px;
                margin-right: auto;
                margin-left: auto;
                a{
                    display: inline-block;
                    color: #b0b0b0;
                    margin-right: 17px;
                };
                .my-cart{
                    width: 110px;
                    background-color: #FF6600;
                    text-align: center;
                    color: #fff;
                    margin-right: 0;
                    .icon-cart{
                        display:inline-block;
                        width:16px;
                        height:12px;
                        background:url('/imgs/icon-cart-checked.png') no-repeat center;
                        background-size:contain;
                    }
                }
            }
        };
        .nav-header{
            .container{
                position: relative;
                height: 112px;
                display:flex;
                justify-content:space-between;
                align-items:center;
                width: 1226px;
                margin-right: auto;
                margin-left: auto;
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #ff6600;
                    a{
                        display: inline-block;
                        width: 55px;
                        height: 55px;
                        overflow: hidden;
                        &:before{
                            content:' ';
                            display:inline-block;
                            width:55px;
                            height:55px;
                            background:url('/imgs/mi-logo.png') no-repeat center;
                            background-size:contain;
                            @include bgImg(55px,55px,'/imgs/mi-logo.png',contain);
                            transition: 0.2s;
                        }
                        &:after{
                            content:' ';
                            display:inline-block;
                            width:55px;
                            height:55px;
                            background:url('/imgs/mi-home.png') no-repeat center;
                            background-size:contain;
                            @include bgImg(55px,55px,'/imgs/mi-home.png',contain);
                        }
                        &:hover::before{
                            margin-left: -55px;
                            transition: 0.2s;
                        }
                    }
                }
                .header-menu{
                    display: inline-block;
                    padding-left: 109px;
                    width: 643px;
                    .item-menu{
                        display: inline-block;
                        color: #333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color: $colorA;
                            .children{
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .children{
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0;
                            opacity: 0;
                            overflow: hidden;
                            border-top: 1px solid #E5E5E5;
                            z-index: 10;
                            box-shadow: 0px, 7px 6px 0px rgba(0,0,0,0.11);
                            transition: 0.5s;
                            background-color: #fff;
                            li{
                                list-style: none;
                            }
                            a{
                                text-decoration: none;
                            }
                        }
                        .product{
                            position: relative;
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 16px;
                            line-height: 12px;
                            text-align: center;
                            a{
                                display: inline-block;
                            }
                            img{
                                margin: auto;
                                height: 111px;
                                margin-top: 26px;
                            }
                            .pro-img{
                                height: 137px;
                            }
                            .pro-name{
                                font-weight: bold;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }
                            .pro-price{
                                color: $colorA;
                            }
                            &::before{
                                content: ' ';
                                position: absolute;
                                top: 28px;
                                right: 0;
                                border-left: 1px solid $colorF;
                                height: 100px;
                                width: 1px;
                            }
                            &:last-child::before{
                                display: none;
                                // 去掉最后一个伪类线条
                            }
                        }
                    }
                }
                .item-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border: 1px solid #E0E0E0;
                        display:flex;
                        align-items: center;
                        input{
                            border: none;
                            box-sizing: border-box;
                            border-right: 1px solid #E0E0E0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a{
                            display:inline-block;
                            width:18px;
                            height:18px;
                            background:url('/imgs/icon-search.png') no-repeat center;
                            background-size:contain;
                            @include bgImg(18px,18px,'/imgs/icon-search.png',);
                            margin-left: 17px;
                        }
                    }
                }
            }
        }
    }
</style>