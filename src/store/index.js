import Vue from 'vue'
import Vuex from 'vuex'



import activities from './modules/activities'

Vue.use(Vuex)

// 数据
export default new Vuex.Store({
  modules: {activities}
})
