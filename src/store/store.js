import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 首先声明一个状态 state
const state = {
  loginState: false,
  token: ''
}

// 然后给 actions 注册事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
const actions = {
  login: ({ commit }) => commit('login'), // 提交到mutations中处理
  logout: ({ commit }) => commit('logout')
}
// 更新状态
const mutations = {
  login (state) {
    state.loginState = true
  },
  logout (state) {
    state.loginState = false
  }
}
// 获取状态信息
const getters = {
}

// 下面这个相当关键了，所有模块，记住是所有，注册才能使用
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
