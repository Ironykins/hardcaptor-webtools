import Vue from 'vue'
import Vuex from 'vuex'
import getRandomCharacter from '@/models/character-generator'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    character: getRandomCharacter()
  },
  mutations: {
    randomizeCharacter(state) {
      state.character = getRandomCharacter()
    }
  },
  actions: {
  },
  modules: {
  }
})
