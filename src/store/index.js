import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 导入登录
import user from './modules/user'
// 导入注册
import register from './modules/register'
// 导入首页
import home from './modules/home'

export default new Vuex.Store({
  modules:{
    user,
    register,
    home
  }
})
