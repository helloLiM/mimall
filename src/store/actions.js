// 商城vuex-actions状态
/*saveUserName：接收由login组件中分发来的actions，
并附带载荷username，在这里我们把它存储下来
*/
export default {
    saveUserName(context,username){
        context.commit('saveUserName', username);
    },
    saveCartCount(context, count) {
        context.commit('saveCartCount', count);
    }
}