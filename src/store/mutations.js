// 商城vuex-mutations状态
/*saveUserName：接收由login组件中分发来的actions，
并附带载荷username，在这里我们把它存储下来
*/
export default {
    saveUserName(state,username){
        state.username = username;
    },
    saveCartCount(state, count) {
        state.cartCount = count;
    }
}