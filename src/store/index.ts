import Vue from 'vue'
import Vuex from 'vuex'
import getRandomCharacter from '@/models/character-generator'
import { newCharacter, charAssignedTraits, charAvailableTraits, charAvailableAbilities, charAvailableFeatures, charAvailableTalents } from '@/models/character-schema'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
 
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export default new Vuex.Store({
  state: {
    characterList: [newCharacter()],
    selectedCharacterIdx: 0
  },
  mutations: {
    randomizeCharacter(state) {
      const advancements = state.characterList[state.selectedCharacterIdx].advancements;
      state.characterList[state.selectedCharacterIdx] = getRandomCharacter(advancements);
      Vue.set(state, 'characterList', [...state.characterList]);
    },
    modTrait(state, {attkey, amount}) {
      const character = state.characterList[state.selectedCharacterIdx];
      if(amount + character.traits[attkey] <= 3 
        && amount + character.traits[attkey] >= 0
        && (amount + charAssignedTraits(character) <= charAvailableTraits(character)||
          amount + charAssignedTraits(character) < charAvailableTraits(character) ))
        character.traits[attkey] += amount;
    },
    editArchetype(state, {archetypeIdx}) {
      const character = state.characterList[state.selectedCharacterIdx];
      character.archetypeIdx = archetypeIdx;
      // Reset their archetype-specific selections
      character.features = [];
      character.abilities = [];
    },
    editRPDetails(state, {name, theme, weapon, costume, mark}) {
      const character = state.characterList[state.selectedCharacterIdx];
      character.name = name || character.name;
      character.magicTheme = theme || character.magicTheme;
      character.magicWeapon = weapon || character.magicWeapon;
      character.magicCostume = costume || character.magicCostume;
      character.magicMark = mark || character.magicMark;
    },
    addAdvancement(state) {
      state.characterList[state.selectedCharacterIdx].advancements += 1;
    },
    removeAdvancement(state) {
      const character = state.characterList[state.selectedCharacterIdx];
      if(character.advancements >= 1) {
        character.advancements -= 1;
        character.features = character.features.slice(0, charAvailableFeatures(character));
        character.talents = character.talents.slice(0, charAvailableTalents(character));
        character.abilities = character.abilities.slice(0, charAvailableAbilities(character));
      }
    },
    addTalent(state, {idx}) {
      const character = state.characterList[state.selectedCharacterIdx];
      if(character.talents.indexOf(idx) === -1) {
        character.talents.push(idx)
      }
    },
    removeTalent(state, {idx}) {
      const character = state.characterList[state.selectedCharacterIdx];
      if(character.talents[idx] !== undefined) {
        character.talents.splice(idx, 1)
      }
    },
    addFeature(state, {idx}) {
      const character = state.characterList[state.selectedCharacterIdx];
      if(character.features.indexOf(idx) === -1) {
        character.features.push(idx)
      }
    },
    removeFeature(state, {idx}) {
      const character = state.characterList[state.selectedCharacterIdx];
      if(character.features[idx] !== undefined) {
        character.features.splice(idx, 1)
      }
    },
    selectAbility(state, {level, idx}) {
      const character = state.characterList[state.selectedCharacterIdx];
      // Determine if we can have anything for that level.
      if(level < charAvailableAbilities(character)) {
        character.abilities = [
          ...character.abilities
        ]
        character.abilities[level] = idx;
      }
    },

    selectCharacter(state, {idx}) {
      if(idx >= 0 && idx < state.characterList.length)
        state.selectedCharacterIdx = idx;
    },
    deleteCharacter(state, {idx}) {
      if(state.characterList[idx] !== undefined) {
        state.characterList.splice(idx, 1);
        if(idx === state.selectedCharacterIdx) {
          state.selectedCharacterIdx = 0;
        }
      }
    },
    addCharacter(state, {character}) {
      let newIdx = state.selectedCharacterIdx;
      if(character)
        newIdx = state.characterList.push(character)  
      else
        newIdx = state.characterList.push(newCharacter())

      state.selectedCharacterIdx = newIdx-1;
    }
  },
  actions: {

  },
  modules: {

  },
  plugins: [
    vuexLocal.plugin
  ],
  getters: {
    character: state => {
      return state.characterList[state.selectedCharacterIdx] || newCharacter();
    }
  }
})
