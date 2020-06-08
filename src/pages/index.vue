<template>
    <div class="index">
       <div class="container">
           <div class="swiper-box">
               <div class="nav-menu">
                   <div class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,i) in menuList" v-bind:key = "i">
                                    <li v-for="(sub,j) in item" v-bind:key = "j">
                                        <a v-bind:href="sub?'/#/product/'+sub.id:''">
                                            <img v-bind:src="sub?sub.img:'imgs/item-box-1.png'" alt="">
                                            {{sub?sub.name:'小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>   
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li> 
                   </div>
               </div>
               <swiper  :options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div> 
                </swiper>
           </div>
           <div class="ads-box">
               <a v-bind:href="'/#/product/'+item.id" v-for="(item,index) in adsList" v-bind:key="index">
                    <img v-bind:src="item.img" alt="">
                </a>
           </div>
           <div class="banner">
               <a href="/#/product/30">
                    <img v-bind:src="'/imgs/banner-1.png'" alt="">
                </a>
           </div>
           <div class="product-box">
               <div class="container">
                   <h2>手机</h2>
                   <div class="wrapper">
                       <div class="banner-left">
                           <a href="/#/product/35"><img v-bind:src="'imgs/mix-alpha.png'" alt=""></a>
                       </div>
                       <div class="list-box">
                           <div class="list" v-for="(arr,i) in phoneList" v-bind:key ="i">
                               <div class="item" v-for="(item,j) in arr" v-bind:key ="j">
                                   <span>新品</span>
                                   <div class="item-img">
                                       <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt="">
                                   </div>
                                   <div class="item-info">
                                       <h3>小米10</h3>
                                       <p>骁龙865，索尼4800万超广角微距</p>
                                       <p class="price">2999元</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <service-bar></service-bar>
    </div>
</template>
<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ServiceBar from './../components/ServiceBar'
//   var mySwiper = new Swiper ('.swiper-container', {
//     direction: 'vertical', // 垂直切换选项
//     loop: true, // 循环模式选项
    
//     // 如果需要分页器
//     pagination: {
//       el: '.swiper-pagination',
//     },
    
//     // 如果需要前进后退按钮
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
    
//     // 如果需要滚动条
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   })  
export default {
    name:'index',
    components:{
        swiper,
        swiperSlide,
        ServiceBar
    },
    data(){
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    lickableClass : 'my-pagination-clickable',
                },
                loop: true,
                effect:'fade',
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            },
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:'46',
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'',
                    img:'/imgs/slider/slide-4.jpg'
                },
                {
                    id:'',
                    img:'/imgs/slider/slide-5.jpg'
                }
            ],
            menuList:[
                [
                    {
                    id:30,
                    img:'/imgs/item-box-1.png',
                    name:'小米CC9',
                    },{
                    id:31,
                    img:'/imgs/item-box-2.png',
                    name:'小米8青春版',
                    },{
                    id:32,
                    img:'/imgs/item-box-3.jpg',
                    name:'Redmi K20 Pro',
                    },{
                    id:33,
                    img:'/imgs/item-box-4.jpg',
                    name:'移动4G专区',
                    }
                ],
                [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
            ],
            adsList:[
                {
                    id:33,
                    img:'/imgs/ads/ads-1.png'
                },{
                    id:48,
                    img:'/imgs/ads/ads-2.jpg'
                },{
                    id:45,
                    img:'/imgs/ads/ads-3.png'
                },{
                    id:47,
                    img:'/imgs/ads/ads-4.jpg'
                }
            ],
            phoneList:[
                [1,1,1,1,],[1,1,1,1,]
            ],
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
// @import './../assets/scss/base.scss';
    .index{
       .container{
            .swiper-box{
                .swiper-button-prev{
                    margin-left: 264px;
                    color: #dfdfdf;
                }
                .nav-menu{
                    position: absolute;
                    width: 264px;
                    height: 451px;
                    z-index: 9;
                    padding: 30px,0;
                    background-color: #55585A7a;
                    box-sizing: border-box;
                    .menu-wrap{
                        margin-top: 20px;
                        .menu-item{
                            position: relative;
                            list-style-type: none;
                            height: 50px;
                            line-height: 50px;
                            &:hover{
                                background-color:  $colorA;
                                .children{
                                    display: block;
                                    transition: 0.3s;
                                }
                            }
                            a{
                                display: block;
                                font-style: 16px;
                                color: #fff;
                                padding-left: 30px;
                                text-decoration: none;
                                &::after{
                                    position: absolute;
                                    right:30px;
                                    top:17.5px;
                                    content: ' ';
                                    @include bgImg(10px,10px,'/imgs/icon-arrow.png')
                                }
                            }
                            .children{
                                display: none;
                                width:962px;
                                height:451px;
                                background-color:$colorG;
                                position:absolute;
                                top: -20px;
                                left:264px;
                                border:1px solid $colorH;
                                ul{
                                    display:flex;
                                    justify-content:space-between;
                                    height:75px;
                                    margin: 0;
                                    li{
                                    height:75px;
                                    line-height:75px;
                                    flex:1;
                                    padding-left:23px;
                                    list-style: none;
                                    }
                                    a{
                                    color:$colorB;
                                    font-size:14px;
                                    }
                                    img{
                                    width:42px;
                                    height:35px;
                                    vertical-align:middle;
                                    margin-right:15px;
                                    }
                                }
                            }
                        }
                    }
                }
                .swiper-slide {
                    // width: 600px;
                    height:451px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .ads-box{
                @include flex();
                margin-top:14px;
                margin-bottom:31px;
                a{
                    width:296px;
                    height:167px;
                }
            }
            .banner{
                margin-top: 50px;
            }
       }
        .product-box{
            background-color:$colorJ;
            padding:30px 0 50px;
            h2{
                font-size:$fontF;
                height:21px;
                line-height:21px;
                color:$colorB;
                margin-bottom:20px;
            }
            .wrapper{
                display:flex;
                .banner-left{
                margin-right:16px;
                img{
                    width:224px;
                    height:619px;
                }
                }
                .list-box{
                .list{
                    @include flex();
                    width:986px;
                    margin-bottom:14px;
                    &:last-child{
                    margin-bottom:0;
                    }
                    .item{
                    width:236px;
                    height:302px;
                    background-color:$colorG;
                    text-align:center;
                    span{
                        display:inline-block;
                        width:67px;
                        height:24px;
                        font-size:14px;
                        line-height:24px;
                        color:$colorG;
                        &.new-pro{
                        background-color:#7ECF68;
                        }
                        &.kill-pro{
                        background-color:#E82626;
                        }
                    }
                    .item-img{
                        img{
                        // width:100%;
                        height:195px;
                        }
                    }
                    .item-info{
                        h3{
                        font-size:$fontJ;
                        color:$colorB;
                        line-height:$fontJ;
                        font-weight:bold;
                        }
                        p{
                        color:$colorD;
                        font-size: 13px;
                        // line-height:13px;
                        margin:6px auto 13px;
                        }
                        .price{
                        color:#F20A0A;
                        font-size:$fontJ;
                        font-weight:bold;
                        cursor:pointer;
                        &:after{
                            @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                            content:' ';
                            margin-left:5px;
                            vertical-align: middle;
                        }
                        }
                    }
                    }
                }
                }
            }
        }
    }



</style>