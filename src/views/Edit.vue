<template>
  <div class="edit">
    <div class="page-header">
      <h1>Character Creator</h1>
      <button type="button" class="pure-button pure-button-primary" v-on:click="randomizeCharacter()">Randomize</button>
    </div>
    <div class="pure-g">
      <div class="pure-u-1 pure-u-md-2-3">
        <RPDetailsEditor/>
      </div>
      <div class="pure-u-1 pure-u-md-1-3">
        <AttributesEditor :character="character"/>
      </div>
      <div class="pure-u-1 pure-u-md-1-2">
        <TalentSelectionEditor/>
      </div>
      <div class="pure-u-1 pure-u-md-1-2">
        <FeatureSelectionEditor/>
      </div>
    </div>
    <AbilitySelectionEditor/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AttributesEditor from '@/components/AttributesEditor.vue';
import RPDetailsEditor from '@/components/RPDetailsEditor.vue';
import TalentSelectionEditor from '@/components/TalentSelectionEditor.vue';
import FeatureSelectionEditor from '@/components/FeatureSelectionEditor.vue';
import AbilitySelectionEditor from '@/components/AbilitySelectionEditor.vue';

@Component({
  name: "EditCharacter",
  components: {
    AttributesEditor,
    RPDetailsEditor,
    TalentSelectionEditor,
    FeatureSelectionEditor,
    AbilitySelectionEditor
  }
})
export default class EditCharacter extends Vue {
  private advancements = 0

  get character() {
    return this.$store.state.character
  }

  private randomizeCharacter() {
    this.$store.commit('randomizeCharacter');
  }
}
</script>

<style scoped>
.page-header {
  text-align: center;
}
</style>