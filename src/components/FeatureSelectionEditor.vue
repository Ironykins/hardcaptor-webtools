<template>
  <div>
    <h3>Features</h3>
    <MultiSelectionModal
      selectionName="Features"
      :allItems="allFeatures" 
      :allowedSelections="availableFeatures" 
      :selectedItems="this.$store.state.character.features"
      :toggleItem="toggleFeature"
    />
    <div v-for="(features) in features" :key="features.name">
      <p>
        <b>{{ features.name }}</b>: {{features.description}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Feature } from '@/models/character-schema';
import archetypeList from '@/models/archetype-list';
import MultiSelectionModal from '@/components/MultiSelectionModal.vue';

@Component({
  components: {
    MultiSelectionModal
  }
})
export default class FeatureSelectionEditor extends Vue {
  get allFeatures(): Feature[] {
    return archetypeList[this.$store.state.character.archetypeIdx].featureList;
  }

  get availableFeatures() {
    return this.$store.state.character.availableFeatures;
  }

  get features(): Feature[] {
    return this.$store.state.character.features.map((featureIdx: number) => {
      return archetypeList[this.$store.state.character.archetypeIdx].featureList[featureIdx]
    })
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
</style>