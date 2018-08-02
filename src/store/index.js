import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

let store = new vuex.Store({//store对象
  state: {
    show: 18,
    username: "",
    password: "",
    usernameInfos: [],
    name: "小明"
  },
  getters: {
    getNumAdd(state) {
      return `这个数字是${state.show + 1}`
    },
    filterAddArray: (state) => (age) => {
      return state.usernameInfos.filter(user => user.age > age)
    }
  },
  mutations: {
    SET_AGE(state, age) {
      state.show = age
    },
    SET_INFO(state, data) {
      state[data.property] = data.data;
    },
    CHANGE_NAME(state, name) {
      state.name = name;
    }
  },
  actions: {
    changeNameTimes({ commit }, name) {
      return new Promise((resolve, reject) => {
        setTimeout(function () {
          commit('CHANGE_NAME', name)
          resolve()
        }, 1000)
      })
    }
  }
})

export default store;