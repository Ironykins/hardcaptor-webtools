<template>
  <div>
    <SheetDisplay :character="character"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SheetDisplay from '@/components/viewCharacter/SheetDisplay.vue';

@Component({
  components: {
    SheetDisplay
  },
})
export default class Character extends Vue {
  constructor() {
    super();
  }

  get character() {
    return this.$store.getters.character
  }

  private randomizeCharacter() {
    this.$store.commit('randomizeCharacter')
  }
}
</script>
