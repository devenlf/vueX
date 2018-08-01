import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

let store = new vuex.Store({//store对象
  state: {
    show: 18,
    username:"",
    password:""
  },
  getters: {
    getNumAdd(state) {
      return `这个数字是${state.show + 1}`
    }
  },
  mutations: {
    SET_AGE(state,age) {
      state.show = age
    },
    SET_INFO(state,data){
      state[data.property] = data.data;
    }
  }
})

export default store;