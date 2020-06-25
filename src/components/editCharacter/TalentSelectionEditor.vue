<template>
  <div>
    <h3>Talents</h3>
    <MultiSelectionModal
      selectionName="Talents"
      :allItems="allTalents" 
      :allowedSelections="availableTalents" 
      :selectedItems="this.$store.state.character.talents"
      :toggleItem="toggleTalent"
    />

    <div v-for="(talent) in talents" :key="talent.name">
      <p>
        <b>{{ talent.name }}</b>: {{talent.description}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Talent } from '@/models/character-schema';
import talentList from '@/models/talent-list';
import MultiSelectionModal from '@/components/MultiSelectionModal.vue';

@Component({
  components: {
    MultiSelectionModal
  }
})
export default class TalentSelectionEditor extends Vue {
  get allTalents(): Talent[] {
    return talentList;
  }

  get availableTalents() {
    return this.$store.state.character.availableTalents;
  }

  get talents(): Talent[] {
    return this.$store.state.character.talents.map((talentIdx: number) => {
      return talentList[talentIdx];
    })
  }

  toggleTalent(idx: number) {
    const selectedIdx = this.$store.state.character.talents.indexOf(idx);
    if(selectedIdx !== -1) {
      return this.$store.commit('removeTalent', {idx: selectedIdx})
    }

    if(this.$store.state.character.talents.length < this.$store.state.character.availableTalents)
      return this.$store.commit('addTalent', {idx})
  }
}
</script>

<style scoped>
</style>