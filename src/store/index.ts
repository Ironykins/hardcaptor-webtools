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
    setCharacter(state, {character}) {
      state.character = character;
    },
    modTrait(state, {attkey, amount}) {
      if(amount + state.character.traits[attkey] <= 3 
        && amount + state.character.traits[attkey] >= 0
        && (amount + state.character.assignedTraits <= state.character.availableTraits ||
          amount + state.character.assignedTraits < state.character.assignedTraits ))
        state.character.traits[attkey] += amount;
    },
    editArchetype(state, {archetypeIdx}) {
      state.character.archetypeIdx = archetypeIdx;
      // Reset their archetype-specific selections
      state.character.features = [];
      state.character.abilities = [];
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
        state.character.features = state.character.features.slice(0, state.character.availableFeatures);
        state.character.talents = state.character.talents.slice(0, state.character.availableTalents);
        state.character.abilities = state.character.abilities.slice(0, state.character.availableAbilities);
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
    },
    addFeature(state, {idx}) {
      if(state.character.features.indexOf(idx) === -1) {
        state.character.features.push(idx)
      }
    },
    removeFeature(state, {idx}) {
      if(state.character.features[idx] !== undefined) {
        state.character.features.splice(idx, 1)
      }
    },
    selectAbility(state, {level, idx}) {
      // Determine if we can have anything for that level.
      if(level < state.character.availableAbilities) {
        state.character.abilities = [
          ...state.character.abilities
        ]
        state.character.abilities[level] = idx;
      }
    },
  },
  actions: {

  },
  modules: {

  }
})
