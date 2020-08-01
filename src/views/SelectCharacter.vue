<template>
  <div class="magical-burst">
    <div class="page-header">
      <h1>Character Select</h1>
      <button type="button" class="pure-button button-primary" v-on:click="addCharacter()">Add Character</button>
    </div>
    <div class="page-body">
      <div v-for="(character,idx) in charList" :key="idx">
        Name: {{character.name}}
        <button type="button" class="pure-button" v-on:click="selectCharacter(idx)">Select</button>
        <button type="button" class="pure-button" v-on:click="deleteCharacter(idx)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: "TempestSurge"
})
export default class TempestSurge extends Vue {
  private get charList() {
    return this.$store.state.characterList;
  }

  private addCharacter() {
    return this.$store.commit("addCharacter")
  }

  private selectCharacter(idx: number) {
    return this.$store.commit("selectCharacter", {idx})
  }

  private deleteCharacter(idx: number) {
    return this.$store.commit("deleteCharacter", {idx})
  }
}
</script>

<style scoped>
.page-header {
  text-align: center;
}

.page-body {
  text-align: center;
  margin: 2em;
}
</style>