<template>
  <div>
    <h3>Abilities</h3>
    <table class="pure-table">
      <thead>
        <td colspan="3">
          <b>{{archetype.name}}</b>
        </td>
      </thead>
      <tr>
        <td colspan="3">
          <div v-for="(ability) in archetype.abilityList[0]" :key="ability.name">
            <p>
              <b>{{ability.name}}:</b> {{ability.description}}
            </p>
          </div>
        </td>
      </tr>
      <thead>
        <td><b>{{archetype.abilityTrackNames[0]}}</b></td>
        <td></td>
        <td><b>{{archetype.abilityTrackNames[1]}}</b></td>
      </thead>
      <tr v-for="(abilityLevel, idx) in archetype.abilityList.slice(1)" :key="idx">
        <td v-on:click="selectAbility(idx, 0)" v-bind:class="{selected: abilitySelected(idx, 0)}">
          <b>{{abilityLevel[0].name}}</b> - {{abilityLevel[0].description}}
        </td>
        <td>
          {{idx+1}}
        </td>
        <td v-on:click="selectAbility(idx, 1)" v-bind:class="{selected: abilitySelected(idx, 1)}">
          <b>{{abilityLevel[1].name}}</b> - {{abilityLevel[1].description}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Archetype } from '@/models/character-schema';
import archetypeList from '@/models/archetype-list';

@Component
export default class AbilitySelectionEditor extends Vue {
  private displayModal = false;

  get archetype(): Archetype {
    return archetypeList[this.$store.state.character.archetypeIdx]
  }

  // True if the character has this ability marked as selected.
  private abilitySelected(level: number, option: number): boolean {
    return this.$store.state.character.abilities[level] === option;
  }

  private selectAbility(level: number, option: number) {
    return this.$store.commit('selectAbility', {level, idx: option})
  }

  removeFeature(idx: number) {
    return this.$store.commit('removeFeature', {idx})
  }

  toggleFeature(idx: number) {
    const selectedIdx = this.$store.state.character.features.indexOf(idx);
    if(selectedIdx !== -1) {
      return this.$store.commit('removeFeature', {idx: selectedIdx})
    }

    if(this.$store.state.character.features.length < this.$store.state.character.availableFeatures)
      return this.$store.commit('addFeature', {idx})
  }
}
</script>

<style scoped>
.selected {
  background-color: rgba(182, 182, 182, 0.931);
}
</style>