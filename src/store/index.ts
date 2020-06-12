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
      state.character = getRandomCharacter(state.character.advancements)
    },
    modTrait(state, {attkey, amount}) {
      if(amount + state.character.traits[attkey] <= 3 
        && amount + state.character.traits[attkey] >= 0
        && (amount + state.character.assignedTraits <= state.character.availableTraits ||
          amount + state.character.assignedTraits < state.character.assignedTraits ))
        state.character.traits[attkey] += amount;
    },
    editRPDetails(state, {name, theme, weapon, costume, mark}) {
      state.character.name = name || state.character.name;
      state.character.magicTheme = theme || state.character.magicTheme;
      state.character.magicWeapon = weapon || state.character.magicWeapon;
      state.character.magicCostume = costume || state.character.magicCostume;
      state.character.magicMark = mark || state.character.magicMark;
    },
    addAdvancement(state) {
      state.character.advancements += 1;
    },
    removeAdvancement(state) {
      // TODO: Do what to subtract things from the character's arsenal?
      if(state.character.advancements >= 1) {
        state.character.advancements -= 1;
      }
    },
    addTalent(state, {idx}) {
      if(state.character.talents.indexOf(idx) === -1) {
        state.character.talents.push(idx)
      }
    },
    removeTalent(state, {idx}) {
      if(state.character.talents[idx] !== undefined) {
        state.character.talents.splice(idx, 1)
      }
    }
  },
  actions: {

  },
  modules: {

  }
})
