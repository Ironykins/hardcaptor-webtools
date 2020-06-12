<template>
  <div>
    <h3>Available Talents: {{availableTalents - talents.length}}</h3>
    <div v-for="(talent, idx) in talents" :key="talent.name">
      <p>
        <button v-on:click="removeTalent(idx)">Remove</button>
        <b>{{ talent.name }}</b>: {{talent.description}}
      </p>
    </div>
    <button v-on:click="addTalentModal">Add Talent</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Talent } from '@/models/character-schema';
import talentList from '@/models/talent-list';

@Component
export default class AttributesEditor extends Vue {
  get availableTalents() {
    return this.$store.state.character.availableTalents;
  }

  get talents(): Talent[] {
    return this.$store.state.character.talents.map((talentIdx: number) => {
      return talentList[talentIdx];
    })
  }

  addTalentModal() {
    console.log("TODO: Show Modal")
  }

  removeTalent(idx: number) {
    return this.$store.commit('removeTalent', {idx})
  }
}
</script>
