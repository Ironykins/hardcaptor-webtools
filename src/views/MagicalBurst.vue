<template>
  <div class="magical-burst">
    <div class="page-header">
      <h1>Magical Burst Generator</h1>
      <button type="button" class="pure-button button-primary" v-on:click="generate()">Generate</button>
    </div>
    <div class="page-body">
      <p>Your magic causes a magical burst!</p>
      <p>Everyone present takes 1 bane</p>
      <p>Roll 3 dice into each enemy dice pool</p>
      <p>And then:</p>
      {{magicalBurst}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getMagicalBurst } from '@/models/magical-burst';

@Component({
  name: "MagicalBurst"
})
export default class MagicalBurst extends Vue {
  private magicalBurst = getMagicalBurst();

  private generate() {
    this.magicalBurst = getMagicalBurst();
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