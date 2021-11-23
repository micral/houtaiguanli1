import { createStore } from 'vuex'
import user from './moudles/user'
import getters from './moudles/getters'
import app from './moudles/app'
export default createStore({
  state: {
  },
  getters,
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    app
  }
})
