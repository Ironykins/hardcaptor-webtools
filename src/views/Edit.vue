<template>
  <div class="edit">
    <button type="button" class="pure-button pure-button-primary" v-on:click="randomizeCharacter()">Randomize</button>
    <AdvancementLevelEditor/>
    <RPDetailsEditor/>
    <AttributesEditor :character="character"/>
    <TalentSelectionEditor/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AttributesEditor from '@/components/AttributesEditor.vue';
import RPDetailsEditor from '@/components/RPDetailsEditor.vue';
import AdvancementLevelEditor from '@/components/AdvancementLevelEditor.vue';
import TalentSelectionEditor from '@/components/TalentSelectionEditor.vue';

@Component({
  name: "EditCharacter",
  components: {
    AttributesEditor,
    RPDetailsEditor,
    AdvancementLevelEditor,
    TalentSelectionEditor
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
