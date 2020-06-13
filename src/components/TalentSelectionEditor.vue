<template>
  <div>
    <h3>Available Talents: {{availableTalents - talents.length}}</h3>
    <div v-for="(talent, idx) in talents" :key="talent.name">
      <p>
        <button v-on:click="removeTalent(idx)">Remove</button>
        <b>{{ talent.name }}</b>: {{talent.description}}
      </p>
    </div>
    <button v-on:click="showTalentModal">Add Talent</button>

    <div id="talentModal" class="modal" v-bind:class="{active: displayModal}">
      <div class="modal-content">
        <span class="close" v-on:click="hideTalentModal">&times;</span>
        <h3>Select Talents</h3>
        <div v-for="(talent, idx) in allTalents" :key="talent.name">
          <div class="talentOption" v-on:click="toggleTalent(idx)" v-bind:class="{selected: talentSelected(idx)}">
            <p>
              <b>{{ talent.name }}</b>: {{talent.description}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Talent } from '@/models/character-schema';
import talentList from '@/models/talent-list';

@Component
export default class AttributesEditor extends Vue {
  private displayModal = false;

  get allTalents(): Talent[] {
    return talentList;
  }

  // True if the character has this talent marked as selected.
  private talentSelected(idx: number): boolean {
    return this.$store.state.character.talents.indexOf(idx) !== -1;
  }

  get availableTalents() {
    return this.$store.state.character.availableTalents;
  }

  get talents(): Talent[] {
    return this.$store.state.character.talents.map((talentIdx: number) => {
      return talentList[talentIdx];
    })
  }

  hideTalentModal() {
    this.displayModal = false;
  }

  showTalentModal() {
    this.displayModal = true;
  }

  removeTalent(idx: number) {
    return this.$store.commit('removeTalent', {idx})
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