<template>
  <div>
    <h3>Talents</h3>
    <span>
      <span class="reminder" v-if="talents.length < availableTalents">
        You have talents to choose!
      </span>
    </span>
    <MultiSelectionModal
      selectionName="Talents"
      :allItems="allTalents" 
      :allowedSelections="availableTalents" 
      :selectedItems="this.$store.getters.character.talents"
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
import { Talent, charAvailableTalents } from '@/models/character-schema';
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
    return charAvailableTalents(this.$store.getters.character);
  }

  get talents(): Talent[] {
    return this.$store.getters.character.talents.map((talentIdx: number) => {
      return talentList[talentIdx];
    })
  }

  toggleTalent(idx: number) {
    const selectedIdx = this.$store.getters.character.talents.indexOf(idx);
    if(selectedIdx !== -1) {
      return this.$store.commit('removeTalent', {idx: selectedIdx})
    }

    if(this.$store.getters.character.talents.length < this.availableTalents)
      return this.$store.commit('addTalent', {idx})
  }
}
</script>

<style scoped>
.reminder {
  color: green;
  font-weight: bold;
}
</style>