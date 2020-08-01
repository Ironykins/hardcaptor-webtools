<template>
  <div>
    <h3>Features</h3>
    <span>
      <span class="reminder" v-if="features.length < availableFeatures">
        You have features to choose!
      </span>
    </span>
    <MultiSelectionModal
      selectionName="Features"
      :allItems="allFeatures" 
      :allowedSelections="availableFeatures" 
      :selectedItems="this.$store.getters.character.features"
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
import { Feature, charAvailableFeatures } from '@/models/character-schema';
import archetypeList from '@/models/archetype-list';
import MultiSelectionModal from '@/components/MultiSelectionModal.vue';

@Component({
  components: {
    MultiSelectionModal
  }
})
export default class FeatureSelectionEditor extends Vue {
  get allFeatures(): Feature[] {
    return archetypeList[this.$store.getters.character.archetypeIdx].featureList;
  }

  get availableFeatures() {
    return charAvailableFeatures(this.$store.getters.character);
  }

  get features(): Feature[] {
    return this.$store.getters.character.features.map((featureIdx: number) => {
      return archetypeList[this.$store.getters.character.archetypeIdx].featureList[featureIdx]
    })
  }

  toggleFeature(idx: number) {
    const selectedIdx = this.$store.getters.character.features.indexOf(idx);
    if(selectedIdx !== -1) {
      return this.$store.commit('removeFeature', {idx: selectedIdx})
    }

    if(this.$store.getters.character.features.length < this.availableFeatures)
      return this.$store.commit('addFeature', {idx})
  }
}
</script>

<style scoped>
.reminder {
  color: green;
  font-weight: bold;
}
</style>