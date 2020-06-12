<template>
  <div>
    <h2>Roleplaying Details</h2>
    <table class="pure-table pure-table-bordered">
      <tr>
        <td><b>Archetype:</b></td> <td>{{this.archetype.name}}</td>
      </tr>
      <tr>
        <td><b>Advancements Taken:</b></td> <td>{{this.character.advancements}}</td>
      </tr>
      <tr>
        <td><b>Magical Theme:</b></td> <td>{{this.character.magicTheme}}</td>
      </tr>
      <tr>
        <td><b>Magical Weapon:</b></td> <td>{{this.character.magicWeapon}}</td>
      </tr>
      <tr>
        <td><b>Magical Costume:</b></td> <td>{{this.character.magicCostume}}</td>
      </tr>
      <tr>
        <td><b>Magical Mark:</b></td> <td>{{this.character.magicMark}}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CharacterSheet, Archetype } from '@/models/character-schema';
import ArchetypeList from '@/models/archetype-list';

@Component
export default class RPDetails extends Vue {
  @Prop() private character!: CharacterSheet;
  
  get archetype(): Archetype {
    return ArchetypeList[this.character.archetypeIdx];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
