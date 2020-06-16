<template>
  <div>
    <h3>Available Features: {{availableFeatures - features.length}}</h3>
    <div v-for="(features, idx) in features" :key="features.name">
      <p>
        <button v-on:click="removeFeature(idx)">Remove</button>
        <b>{{ features.name }}</b>: {{features.description}}
      </p>
    </div>
    <button v-on:click="showModal">Edit</button>

    <div id="talentModal" class="modal" v-bind:class="{active: displayModal}">
      <div class="modal-content">
        <span class="close" v-on:click="hideModal">&times;</span>
        <h3>Select {{availableFeatures}} {{availableFeatures === 1 ? "Feature" : "Features" }}</h3>
        <div v-for="(feature, idx) in allFeatures" :key="feature.name">
          <div class="talentOption" v-on:click="toggleFeature(idx)" v-bind:class="{selected: featureSelected(idx)}">
            <p>
              <b>{{ feature.name }}</b>: {{feature.description}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Feature } from '@/models/character-schema';
import archetypeList from '@/models/archetype-list';

@Component
export default class FeatureSelectionEditor extends Vue {
  private displayModal = false;

  get allFeatures(): Feature[] {
    return archetypeList[this.$store.state.character.archetypeIdx].featureList;
  }

  // True if the character has this talent marked as selected.
  private featureSelected(idx: number): boolean {
    return this.$store.state.character.features.indexOf(idx) !== -1;
  }

  get availableFeatures() {
    return this.$store.state.character.availableFeatures;
  }

  get features(): Feature[] {
    return this.$store.state.character.features.map((featureIdx: number) => {
      return archetypeList[this.$store.state.character.archetypeIdx].featureList[featureIdx]
    })
  }

  hideModal() {
    this.displayModal = false;
  }

  showModal() {
    this.displayModal = true;
  }

  removeFeature(idx: number) {
    return this.$store.commit('removeFeature', {idx})
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
 /* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1001; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal.active {
  display: block;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  z-index: 1002;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@keyframes animatetop {
  from {top: -300px; opacity: 0}
  to {top: 0; opacity: 1}
}

.talentOption {
  /* margin: 20px 0px; */
  padding: 5px 5px;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.talentOption.selected {
  /* margin: 20px 0px; */
  padding: 5px 5px;
  background: #efefef;
}

.talentOption:hover {
  background: rgba(0, 0, 0, 0.25);
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
} 
</style>