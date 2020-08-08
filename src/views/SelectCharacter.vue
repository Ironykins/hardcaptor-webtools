<template>
  <div class="magical-burst">
    <div class="page-header">
      <h1>Character Select</h1>
      <button type="button" class="pure-button button-primary" v-on:click="addCharacter()">Add Character</button>
    </div>
    <div class="page-body">
      <div v-for="(character,idx) in charList" :key="idx">
        <div class="option" v-on:click="selectCharacter(idx)" v-bind:class="{selected: itemSelected(idx)}">
          <div>
            <h3>{{character.name}}</h3>
            <p>
              {{archetypeName(character.archetypeIdx)}} of {{character.magicTheme || "the undecided"}}, 
              wields {{character.magicWeapon || "nothing"}}, 
              clad in {{character.magicCostume || "indecision"}}
            </p>
          </div>
          <div class="rightside">
            <button v-on:click="deleteCharacter(idx)" class="pure-button button-primary">
              <i class="gg-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ArchetypeList from '../models/archetype-list';

@Component({
  name: "SelectCharacter"
})
export default class SelectCharacter extends Vue {
  private get charList() {
    return this.$store.state.characterList;
  }

  private archetypeName(idx: number) {
    return ArchetypeList[idx].name;
  }

  private addCharacter() {
    return this.$store.commit("addCharacter", {})
  }

  private selectCharacter(idx: number) {
    return this.$store.commit("selectCharacter", {idx})
  }

  private deleteCharacter(idx: number) {
    if(this.charList.length > 1) {
      return this.$store.commit("deleteCharacter", {idx})
    }
  }

  private itemSelected(idx: number) {
    return this.$store.state.selectedCharacterIdx === idx
  }
}
</script>

<style scoped>
.page-header {
  text-align: center;
}

.page-body {
  /* text-align: center; */
  margin: 2em;
}

.option {
  padding: 1em;
  border-radius: 0.3em;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.option.selected {
  background: #c58dc0;
}

.rightside {
  margin-left: auto;
  display: inline;
  left: 5px;
  
}

</style>