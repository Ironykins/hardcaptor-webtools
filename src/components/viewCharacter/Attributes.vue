<template>
  <div>
    <table class="attribute-table pure-table pure-table-horizontal">
      <thead>
        <td><b>Passion</b></td>
        <td class="shaded-cell centered">&#9660;</td>
        <td></td>
        <td></td>
      </thead>
      <tr>
        <td>Nerve</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.nerve > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.nerve > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.nerve > 2}"/></td>
      </tr>
      <tr>
        <td>Defiance</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.defiance > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.defiance > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.defiance > 2}"/></td>
      </tr>
      <tr>
        <td>Imagination</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.imagination > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.imagination > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.imagination > 2}"/></td>
      </tr>

      <thead>
        <td><b>Logic</b></td>
        <td class="shaded-cell centered">&#9660;</td>
        <td></td>
        <td></td>
      </thead>
      <tr>
        <td>Analysis</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.analysis > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.analysis > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.analysis > 2}"/></td>
      </tr>
      <tr>
        <td>Observation</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.observation > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.observation > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.observation > 2}"/></td>
      </tr>
      <tr>
        <td>Subterfuge</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.subterfuge > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.subterfuge > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.subterfuge > 2}"/></td>
      </tr>

      <thead>
        <td><b>Devotion</b></td>
        <td class="shaded-cell centered">&#9660;</td>
        <td></td>
        <td></td>
      </thead>
      <tr>
        <td>Adaptability</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.adaptability > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.adaptability > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.adaptability > 2}"/></td>
      </tr>
      <tr>
        <td>Charisma</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.charisma > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.charisma > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.charisma > 2}"/></td>
      </tr>
      <tr>
        <td>Empathy</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.empathy > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.empathy > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.empathy > 2}"/></td>
      </tr>
    </table>
    <p><b>Number of Rerolls</b>: {{this.character.attributes.logic}}</p>
    <p><b>Dice Per Reroll</b>: {{this.character.attributes.passion}}</p>
    <p><b>Guard Limit</b>: {{this.character.attributes.devotion}}</p>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CharacterSheet } from '@/models/character-schema';

@Component
export default class Attributes extends Vue {
  @Prop() private character!: CharacterSheet;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.attribute-table td {
  padding: 2px;
}

.dot {
  background-color: black;
  display: inline-block;
}

td > span {
  height: 1em;
  width: 1em;
  margin: 1px;
  vertical-align: middle;
  border: 0.5px solid black;
  border-radius: 50%;
  display: inline-block;
}

.shaded-cell {
  background-color: #dfdfdf;
}

.centered {
  text-align: center;
}
</style>
