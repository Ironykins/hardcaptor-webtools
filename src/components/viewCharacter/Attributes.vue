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
        <td class="shaded-cell">{{this.character.traits.nerve > 0 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.nerve > 1 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.nerve > 2 ? "&#11044;" : "&#9711;"}}</td>
      </tr>
      <tr>
        <td>Defiance</td>
        <td class="shaded-cell">{{this.character.traits.defiance > 0 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.defiance > 1 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.defiance > 2 ? "&#11044;" : "&#9711;"}}</td>
      </tr>
      <tr>
        <td>Imagination</td>
        <td class="shaded-cell">{{this.character.traits.imagination > 0 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.imagination > 1 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.imagination > 2 ? "&#11044;" : "&#9711;"}}</td>
      </tr>

      <thead>
        <td><b>Logic</b></td>
        <td class="shaded-cell centered">&#9660;</td>
        <td></td>
        <td></td>
      </thead>
      <tr>
        <td>Analysis</td>
        <td class="shaded-cell">{{this.character.traits.analysis > 0 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.analysis > 1 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.analysis > 2 ? "&#11044;" : "&#9711;"}}</td>
      </tr>
      <tr>
        <td>Observation</td>
        <td class="shaded-cell">{{this.character.traits.observation > 0 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.observation > 1 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.observation > 2 ? "&#11044;" : "&#9711;"}}</td>
      </tr>
      <tr>
        <td>Subterfuge</td>
        <td class="shaded-cell">{{this.character.traits.subterfuge > 0 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.subterfuge > 1 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.subterfuge > 2 ? "&#11044;" : "&#9711;"}}</td>
      </tr>

      <thead>
        <td><b>Devotion</b></td>
        <td class="shaded-cell centered">&#9660;</td>
        <td></td>
        <td></td>
      </thead>
      <tr>
        <td>Adaptability</td>
        <td class="shaded-cell">{{this.character.traits.adaptability > 0 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.adaptability > 1 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.adaptability > 2 ? "&#11044;" : "&#9711;"}}</td>
      </tr>
      <tr>
        <td>Charisma</td>
        <td class="shaded-cell">{{this.character.traits.charisma > 0 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.charisma > 1 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.charisma > 2 ? "&#11044;" : "&#9711;"}}</td>
      </tr>
      <tr>
        <td>Empathy</td>
        <td class="shaded-cell">{{this.character.traits.empathy > 0 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.empathy > 1 ? "&#11044;" : "&#9711;"}}</td>
        <td>{{this.character.traits.empathy > 2 ? "&#11044;" : "&#9711;"}}</td>
      </tr>
    </table>
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

.shaded-cell {
  background-color: #dfdfdf;
}

.centered {
  text-align: center;
}
</style>
