<template>
  <div>
    <span class="availablepoints" v-bind:class="{pointsinvalid: availablePoints < 0, pointsattention: availablePoints > 0}">
      <span v-if="availablePoints === 0">
        All points allocated
      </span>
      <span v-else>
        Available Points: {{availablePoints}}
      </span>
    </span>
    <table class="attribute-table pure-table pure-table-horizontal">
      <thead>
        <td><b>Passion</b></td>
        <td class="shaded-cell centered">&#9660;</td>
        <td/><td/><td/><td/>
      </thead>
      <tr>
        <td>Nerve</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.nerve > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.nerve > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.nerve > 2}"/></td>
        <td><button v-on:click="modTrait('nerve', -1)">-</button></td>
        <td><button v-on:click="modTrait('nerve', 1)">+</button></td>
      </tr>
      <tr>
        <td>Defiance</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.defiance > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.defiance > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.defiance > 2}"/></td>
        <td><button v-on:click="modTrait('defiance', -1)">-</button></td>
        <td><button v-on:click="modTrait('defiance', 1)">+</button></td>
      </tr>
      <tr>
        <td>Imagination</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.imagination > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.imagination > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.imagination > 2}"/></td>
        <td><button v-on:click="modTrait('imagination', -1)">-</button></td>
        <td><button v-on:click="modTrait('imagination', 1)">+</button></td>
      </tr>

      <thead>
        <td><b>Logic</b></td>
        <td class="shaded-cell centered">&#9660;</td>
        <td/><td/><td/><td/>
      </thead>
      <tr>
        <td>Analysis</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.analysis > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.analysis > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.analysis > 2}"/></td>
        <td><button v-on:click="modTrait('analysis', -1)">-</button></td>
        <td><button v-on:click="modTrait('analysis', 1)">+</button></td>
      </tr>
      <tr>
        <td>Observation</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.observation > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.observation > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.observation > 2}"/></td>
        <td><button v-on:click="modTrait('observation', -1)">-</button></td>
        <td><button v-on:click="modTrait('observation', 1)">+</button></td>
      </tr>
      <tr>
        <td>Subterfuge</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.subterfuge > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.subterfuge > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.subterfuge > 2}"/></td>
        <td><button v-on:click="modTrait('subterfuge', -1)">-</button></td>
        <td><button v-on:click="modTrait('subterfuge', 1)">+</button></td>
      </tr>

      <thead>
        <td><b>Devotion</b></td>
        <td class="shaded-cell centered">&#9660;</td>
        <td/><td/><td/><td/>
      </thead>
      <tr>
        <td>Adaptability</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.adaptability > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.adaptability > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.adaptability > 2}"/></td>
        <td><button v-on:click="modTrait('adaptability', -1)">-</button></td>
        <td><button v-on:click="modTrait('adaptability', 1)">+</button></td>
      </tr>
      <tr>
        <td>Charisma</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.charisma > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.charisma > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.charisma > 2}"/></td>
        <td><button v-on:click="modTrait('charisma', -1)">-</button></td>
        <td><button v-on:click="modTrait('charisma', 1)">+</button></td>
      </tr>
      <tr>
        <td>Empathy</td>
        <td class="shaded-cell"><span v-bind:class="{dot: this.character.traits.empathy > 0}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.empathy > 1}"/></td>
        <td><span v-bind:class="{dot: this.character.traits.empathy > 2}"/></td>
        <td><button v-on:click="modTrait('empathy', -1)">-</button></td>
        <td><button v-on:click="modTrait('empathy', 1)">+</button></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CharacterSheet, Archetype } from '@/models/character-schema';
import ArchetypeList from '@/models/archetype-list';

@Component
export default class AttributesEditor extends Vue {
  @Prop() private character!: CharacterSheet;

  get availablePoints() {
    return this.character.availableTraits - this.character.assignedTraits;
  }

  get archetype(): Archetype {
    return ArchetypeList[this.character.archetypeIdx];
  }

  modTrait(attkey: string, amount: number) {
    this.$store.commit({
      type: "modTrait",
      attkey,
      amount
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

.attribute-table td {
  padding: 2px;
}

.shaded-cell {
  background-color: #dfdfdf;
}

.centered {
  text-align: center;
}

.pointsinvalid {
  color: red;
  font-weight: bold;
}

.pointsattention {
  color: green;
  font-weight: bold;
}
</style>
