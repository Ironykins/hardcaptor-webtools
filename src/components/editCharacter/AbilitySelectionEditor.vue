<template>
  <div>
    <h3>Abilities</h3>
    <span>
      <span class="reminder" v-if="hasAvailableAbilities">
        You have abilities to choose!
      </span>
    </span>
    <table class="pure-table archetype-table">
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
        <td><b>Level</b></td>
        <td><b>{{archetype.abilityTrackNames[1]}}</b></td>
      </thead>
      <tr class="ability-row" v-bind:class="{disabled: levelDisabled(idx+1)}" v-for="(abilityLevel, idx) in archetype.abilityList.slice(1)" :key="idx">
        <td class="ability-cell" v-on:click="selectAbility(idx, 0)" v-bind:class="{selected: abilitySelected(idx, 0)}">
          <b>{{abilityLevel[0].name}}</b> - {{abilityLevel[0].description}}
        </td>
        <td class="centered">
          {{idx+1}}
        </td>
        <td class="ability-cell" v-on:click="selectAbility(idx, 1)" v-bind:class="{selected: abilitySelected(idx, 1)}">
          <b>{{abilityLevel[1].name}}</b> - {{abilityLevel[1].description}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Archetype, charAvailableAbilities } from '@/models/character-schema';
import archetypeList from '@/models/archetype-list';

@Component
export default class AbilitySelectionEditor extends Vue {
  private displayModal = false;

  get archetype(): Archetype {
    return archetypeList[this.$store.getters.character.archetypeIdx]
  }

  // True if the character has this ability marked as selected.
  private abilitySelected(level: number, option: number): boolean {
    return this.$store.getters.character.abilities[level] === option;
  }

  private selectAbility(level: number, option: number) {
    return this.$store.commit('selectAbility', {level, idx: option})
  }

  private get availableAbilities() {
    return charAvailableAbilities(this.$store.getters.character)
  }

  private get hasAvailableAbilities() {
    return this.$store.getters.character.abilities.length < this.availableAbilities;
  }

  private levelDisabled(idx: number): boolean {
    return idx > this.availableAbilities;
  }

}
</script>

<style scoped>
.centered {
  text-align: center;
}

.ability-cell {
  width: 50%;
}

.archetype-table > tr > td {
  vertical-align: top;
}

.archetype-table > thead {
  text-align: center;
}

.selected {
  /* background-color: rgba(182, 182, 182, 0.931); */
  background: #c58dc0;
}

.ability-row {
  cursor: pointer;
}

.ability-row.disabled {
  color: darkgrey;
  background: #dddddd;
  cursor: not-allowed;
}

.reminder {
  color: green;
  font-weight: bold;
}
</style>