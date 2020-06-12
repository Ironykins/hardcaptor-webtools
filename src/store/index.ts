import Vue from 'vue'
import Vuex from 'vuex'
import getRandomCharacter from '@/models/character-generator'
import { CharacterSheet } from '@/models/character-schema'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    character: new CharacterSheet()
  },
  mutations: {
    randomizeCharacter(state) {
      state.character = getRandomCharacter()
    },
    modTrait(state, {attkey, amount}) {
      if(amount + state.character.traits[attkey] <= 3 
        && amount + state.character.traits[attkey] >= 0
        && amount + state.character.assignedTraits <= state.character.availableTraits) 
        state.character.traits[attkey] += amount;
    },
    editRPDetails(state, {name, theme, weapon, costume, mark}) {
      state.character.name = name;
      state.character.magicTheme = theme;
      state.character.magicWeapon = weapon;
      state.character.magicCostume = costume;
      state.character.magicMark = mark;
    }
  },
  actions: {

  },
  modules: {

  }
})
