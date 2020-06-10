import Vue from 'vue'
import Vuex from 'vuex'
import { CharacterSheet } from '@/models/character-schema'
import getRandomCharacter from '@/models/character-generator'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    character: {} as CharacterSheet
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
